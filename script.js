// Job Carousel Functionality
      const carousel = document.getElementById("jobsCarousel");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");

      let currentIndex = 0;
      const cardWidth = 320; // Approximate width including gap
      const visibleCards = 3;
      const totalCards = carousel.children.length;
      const maxIndex = Math.max(0, totalCards - visibleCards);

      function updateCarousel() {
        const translateX = -currentIndex * cardWidth;
        carousel.style.transform = `translateX(${translateX}px)`;

        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
      }

      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });

      nextBtn.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
          currentIndex++;
          updateCarousel();
        }
      });

      // Initialize carousel
      updateCarousel();

      // Handle window resize
      window.addEventListener("resize", () => {
        updateCarousel();
      });