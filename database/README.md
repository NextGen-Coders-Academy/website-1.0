# Using Sequelize
This guide will walk you through the process of using [Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/) (and [Sequelize CLI](https://sequelize.org/docs/v6/other-topics/migrations/)), an Object-Relational Mapping (ORM) library, to create new models in a PostgreSQL database and seed data for initial testing or development purposes.

A key note is in PostgreSQL, as well as in other relational database systems, migrations serve as a mechanism to manage changes to the database schema. While Sequelize allows you to define models that represent the structure of your database tables, applying these changes to the actual database schema requires explicit migration steps. Without migrations, PostgreSQL doesn't automatically make updates from models due to safety and control, data preservation, collaboration, version control, and cross-environment consistency. Migrations provide a more controlled and reliable approach to managing schema changes, especially in production environments.

## Creating a Model (and Migration)
Once you have successfully installed the dependencies from this repository (`npm i`) you are ready to add a model and how to migrate it to your database. It's as simple as executing a simple command.

We will use model:generate command. This command requires two options:

- name: the name of the model;
- attributes: the list of model attributes.

Taking this example from the [docs](https://sequelize.org/docs/v6/other-topics/migrations/), let's create a model named User. In the terminal:

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

This will:
- Create a model file user in models folder;
- Create a migration file with name like XXXXXXXXXXXXXX-create-user.js in migrations folder.

#### models/user.js
This file defines the structure of your model and specifies its attributes and data types. It also includes any [associations](https://sequelize.org/docs/v6/core-concepts/assocs/) you define between this model and other models. Here's a breakdown of the contents of the generated model file:
```
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
```

You can add specific fields to each attribute that is being initialized in your model (ie: defaultValue, allowNull, etc.) like so:
```
User.init({
    firstName: {
        DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        DataTypes.STRING,
        allowNull: false
    },
    email: {
        DataTypes.STRING,
        defaultValue: "troy@dev.com"
    }
  }, {
```

You can check out all the data types within the [documentation](https://sequelize.org/docs/v6/core-concepts/model-basics/).

#### migrations/YYYYMMDDHHMMSS-create-user.js
This migration file is responsible for creating or modifying the database table that corresponds to your model. It defines the columns, data types, constraints, and indexes for the table. Here's a breakdown of the migration file:

```
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
```

Note: The `createdAt` and `updatedAt` fields are auto-generated within the migration. There are multiple ways to set the default timestamp:
```
setting defaultValue in migration file
...
createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
```

```
adding timestamps to model file
...
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
  });
...
```

Another Note: Sequelize will only use Model files, it's the table representation. On the other hand, the migration file is a change in that model or more specifically that table, used by CLI. Treat migrations like a commit or a log for some change in database.


## Running Migrations
Until this step, we haven't inserted anything into the database. We have just created the required model and migration files for our first model, User. Now to actually create that table in the database you need to run db:migrate command.
```
npx sequelize-cli db:migrate
```

This command will execute these steps:

- Will ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database
- Start looking for any migration files which haven't run yet. This is possible by checking SequelizeMeta table. In this case it will run XXXXXXXXXXXXXX-create-user.js migration, which we created in last step.
- Creates a table called Users with all columns as specified in its migration file.
  
To undo the migration, you can revert all the migrations by running:
```
npx sequelize-cli db:migrate:undo
```
Or to revert a specific migration:
```
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

## Creating a Seed file
Suppose we want to insert some data into a few tables by default. If we follow up on the previous example we can consider creating a demo user for the User table.

To manage all data migrations you can use seeders. Seed files are some change in data that can be used to populate database tables with sample or test data.

Let's create a seed file which will add a demo user to our User table.
```
npx sequelize-cli seed:generate --name demo-user
```
This command will create a seed file in seeders folder. File name will look something like XXXXXXXXXXXXXX-demo-user.js. It follows the same up / down semantics as the migration files.

Now we should edit this file to insert demo user to User table.
```
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
```

In last step you created a seed file; however, it has not been committed to the database. To do that we run a simple command.
```
npx sequelize-cli db:seed:all
```
This will execute that seed file and a demo user will be inserted into the User table.

If you want to undo the most recent seed, run:
```
npx sequelize-cli db:seed:undo
```
Or a specific seed:
```
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```
Or undo all seeds:
```
npx sequelize-cli db:seed:undo:all
```