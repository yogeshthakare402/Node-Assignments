const readline = require("readline");

const rl = readline.createInterface({
    //it means it will take standerd input from command line and give output there only
    input : process.stdin,
    output : process.stdout
})

//readLine take Question and give the ans
rl.question("what is your Name?", (ans)=>{
    console.log("Hello", ans);
    //if not close it it will not end and ask for more inputs
    rl.close();
})


  //node readFromLine.js