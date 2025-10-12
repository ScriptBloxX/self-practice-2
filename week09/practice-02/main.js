const input = document.getElementById('keyInput');
const log = document.getElementById('keyLog');

input.addEventListener('keydown', function(event) {
	const p = document.createElement('p');
	if (event.key === 'Enter') {
		p.textContent = 'You pressed: Enter';
		p.style.color = 'blue';
	} else {
		p.textContent = 'You pressed: ' + event.key;
		p.style.color = 'black';
	}
	log.appendChild(p);
});
