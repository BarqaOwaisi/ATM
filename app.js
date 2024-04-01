#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 30000;
let pin = 2341;
let pinInfo = await inquirer.prompt([
    {
        message: "Enter pin code",
        type: "number",
        name: "pin",
    },
]);
if (pinInfo.pin === pin) {
    let operation = await inquirer.prompt([
        {
            message: "Select one option ",
            name: "operation",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (operation.operation === "Withdraw") {
        let amountinfo = await inquirer.prompt([
            {
                message: "Select one option",
                name: "amount",
                type: "list",
                choices: [10000, 20000, 30000, "another amount"],
            },
        ]);
        if (amountinfo.amount === "another amount") {
            let amountAns = await inquirer.prompt([
                {
                    message: "Enter your amount",
                    type: "number",
                    name: "amount",
                },
            ]);
            if (currentBalance >= amountAns.amount) {
                currentBalance -= amountAns.amount;
                console.log(`Your current balance is ${currentBalance}`);
            }
            else {
                console.log(`Your amount is insufficient`);
            }
        }
        else {
            currentBalance -= amountinfo.amount;
            console.log(`Your remaining balance is ${currentBalance}`);
        }
    }
    else {
        console.log(`Your current balance is ${currentBalance}`);
    }
}
else {
    console.log(`Please enter correct pin code`);
}
