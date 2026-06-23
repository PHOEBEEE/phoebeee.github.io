/* =========================================================
   Phoebe Noubissi — Portfolio interactions
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Theme (persisted, respects OS preference) ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var stored = null;
  try { stored = localStorage.getItem('pn-theme'); } catch (e) {}

  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var initial = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('pn-theme', next); } catch (e) {}
    });
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById('navBurger');
  var links = document.getElementById('navLinks');

  function closeMenu() {
    if (!links || !burger) return;
    links.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ---------- Navbar shadow on scroll ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Active nav link via IntersectionObserver ---------- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__link');

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ---------- Scroll reveal animations ---------- */
  var revealEls = document.querySelectorAll('.section__head, .about__body, .about__card, .cluster__title, .card, .case, .post, .shot, .dv__step, .dv__trigger, .dvtable-wrap, .gov__flow, .gov__card, .contact__info, .contact__form, .hero__stats');
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Project inventory: live filter + counter ---------- */
  var search = document.getElementById('invSearch');
  var count = document.getElementById('invCount');
  var emptyMsg = document.getElementById('invEmpty');
  if (search && count) {
    var accs = Array.prototype.slice.call(document.querySelectorAll('#inventory .acc'));
    var grandTotal = parseInt(count.getAttribute('data-total'), 10) || 0;

    search.addEventListener('input', function () {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      accs.forEach(function (acc) {
        var items = Array.prototype.slice.call(acc.querySelectorAll('.acc__item'));
        var badge = acc.querySelector('.acc__count');
        var areaTotal = parseInt(badge.getAttribute('data-total'), 10) || items.length;
        var visible = 0;
        items.forEach(function (li) {
          var txt = (li.querySelector('.acc__name').textContent + ' ' +
                     li.querySelector('.acc__tech').textContent).toLowerCase();
          var match = !q || txt.indexOf(q) !== -1;
          li.classList.toggle('is-hidden', !match);
          if (match) visible++;
        });
        acc.classList.toggle('is-hidden', !!q && visible === 0);
        if (q) { acc.open = visible > 0; badge.textContent = visible; }
        else { acc.open = false; badge.textContent = areaTotal; }
        shown += visible;
      });
      count.textContent = 'Showing ' + (q ? shown : grandTotal) + ' of ' + grandTotal;
      if (emptyMsg) emptyMsg.hidden = !(q && shown === 0);
    });
  }

  /* ---------- Gallery: swap to placeholder when image is missing ---------- */
  document.querySelectorAll('.shot img').forEach(function (img) {
    var mark = function () {
      var fig = img.closest('.shot');
      if (fig) fig.classList.add('is-missing');
    };
    if (img.complete && img.naturalWidth === 0) mark();
    img.addEventListener('error', mark);
  });

  /* ---------- Lightbox for gallery ---------- */
  (function () {
    var lb = document.getElementById('lightbox');
    if (!lb) return;
    var lbImg = document.getElementById('lightboxImg');
    var lbCap = document.getElementById('lightboxCap');
    var lbClose = document.getElementById('lightboxClose');

    function openLb(src, alt, cap) {
      lbImg.src = src; lbImg.alt = alt || '';
      lbCap.textContent = cap || '';
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    function closeLb() {
      lb.hidden = true; lbImg.src = '';
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.shot').forEach(function (fig) {
      var frame = fig.querySelector('.shot__frame');
      var img = fig.querySelector('img');
      if (!frame || !img) return;
      frame.addEventListener('click', function () {
        if (fig.classList.contains('is-missing')) return;
        var capEl = fig.querySelector('figcaption strong');
        openLb(img.currentSrc || img.src, img.alt, capEl ? capEl.textContent : '');
      });
    });

    lbClose.addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lightbox__inner')) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lb.hidden) closeLb();
    });
  })();

  /* ---------- Project detail popup ---------- */
  (function () {
    var modal = document.getElementById('projModal');
    var data = window.PROJECT_DETAILS;
    if (!modal || !data) return;
    var pmArea = document.getElementById('pmArea');
    var pmTitle = document.getElementById('pmTitle');
    var pmBody = document.getElementById('pmBody');
    var lastFocus = null;

    function esc(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    function section(label, text) {
      if (!text) return '';
      return '<div class="modal__section"><p class="modal__label">' + label +
             '</p><p class="modal__text">' + esc(text) + '</p></div>';
    }
    function flow(label, text) {
      if (!text) return '';
      // split a process sentence into steps
      var steps = text.replace(/\band\b/g, ',').split(/[;,]/)
        .map(function (s) { return s.trim().replace(/\.$/, ''); })
        .filter(function (s) { return s.length > 1; });
      if (steps.length < 2) return section(label, text);
      var html = '<div class="modal__section"><p class="modal__label">' + label + '</p><div class="flow">';
      steps.forEach(function (s, i) {
        if (i) html += '<span class="flow__arrow">→</span>';
        html += '<span class="flow__step"><span class="flow__num">' + (i + 1) + '</span>' + esc(s) + '</span>';
      });
      return html + '</div></div>';
    }
    function techs(label, text) {
      if (!text) return '';
      var list = text.split(/;|·/).map(function (t) { return t.trim(); }).filter(Boolean);
      var html = '<div class="modal__section"><p class="modal__label">' + label + '</p><div class="modal__techs">';
      list.forEach(function (t) { html += '<span>' + esc(t) + '</span>'; });
      return html + '</div></div>';
    }

    function openModal(id) {
      var d = data[id];
      if (!d) return;
      lastFocus = document.activeElement;
      pmArea.textContent = d.area || '';
      pmTitle.textContent = d.name || '';
      pmBody.innerHTML =
        section('Business solution', d.business) +
        section('Architecture', d.architecture) +
        section('Methodology', d.methodology) +
        flow('Process', d.process) +
        techs('Technologies', d.technologies);
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      var closeBtn = document.getElementById('pmClose');
      if (closeBtn) closeBtn.focus();
    }
    function closeModal() {
      modal.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.querySelectorAll('.acc__item').forEach(function (li) {
      li.addEventListener('click', function () { openModal(li.getAttribute('data-id')); });
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(li.getAttribute('data-id')); }
      });
    });
    modal.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-close')) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
  })();

  /* ---------- Guard placeholder links ---------- */
  document.querySelectorAll('[data-placeholder="true"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (el.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Add your real profile URL in index.html (look for the data-placeholder links).');
      }
    });
  });
})();
