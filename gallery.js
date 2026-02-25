const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('lightbox-close');

const items = Array.from(document.querySelectorAll('.gallery-item'));

function openLightbox(index) {
  const img = items[index].querySelector('img');
  const caption = items[index].querySelector('figcaption');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption.textContent;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
}

items.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
