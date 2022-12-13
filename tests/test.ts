// @ts-ignore
import { Formats, Console, Color } from "../src";


const namiConsole = new Console({
    use_colors: true
});


// types of console.
namiConsole.log("Hello World!");
namiConsole.info("Hello World!");
namiConsole.debugLog("Hello World!");
namiConsole.error("Hello World!");
namiConsole.warn("Hello World!");
namiConsole.debug("Hello World!");

// formats
namiConsole.debug(Formats.Bold + "Hello World!" + Formats.Reset);
namiConsole.debug(Formats.Underline + "Hello World!" + Formats.Reset);
namiConsole.debug(Formats.Hidden + "Hello World!" + Formats.Reset);
namiConsole.debug(Formats.Italic + "Hello World!" + Formats.Reset);
namiConsole.debug(Formats.Reverse + "Hello World!" + Formats.Reset);
namiConsole.debug(Formats.Strike + "Hello World!" + Formats.Reset);

// colors
namiConsole.debug(Color.Red + "Hello world" + Formats.Reset);
namiConsole.debug(Color.Green + "Hello world" + Formats.Reset);
namiConsole.debug(Color.Yellow + "Hello world" + Formats.Reset);
namiConsole.debug(Color.Blue + "Hello world" + Formats.Reset);
namiConsole.debug(Color.DarkAqua + "Hello world" + Formats.Reset);
namiConsole.debug(Color.Gray + "Hello world" + Formats.Reset);
namiConsole.debug(Color.White + "Hello world" + Formats.Reset);
namiConsole.debug(Color.Gray + "Hello world" + Formats.Reset);
namiConsole.debug(Color.DarkGray + "Hello world" + Formats.Reset);