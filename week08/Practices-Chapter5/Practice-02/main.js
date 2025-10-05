const box = document.getElementById('box');
const colorButtons = document.querySelectorAll('button[data-color]');

colorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.dataset.color; 
    box.style.backgroundColor = color; 
    box.textContent = color.toUpperCase(); 
  });
});

