const raceData = {
  sr: {
    title: "SOUL REAPER",
    subtitle: "SHIKAI & BANKAI BUILDS",
    color: "var(--accentRed)",
    elementName: "Shikai",

    builds: [
      {
        number: "01",
        name: "Kendo / Speed Hybrid",
        detail: "50 Kendo • 15 Speed",
        elements: "Fire, Ice, Lightning",
        stats: "High Skill",
        description: "A balanced build that combines Kendo's offensive power with Speed's mobility. A good choice for players who want strong attacks while still being able to move quickly around opponents."
      },
      {
        number: "02",
        name: "Hakuda Shunpo",
        detail: "40 Hakuda • 25 Speed",
        elements: "Ink, Wind",
        stats: "Close Ranged",
        description: "A fast-paced build focused on close-range combat and mobility. Hakuda provides strong melee pressure while Speed allows you to quickly close the distance or escape."
      },
      {
        number: "03",
        name: "Full Kendo",
        detail: "65 Kendo",
        elements: "Snow, Shinso",
        stats: "High Pressure",
        description: "A dedicated Kendo build focused heavily on offensive swordplay. This build sacrifices some versatility in exchange for stronger Kendo-based attacks."
      },
      {
        number: "04",
        name: "Soul Reaper Kido / Speed Hybrid",
        detail: "45 Kido • 20 Speed",
        elements: "Benihime, Kyōka Suigetsu, Wind",
        stats: "Ranged Cheese",
        description: "A flexible build combining Kido abilities with Speed. It allows you to attack from different ranges while still having enough mobility to reposition during fights."
      }
    ]
  },

  arrancar: {
    title: "ARRANCAR",
    subtitle: "RESURRECCIÓN BUILDS",
    color: "var(--arrancar)",
    elementName: "Resurrección",

    builds: [
      {
        number: "01",
        name: "Arrancar Kido Hakuda",
        detail: "30 Hakuda • 35 Kido",
        elements: "Light, Snake, Pantera",
        stats: "No Skill Spam",
        description: "A hybrid build that combines Kido abilities with close-range Hakuda combat. It provides a flexible playstyle that can adapt to different situations."
      },
      {
        number: "02",
        name: "Speed / Kendo Hybrid",
        detail: "45 Speed • 20 Kendo",
        elements: "Vampire, Storm, Slash, Stark",
        stats: "Fast Combos",
        description: "A mobility-focused build that uses Speed to create openings while Kendo provides additional offensive pressure."
      },
      {
        number: "03",
        name: "Hakuda / Speed Hybrid",
        detail: "50 Hakuda • 15 Speed",
        elements: "Pantera, Snake, Vampire",
        stats: "Close Ranged",
        description: "A close-range build focused on Hakuda with additional Speed for mobility. Great for players who prefer staying aggressive and maintaining pressure."
      },
      {
        number: "04",
        name: "Arrancar Full Kido",
        detail: "65 Kido",
        elements: "Vampire, Stark, Light",
        stats: "Ranged Cheese",
        description: "A heavily Kido-focused build designed around maximizing Kido abilities. This build is suited for players who prefer relying on abilities rather than purely close-range combat."
      }
    ]
  },

  quincy: {
    title: "QUINCY",
    subtitle: "VOLLSTÄNDIG BUILDS",
    color: "var(--accentBlue)",
    elementName: "Vollständig",

    builds: [
      {
        number: "01",
        name: "Quincy Kido / Speed Hybrid",
        detail: "50 Kido • 15 Speed",
        elements: "Death Dealing, Miracle, Glutton, Visionary",
        stats: "Ranged Cheese",
        description: "A versatile Quincy build combining Kido and Speed. The additional mobility makes it easier to reposition while maintaining access to strong abilities."
      },
      {
        number: "02",
        name: "Full Speed",
        detail: "65 Speed",
        elements: "Death Dealing, Heat, Iron, Fear",
        stats: "No Skill Spam Burst",
        description: "A fully Speed-focused build designed around mobility. This setup is ideal for players who want to move quickly and control the pace of combat."
      },
      {
        number: "03",
        name: "Speed / Kendo Hybrid",
        detail: "50 Speed • 15 Kendo",
        elements: "Miracle, Balance, Heat",
        stats: "Burst Combos",
        description: "A mobile hybrid build that combines Speed with Kendo. It gives you additional offensive options without sacrificing the mobility of a Speed-focused setup."
      },
      {
        number: "04",
        name: "Hakuda / Speed Hybrid",
        detail: "50 Hakuda • 15 Speed",
        elements: "Death Dealing, Iron, Heat, Fear",
        stats: "Close Ranged Spam",
        description: "A fast close-range build combining Hakuda with Speed. The combination allows you to quickly engage opponents and maintain pressure."
      }
    ]
  },

  fullbringer: {
    title: "FULLBRINGER",
    subtitle: "FULLBRINGER BUILDS",
    color: "var(--fullbringer)",
    builds: [
      {
        number: "01",
        name: "Hakuda / Speed Hybrid",
        detail: "50 Hakuda • 15 Speed",
        elements: "Form: Zangetsu, Devil's Arm",
        stats: "Close Ranged Spam Burst",
        description: "A balanced close-range build combining Hakuda and Speed. It focuses on aggressive combat while maintaining enough mobility to reposition quickly."
      },
      {
        number: "02",
        name: "Kido / Speed Hybrid",
        detail: "40 Kido • 25 Speed",
        elements: "Form: Book Of The End, Dollhouse, Chess",
        stats: "Ranged Cheese",
        description: "A flexible build that combines Kido abilities with Speed. The mobility helps create space and provides more opportunities to use abilities effectively."
      },
      {
        number: "03",
        name: "Full Speed",
        detail: "65 Speed",
        elements: "Form: Time Tells No Lies, Chess, Zangetsu",
        stats: "No Skill Spam Burst",
        description: "A fully Speed-focused setup built around fast movement and mobility. This is suited for players who enjoy a fast and evasive playstyle."
      }
    ]
  }
};


function selectRace(raceKey, event) {
  const data = raceData[raceKey];
  const root = document.documentElement;

  // Update background gradient color
  root.style.setProperty('--current-accent', data.color);

  // Update Active Card Class
  const cards = document.querySelectorAll('.race-card');
  cards.forEach(card => card.classList.remove('active'));

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  } else {
    cards[0].classList.add('active');
  }

  // Animate Titles
  const titleEl = document.getElementById('display-title');
  const subEl = document.getElementById('display-subtitle');

  titleEl.classList.remove('fade-in');
  subEl.classList.remove('fade-in');

  void titleEl.offsetWidth;

  titleEl.innerText = data.title;
  subEl.innerText = data.subtitle;

  titleEl.classList.add('fade-in');
  subEl.classList.add('fade-in');

  // Create Builds
  const buildsContainer = document.getElementById('builds-list');
  buildsContainer.innerHTML = '';

  data.builds.forEach(build => {
    const item = document.createElement('div');

    item.className = 'build-card fade-in';

    item.innerHTML = `
      <div class="build-main">

        <div class="build-left">
          <span class="build-num">${build.number}</span>

          <div>
            <div class="build-name">${build.name}</div>
            <div class="build-detail">${build.detail}</div>
          </div>
        </div>

        <div class="build-right">
          <span class="build-tag">${build.stats}</span>
          <i class="fa-solid fa-chevron-down build-arrow"></i>
        </div>

      </div>

      <div class="build-info">

        <div class="build-description">
          <div class="description-label">${data.elementName}</div>
          <p>${build.elements}</p>
        </div>

        <div class="build-description">
          <div class="description-label">DESCRIPTION</div>
          <p>${build.description}</p>
        </div>

      </div>

    `;

    // Open / close build description
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });

    buildsContainer.appendChild(item);
  });
}


window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  const race = params.get('race');
  const buildNumber = params.get('build');

  selectRace(race || 'sr');

  if (buildNumber) {
    const buildCards = document.querySelectorAll('.build-card');

    buildCards.forEach(card => {
      const number = card.querySelector('.build-num');

      if (number && number.textContent.trim() === buildNumber) {
        card.classList.add('open');

        // Optional: scroll to the build
        setTimeout(() => {
          card.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 100);
      }
    });
  }
});
