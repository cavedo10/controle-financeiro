const balance = document.querySelector(".balance");
const moneyPlus = document.querySelector(".money plus");
const moneyMinus = document.querySelector(".money minus");

function calcBalance(){
    const transactionAmount = transactionAll.map(transactions => transactions.amount);
    const allBalance = transactionAmount
    .reduce((accumulator, amount) => accumulator + amount, 0)
    .toFixed(2);
    console.log(allBalance);
    
    return balance.textContent = allBalance;
}
