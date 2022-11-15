

//getting input from command line with argument 
//process.argv = [node, readCommandLineArguments.js, "Yogesh"], its an array
// console.log(process.argv);
let name = process.argv[2];
console.log("Hello ",name);




//node readCommandLineArguments.js "Yogesh"