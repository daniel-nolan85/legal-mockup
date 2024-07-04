AOS.init({
  offset: 120,
  delay: 0,
  duration: 900,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

document.addEventListener('DOMContentLoaded', function () {
  $('.nav a').on('click', function () {
    if ($('.navbar-collapse').hasClass('in')) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  const hero = document.getElementById('hero');
  const images = [
    'img/hero-1.jpg',
    'img/hero-2.jpg',
    'img/hero-3.jpg',
    'img/hero-4.jpg',
    'img/hero-5.jpg',
    'img/hero-6.jpg',
    'img/hero-7.jpg',
    'img/hero-8.jpg',
  ];
  let currentImageIndex = 0;

  images.forEach((img, index) => {
    const bgDiv = document.createElement('div');
    bgDiv.className = 'background';
    bgDiv.style.backgroundImage = `url(${img})`;
    if (index === 0) {
      bgDiv.classList.add('active');
    }
    hero.appendChild(bgDiv);
  });

  const backgrounds = document.querySelectorAll('#hero .background');

  function changeBackgroundImage() {
    const currentBg = backgrounds[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const nextBg = backgrounds[currentImageIndex];

    currentBg.classList.remove('active');
    nextBg.classList.add('active');

    nextBg.style.animation = 'none';
    nextBg.offsetHeight;
    nextBg.style.animation = '';
  }

  setInterval(changeBackgroundImage, 9000);
});
