
// console.log(process.env);

//process.env is an object
// console.log(process.env)
let name = process.env.NAME;
console.log("Hello ",name);

//need to create key value pair in obj so key = NAME value ="Yogesh"
//$env:NAME = "Yogesh" for windows---------$env:KEY="Value"
//export env:NAME = "Yogesh" for macOS
// node readEnvVariable.js