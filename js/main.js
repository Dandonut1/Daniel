// NextGen TT — shared front-end behavior

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Highlight active nav link for current page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Contact form (front-end only demo)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.classList.add('show');
      contactForm.reset();
      status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // ---------- Video lightbox (shared by index preview + videos page) ----------
  const lightbox = document.getElementById('lightbox');
  const lightboxFrame = document.getElementById('lightboxFrame');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(video) {
    if (!lightbox) return;
    lightboxTitle.textContent = video.title;
    lightboxDesc.textContent = video.description;

    if (video.type === 'youtube') {
      lightboxFrame.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0" title="${video.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
      lightboxFrame.innerHTML = `<video src="${video.src}" controls autoplay></video>`;
    }
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightboxFrame.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function videoCardHTML(video) {
    const catLabel = { training: 'Training', matches: 'Matches', fun: 'Fun & Behind the Scenes' }[video.category] || video.category;
    return `
      <div class="video-card" data-id="${video.id}">
        <div class="video-thumb">
          <span class="video-cat">${catLabel}</span>
          <span class="video-duration">${video.duration}</span>
          <div class="play-btn">▶</div>
        </div>
        <div class="video-info">
          <h4>${video.title}</h4>
          <p>${video.description}</p>
        </div>
      </div>`;
  }

  function wireCards(container) {
    container.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => {
        const video = VIDEOS.find(v => v.id === card.dataset.id);
        if (video) openLightbox(video);
      });
    });
  }

  // Homepage preview grid (first 3 featured videos)
  const previewGrid = document.getElementById('previewGrid');
  if (previewGrid && typeof VIDEOS !== 'undefined') {
    const featured = VIDEOS.filter(v => v.featured).slice(0, 3);
    previewGrid.innerHTML = featured.map(videoCardHTML).join('');
    wireCards(previewGrid);
  }

  // Full video gallery page
  const fullGrid = document.getElementById('videoGrid');
  if (fullGrid && typeof VIDEOS !== 'undefined') {
    let activeFilter = 'all';

    function render() {
      const list = activeFilter === 'all' ? VIDEOS : VIDEOS.filter(v => v.category === activeFilter);
      fullGrid.innerHTML = list.map(videoCardHTML).join('') ||
        '<p style="grid-column:1/-1; text-align:center;">No videos in this category yet — check back soon.</p>';
      wireCards(fullGrid);
    }

    document.querySelectorAll('.video-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.video-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeFilter = tab.dataset.filter;
        render();
      });
    });

    render();
  }
});
