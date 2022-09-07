let shoppingCart = document.querySelector('.wrapper_show');

document.querySelector('._basket').onclick = () => {
    shoppingCart.classList.toggle('active');
    $$(".fa-cart-arrow-down").classList.toggle('fa-times');
    $$(".tabs").classList.remove('active');
    $$(".fa-list-ul").classList.remove('fa-times');
}
const $$ = document.querySelector.bind(document);
const $$$$ = document.querySelectorAll.bind(document);

const tabs = $$$$('.tab-item');
const tabActive = $$('.tab-item.active')
const line = $$('.tabs .line');
line.style.width = tabActive.offsetWidth + 'px';
line.style.left = tabActive.offsetLeft + 'px';

tabs.forEach((tab, i) => {
    tab.onclick = function () {
        $$('.tab-item.active').classList.remove('active')

        line.style.width = this.offsetWidth + 'px';
        line.style.left = this.offsetLeft + 'px';
        this.classList.add('active');
        console.log(i);
    }
    window.onresize = () => {
        line.style.width = $$('.tab-item.active').offsetWidth + 'px';
        line.style.left = $$('.tab-item.active').offsetLeft + 'px';
        console.log(i);
    }
})
const dropdownnenu = $$('.dropdown_list');
dropdownnenu.onclick = ()=>{
    $$(".fa-list-ul").classList.toggle('fa-times');
    $$(".tabs").classList.toggle('active');
    shoppingCart.classList.remove('active');
    $$(".fa-cart-arrow-down").classList.remove('fa-times');
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
      
});

