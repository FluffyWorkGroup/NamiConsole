const MessageType = require('../enumerators/Types');
const Color = require("../enumerators/Color");
const path = require('path');

class Console {
    constructor(config) {

        this.original = console;
        this.config = config || {};
        this.def_config = require('../data/default_config.json');

        this.dir = this.original.dir;
        this.time = this.original.dir;
        this.timeEnd = this.original.timeEnd;
        this.trace = this.original.trace;
        this.assert = this.original.assert;
    }

    getConfig(key) {
        return this.config[key] || this.def_config[key];
    }

    setConfig(key, value) {
        this.config[key] = value;
    }

    log(...args) {
        args = this.formatList(MessageType.LOG, args);
        return this.original.log(...args);
    }

    info(...args) {
        args = this.formatList(MessageType.INFO, args);
        return this.original.info(...args);
    }

    debugLog(...args) {
        args = this.formatList(MessageType.DEBUG, args);
        return this.original.log(...args);
    }

    error(...args) {
        args = this.formatList(MessageType.ERROR, args);
        return this.original.error(...args);
    }

    warn(...args) {
        args = this.formatList(MessageType.WARN, args);
        return this.original.warn(...args);
    }

    debug(text) {
        let error = new Error();
        let frame = error.stack.split("\n")[2];
        let pathName = frame.split("(")[1].split(")")[0];
        let fileName = path.basename(pathName).split(":")[0];
        let line = pathName.split(fileName)[pathName.split(fileName).length - 1].replace(":", "");
        let functionName = frame.split(" ")[5];

        if (text == null) {
            this.debugLog(`Debug called from ${functionName}(); §8|| §9${fileName}§c:${line}`)
        } else {
            this.debugLog(`${text} §8|| §9${fileName}§c:${line}`)
        }

    }

    formatList(type, list) {
        for (let i = 0; i < list.length; i++) {
            list[i] = this.formatString(type, list[i], i === 0);
        }

        return list;
    }

    formatString(type, str, isFirst) {
        let format = this.getConfig("format");
        let use_colors = this.getConfig("use_colors");
        let prefix = this.getConfig(`prefixes`)[type + "_prefix"] || Color.DarkAqua + type + Color.Reset;
        let text = str;

        // Only apply the format to the first item in the array :D
        if (isFirst)
            text = format.replace("%message%", str).replace("%prefix%", prefix).replace("%time%", this.getTime());

        if (use_colors) {
            text = this.colorizeString(text);
        } else {
            text = this.stripeColors(text);
        }

        return text
    }


    stripeColors(str) {
        let chars = "0123456789abcdefr";
        for (let i = 0; i < chars.length; i++) {
            let char = chars[i];
            let regx = new RegExp(`§${char}`, 'gi');
            str = str.replace(regx, "");
        }
        return str;
    }

    colorizeString(str) {
        let chars = "0123456789abcdefr";
        for (let i = 0; i < chars.length; i++) {
            let char = chars[i];
            let node = Color[Object.keys(Color)[i]];
            let regx = new RegExp(`§${char}`, 'gi');
            str = str.replace(regx, node);
        }
        return str + "\x1b[0m";
    }

    getTime() {
        let date = new Date();

        let hours = "" + date.getHours();
        let mins = "" + date.getMinutes();
        let secs = "" + date.getSeconds();

        if (hours.length === 1)
            hours = 0 + hours;

        if (mins.length === 1)
            mins = 0 + mins;

        if (secs.length === 1)
            secs = 0 + secs;

        return hours + ":" + mins + ":" + secs;
    }
}

module.exports = Console;
