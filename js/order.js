let logs = sessionStorage.getItem("login");
if((logs == null) || (logs = "")){
  alert("Please log in first");
  location.replace("login.html");   
}else{

// ORIG ARRAY - contains objects
let array = JSON.parse(localStorage.getItem("order"));

let unique = [...new Map(array.map(item => [item["id"], item])).values()];
// console.log(array);
// console.log(unique);

let totalCost = 0;

if (array == ""){
    let show = document.getElementById("cart");
    show.innerHTML = "Cart Empty!";
    document.getElementById("total-input").innerHTML =  `Total: ₱${totalCost}` ;
    
}else{
    let show = document.getElementById("cart");
    let prod = "";
    let count = 0; //# of qty

    // + BUTTON 
    function add(a) {
        
        let array = JSON.parse(localStorage.getItem("order"));
        let countElement = document.getElementById("x" + a);
        count = parseInt(countElement.value) + 1;
        countElement.value = count;
    
        let presyoElement = document.getElementById("pp" + a);
        let presyoText = presyoElement.innerText;
        let numericPart = presyoText.replace(/[^\d.]/g, '');
        let presyo = parseFloat(numericPart);
    
        if (isNaN(presyo)) {
            presyo = 0;
        }
    
        let totalPresyo = presyo * count;
        document.getElementById("total" + a).innerHTML = `₱${totalPresyo.toFixed(2)}`;
    
        totalCost += presyo;
        
        // array = array.map(item => {
        //     if (item.id === a) {
        //         item.price = totalPresyo;
        //     }
        //     return item;
        // });
    
        localStorage.setItem("order", JSON.stringify(array));
        console.log(array);
        document.getElementById("total-input").innerText = `Total: ₱${totalCost.toFixed(2)}`;
        cartlength();

        // var currentOrder = JSON.parse(localStorage.getItem("order"));
        // localStorage.put("order", add(this.order, currentOrder));

    }
    
    
    // function add(a) {
    //     let array = JSON.parse(localStorage.getItem("order")) || [];
    
    //     let countElement = document.getElementById("x" + a);
    //         count = parseInt(countElement.value) + 1;
    //         countElement.value = count;
        
    //         let presyoElement = document.getElementById("pp" + a);
    //         let presyoText = presyoElement.innerText;
    //         let numericPart = presyoText.replace(/[^\d.]/g, '');
    //         let presyo = parseFloat(numericPart);
        
    //         if (isNaN(presyo)) {
    //             presyo = 0;
    //         }
        
    //         let totalPresyo = presyo * count;
    //         document.getElementById("total" + a).innerHTML = `₱${totalPresyo.toFixed(2)}`;
        
    //         totalCost += presyo;
            
    //         // array = array.map(item => {
    //         //     if (item.id === a) {
    //         //         item.price = totalPresyo;
    //         //     }
    //         //     return item;
    //         // });
        
        
    
    //     let newItem = {
    //         id: a,
    //         product: document.getElementById("prod" + a).innerText,
    //         price: totalPresyo,
    //         img: document.getElementById("img" + a).src,
    //         qty: count
    //     };
    
     
    //     let itemIndex = array.findIndex(item => item.id === a);
    //     if (itemIndex !== -1) {
    //         array[itemIndex] = newItem;
    //     } else {
    //         array.push(newItem);  
    //     }
    
    //     localStorage.setItem("order", JSON.stringify(array));
    //     console.log(array);

    //     document.getElementById("total-input").innerText = `Total: ₱${totalCost.toFixed(2)}`;
    //     cartlength();
       
    // }

  




    
    // - button
    function min (a){
        let array = JSON.parse(localStorage.getItem("order"));
        let qty = document.getElementById("x" + a);
    
        if (qty.value == 1) {
            count = 1;
        } else {
            count -= 1;
            qty.value = count;
    
            let presyoElement = document.getElementById("pp" + a);
            let presyoText = presyoElement.innerText; 
            let numericPart = presyoText.replace(/[^\d.]/g, '');  
            let presyo = parseFloat(numericPart);  
    
            let totalPresyo = presyo * count;
            document.getElementById("total" + a).innerHTML = `₱${totalPresyo.toFixed(2)}`;
    
            totalCost -= presyo;
            document.getElementById("total-input").innerText = `Total: ₱ ${totalCost.toFixed(2)}`;
        }
        cartlength();
    }



    // function min(a) {
    //     // ... your existing code to update the UI
    
    //     // Retrieve the existing cart data from localStorage
    //     let cartItems = JSON.parse(localStorage.getItem("order")) || [];
    
    //     // Update the quantity and price for the item with the given ID
    //     cartItems = cartItems.map(item => {
    //         if (item.id === a) {
    //             item.quantity = count;
    //             item.price = totalPresyo;
    //         }
    //         return item;
    //     });
    
    //     // Store the updated cart data back in localStorage
    //     localStorage.setItem("order", JSON.stringify(cartItems));
    
    //     // ... any other code you need to update the UI or perform additional actions
    // }

    


    // DELETE BUTTON
    function delBtn(a){
        let presyoElement = document.getElementById("pp" + a);
        let presyoText = presyoElement.innerText;  // Get the text content
        let numericPart = presyoText.replace(/[^\d.]/g, '');  // Remove non-numeric characters
        let presyo = parseFloat(numericPart);  // Parse the numeric part as float

        totalCost -= presyo;
        document.getElementById("total-input").innerText = `Total: ₱ ${totalCost.toFixed(2)}`;

        let array = JSON.parse(localStorage.getItem("order"));

        function checkID(itemz) {
            return itemz.id != a;
        }

        let new_array = array.filter(checkID);
        localStorage.setItem("order", JSON.stringify(new_array));

        let element = document.getElementById("elem" + a);
        element.remove();

        cartlength();
    }
    
    // COUPON CODE INPUT
    let discountApplied = false; 
    function valid() {
            if (discountApplied) {
                alert('Discount already applied.');
                return;
            }

            let newpassword = document.getElementById('newP').value;
            if (newpassword == "") {
                alert('Empty.');
                return;
            } else if (newpassword != "FUNLP2023") {
                alert('The code you just entered does not exist.');
                return;
            } else if (newpassword == "FUNLP2023") {
                let discountedCost = totalCost * 0.9;
                let newArray = document.getElementById("total-input");
                newArray.innerText = `Total: ₱ ${discountedCost.toFixed(2)}`;

                totalCost = discountedCost;

                localStorage.setItem("totalCost", totalCost);

                discountApplied = true;

                document.getElementById("discount-btn").removeEventListener("click", valid);
            }
    }
    document.getElementById("discount-btn").addEventListener("click", valid);

    // DELIVERY OPTION BUTTON
    function handlePriorityButtonClick() {
            totalCost += 90;
            document.getElementById("total-input").innerText = `Total: ₱ ${totalCost.toFixed(2)}`;
            localStorage.setItem("totalCost", totalCost);

            document.getElementById("priority-button").removeEventListener("click", handlePriorityButtonClick);
    }       
    document.getElementById("priority-button").addEventListener("click", handlePriorityButtonClick);
    

    // SHOW ORDER SUMMARY
   
    // function displayCart(){
    // let cart = JSON.parse(localStorage.getItem("order")) || [];
    // if (cart.length > 0) {
    //     let prod = "";

    unique.forEach(
        function (item){ 
            
        count = array.filter(existing).length; 

        item.price = item.price * count;
        
        function existing(itemz){
            return itemz.id == item.id; 
            //A shoes id is 1. so itemz.id bc inside our base array is object (object uses key-value pair). so here so we called our object itemz that has its own specific property (id) . the return value is true
        }
            
            // prod += `<li>${item.product} --- ${item.price} -Qty:-- ${count}</li>`;

        prod += `
        <div class="shopping-cart" id="elem${item.id}">

            <div class="item">
           
                <div class="image">
                    <img src=${item.img} id= "img${item.id}" class="img-sum" style="width: 100px; height: 100px;">
                </div>

                <div class="description ">
                    <div id="prod${item.id}" class="name"> ${item.product}</div>
                    
                </div>

                <div class="d-flex d-sm-flex d-md-flex">
                    <div class="quantity d-flex align-items-center  justify-content-center my-auto mx-auto mb-3">
                        <button class="btn btn-sm btn-outline-secondary minus-btn" type="button" name="button" onclick= min(${item.id})> - </button>
                        <input type="text" style="width: 30px;" id="x${item.id}" class="inpt-value" type="number" value= ${count} readonly>
                        <button class="btn btn-sm btn-outline-secondary plus-btn" type="button" name="button" onclick= add(${item.id})> + </button>
                    </div>
 
                    <div class="total-price d-flex align-items-center justify-content-center my-auto mx-auto">
                        <div class="price" id="pp${item.id}" hidden>₱${item.price.toFixed(2)}</div> 
                        <p id="total${item.id}">₱${item.price.toFixed(2)}</p>
                    </div>
                

                    <div class="buttons d-flex align-items-center mb-3">
                        <button id="del${item.id}" onclick= delBtn(${item.id}) class="delete-btn"> <i class="bi bi-trash deliv-icon"></i></button>
                    </div>
                </div>

            </div>
    

        </div>

        `;

            // totalCost += Number(item.price); 
            totalCost += parseFloat(item.price.toFixed(2));
         
    })
    show.innerHTML = prod;
       
        // BEFORE TAX
        // document.getElementById("total-input").innerText = `Total: ₱ ${totalCost}` ;
        }
        // document.getElementById("total-input").innerText = `Total: ₱ ${(totalCost).toFixed(2)}`;
        document.getElementById("total-input").innerText = `Total: ₱ ${(totalCost + 70).toFixed(2)}`;
        }


        // function updateLocalStorage(a) {
        //     let array = JSON.parse(localStorage.getItem("order")) || [];
        //     let newImg = document.getElementById("img" + a).src;
        //     let count = document.getElementById("x" +a).innerText;
        //     let presyo = document.getElementById("pp" + a).innerText;
        //     let prod = document.getElementById("prod" +a).innerText;

        //     let existingItem = array.find(item => item.id === a);
        //     if (existingItem) {
        //         existingItem.quantity = count;
        //         existingItem.price = totalPresyo;
        //     } else {
        //         array.push({ id: a, product: prod, quantity: count, price: presyo });
        //     }
        
        //     localStorage.setItem("order", JSON.stringify(array));
        // }


    // LOGOUT BUTTON
    
    function logout(){
        sessionStorage.removeItem("login");
        location.replace("login.html");
    }

    // # ITEMS
    // function cartlength(){
    //     let cart = JSON.parse(localStorage.getItem("order")); //array
    //     let cartLength = cart ? cart.length : 0;
    //     if (cart == null){
    //         let cart_l = document.getElementById("cartlength");
    //         cart_l.innerText = "";
    //     }else{
    //         let cart_l = document.getElementById("cartlength");
    //         cart_l.innerText = cart.length;
    //     } 
    // }
    // cartlength();

    function cartlength() {
        let cart = JSON.parse(localStorage.getItem("order")); 
        let cartLength = cart ? cart.length : 0;
    
        let cartLengthElement = document.getElementById("cartlength");
        cartLengthElement.innerText = cartLength;
    }
    cartlength();

    // PAGINATION DISPLAY
    function changeContent(pageNumber) {
        let contentDivs = document.querySelectorAll('.content');
        contentDivs.forEach(div => div.style.display = 'none');

        let selectedContent = document.getElementById(`content${pageNumber}`);
        selectedContent.style.display = 'block';

        if (pageNumber === 2) {
            document.getElementById('order-summary').style.display = 'none';
        } else {
            document.getElementById('order-summary').style.display = 'block';
        }

        let buttons = document.querySelectorAll('.page');
        buttons.forEach(button => button.classList.remove('active'));

        let selectedButton = document.querySelector(`.page:nth-child(${pageNumber + 1})`);
        selectedButton.classList.add('active');
    }

    //DELIVERY/TAKEOUT DROPDOWN
    function displaySelectedDiv() {
        let dropdown = document.getElementById('dropdown');
        let selectedValue = dropdown.value;

        let allDivs = document.querySelectorAll('div[id^="div"]');
        allDivs.forEach(div => {
        div.classList.add('hidden');
        });
    
        let selectedDiv = document.getElementById(selectedValue);
        selectedDiv.classList.remove('hidden');
    
        localStorage.setItem('selectedOption', selectedValue);
    }

    // DISPLAY 1 PAGINATION ONLOAD
    window.onload = function() {
        let lastSelected = localStorage.getItem('selectedOption');
        if (lastSelected) {
        let dropdown = document.getElementById('dropdown');
        
        dropdown.value = lastSelected;
        displaySelectedDiv();
        }
    };
    
    //DELIVERY OPTIONS BUTTON
    function deliveryOption(option) {
        // let buttons = document.querySelectorAll('.deliv-btn');
        // buttons.forEach(button => {
        //     button.style.backgroundColor = '';  
        // });
        // let clickedButton = document.getElementById(`${option.toLowerCase()}-button`);
        // clickedButton.style.backgroundColor = 'e9ae5b';  

        localStorage.setItem('selectedDeliveryOption', option);
    
        let displayDiv = document.getElementById('displayOption');
        displayDiv.innerHTML = `Selected option: ${option}`;
    }

    //delivery option
    // window.addEventListener('load', () => {
    //     let selectedOption = localStorage.getItem('selectedDeliveryOption');
    //     if (selectedOption) {
    //     let displayDiv = document.getElementById('displayOption');
    //     displayDiv.innerHTML = `Selected option: ${selectedOption}`;
    //     }
    // });
    


//     function newReceipt(a){
//         let array = JSON.parse(localStorage.getItem("order")) || [];
//         console.log(array);
    

//     let newItem = {
//         id: a,
//         product: document.getElementById("prod" + a).innerText,
//         price: totalPresyo,
//         img: document.getElementById("img" + a).src,
//         qty: count
//     };
//     }
// newReceipt();


    // MODAL
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("checkout-btn");
    var span = document.getElementsByClassName("close")[0];
    

    btn.onclick = function() {
    modal.style.display = "block";
    //   var orderSummary = document.getElementById("cart");
    //   var orderSummaryNew = orderSummary.innerHTML;


        var modalSummary = document.getElementById("pop1");
        function generateRandomReceiptNumber(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let receiptNumber = '';
            for (let i = 0; i < length; i++) {
                let randomIndex = Math.floor(Math.random() * characters.length);
                receiptNumber += characters.charAt(randomIndex);
            }
            return receiptNumber;
        }
        let randomReceiptNumber = generateRandomReceiptNumber(10);
        modalSummary.innerHTML = ` 
        <div class="text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/10828/10828604.png" style="height: 100px; width: 100px;">
            <h3 id="modal-popup" class="text-center pt-3"> 
                Thank you for your supporting us! <br> Your receipt number is ${randomReceiptNumber}
            </h3><br>
             <button onclick="logout()" class="btn thanks-btn mx-3">Logout</button> 
             <button onclick="clearLocalStorage()" class="btn thanks-btn mx-3">Continue</button> 
            
        </div>
        `;



        // let currentIndex = 0;

        // function showDiv(index) {
        //     const divs = document.querySelectorAll('.modal-content div');
            
        //     divs.forEach((div, i) => {
        //         if (i === index) {
        //         div.classList.add('visible');
        //         div.classList.remove('hidden');
        //         } else {
        //         div.classList.add('hidden');
        //         div.classList.remove('visible');
        //         }
        //     });
        //     }

        //     function changeDiv() {
        //         showDiv(currentIndex);
        //         currentIndex = (currentIndex + 1) % 3;

        //         if (currentIndex === 0) {
        //             clearInterval(intervalId);
        //         }
        //     }

        // const intervalId = setInterval(changeDiv, 2000);

        
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    function clearLocalStorage() {
        localStorage.clear();
        alert('Your cart is now empty.');
        window.location.href = 'index.html';
    }