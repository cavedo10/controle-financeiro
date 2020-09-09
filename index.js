const button = document.querySelector(".btn");

button.addEventListener("click", () =>{
    event.preventDefault();
    const text = document.querySelector("#text").value;
    const amount = Number(document.querySelector("#amount")
    .value).toFixed(2);
    createList (text, amount);
    
    
    
})


function createList (text, amount){
    const ul = document.querySelector(".transactions");
    const li = document.createElement("li");
    const cssClass = amount < 0 ? "minus" : "plus";
    let buttonClear = document.createElement("button");
    buttonClear.classList.add("delete-btn");
    li.textContent = [text, "R$" + amount];
    li.classList.add(cssClass);
    ul.appendChild(li);
    return;
}
