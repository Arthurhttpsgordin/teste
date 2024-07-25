document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('rolagem', window.scrollY > 500);
  });

  const novidadesSection = document.getElementById('novidades');

  if (novidadesSection) {
    const cards = novidadesSection.querySelectorAll('.card');
    let currentCardIndex = 0;
    const totalCards = cards.length;
    const intervalTime = 5000;

    function showNextCard() {
      cards[currentCardIndex].classList.remove('active');
      currentCardIndex = (currentCardIndex + 1) % totalCards;
      cards[currentCardIndex].classList.add('active');
    }

    cards[currentCardIndex].classList.add('active');
    setInterval(showNextCard, intervalTime);

    let touchStartX = 0;
    let touchEndX = 0;

    novidadesSection.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    });

    novidadesSection.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].clientX;
      handleGesture();
    });

    function handleGesture() {
      if (touchEndX < touchStartX) {
        showNextCard();
      } else if (touchEndX > touchStartX) {
        cards[currentCardIndex].classList.remove('active');
        currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
        cards[currentCardIndex].classList.add('active');
      }
    }
  }
});
