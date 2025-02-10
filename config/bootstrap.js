const consola = require('consola')
module.exports = async (HOST, PORT) => {
  consola.ready({ message: `ChatNotifications corre en ${HOST}:${PORT}`, badge: true })

}