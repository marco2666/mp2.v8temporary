let a = [];
let selectedCategory = 'all';  

function handleFilterClick(category) {
    selectedCategory = category; 
    filterProducts(); 
}

// SIDEBAR
function show() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("content").style.marginRight = "250px";
}

function hide() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("content").style.marginRight = "0";
}

const url = 'js/api.js';

fetch(url)
.then( response => response.json()) 
.then( result => { 
    console.log(result)  
    a = result;
    let div_area = document.getElementById("products");
    let show = "";
    let selectedCategory = 'all';

    a.forEach(
        function(item){
            if (selectedCategory !== 'all' && item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
                return;  
              }

          show += 

          `<div class="containerz card d-inline-flex m-1" style="width: 15rem;">
              <img src="${item.img}" id= "img${item.id}" class="card-img-top" style="width: 238x; height: 200px; object-fit: cover" alt="...">
              <div class="card-body">
                  <p class="card-text" id="p${item.id}" hidden>${item.id}</p>
                  <h5 class="card-title" id="prod${item.id}"> ${item.product}</h5>
                  <p class="card-text" id="pri${item.id}">${item.price}</p>
                  <p class="card-text" id="cat${item.id}" hidden>${item.category}</p>
                  <div class="overlay">
                  <a href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target=#m${item.id}>Buy</a>
                    </div>
                      <!-- Modal -->
                      <div class="modal fade" id="m${item.id}" tabindex="-1" aria-labelledby="m${item.id}Label" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h1 class="modal-title fs-5" id="m${item.id}Label">Modal title</h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>

                                  <div class="modal-body">
                                      <img src="${item.img}" class="card-img-top" style="width: 250x; height: 300px; object-fit: cover" alt="...">
                                      <div class="card-body">
                                          <p class="card-text" id="p${item.id}" hidden>${item.id}</p>
                                          <h5 class="card-title" id="prod${item.id}"> ${item.product}</h5>
                                          <p class="card-text" id="pri${item.id}">${item.price}</p>
                                      </div>
                                  </div>

                                  <div class="modal-footer ">
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id=${item.id} onclick="addOrder(${item.id})" >Add to Cart</button>
                                  </div>
                              </div>
                          </div>
                      </div>
              </div>
          </div>
          `;

        }
        
        );
        div_area.innerHTML = show ;
})

// CUSTOMIZE DISPLAY OF FILTERED ARRAY HERE = same display in a.forEach
function filterProducts() {
    let filteredProducts = [];

    if (selectedCategory === 'all') {
        filteredProducts = a;
    } else {
        filteredProducts = a.filter(item => item.category && item.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    const filteredProductsContainer = document.getElementById("products");
    filteredProductsContainer.innerHTML = '';

    // CAN CUSTOMIZE FROM HERE
    filteredProducts.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('containerz','card','d-inline-flex','m-1');
        productDiv.style.width = '15rem';
        productDiv.innerHTML = 
        `
            <img src="${item.img}" id="img${item.id}" class="card-img-top" style="width: 238x; height: 200px; object-fit: cover" alt="...">
            <div class="card-body">
                <p class="card-text" id="p${item.id}" hidden>${item.id}</p>
                <h5 class="card-title" id="prod${item.id}">${item.product}</h5>
                <p class="card-text" id="pri${item.id}">${item.price}</p>
                <p class="card-text" id="cat${item.id}" hidden>${item.category}</p>
                <div class="overlay">
                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#m${item.id}">Buy</a>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="m${item.id}" tabindex="-1" aria-labelledby="m${item.id}Label" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                            <div class="modal-header">
                            <h1 class="modal-title fs-5" id="m${item.id}Label">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <img src="${item.img}" class="card-img-top" style="width: 250x; height: 300px; object-fit: cover" alt="...">
                            <div class="card-body">
                                <p class="card-text" id="p${item.id}" hidden>${item.id}</p>
                                <h5 class="card-title" id="prod${item.id}"> ${item.product}</h5>
                                <p class="card-text" id="pri${item.id}">${item.price}</p>
                            </div>
                        </div>
                        <div class="modal-footer ">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id=${item.id} onclick="addOrder(${item.id})" >Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
      
        `;
        filteredProductsContainer.appendChild(productDiv);
    });
}

function handleFilterClick(category) {
    selectedCategory = category; 
    filterProducts(); 
}

function addOrder(id){

    let logs = sessionStorage.getItem("login");
    if((logs == null) || (logs = "")){
      alert("Please log in first");
      location.replace("login.html");
    }else{

      let array = localStorage.getItem("order"); //key order
      console.log(array);

     if (array == null){
        let orderlist = [];
        let new_id = document.getElementById("p"+id).innerText; //p1
        let new_prod = document.getElementById("prod"+id).innerText; //prod1
        let new_price = document.getElementById("pri"+id).innerText;
        
        let prod_img = document.getElementById("img" + id).src;
        console.log(prod_img);
        orderlist.push({id: new_id, product: new_prod, price: new_price, img: prod_img}); // property ng id ay proprety ng let new_id
        localStorage.setItem("order",JSON.stringify(orderlist));
        cartlength(); //to update cart 
    }else{
        let orderlist = JSON.parse(localStorage.getItem("order")); //object
        let new_id = document.getElementById("p"+id).innerText;
        let new_prod = document.getElementById("prod"+id).innerText;
        let new_price = document.getElementById("pri"+id).innerText;

        let prod_img = document.getElementById("img" + id).src;
        orderlist.push({id: new_id, product: new_prod, price: new_price, img: prod_img});
        localStorage.setItem("order",JSON.stringify(orderlist));
        cartlength();
    }
  }
 

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
filterProducts();
handleFilterClick();
