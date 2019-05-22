// jshint esversion: 6

const inputs = document.querySelectorAll('.controls input');

// Function for updating css variables
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(suffix);

  //   changing our css variables
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Event listeners for changes and mouse moves
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
