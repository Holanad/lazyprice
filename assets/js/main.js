$(document).ready(function(){
    (function slickPartners() {
        if ($('.intro-partners').length) {
          $('.intro-partners').slick({
              infinite: true,
              slidesToShow: 5,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 1000,
              loop: true,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    autoplaySpeed: 2000,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                }
              ]
          })
        }
    }());
    (function bubbleTextLink() {

        var $element = $('#bubble-1');
        let bublesElem = document.getElementById('bubble-1')
        let introSearchField = document.querySelector('.intro-search__field');
        introSearchField.addEventListener('click', () => {
            bublesElem.style.display = "none"
        })
        var newText = 'Вставьте ссылку на товар, например: https://www.wildberries.ru/catalog/137';
        bubbleText({
            element: $element,
            newText: newText,
            speed: 7000,
            repeat: Infinity,
        });
    }());
});
const magnifierIcon = () => {
  let introSearchBtn = document.querySelector('.intro-search button');
  window.addEventListener('resize', () => {
    if(window.outerWidth <= 992){
      introSearchBtn.innerHTML = `<img src="assets/img/icon/magnifier.svg" alt="search">`;
    } else {
      introSearchBtn.innerHTML = `Поиск`;
    }
  })
}
magnifierIcon()

const headerBurger = () => {
  let burgerElem = document.querySelector('.header-burger');
  let headerBtnsElem = document.querySelector('.header-btns');
  burgerElem.addEventListener('click', () => {
    burgerElem.classList.toggle('active');
    headerBtnsElem.classList.toggle('header-btns_active');
  })
}
headerBurger()

