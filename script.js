const subtitle = document.querySelector('.hero-subtitle');

// Get the original text content
const text = subtitle.textContent;

// Clear the text initially
subtitle.textContent = '';

// Initialize index for typing
let i = 0;

// Function to simulate typing effect
function typeWriter() {
    if (i < text.length) {
        // Add the next character
        subtitle.textContent += text.charAt(i);
        i++;
        // Call the function again after a delay
        setTimeout(typeWriter, 100);
    }
}

// Start the typing animation when the page loads
window.addEventListener('load', typeWriter);
