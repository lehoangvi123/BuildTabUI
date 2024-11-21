const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document);

// Select all tab buttons and tab content panes
const tabButtons = $$('.tab-item');
const tabPanes = $$('.tab-pane');  
const line = $('.line');

// Initialize the line position and size
function updateLinePosition(activeTab) {
    line.style.left = activeTab.offsetLeft + 'px';
    line.style.width = activeTab.offsetWidth + 'px';
}

// Set the initial line position
const activeTab = $('.tab-item.active');
if (activeTab) updateLinePosition(activeTab);

// Function to handle tab switching
function switchTab(index) {
    // Remove "active" class from all buttons and panes
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tabPanes.forEach((pane) => pane.classList.remove('active'));

    // Add "active" class to clicked tab button and corresponding pane
    tabButtons[index].classList.add('active');
    tabPanes[index].classList.add('active');

    // Update the line position
    updateLinePosition(tabButtons[index]);
}

// Add click event listeners to all tab buttons
tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => switchTab(index));
});
