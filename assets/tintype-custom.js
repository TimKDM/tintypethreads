/* ==========================================================================
   Tintype Thread Co. — Custom JavaScript
   Scroll animations and interactions
   ========================================================================== */

(function() {
  'use strict';

  // Fade-in on scroll using IntersectionObserver
  var fadeElements = document.querySelectorAll('.tt-fade-in');
  if (fadeElements.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('tt-visible');
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  }
})();
