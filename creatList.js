const form = document.querySelector("#form");
const button = document.querySelector(".btn");

let transactionAll = [
    { name:"", amount: 0 }
]

button.addEventListener("click", () =>{
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
    
    const transaction = { name: textInput, amount: +amountInput };
    transactionAll.push(transaction);

    const ul = document.querySelector(".transactions");
    const li = document.createElement("li");
    const cssClass = amountInput < 0 ? "minus" : "plus";
    const buttonClear = document.createElement("button");

    buttonClear.textContent = "+";
    buttonClear.classList.add("delete-btn");
    li.textContent = [textInput, "R$" + amountInput];
    li.classList.add(cssClass);
    li.appendChild(buttonClear);
    ul.appendChild(li);

    calcBalance();
    
    
    

})

        


