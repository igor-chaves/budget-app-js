const transactionsForm = document.querySelector('[data-js="transactions-form"]')
const transactionsList = document.querySelector('[data-js="transactions-list"]')
// const 

let transactions = []

transactionsForm.addEventListener("submit", e => {
   e.preventDefault()
   
   const name = transactionsForm.description.value
   const amount = transactionsForm.amount.value
   const transaction = {"id": 01, "description": name, "amount": Number(amount)}
   
   transactions.push(transaction)
   console.log(transactions)
   
   const li = document.createElement("li")
   transactionsList.prepend(li)

   li.innerHTML += `
   <span data-js="description">${name}</span>
   <span>U$ ${amount}</span>
   <button onClick="removeItem(${transaction.description})">X</button>
   `
   
})

// const removeItem = item => {
//    transactions = transactions.filter(transaction => {transaction.description !== item})
//    console.log(transactions)
// }
