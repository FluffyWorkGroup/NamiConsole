// @ts-check


export declare namespace NamiConsole {
    export class Commander {
        constructor()
        setPrefix(prefix: string): void
        registerCommand(name: string, callback: (args: string[]) => void): void
        onUnknownCommand(callback: (cmd: string) => void): void
        fetch(): void
    }    
}
interface Console {
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
    formatList(type: keyof typeOf, list: any[]): string[]
    formatString(type: keyof typeOf, str: string, isFirst: boolean): string
    stripeColors(str: string): `${string}`
    colorizeString(str: string): `${string}\x1b[0m`
    getTime(): `${string}:${string}:${string}`
}

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