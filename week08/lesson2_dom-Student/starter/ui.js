import { addQuote, getAllQuotes } from './quote.js';

const quoteList = document.getElementById('quote-list');

addQuote('Stay hungry, stay foolish.', 'Steve Jobs');
addQuote('Do or do not. There is no try.', 'Yoda');
addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci');

function renderQuotes() {
	quoteList.innerHTML = '';
	const quotes = getAllQuotes();

	quotes.forEach(q => {
		const p = document.createElement('p');
		p.textContent = `"${q.content}" — ${q.author}`;
		quoteList.appendChild(p);
	});
}

renderQuotes();
