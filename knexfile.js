// Update with your config settings.
require("dotenv").config()

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/auth.db3',
    },
  
  // needed when using foreign keys
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
  migration:{
    directory:"./database/migrations",
  },
  seeds:{
    directory:"./database/seeds"
  },
  },

}

