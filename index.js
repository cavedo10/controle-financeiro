const form = document.querySelector("#form");
const ul = document.querySelector("#transactions")
const button = document.querySelector(".btn");
const balance = document.querySelector(".balance");
const moneyPlus = document.querySelector(".money-plus");
const moneyMinus = document.querySelector(".money-minus");

const localStorageTransactions = JSON
.parse(localStorage.getItem("transactions"));
let transactions = localStorage
.getItem("transactions")!== null ? localStorageTransactions : []; 

const remove = ID => {
    transactions = transactions
    .filter(transaction => transaction.id !== ID);
    updateLocalStorage();
    init();
}

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? "-" : "+";
    const cssClass = transaction.amount < 0 ? "minus" : "plus";
    const li = document.createElement("li");
    const amountOperator = Math.abs(transaction.amount);
    li.classList.add(cssClass);
    li.innerHTML = `${transaction.name} 
    <span>${operator} R$ ${amountOperator}</span>
    <button class="delete-btn" onclick="remove(${transaction.id})">x</button>`
    ul.append(li);
    console.log(li);

}

const updateBalance = () => {
    const transactionsAmount = transactions
        .map(transaction => transaction.amount);
    const total = transactionsAmount
        .reduce((accumul, numbers) => accumul + numbers, 0)
        .toFixed(2);
    const minus = Math.abs(transactionsAmount.filter(transactions => transactions < 0)
    .reduce((accumul, numbers) => accumul+numbers, 0)).toFixed(2);
    const plus = transactionsAmount
        .filter(transactions => transactions > 0)
        .reduce((accumul, numbers) => accumul+numbers, 0).toFixed(2);
    if (total < 0){
        balance.id = "balance";
    }else{
        balance.id = "";
    }
    balance.textContent = `R$ ${total}`; 
    moneyPlus.textContent = `R$ ${plus}`; 
    moneyMinus.textContent = `R$ ${minus}`;  
    
}

const init = () => {
    ul.innerHTML= "";
    transactions.forEach(addTransactionIntoDom);
    updateBalance();
}

init();
const updateLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
} 
const generateId = ()=> Math.round( Math.random()*1000);

form.addEventListener("submit", () => {
    event.preventDefault();

    const textInput = form.text.value;
    const amountInput = form.amount.value; 

    if(textInput.length == 0) {
        alert("falta o nome da transação!");
        return;
    } if(amountInput < 1 && amountInput > -1){
        alert("talta o valor da transação!")
        return;
    }



    const transaction = {
        id: generateId() ,
        name:textInput, 
        amount:+amountInput }
    
    transactions.push(transaction);
    init();
    updateLocalStorage();

    textInput.value = "";
    amountInput.value = "";
   

})
