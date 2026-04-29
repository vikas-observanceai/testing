/* Manisha Varma Campaign — main.js */

(function () {
  'use strict';

  /* ---- Navbar scroll behaviour ---- */
  const nav = document.getElementById('mainNav');
  function updateNav() {
    if (nav.dataset.alwaysScrolled || window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ---- Close mobile nav on link click ---- */
  document.querySelectorAll('#navbarNav .nav-link, #navbarNav .btn-primary-red').forEach(function (link) {
    link.addEventListener('click', function () {
      const toggler = document.querySelector('.navbar-toggler');
      const collapse = document.getElementById('navbarNav');
      if (collapse && collapse.classList.contains('show')) {
        toggler && toggler.click();
      }
    });
  });

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const banner = document.getElementById('topBanner');
      const offset = (nav ? nav.offsetHeight : 0) + (banner ? banner.offsetHeight : 0) + 8;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ---- Countdown Timer — May 11, 2026 ---- */
  var electionDate = new Date('2026-05-11T00:00:00').getTime();

  var cdDays    = document.getElementById('cd-days');
  var cdHours   = document.getElementById('cd-hours');
  var cdMinutes = document.getElementById('cd-minutes');
  var cdSeconds = document.getElementById('cd-seconds');

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateCountdown() {
    var now  = Date.now();
    var diff = electionDate - now;

    if (diff <= 0) {
      cdDays.textContent    = '00';
      cdHours.textContent   = '00';
      cdMinutes.textContent = '00';
      cdSeconds.textContent = '00';
      var label = document.querySelector('.countdown-label');
      if (label) label.textContent = 'Election Day is here — Go Vote!';
      return;
    }

    var days    = Math.floor(diff / 86400000);
    var hours   = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000) / 60000);
    var seconds = Math.floor((diff % 60000) / 1000);

    cdDays.textContent    = pad(days);
    cdHours.textContent   = pad(hours);
    cdMinutes.textContent = pad(minutes);
    cdSeconds.textContent = pad(seconds);
  }

  if (cdDays) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ---- Back to top button ---- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });
  }

  /* ---- Gallery "View More / View Less" toggle ---- */
  var viewMoreBtn   = document.getElementById('galleryViewMore');
  var viewMoreLabel = document.getElementById('galleryViewMoreLabel');
  var viewMoreWrap  = document.getElementById('galleryViewMoreWrap');
  var extraItems    = document.querySelectorAll('.gallery-extra');

  if (viewMoreBtn) {
    // Hide button if there are no extra items
    if (extraItems.length === 0) {
      viewMoreWrap.style.display = 'none';
    }

    viewMoreBtn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      extraItems.forEach(function (el) {
        el.classList.toggle('show', !expanded);
      });
      this.setAttribute('aria-expanded', String(!expanded));
      this.classList.toggle('active', !expanded);
      viewMoreLabel.textContent = expanded ? 'View More' : 'View Less';

      // Re-init lightbox so new items are included
      if (!expanded && typeof GLightbox !== 'undefined') {
        GLightbox({
          selector: '.glightbox',
          touchNavigation: true,
          loop: true,
          autoplayVideos: false,
        });
      }
    });
  }

  /* ---- GLightbox gallery ---- */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: false,
    });
  }

  /* ---- Thank-you message after volunteer form submission ---- */
  var params = new URLSearchParams(window.location.search);
  if (params.get('volunteer') === 'thankyou') {
    var target = document.getElementById('volunteer');
    if (target) {
      var msg = document.createElement('div');
      msg.className = 'alert alert-success mt-3 text-center fw-semibold';
      msg.textContent = 'Thank you for signing up to volunteer! We\'ll be in touch soon.';
      target.querySelector('.container').prepend(msg);
    }
  }
})();
