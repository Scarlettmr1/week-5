// Book Lane Buttons
const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (!e.target.disabled) {
      const laneCard = e.target.closest('.lane-card');
      const laneName = laneCard.querySelector('h3').textContent;
      alert(`Booking request for ${laneName}. Please call (555) 123-BOWL to complete your reservation!`);
    }
  });
});

// Contact Form
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    alert(`Thank you, ${name}! Your message has been sent. We'll be in touch soon!`);
    form.reset();
  });
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
