#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    PKR: 280,
    INR: 74.57
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'PKR', 'INR']
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'PKR', 'INR']
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[answer.from]; // exchange rate
let toAmount = currency[answer.to]; // exchange rate
let amount = answer.amount;
let baseAmount = amount / fromAmount; //USD is the base currency in our project 
let convertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log(convertedAmount);
