document.addEventListener('DOMContentLoaded',function(){
    const expenseForm = document.getElementById("expense-form");
    const expenseName = document.getElementById("expense-name");
    const expenseAmt = document.getElementById("expense-amount");
    const  expenseList = document.getElementById("expense-list");
    const  totalAmountDisplay = document.getElementById("total-amount");

    let expenses = [];
    const data = JSON.parse(localStorage.getItem("expenseData")) || [];
    data.forEach((expense) =>{
        expenses.push(expense);
        renderExpenses(expense);
    })
    let totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);

    function calculateTotal(){
        return data.reduce((acc,expense)=> acc+expense.amount, 0);
    };

    expenseForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmt.value);

        if(name === "" || isNaN(amount) || !isNaN(amount) && amount <= 0) return;

        const newExpense = {
            id : Date.now(),
            name : name,
            amount : amount
        }
        expenses.push(newExpense);
        expenseName.value = "";
        expenseAmt.value = "";
        renderExpenses(newExpense);
        updateTotal(newExpense);
        saveExpenses();
    })


    function renderExpenses(expense){
        const expenseItem = document.createElement('li');
        expenseItem.setAttribute('data-id',expense.id)
        expenseItem.innerHTML = `
        ${expense.name} - $${expense.amount}
        `;
        expenseList.appendChild(expenseItem);
    }

    function saveExpenses(){
        localStorage.setItem("expenseData", JSON.stringify(expenses));
    }

    function updateTotal(newExpense) {
      totalAmount += newExpense.amount;
      totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

})