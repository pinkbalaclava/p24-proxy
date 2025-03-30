// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dropdown functionality
    initDropdowns();
    
    // Initialize favorite buttons
    initFavoriteButtons();
    
    // Initialize search clear button
    initSearchClear();
    
    // Initialize pagination
    initPagination();
    
    // Insert the ElevenLabs Voice Assistant
    insertElevenLabsVoiceAssistant();
    
    console.log('Property listing page initialized');
});

// Initialize dropdown menus
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Toggle dropdown visibility on click
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close all other dropdowns first
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-menu').style.display = 'none';
                }
            });
            
            // Toggle current dropdown
            const isVisible = menu.style.display === 'block';
            menu.style.display = isVisible ? 'none' : 'block';
        });
        
        // Handle dropdown item selection
        const items = menu.querySelectorAll('.dropdown-item');
        items.forEach(item => {
            item.addEventListener('click', function() {
                if (!item.querySelector('input[type="checkbox"]')) {
                    toggle.querySelector(':not(i)').textContent = this.textContent;
                    menu.style.display = 'none';
                }
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown-menu').style.display = 'none';
        });
    });
}

// Initialize favorite buttons
function initFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            // Toggle favorite status
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#dc2626';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
            
            // Here you could add analytics tracking or API calls to save favorites
            const propertyCard = this.closest('.property-card');
            const propertyId = propertyCard.id;
            const propertyTitle = propertyCard.querySelector('.property-title').textContent;
            console.log(`Property ${propertyId} (${propertyTitle}) favorite status toggled`);
        });
    });
}

// Initialize search clear button
function initSearchClear() {
    const clearButton = document.querySelector('.clear-search');
    const searchInput = document.querySelector('.search-input');
    
    if (clearButton && searchInput) {
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            searchInput.focus();
        });
    }
}

// Initialize pagination
function initPagination() {
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Skip if already active or next button
            if (this.classList.contains('active') || this.classList.contains('next')) {
                return;
            }
            
            // Update active state
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Here you would typically load the new page of results
            // For this demo, we'll just log it
            console.log(`Navigate to page ${this.textContent}`);
            
            // Scroll to top of listings
            document.getElementById('property-listings').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Handle next button
    const nextButton = document.querySelector('.pagination-btn.next');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Find current active page
            const activePage = document.querySelector('.pagination-btn.active');
            if (activePage) {
                const currentPage = parseInt(activePage.textContent);
                console.log(`Navigate from page ${currentPage} to page ${currentPage + 1}`);
                
                // Here you would typically load the next page
                // For demo purposes, we'll just log it
            }
        });
    }
}

// Simple function to insert the ElevenLabs voice assistant
function insertElevenLabsVoiceAssistant() {
    // Get or create the container
    let container = document.getElementById('voice-assistant-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'voice-assistant-container';
        container.className = 'voice-assistant-container';
        document.body.appendChild(container);
    }
    
    // Clear any existing content
    container.innerHTML = '';
    
    // Insert the embed code directly
    container.innerHTML = `<elevenlabs-convai agent-id="QEf17rEjtX47iwpSuaG4"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>`;
    
    console.log('ElevenLabs Voice Assistant embed inserted');
}

// Element visibility tracking for voice assistant context awareness
// This helps the voice assistant know what's currently visible on the screen
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When property card becomes visible or hidden
        if (entry.target.classList.contains('property-card')) {
            const propertyId = entry.target.id;
            const isVisible = entry.isIntersecting;
            
            if (isVisible) {
                // Mark this property as being in view
                entry.target.setAttribute('data-in-view', 'true');
                
                // Extract key property details for voice assistant context
                const price = entry.target.querySelector('.property-price').textContent;
                const title = entry.target.querySelector('.property-title').textContent;
                const location = entry.target.querySelector('.property-location').textContent;
                const bedrooms = entry.target.querySelector('.feature:first-child span').textContent;
                
                console.log(`Property now in view: ${propertyId}`, {
                    price,
                    title,
                    location,
                    bedrooms
                });
                
                // If we had the voice assistant API integrated directly, we could update it here
                // voiceAssistant.updateContext({ visibleProperty: { id: propertyId, price, title, location, bedrooms } });
            } else {
                // Mark as not in view
                entry.target.setAttribute('data-in-view', 'false');
            }
        }
    });
}, observerOptions);

// Start observing all property cards
document.querySelectorAll('.property-card').forEach(card => {
    elementObserver.observe(card);
});
