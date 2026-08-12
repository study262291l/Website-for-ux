(function () {
  "use strict";

  // 1. Dynamically load the Lenis Smooth Scroll library from CDN
  const lenisScript = document.createElement("script");
  lenisScript.src = "https://unpkg.com/lenis@1.1.18/dist/lenis.min.js";
  lenisScript.onload = initLenis;
  document.head.appendChild(lenisScript);

  let lenisInstance = null;

  // 2. Initialize Lenis and handle requestAnimationFrame
  function initLenis() {
    if (typeof Lenis === "undefined") return;

    lenisInstance = new Lenis({
      duration: 1.2, // Scroll inertia duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth ease-out curve
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Continuously drive the animation frame
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
})();