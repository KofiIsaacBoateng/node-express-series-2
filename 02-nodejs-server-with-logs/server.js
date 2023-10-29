const EventEmitter = require('events')
const { logEvents } = require("./log-events")
const http = require('http')

const PORT = process.env.PORT || 5000
class Emitter extends EventEmitter{ }
const newEmitter = new Emitter()

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
})

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))


// newEmitter.on('log', (logtype, logMessage, logfile ) => logEvents(logtype, logMessage, logfile))

// setTimeout(() => {
//     newEmitter.emit('log', logTypes[randomType], 'Log message goes here. Usually an Error or Info log!', 'sys.log')
// }, 50)