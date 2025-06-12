function estimateTransactionFee() {
const amountStr = window.prompt("How much are you sending");

const amount = parseInt(amountStr);

if (!amount) {
console.log("Failed to convert");
console.log(amountStr);
return;
}

let transactionCost = (amount * 1.5) / 100;

if (transactionCost <= 10) {
alert(`Sending KES ${amount}
Transaction cost KES 10
Total Amount = ${amount + 10}`);
return;
}

if (transactionCost >= 70) {
alert(`Sending KES ${amount}
Transaction cost KES 70
Total Amount = ${amount + 70}`);
return;
}

alert(`Sending KES ${amount}
Transaction cost KES ${transactionCost.toFixed(2)}
Total Amount = ${amount + transactionCost}`);
}
