const NamiConsole = require('../src/index');
const Commander = new NamiConsole.Commander();


console = new NamiConsole.Console();

Commander.setPrefix(
    console.formatString("Input", "$ "));

Commander.registerCommand("test", (args) => {
    
    console.log("Arguments: " + args);
    
    console.log("Hello asdasdasdasd", "world", "here", "my", "code", "example")
});

Commander.registerCommand("eval", (args) => {
    let expression = args.join(" ");
    try {
        let evaluated = eval(expression);
        if (evaluated != null)
            
        console.log("Evaled code result: " + evaluated);
    } catch (e) {
        // @ts-ignore
        
        console.error("Failed to eval code: " + e.message);
    }
})

Commander.onUnknownCommand((cmd) => {
    
    console.error("Invalid Command: " + cmd);
})

Commander.fetch();

let x = "aa";

function greet(name) {
    
    console.log("Hello " + name);
}

function plus() {
    return 5 + 10;
}