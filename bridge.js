const OSC = require('osc-js')
// For more settings, check https://doc.esdoc.org/github.com/adzialocha/osc-js/class/src/plugin/bridge.js~BridgePlugin.html
const config = { udpClient: { port: 9129, host: "localhost" } }
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

osc.open() // start a WebSocket server on port 8080