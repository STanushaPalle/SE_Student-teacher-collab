// Function to toggle dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  // Project details popup functionality
  if (document.getElementById('join-team-container')) {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(card => {
          card.addEventListener('click', function(e) {
              // Don't show popup when clicking the request button
              if (!e.target.classList.contains('request-btn')) {
                  showProjectDetails();
              }
          });
      });
  }
});

// Function to show project details popup
function showProjectDetails() {
  const popup = document.getElementById('project-details');
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close project details popup
function closeProjectDetails() {
  const popup = document.getElementById('project-details');
  popup.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Handle tab selection for login and notifications
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
      tab.addEventListener('click', function() {
          // Remove active class from all tabs in the same container
          const parent = this.parentElement;
          parent.querySelectorAll('.tab').forEach(t => {
              t.classList.remove('active');
          });
          
          // Add active class to clicked tab
          this.classList.add('active');
      });
  });
  
  // If on notifications page, handle tab content switching
  if (document.querySelector('.notification-tabs')) {
      // Code for tab content switching would go here
  }
  
  // Add event listeners for accept/decline buttons
  const acceptButtons = document.querySelectorAll('.accept-btn');
  acceptButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Handle accept action
          const card = this.closest('.request-card');
          card.style.opacity = '0.5';
          setTimeout(() => {
              card.style.display = 'none';
          }, 500);
      });
  });
  
  const declineButtons = document.querySelectorAll('.decline-btn');
  declineButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Handle decline action
          const card = this.closest('.request-card');
          card.style.opacity = '0.5';
          setTimeout(() => {
              card.style.display = 'none';
          }, 500);
      });
  });
  
  // Add event handlers for request buttons
  const requestButtons = document.querySelectorAll('.request-btn');
  if (requestButtons) {
      requestButtons.forEach(button => {
          button.addEventListener('click', function(e) {
              e.stopPropagation(); // Prevent the card click event
              this.textContent = "Request Sent";
              this.disabled = true;
              this.style.opacity = "0.7";
          });
      });
  }
});

// Prevent event propagation when clicking inside popup content
document.addEventListener('DOMContentLoaded', function() {
  const popupContent = document.querySelector('.popup-content');
  if (popupContent) {
      popupContent.addEventListener('click', function(e) {
          e.stopPropagation();
      });
  }
  
  // Close popup when clicking outside content
  const popup = document.getElementById('project-details');
  if (popup) {
      popup.addEventListener('click', function() {
          closeProjectDetails();
      });
  }
});

// Add navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const createTeamButtons = document.querySelectorAll('.create-team-btn');
  if (createTeamButtons) {
      createTeamButtons.forEach(button => {
          button.addEventListener('click', function() {
              window.location.href = 'create-team.html';
          });
      });
  }
  
  // Implement search functionality
  const searchBoxes = document.querySelectorAll('.search-box');
  searchBoxes.forEach(box => {
      box.addEventListener('keyup', function(e) {
          if (e.key === 'Enter') {
              // Handle search action
              alert('Search feature would be implemented here');
          }
      });
  });
});