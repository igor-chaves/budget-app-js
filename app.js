const transactionsForm = document.querySelector('[data-js="transactions-form"]')
const transactionsList = document.querySelector('[data-js="transactions-list"]')

let transactions = []

const removeItem = item => {
   transactions = transactions.filter(transaction => transaction.description !== item)
   console.log(transactions)
}

const addItemIntoDOM = transaction => {
   transactions.push(transaction)
}

transactionsForm.addEventListener("submit", e => {
   e.preventDefault()

   transactionsList.innerHTML = ""

   const name = transactionsForm.description.value
   const amount = transactionsForm.amount.value
   const transaction = {"id": 01, "description": name, "amount": Number(amount)}
   
   const li = document.createElement("li")
   transactionsList.prepend(li)

   addItemIntoDOM(transaction)
   console.log(transactions)

   li.innerHTML += `
   <span data-js="description">${name}</span>
   <span>U$ ${amount}</span>
   <button data-js="remove-button">X</button>
   `

   const removeBtn = document.querySelector('[data-js="remove-button"]')
   removeBtn.addEventListener('click', () => {
      removeItem(transaction.description)
   })
})
