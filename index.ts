#! /usr/bin/env node

import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 8000;
let myPin = 54321;

// print welcome message
console.log("\n \tWelcome to syed abdul rehman - ATM Machine\n\t");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Successfully!");
    // console.log(`Current Account Balance is ${myBalance}`);

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Ammount", "Check Balance"]
        }
    ])

    if (operationAns.operation === "Withdraw Ammount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdraw method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ])
        if(withdrawAns.withdrawMethod === "Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: ["1000", "2000", "5000", "1000", "20000"],
                }
            ])
            if(fastCashAns.fastCash > myBalance){
                console.log("Insufficient Balance");
            }
            else{
                myBalance -= fastCashAns.fastCash
                console.log(`${fastCashAns.fastCash}`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
       else if(withdrawAns.withdrawMethod === "Enter Amount"){
            let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:",
            }
        ])
        if (amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount } Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${ myBalance}`);
        }
        }
        
    }
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is ${myBalance}`);
    } 
}
else{
    console.log("Pin is Incorrect, Please Try Again!")
}
    
