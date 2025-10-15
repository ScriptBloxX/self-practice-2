// Lesson 3 - Events Starter

import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'

const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

function createQuoteElement(quote) {
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
  const { id, content, author } = quote

  const container = document.createElement('div')
  container.dataset.id = String(id)

  const contentP = document.createElement('p')
  contentP.textContent = content

  const authorP = document.createElement('p')
  authorP.textContent = author

  const editBtn = document.createElement('button')
  editBtn.className = 'edit-btn'
  editBtn.dataset.id = String(id)
  editBtn.textContent = 'Edit'

  const deleteBtnEl = document.createElement('button')
  deleteBtnEl.className = 'delete-btn'
  deleteBtnEl.dataset.id = String(id)
  deleteBtnEl.textContent = 'Delete'

  editBtn.addEventListener('click', () => {
    const qid = Number(editBtn.dataset.id)
    const found = getAllQuotes().find((q) => q.id === qid)
    if (found) {
      contentInput.value = found.content
      authorInput.value = found.author
      idInput.value = String(found.id)
      contentInput.focus()
    }
  })

  deleteBtnEl.addEventListener('click', () => {
    const qid = Number(deleteBtnEl.dataset.id)
    const idx = deleteQuote(qid)
    if (idx !== -1) {
      deleteQuoteFromDOM(qid)
      if (idInput.value && Number(idInput.value) === qid) {
        form.reset()
        idInput.value = ''
      }
    }
  })

  container.appendChild(contentP)
  container.appendChild(authorP)
  container.appendChild(editBtn)
  container.appendChild(deleteBtnEl)

  return container
}

function addQuoteToDOM(quote) {
  const el = createQuoteElement(quote)
  quoteList.appendChild(el)
}

function updateQuoteInDOM(quote) {
  const el = quoteList.querySelector(`[data-id="${quote.id}"]`)
  if (el) {
    const contentP = el.querySelector('p:nth-of-type(1)')
    const authorP = el.querySelector('p:nth-of-type(2)')
    if (contentP) contentP.textContent = quote.content
    if (authorP) authorP.textContent = quote.author
  }
}

function deleteQuoteFromDOM(id) {
  const el = quoteList.querySelector(`[data-id="${id}"]`)
  if (el) el.remove()
}

function renderQuotes() {
  quoteList.innerHTML = ''
  const all = getAllQuotes()
  all.forEach((q) => addQuoteToDOM(q))
}

function showRandomQuote() {
  const all = getAllQuotes()
  if (!all.length) {
    randomDisplay.textContent = '-- No quotes to show --'
    return
  }
  const random = all[Math.floor(Math.random() * all.length)]
  randomDisplay.textContent = `"${random.content}" — ${random.author}`
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const content = contentInput.value.trim()
  const author = authorInput.value.trim()
  const idVal = idInput.value.trim()

  if (!content || !author) return

  if (idVal) {
    const id = Number(idVal)
    const updated = updateQuote(id, content, author)
    if (updated) updateQuoteInDOM(updated)
  } else {
    const created = addQuote(content, author)
    if (created) addQuoteToDOM(created)
  }

  form.reset()
  idInput.value = ''
})

randomBtn.addEventListener('click', showRandomQuote)

renderQuotes()
