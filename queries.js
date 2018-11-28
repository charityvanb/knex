const database = require('./database_connection')

module.exports = {
    listAll(){
          return database('students')
    }
  }  