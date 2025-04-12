export function initImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeModal');
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  
  let currentImageIndex = 0;
  let images = [];

  function openModal(imgSrc, allImages) {
    modal.classList.remove('hidden');
    modalImage.src = imgSrc;
    images = allImages;
    currentImageIndex = images.indexOf(imgSrc);
    updateNavigationButtons();
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  function showPreviousImage() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      modalImage.src = images[currentImageIndex];
      updateNavigationButtons();
    }
  }

  function showNextImage() {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      modalImage.src = images[currentImageIndex];
      updateNavigationButtons();
    }
  }

  function updateNavigationButtons() {
    prevBtn.style.visibility = currentImageIndex === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = currentImageIndex === images.length - 1 ? 'hidden' : 'visible';
  }

  // Event listeners
  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', showPreviousImage);
  nextBtn.addEventListener('click', showNextImage);

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPreviousImage();
      if (e.key === 'ArrowRight') showNextImage();
    }
  });

  // Expose the openModal function globally
  window.openImageModal = openModal;
}