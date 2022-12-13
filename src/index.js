"use strict";

const Console = require('./constructors/console');

function NamiConsole(config) {
    return new Console(config);
}

NamiConsole.Console = require('./constructors/console');
NamiConsole.Commander = require('./constructors/commander');
NamiConsole.Color = require('./enumerators/Color');
NamiConsole.Formats = require('./enumerators/Formats');

module.exports = NamiConsole;

