const consola = require('consola')
module.exports = async (HOST, PORT) => {
  consola.ready({ message: `TimeTitans corre en ${HOST}:${PORT}`, badge: true })

}