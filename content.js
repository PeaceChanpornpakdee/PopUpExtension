// Create a button element
const button = document.createElement('button');
button.id = 'floating-button';
button.textContent = 'Help';

// Apply CSS styles to the button
button.style.backgroundColor = '#F96803';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '50%';
button.style.padding = '16px 32px';
button.style.fontSize = '18px';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.cursor = 'pointer';

// Add event listener when click
button.addEventListener('click', function() {
    alert('Button Clicked!!!');
});

// Initial injection of the button
document.body.appendChild(button);

// Listen for scroll events
window.onscroll = function() {
    // Re-inject the button when scrolling occurs
    document.body.appendChild(button);
    console.log("Scroll");
};
