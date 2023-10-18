// GEOLOCATION API
function getloc(){
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
  console.log(position);
  let x = document.getElementById("loc");
  x.innerHTML = `Latitude:${position.coords.latitude} Longitude:${position.coords.longitude}`;
}

getloc();

// POP UP AD
window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      100000
  )
});
  document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});


//  MODAL
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("place-order");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
//   var orderSummary = document.getElementById("orderSummary");
//   var orderSummaryNew = orderSummary.innerHTML;
//   var modalSummary = document.getElementById("modal-summary");
//   modalSummary.innerHTML = orderSummaryNew;
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
// if (event.target == modal) {
//   modal.style.display = "none";
// }
// }


//BANNER v2
// var currentImage = 0,
// images = [
//     "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_550,h_550/https://solbs.ph/wp-content/uploads/2021/04/filipino-food-png-6.png",
//     "/images/32.png",
//     "/images/35.png",
// ];

// function initSlideshow() {  
//     setImage(0);
//     setInterval(function(){
//         nextImage();
//     },1000);
// }

// function nextImage() {
//     if(images.length === currentImage + 1){
//         currentImage = 0;
//     } else {
//         currentImage++;
//     }
//     setImage(currentImage);
// }

// function setImage(image) {
//     document.querySelectorAll('.slide')[0].src = images[image];
// }

// window.onload = initSlideshow();


// RANDOM GAME
// function display_random_image() 
// {
//      var theImages = [{
//         src: "https://cdn-icons-png.flaticon.com/128/8065/8065202.png",
//         width: "50",
//         height: "50"
//     }, {
//         src: "https://cdn-icons-png.flaticon.com/128/8065/8065172.png",
//         width: "50",
//         height: "50"
//     }, {
//         src: "https://cdn-icons-png.flaticon.com/128/8065/8065216.png",
//         width: "50",
//         height: "50"
//     },
//     {
//         src: "https://cdn-icons-png.flaticon.com/128/8065/8065194.png",
//         width: "50",
//         height: "50"
//     },
//     {
//         src: "https://cdn-icons-png.flaticon.com/128/8065/8065164.png",
//         width: "50",
//         height: "50"
//     }
    
// ];
    
//     var preBuffer = [];
//     for (var i = 0, j = theImages.length; i < j; i++) {
//         preBuffer[i] = new Image();
//         preBuffer[i].src = theImages[i].src;
//     }

//   function getRandomInt(min,max) 
//     {
// imn = Math.floor(Math.random() * (max - min + 1)) + min;
//     return preBuffer[imn];
//     }  
// var newImage = getRandomInt(0, preBuffer.length - 1);
// var images = document.getElementsByTagName('img');
// var l = images.length;
// for (var p = 0; p < l; p++) {
//     images[0].parentNode.removeChild(images[0]);
// }
// let x = document.getElementById("random-meal");
// x.appendChild(newImage);
// }


// GAME
function randomImg() {
  var quotes = [
    {
      text: "Kare-Kare",
      img:  "https://cdn-icons-png.flaticon.com/128/8065/8065202.png",
      cap: "Delight yourself in traditional Filipino stew complimented with a thick savory peanut sauce."
    },
    {
      text: "Street-food",
      img:  "https://cdn-icons-png.flaticon.com/128/8065/8065172.png",
      cap: "To experience street food in the Philippines is to also immerse yourself in the story of its people."

    },
{
      text: "Lechon",
      img:  "https://cdn-icons-png.flaticon.com/128/8065/8065216.png",
      cap: "The best part of Lechon is when you first cut the pork and you get the crunchy skin."
    },
{
      text: "Halo-Halo",
      img:  "https://cdn-icons-png.flaticon.com/128/8065/8065194.png",
      cap: "An alltime favorite dessert! Try our Special Halo Halo too!"
    },
{
      text: "Adobo",
      img:  "https://cdn-icons-png.flaticon.com/128/8065/8065164.png",
      cap: "It's the unofficial dish of the Philippines, tasty-comfort food!"
    },
  ];

  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML =
    '<p>' + quote.text + '</p>' ;
    // document.getElementById("rndm-meal").src =
    // '<img src="' + quote.img + '">';
    var image = document.getElementById("rndm-meal");
    image.src = quote.img;

    var text = document.getElementById("text");
    text.innerHTML = quote.cap;
}


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