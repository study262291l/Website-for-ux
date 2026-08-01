document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.getElementById('open-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const fullMenu = document.getElementById('full-menu');

  // Open Sliding Menu Drawer
  openMenuBtn.addEventListener('click', () => {
    fullMenu.classList.add('open');
  });

  // Close Sliding Menu Drawer
  closeMenuBtn.addEventListener('click', () => {
    fullMenu.classList.remove('open');
  });

  const races = [
        {
            name: "SOUL REAPER",
            desc: "Respect race.",
            tags: ["PRIMARY: MELEE", "SPECIAL: BANKAI"]
        },
        {
            name: "QUINCY",
            desc: "Focuses on being losers of the game and cheese everyone.",
            tags: ["PRIMARY: RANGED", "SPECIAL: VOLSTANDIG"]
        },
        {
            name: "ARRANCAR",
            desc: "Emo edgy people race.",
            tags: ["PRIMARY: HYBRID", "SPECIAL: RESURRECCIÓN"]
        }
    ];

    let currentIndex = 0;

    const titleEl = document.getElementById('raceTitle');
    const descEl = document.getElementById('raceDesc');
    const tagsEl = document.getElementById('raceTags');
    const detailsContainer = document.getElementById('raceDetails');
    const prevBtn = document.getElementById('prevRaceButton');
    const nextBtn = document.getElementById('nextRaceButton');

    function updateRaceDisplay(index, direction) {
        const race = races[index];

        titleEl.classList.remove('slideRightEnter', 'slideLeftEnter');
        detailsContainer.classList.remove('slideRightEnter', 'slideLeftEnter');

        void titleEl.offsetWidth;

        titleEl.textContent = race.name;
        descEl.textContent = race.desc;
        tagsEl.innerHTML = race.tags
            .map(tag => `<span class="raceTag">${tag}</span>`)
            .join('');

        const animClass = direction === 'next' ? 'slideRightEnter' : 'slideLeftEnter';
        titleEl.classList.add(animClass);
        detailsContainer.classList.add(animClass);
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + races.length) % races.length;
        updateRaceDisplay(currentIndex, 'prev');
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % races.length;
        updateRaceDisplay(currentIndex, 'next');
    });
});