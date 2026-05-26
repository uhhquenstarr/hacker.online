// 1. Select the button
const btn = document.getElementById('colorButton');

// 2. Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 3. Add the "Click" event listener
btn.addEventListener('click', function() {
  const newColor = getRandomColor();
  
  // Change the button's background
  btn.style.backgroundColor = newColor;
  
  // Optional: Change the whole page background too!
  // document.body.style.backgroundColor = newColor;
});
