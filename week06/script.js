// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  quotes.push(quote);
  return quotes;
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const index = quotes.findIndex(i=>i.id===id);
  if (index !== -1) quotes.splice(index, 1);
  return quotes;
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const index = quotes.findIndex(i=>i.id===id);
  if (index !== -1) quotes[index] = updatedQuote
  return quotes;
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" })
addQuote({ id: 2, content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" })
addQuote({ id: 3, content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" })
console.log(quotes)
// TODO: Delete 1 quote using deleteQuote()
console.log(deleteQuote(2))
// TODO: Update 1 quote using updateQuote()
console.log(updateQuote(1,{ id: 1, content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }))
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())
