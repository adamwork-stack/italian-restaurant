(function () {
  'use strict';

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', navList.classList.contains('is-open'));
    });
  }

  // Close nav when clicking a link (mobile)
  var navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navList && window.innerWidth < 769) {
        navList.classList.remove('is-open');
      }
    });
  });

  // Newsletter form — replace action with your provider (e.g. Formspree, Mailchimp)
  var newsletterForm = document.querySelector('.footer-newsletter form');
  if (newsletterForm && !newsletterForm.dataset.handled) {
    newsletterForm.addEventListener('submit', function (e) {
      var action = newsletterForm.getAttribute('action');
      if (!action || action === '#' || action === '') {
        e.preventDefault();
        var email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
          newsletterForm.innerHTML = '<p style="color:#86efac;">Thanks for signing up. We\'ll be in touch.</p>';
        }
      }
    });
    newsletterForm.dataset.handled = 'true';
  }

  // Events inquiry form — replace action with your endpoint or Formspree
  var inquiryForm = document.querySelector('.events-inquiry form');
  if (inquiryForm && !inquiryForm.dataset.handled) {
    inquiryForm.addEventListener('submit', function (e) {
      var action = inquiryForm.getAttribute('action');
      if (!action || action === '#' || action === '') {
        e.preventDefault();
        var msg = inquiryForm.querySelector('.form-message');
        if (msg) {
          msg.textContent = 'Thank you. We will get back to you shortly.';
          msg.style.color = 'var(--color-accent)';
        }
        inquiryForm.reset();
      }
    });
    inquiryForm.dataset.handled = 'true';
  }
})();
