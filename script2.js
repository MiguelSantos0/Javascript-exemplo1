let rlsync=require('readline-sync');
let nome =rlsync.question("qual seu nome?\n")
console.log(`ola ${nome}`)

let idade =rlsync.question("qual é sua idade?\n")
console.log(`sua idade é${idade}`)