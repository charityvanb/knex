const database = require('./database_connection')

module.exports = {
    listAll(){
          return database('students')
    },

getById(id) {
    return database('students').where('id', id)
    }
}