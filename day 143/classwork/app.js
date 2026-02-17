const os = require("os")
const events = require("events")

const obj = {
    operationSystem: os.type(),
    network: os.networkInterfaces(),
    timeInSeconds: os.uptime(),
    timeInHours: os.uptime() / 3600,
}

console.log(obj)

const eventEmmiter = new events.EventEmitter();

const log = userName => {
    console.log(userName)
}

eventEmmiter.on("log", log)
eventEmmiter.emit("log", "Petre")