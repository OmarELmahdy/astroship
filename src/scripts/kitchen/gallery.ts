function initImageGalleries() {
    document.querySelectorAll('.image-gallery').forEach(gallery => {
      const images = gallery.querySelectorAll('img');
      const dots = gallery.querySelectorAll('[data-dot]');
      const prevBtn = gallery.querySelector('[data-direction="prev"]');
      const nextBtn = gallery.querySelector('[data-direction="next"]');
      let currentIndex = 0;
  
      function showImage(index) {
        images.forEach((img, i) => {
          img.style.opacity = i === index ? '1' : '0';
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle('bg-[#2F4BA0]', i === index);
          dot.classList.toggle('bg-[#B0BEC5]', i !== index);
        });
      }
  
      function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }
  
      function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      }
  
      // Event listeners
      prevBtn?.addEventListener('click', prevImage);
      nextBtn?.addEventListener('click', nextImage);
      
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentIndex = index;
          showImage(currentIndex);
        });
      });
  
      // Optional: Auto-advance gallery
      let interval;
      
      gallery.addEventListener('mouseenter', () => {
        clearInterval(interval);
      });
  
      gallery.addEventListener('mouseleave', () => {
        interval = setInterval(nextImage, 5000);
      });
  
      // Start auto-advance
      interval = setInterval(nextImage, 5000);
    });
  }
  