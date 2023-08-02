# Using Sequelize
This guide will walk you through the process of using [Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/) (and [Sequelize CLI](https://sequelize.org/docs/v6/other-topics/migrations/)), an Object-Relational Mapping (ORM) library, to create new models in a PostgreSQL database and seed data for initial testing or development purposes.

## Create a Model (and Migration)
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

- Create a migration file with name like XXXXXXXXXXXXXX-create-user.js in migrations folder.
  
Note: Sequelize will only use Model files, it's the table representation. On the other hand, the migration file is a change in that model or more specifically that table, used by CLI. Treat migrations like a commit or a log for some change in database.



## Running Migrations
