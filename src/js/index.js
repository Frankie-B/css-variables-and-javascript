// jshint esversion: 6

const inputs = document.querySelectorAll('.controls input');

// Function for updating css variables
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(suffix);
}

// Event listeners for changes and mouse moves
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
