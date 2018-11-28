// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/studentstuff'
    },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
