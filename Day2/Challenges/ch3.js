let balance = 20000;
let withdrawalAmount = 10000;

if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log("\nWithdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("\nInsufficient Balance");
}
