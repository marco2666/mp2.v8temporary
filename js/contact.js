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
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// API QUOTE
let url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81ef5fc41fmsh3580add9ec85125p1305c3jsn79bc622a23f4',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch(url, options) //promise
    .then(response => response.json()) 
    .then(response => {console.log(response)
    document.getElementById("quote").innerHTML = response.content;
    document.getElementById("author").innerHTML = response.originator.name;
    // document.getElementById("desc").innerHTML = response.originator.description;
    })
    .catch(err => console.log(err))



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