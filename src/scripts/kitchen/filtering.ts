function sortProducts(sortBy) {
    const productGrid = document.getElementById('productGrid');
    const products = Array.from(document.querySelectorAll('.product-card'));

    products.sort((a, b) => {
      const priceA = parseFloat((a as HTMLElement).dataset.price!);
      const priceB = parseFloat((b as HTMLElement).dataset.price!);
      const nameA = (a as HTMLElement).dataset.name!;
      const nameB = (b as HTMLElement).dataset.name!;

      switch (sortBy) {
        case 'price-low':
          return priceA - priceB;
        case 'price-high':
          return priceB - priceA;
        case 'name-asc':
          return nameA.localeCompare(nameB);
        default:
          return 0;
      }
    });

    if (productGrid) {
      productGrid.innerHTML = '';
      products.forEach(product => productGrid.appendChild(product));
    }
  }

  function filterByStyle(style) {
    const products = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    products.forEach(product => {
      if (style === 'all' || (product as HTMLElement).dataset.style === style) {
        (product as HTMLElement).style.display = '';
        visibleCount++;
      } else {
        (product as HTMLElement).style.display = 'none';
      }
    });

    const productCountElement = document.getElementById('productCount');
    if (productCountElement) {
      productCountElement.textContent = `Showing ${visibleCount} products`;
    }
  }

  function filterByMount(mount) {
    const products = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    products.forEach(product => {
      const element = product as HTMLElement;
      const currentStyle = element.dataset.style;
      const currentMount = element.dataset.mount;
      const styleSelect = document.getElementById('styleSelect') as HTMLSelectElement;
      const selectedStyle = styleSelect.value;

      const styleMatch = selectedStyle === 'all' || currentStyle === selectedStyle;
      const mountMatch = mount === 'all' || currentMount === mount;

      if (styleMatch && mountMatch) {
        element.style.display = '';
        visibleCount++;
      } else {
        element.style.display = 'none';
      }
    });

    const productCountElement = document.getElementById('productCount');
    if (productCountElement) {
      productCountElement.textContent = `Showing ${visibleCount} products`;
    }
  }

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  const styleSelect = document.getElementById('styleSelect');
  const mountSelect = document.getElementById('mountSelect');

  styleSelect?.addEventListener('change', (e) => {
    filterByStyle((e.target as HTMLSelectElement).value);
  });

  mountSelect?.addEventListener('change', (e) => {
    filterByMount((e.target as HTMLSelectElement).value);
  });
});