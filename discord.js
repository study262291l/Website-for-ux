document.addEventListener('DOMContentLoaded', () => {

  const overlay = document.getElementById('discordModalOverlay');
  const modalIcon = document.getElementById('discordModalIcon');
  const modalIconGlyph = document.getElementById('discordModalIconGlyph');
  const modalTitle = document.getElementById('discordModalTitle');
  const modalDesc = document.getElementById('discordModalDesc');
  const openBtn = document.getElementById('discordModalOpenBtn');
  const copyBtn = document.getElementById('discordModalCopyBtn');
  const closeBtn = document.getElementById('discordModalClose');
  const toast = document.getElementById('discordToast');
  const toastText = document.getElementById('discordToastText');

  let toastTimeout;
  const copyBtnOriginalHTML = copyBtn ? copyBtn.innerHTML : '';

  // ==============================
  // DISCORD MODAL
  // ==============================

  function openModal(trigger) {
    const { icon, color, title, desc, url } = trigger.dataset;

    modalIconGlyph.className = icon;
    modalIcon.style.backgroundColor = color;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    openBtn.href = url;
    copyBtn.dataset.url = url;

    copyBtn.classList.remove('copied');
    copyBtn.innerHTML = copyBtnOriginalHTML;

    overlay.classList.add('show');
  }

  function closeModal() {
    if (overlay) {
      overlay.classList.remove('show');
    }
  }

  function showToast(message) {
    if (!toast) return;

    toastText.textContent = message;

    clearTimeout(toastTimeout);

    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  // Open modal
  document.querySelectorAll('.discordJoinTrigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      openModal(btn);
    });
  });

  // Close modal button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click outside modal
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });
  }

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Open Discord/Roblox link
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      setTimeout(closeModal, 150);
    });
  }

  // Copy link
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {

      const link = copyBtn.dataset.url;

      try {

        await navigator.clipboard.writeText(link);

      } catch (err) {

        // Fallback for browsers that don't support clipboard API
        const temp = document.createElement('textarea');

        temp.value = link;

        document.body.appendChild(temp);

        temp.select();

        document.execCommand('copy');

        document.body.removeChild(temp);
      }

      copyBtn.classList.add('copied');

      copyBtn.innerHTML =
        '<i class="fa-solid fa-check"></i> Copied';

      showToast('Link copied to clipboard!');

      setTimeout(() => {

        copyBtn.classList.remove('copied');

        copyBtn.innerHTML = copyBtnOriginalHTML;

      }, 2000);

    });
  }


  // ==============================
  // FEATURED YOUTUBE VIDEO
  // ==============================

  /*
    Replace YOUR_VIDEO_ID with the ID
    of the YouTube video you want.

    Example:

    https://www.youtube.com/watch?v=ABC123

    Video ID = ABC123

    So change:

    const FEATURED_VIDEO_ID = 'YOUR_VIDEO_ID';

    to:

    const FEATURED_VIDEO_ID = 'ABC123';
  */

// ==============================
// FEATURED YOUTUBE VIDEO
// ==============================

const FEATURED_VIDEO_ID = 'gvYFojQeNKA';

const videoPlayer = document.getElementById('videoPlayer');
const videoPlayButton = document.getElementById('videoPlayButton');

function playFeaturedVideo() {

  console.log('Play button clicked');

  if (!videoPlayer) {
    console.log('ERROR: videoPlayer not found');
    return;
  }

  // Create YouTube iframe
  const iframe = document.createElement('iframe');

  iframe.src =
    `https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&rel=0`;

  iframe.title = 'Featured Type Soul video';

  iframe.width = '100%';
  iframe.height = '100%';

  iframe.frameBorder = '0';

  iframe.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

  iframe.allowFullscreen = true;

  // Replace the placeholder with the YouTube video
  videoPlayer.innerHTML = '';

  videoPlayer.appendChild(iframe);

  console.log('YouTube video loaded');
}


// Click play button
if (videoPlayButton) {

  videoPlayButton.addEventListener('click', () => {
    playFeaturedVideo();
  });

} else {

  console.log('ERROR: videoPlayButton not found');

}
});