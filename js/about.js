  // JS SWIPER
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,

    fade: true,
    centerSlider: true,

    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      768:{ 
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3
      }
    },
  }); 
  // END


  function cartlength(){
    let cart = JSON.parse(localStorage.getItem("order")); //array
    // console.log(cart);
    if (cart == null){
        let cart_l = document.getElementById("cartlength");
        cart_l.innerText = "";
    }else{
        let cart_l = document.getElementById("cartlength");
        cart_l.innerText = cart.length;
    } 
}

cartlength();