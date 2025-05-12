// Get references to the shirt, skirt, hat, and background elements
const shirt = document.getElementById('shirt');
const skirt = document.getElementById('skirt');
const hat = document.getElementById('hat');
const shirtOptionsContainer = document.getElementById('shirt-options');
const skirtOptionsContainer = document.getElementById('skirt-options');
const hatOptionsContainer = document.getElementById('hat-options');
const pochaccoContainer = document.querySelector('.pochacco-container'); // Select the pochacco container

// Define the image paths for the shirts, skirts, hats, and backgrounds
const shirtOptions = {
  "shirt-1": "assets/dress-up-elements/blue-shirt.png",
  "shirt-2": "assets/dress-up-elements/red-shirt.png",
  "shirt-3": "assets/dress-up-elements/sailor-shirt.png"
};

const skirtOptions = {
  "skirt-1": "assets/dress-up-elements/skirt.png",
  "skirt-2": "assets/dress-up-elements/yellow-pants.png",
  "skirt-3": "assets/dress-up-elements/blue-pants.png"
};

const hatOptions = {
  "hat-1": "assets/dress-up-elements/straw-hat.png",
  "hat-2": "assets/dress-up-elements/frog-hat.png",
  "hat-3": "assets/dress-up-elements/bow.png"
};

const backgroundOptions = [
  "assets/background/background-yellow.png",
  "assets/background/blue-background.png",
  "assets/background/purple-background.png"
];

// Variable to keep track of the current background index
let currentBackgroundIndex = 0;

// Update shirt  
function updateShirt(option) {
  shirt.src = shirtOptions[option];
}

// Update skirt / pants 
function updateSkirt(option) {
  skirt.src = skirtOptions[option];
}

// Update hat
function updateHat(option) {
  hat.src = hatOptions[option];
}

// Function to update the background images (for both .pochacco-container and body)
function updateBackground(index) {
  // Update background in .pochacco-container
  pochaccoContainer.style.backgroundImage = `url(${backgroundOptions[index]})`;

  // Also update the background of the whole page (body)
  document.body.style.backgroundImage = `url(${backgroundOptions[index]})`;

  // Update the background color based on the selected background image
  if (backgroundOptions[index] === "assets/background/background-yellow.png") {
    document.body.style.backgroundColor = "#FFF4B6"; // Set background color to yellow
  } else if (backgroundOptions[index] === "assets/background/blue-background.png") {
    document.body.style.backgroundColor = "#E3ECE9"; // Set background color to light blue
  } else if (backgroundOptions[index] === "assets/background/purple-background.png") {
    document.body.style.backgroundColor = "#A2A9DB"; // Set background color to light purple
  }
}

// Initialize the state (start with shirt options visible)
let currentCategory = 'shirt'; // Keep track of the current active category

// Function to show shirt options
function showShirtOptions() {
  shirtOptionsContainer.style.display = 'flex';
  skirtOptionsContainer.style.display = 'none';
  hatOptionsContainer.style.display = 'none';
  currentCategory = 'shirt';
  updateButtonStyles('shirt');
}

// Function to show skirt options
function showSkirtOptions() {
  shirtOptionsContainer.style.display = 'none';
  skirtOptionsContainer.style.display = 'flex';
  hatOptionsContainer.style.display = 'none';
  currentCategory = 'skirt';
  updateButtonStyles('skirt');
}

// Function to show hat options
function showHatOptions() {
  shirtOptionsContainer.style.display = 'none';
  skirtOptionsContainer.style.display = 'none';
  hatOptionsContainer.style.display = 'flex';
  currentCategory = 'hat';
  updateButtonStyles('hat');
}

// Initialize the state (start with shirt options visible)
showShirtOptions();

// Function to update the styles of buttons based on the selected category
function updateButtonStyles(category) {
  // Reset background color for all buttons
  document.getElementById('shirt-button').style.backgroundColor = '';
  document.getElementById('skirt-button').style.backgroundColor = '';
  document.getElementById('hat-button').style.backgroundColor = '';

  // Set the background color of the selected category button
  if (category === 'shirt') {
    document.getElementById('shirt-button').style.backgroundColor = '#F9FFDB'; // Green for shirt button
  } else if (category === 'skirt') {
    document.getElementById('skirt-button').style.backgroundColor = '#F9FFDB'; // Green for skirt button
  } else if (category === 'hat') {
    document.getElementById('hat-button').style.backgroundColor = '#F9FFDB'; // Green for hat button
  }
}

// Event listeners for the shirt, skirt, and hat buttons
document.getElementById('shirt-button').addEventListener('click', showShirtOptions);
document.getElementById('skirt-button').addEventListener('click', showSkirtOptions);
document.getElementById('hat-button').addEventListener('click', showHatOptions);

// Event listeners for the shirt option buttons
document.getElementById('shirt-1').addEventListener('click', () => updateShirt("shirt-1"));
document.getElementById('shirt-2').addEventListener('click', () => updateShirt("shirt-2"));
document.getElementById('shirt-3').addEventListener('click', () => updateShirt("shirt-3"));

// Event listeners for the skirt option buttons
document.getElementById('skirt-1').addEventListener('click', () => updateSkirt("skirt-1"));
document.getElementById('skirt-2').addEventListener('click', () => updateSkirt("skirt-2"));
document.getElementById('skirt-3').addEventListener('click', () => updateSkirt("skirt-3"));

// Event listeners for the hat option buttons
document.getElementById('hat-1').addEventListener('click', () => updateHat("hat-1"));
document.getElementById('hat-2').addEventListener('click', () => updateHat("hat-2"));
document.getElementById('hat-3').addEventListener('click', () => updateHat("hat-3"));

// Event listeners for the left and right background buttons
document.getElementById('left-background-button').addEventListener('click', () => {
  currentBackgroundIndex = (currentBackgroundIndex - 1 + backgroundOptions.length) % backgroundOptions.length;
  updateBackground(currentBackgroundIndex);
});

document.getElementById('right-background-button').addEventListener('click', () => {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundOptions.length;
  updateBackground(currentBackgroundIndex);
});

// Initialize the default background when the page loads
updateBackground(currentBackgroundIndex);