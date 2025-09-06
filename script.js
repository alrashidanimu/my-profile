const btn = document.getElementById('colorBtn');

btn.addEventListener('click', () => {
  const colors = ['#f0f0f0', '#ffe6e6', '#e6ffe6', '#e6f0ff', '#fffbe6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
