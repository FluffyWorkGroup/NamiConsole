// @ts-check
import { Interface } from "readline"

declare function NamiConsole(...args: any[]): void; 
declare namespace NamiConsole {

    interface config {
        use_colors?: boolean
        debug?: boolean
        format?: string
        prefixes?: {
            log_prefix?: string
            warn_prefix?: string
            error_prefix?: string
            info_prefix?: string
            debug_prefix?: string
        }
    }

    interface typeOf {
        LOG: 'log'
        ERROR: "error"
        WARN: "warn"
        INFO: "info"
        DEBUG: "debug"
    }

    export class Console {
        constructor(config?: config)
        original: typeof console
        config: config | {}
        def_config: {
            use_colors: true
            debug: false
            format: '§8[§d%time%§8] [%prefix%§8] §7%message%'
            prefixes: {
                log_prefix: '§aLog'
                warn_prefix: '§eWarn'
                error_prefix: '§cError'
                info_prefix: '§bInfo'
                debug_prefix: '§9Debug'
            }
    }

    getConfig(key: keyof config): config[keyof config]
    setConfig(key: keyof config, value: config[keyof config]): void
    
    log(...args: any[]): void
    info(...args: any[]): void
    debugLog(...args: any[]): void
    error(...args: any[]): void
    warn(...args: any[]): void
    debug(text: string): void
    
    private formatList(type: keyof typeOf, list: any[]): string[]
    private formatString(type: keyof typeOf, str: string, isFirst: boolean): string
    private stripeColors(str: string): `${string}`
    private colorizeString(str: string): `${string}\x1b[0m`
    private getTime(): `${string}:${string}:${string}`
}

export class Commander {
    commands: Map<string, (data: string[]) => any>
    a: "x"
    fetcher: Interface

    constructor()
    setPrefix(prefix: string): Commander
    fetch(): Commander
    executeCommand(command: string): void
    unknownCommand(command: string): void
    onUnknownCommand(callback: (command: string) => void): Commander
    registerCommand(command: string, callback: (data: string[]) => any): Commander
    unregisterCommand(command: string): Commander
    existsCommand(command: string): boolean
    end(): void
    process(text: string): void
}

export interface Color {
    Black: "\x1b[30m"
    BarkBlue: "\x1b[34m"
    BarkGreen: "\x1b[32m"
    BarkAqua: "\x1b[36m"
    BarkRed: "\x1b[31m"
    BarkPurple: "\x1b[35m"
    Gold: "\x1b[33m"
    Gray: "\x1b[37m"
    DarkGray: "\x1b[30;1m"
    Blue: "\x1b[34;1m"

    Green: "\x1b[1m\x1b[32m"
    Aqua: "\x1b[1m\x1b[36m"
    Red: "\x1b[1m\x1b[31m"
    Purple: "\x1b[1m\x1b[35m"
    Yellow: "\x1b[1m\x1b[33m"
    White: "\x1b[1m\x1b[37m"

    Reset: "\x1b[0m"
    Bold: "\x1b[1m"
    Underline: "\x1b[4m"
    Italic: "\x1b[3m"
    Strike: "\x1b[9m"
    Reverse: "\x1b[7m"
    Hidden: "\x1b[8m"

    xReset: "\x1b[0m"
    xDim: "\x1b[2m"
    xUnderscore: "\x1b[4m"
    xBlink: "\x1b[5m"
    xReverse: "\x1b[7m"
    xHidden: "\x1b[8m"

    BgBlack: "\x1b[40m"
    BgRed: "\x1b[41m"
    BgGreen: "\x1b[42m"
    BgYellow: "\x1b[43m"
    BgBlue: "\x1b[44m"
    BgMagenta: "\x1b[45m"
    BgCyan: "\x1b[46m"
    BgWhite: "\x1b[47m"
}

}

export = NamiConsole;