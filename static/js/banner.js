const bannerImages = Array.from(document.querySelectorAll('.banner-image'));
let currentImageIndex = 0;

function showNextImage() {
  const currentImage = bannerImages[currentImageIndex];
  currentImage.classList.remove('active');

  currentImageIndex = (currentImageIndex + 1) % bannerImages.length;

  const nextImage = bannerImages[currentImageIndex];
  nextImage.classList.add('active');
}

// Iniciar después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  setInterval(showNextImage, 4000);
});