/*// Contact Modal Functionality
const contactButton = document.getElementById('contact');
const modal = document.getElementById('contactModal');
const closeModal = document.getElementsByClassName('close')[0];

contactButton.onclick = function() {
  modal.style.display = 'block';
};

closeModal.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
*/
// Get elements
const showResumeBtn = document.getElementById('showResumeBtn');
const resumeModal = document.getElementById('resumeModal');
const closeModal = document.getElementById('closeModal');

// Show the modal when the "View Resume" button is clicked
showResumeBtn.addEventListener('click', function() {
  resumeModal.style.display = 'block';
});

// Close the modal when the close button (X) is clicked
closeModal.addEventListener('click', function() {
  resumeModal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === resumeModal) {
    resumeModal.style.display = 'none';
  }
});
