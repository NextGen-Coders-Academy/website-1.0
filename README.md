# NextGen Coders Academy

## Description

## Getting Started
1. Clone the repository:
```
git clone https://github.com/NextGen-Coders-Academy/website.git
cd website
```

2. Install the dependencies:
```
npm install
```

3. Setup the PostgreSQL database:
   a. Create a new PostgreSQL database for the application.
   b.  Create a `.env` then add the following environment varibles with your PostgreSQL credentials and your port for running the application:
```
DB_USERNAME=<your_dbusername>
DB_PASSWORD=<your_dbpassword>
DB_NAME=<your_dbname>
DB_HOST=localhost
PORT=3000
```

4. Run the database migration and seed the database:
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

5. Run the application:
```
npm run dev
```

## Technologies Used
1. Node.js: Node.js is a server-side JavaScript runtime environment that allows developers to execute JavaScript code outside the web browser. It provides a non-blocking and event-driven architecture, making it suitable for building scalable and efficient server-side applications.

2. Express.js: Express.js is a fast and minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs by providing essential tools for routing, middleware, and handling HTTP requests and responses.

3. PostgreSQL: PostgreSQL is a powerful open-source relational database management system known for its robustness, extensibility, and support for advanced data types and features. It is widely used for storing and managing structured data.

4. Sequelize: Sequelize is a popular Object-Relational Mapping (ORM) library for Node.js. It provides an abstraction layer on top of the database, allowing developers to interact with the database using JavaScript objects and methods, instead of writing raw SQL queries.

## Project Structure
- config: Contains configuration file which stores the database configuration.
- controllers: Handles application logic and interacts with models.
- migrations: Contains migration files for database schema changes.
- models: Defines Sequelize models that represent database tables.
- routes: Defines API routes and their corresponding controller actions.
- seeders: Contains seeder files for initial data insertion (optional).
- server.js: The entry point of the application, sets up the server and middleware.