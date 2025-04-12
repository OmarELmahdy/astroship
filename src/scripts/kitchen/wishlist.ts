function initWishlist() {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    const localStorageKey = 'kitchen-mixers-wishlist';
    
    // Load existing wishlist
    const wishlist = new Set(JSON.parse(localStorage.getItem(localStorageKey) || '[]'));
    
    // Update initial button states
    wishlistBtns.forEach(btn => {
      const mixerId = (btn as HTMLElement).dataset.mixerId;
      if (wishlist.has(mixerId)) {
        btn.classList.add('active');
        (btn.querySelector('svg') as SVGElement).style.fill = '#2F4BA0';
      }
    });

    // Add click handlers
    wishlistBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mixerId = (btn as HTMLElement).dataset.mixerId;
        const svg = btn.querySelector('svg');
        
        if (wishlist.has(mixerId)) {
          wishlist.delete(mixerId);
          btn.classList.remove('active');
          if (svg) svg.style.fill = 'none';
        } else {
          wishlist.add(mixerId);
          btn.classList.add('active');
          if (svg) svg.style.fill = '#2F4BA0';
        }
        
        localStorage.setItem(localStorageKey, JSON.stringify([...wishlist]));
        
        // Optional: Show feedback
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 right-4 bg-[#243871] text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300';
        toast.textContent = wishlist.has(mixerId) ? 'Added to wishlist' : 'Removed from wishlist';
        document.body.appendChild(toast);
        
        setTimeout(() => {
          toast.style.opacity = '0';
          setTimeout(() => toast.remove(), 300);
        }, 2000);
      });
    });
  }