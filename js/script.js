const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

const expandBtn = document.querySelector('.main__expand');
const hideBtn = document.querySelector('.main__hide');
expandBtn.addEventListener('click', btnExpand);
hideBtn.addEventListener('click', btnHide);

function btnExpand () {
  const listItem = document.querySelectorAll('.list__item');
  for (let i = 0; i < listItem.length; i++) {
      listItem[i].classList.replace("hidden", 'visible');
  }
  expandBtn.style.display = "none";
  hideBtn.style.display = 'block';
}

function btnHide () {
  const listItem = document.querySelectorAll('.list__item');
  for (let i = 0; i < listItem.length; i++) {
      listItem[i].classList.replace("visible", 'hidden');
  }
  hideBtn.style.display = "none";
  expandBtn.style.display = 'block';
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    btnHide();
    hideBtn.style.display = "none";
    expandBtn.style.display = "none";
  } else if (window.innerWidth >= 768) {
    btnHide();
  }
});
