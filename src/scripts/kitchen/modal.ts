export function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeModal');
    const thumbnailsContainer = document.getElementById('modalThumbnails');
    let currentGallery: HTMLImageElement[] = [];
    
    function openModal(clickedImg: HTMLImageElement, gallery: HTMLImageElement[]) {
      if (!modal || !modalImg || !thumbnailsContainer) return;
      
      currentGallery = gallery;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      updateModalImage(clickedImg);
      
      // Create thumbnails
      thumbnailsContainer.innerHTML = '';
      gallery.forEach((img, index) => {
        const thumb = document.createElement('button');
        thumb.className = `w-16 h-16 rounded overflow-hidden ${
          img.src === modalImg.src ? 'ring-2 ring-[#2F4BA0]' : ''
        }`;
        
        const thumbImg = document.createElement('img');
        thumbImg.src = img.src;
        thumbImg.alt = img.alt;
        thumbImg.className = 'w-full h-full object-cover';
        
        thumb.appendChild(thumbImg);
        thumb.addEventListener('click', () => updateModalImage(img));
        thumbnailsContainer.appendChild(thumb);
      });
    }
    
    function updateModalImage(img: HTMLImageElement) {
      if (!modalImg || !thumbnailsContainer) return;
      
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      
      // Update thumbnail selection
      thumbnailsContainer.querySelectorAll('button').forEach(thumb => {
        thumb.classList.toggle('ring-2', 
          thumb.querySelector('img')?.src === img.src
        );
        thumb.classList.toggle('ring-[#2F4BA0]',
          thumb.querySelector('img')?.src === img.src
        );
      });
    }
    
    function closeModal() {
      if (!modal) return;
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
    
    // Add click handlers to all gallery images
    document.querySelectorAll('.image-gallery').forEach(gallery => {
      const images = Array.from(gallery.querySelectorAll('img'));
      images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openModal(img, images));
      });
    });
    
    // Close modal when clicking close button or outside
    closeBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (modal?.classList.contains('hidden')) return;
      
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateModal(-1);
          break;
        case 'ArrowRight':
          navigateModal(1);
          break;
      }
    });
    
    function navigateModal(direction: number) {
      if (!modalImg) return;
      
      const currentIndex = currentGallery.findIndex(img => img.src === modalImg.src);
      const newIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
      updateModalImage(currentGallery[newIndex]);
    }
  }

document.addEventListener('DOMContentLoaded', initImageModal);