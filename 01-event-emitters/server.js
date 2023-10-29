const { format } = require('date-fns')
const { v4: uuid } = require("uuid")
const EventEmitter = require('events')
const { logEvents } = require("./log-events")

class Emitter extends EventEmitter{ }
const newEmitter = new Emitter()
const logTypes = ['ERROR', 'INFO']
const randomType = Math.floor(Math.random() * 2)

newEmitter.on('log', (logtype, logMessage, logfile ) => logEvents(logtype, logMessage, logfile))

setTimeout(() => {
    newEmitter.emit('log', logTypes[randomType], 'Log message goes here. Usually an Error or Info log!', 'sys.log')
}, 50)