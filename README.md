# OSC-WS-BRIDGE
Basic boilerplate of WebSocket bridge for OSC communication using the [osc.js library](https://github.com/adzialocha/osc-js#osc-js).

# Installation Guide
You must have Node installed on your computer. If you don't, download the latest stable version [here](https://nodejs.org/en/). Launch the installer and install Node.

Download the OSC-WS-BRIDGE code folder.

Open your terminal window on Mac (press CMD + spacebar simultaneously, in the search window, type in terminal and enter) or Command Prompt on Windows. Go to the folder where you downloaded OSC-WS-BRIDGE. You can do this by just dragging the folder into the terminal window and press enter. Or type in 'cd' followed by the path name. For example, if you put the folder on your Documents folder:

```$ cd ~/Documents/OSC-WS-BRIDGE/```

Install package dependencies (the files you will need to run the code) by typing in:

```$ npm install```

Mac users - If you get a permission error, try using `sudo` instead and when terminal asks for a password, enter your administrator password:

```$ sudo npm install```

Then, run bridge.js to start the OSC bridge by typing:

```$ node bridge.js```
