// Update with your config settings.
require("dotenv").config();
module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "optee",
            user: "postgres",
            password: "postgres",
        },
        migrations: {
            directory: __dirname + "/backend/database/migrations",
        },
        seeds: {
            directory: __dirname + "/backend/database/seeds",
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
    },
};