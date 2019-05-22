// jshint esversion: 6

const inputs = document.querySelectorAll('.controls input');

// Function for updating css variables
function handleUpdate() {
  console.log(this.value);
}

// Event listeners for changes and mouse moves
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
