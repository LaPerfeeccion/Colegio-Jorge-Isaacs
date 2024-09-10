export function initializeCarousel() {
  const nextDom = document.getElementById('next');
  const prevDom = document.getElementById('prev');
  const carouselDom = document.querySelector('.carousel');
  const listItemDom = document.querySelector('.carousel .list');

  if (!nextDom || !prevDom || !carouselDom || !listItemDom) {
    console.error('DOM elements not found');
    return;
  }

  nextDom.onclick = function () {
    showSlider('next');
  };
  prevDom.onclick = function () {
    showSlider('prev');
  };

  let timeRunning = 3000;
  let timeAutoNext = 7000;
  let runTimeOut;
  let runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);

  function showSlider(type) {
    const itemSlider = document.querySelectorAll('.carousel .list .item');

    if (itemSlider.length === 0) {
      return;
    }

    if (type === 'next') {
      listItemDom.appendChild(itemSlider[0]);
      carouselDom.classList.add('next');
    } else {
      const positionLastItem = itemSlider.length - 1;
      listItemDom.prepend(itemSlider[positionLastItem]);
      carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next', 'prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
  }

  return () => {
    clearTimeout(runTimeOut);
    clearTimeout(runAutoRun);
  };
}
