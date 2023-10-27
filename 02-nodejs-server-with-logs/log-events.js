const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

exports.logEvents = async (logtype, logMessage, filename) => {
    const _id = uuid()
    const date = format(new Date(), "MMMM dd, yyyy\tHH:mm:ss")
    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', filename), `${date}\t${logtype} [${_id}]\t'${logMessage}'\n`, 'utf-8')
    } catch (error) {
        console.log(`${error.name}: ${error.message}`)
    }
}