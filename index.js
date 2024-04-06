#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1, // base currency
    EUR: 0.91,
    IND: 83.30,
    GBP: 8.76,
    CNY: 7.23,
    PKR: 280,
};
let user_Amount = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "IND", "GBP", "CNY", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "IND", "GBP", "CNY", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_Amount.from]; // exchange rate
let toAmount = currency[user_Amount.to]; // exchange rate
let amount = user_Amount.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount; // USD base currency
console.log(convertedAmount);
