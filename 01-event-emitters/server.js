const { format } = require('date-fns')
const { v4: uuid } = require("uuid")
const EventEmitter = require('events')

class Emitter extends EventEmitter{ }
const newEmmitter = new Emitter()

newEmmitter.on('log', (data) => {
    try {
        console.log(data)
    } catch (error) {
        console.log(err)
    }
})

setTimeout(() => {
    newEmmitter.emit('log', "Data received by event 'log'!")
}, 3000)