const OSC = require('osc-js')
// For more settings, check https://doc.esdoc.org/github.com/adzialocha/osc-js/class/src/plugin/bridge.js~BridgePlugin.html
const config = { wsServer: { host: "localhost", port: 8080 },
                 udpClient: { host: "localhost", port: 41235 } }
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

osc.open() // start the WebSocket server 