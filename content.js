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

let currentPage = location.href;
// Listen for URL changes
setInterval(function()
{
    if (currentPage != location.href) {
        // page has changed, set new page as 'current'
        currentPage = location.href;
        // Re-inject the button
        document.body.appendChild(button);
        console.log("URL is changed.");
    }
}, 500);

// Listen for scroll events
window.onscroll = function() {
    document.body.appendChild(button);
    console.log("Window is scrolling.");
}