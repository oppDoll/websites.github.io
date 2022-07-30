let carts = document.querySelectorAll(".cart");
let products = [
        {
            "id":"1",
            "name":"Cartoon Astronaut T-Shirts",
            "tag":"a1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"2",
            "name":"Cartoon Astronaut T-Shirts",
            "tag":"b1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"3",
            "name":"Flower Astronaut T-Shirts",
            "tag":"c1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"4",
            "name":"Color-Flower Astronaut T-Shirts",
            "tag":"d1",
            "price":40,
            "inCart":0
        },
        {
            "id":"5",
            "name":"White-Flower's Astronaut T-Shirts",
            "tag":"e1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"6",
            "name":"3D 2-in-1 Shirts",
            "tag":"f1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"7",
            "name":"Girls Trowers",
            "tag":"g1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"8",
            "name":"Girls-Cartoon Astronaut Shirts",
            "tag":"h1",
            "price":40,
            "inCart":0
        },
        {
            "id":"9",
            "name":"Sample Ful-Shirts",
            "tag":"i1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"10",
            "name":"Chick Shirts",
            "tag":"j1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"11",
            "name":"Army-Soldier T-Shirts",
            "tag":"k1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"12",
            "name":"Jeans Shirts",
            "tag":"l1",
            "price":40,
            "inCart":0
        },
        {
            "id":"13",
            "name":"Jeans-Sample T-Shirt",
            "tag":"m1",
            "price":40,
            "inCart":0
        },
        {
            "id":"15",
            "name":"Office-Man Shirts",
            "tag":"n1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"16",
            "name":"Short Pant",
            "tag":"o1",
            "price":40,
            "inCart":0
        },    
        {
            "id":"17",
            "name":"Cartoon's T-Shirts",
            "tag":"p1",
            "price":40,
            "inCart":0
        }
]
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}
function onLoadNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if ( productNumbers ){
        document.querySelector("#lg-bage samp");
    }
}
function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if( productNumbers ){
        localStorage.setItem("cartNumbers", productNumbers + 1);

    }else{
        localStorage.setItem("cartNumbers", 1);
    }
    setItem(product);
    
}
function setItem(product) {
    let cartIteams = localStorage.getItem("productsInCart");
    cartIteams = JSON.parse(cartIteams);
    if (cartIteams != null) {
        if(cartIteams[product.tag] == undefined) {
            cartIteams = {
                ...cartIteams,
                [product.tag]: product
            }
        }
        cartIteams[product.tag].inCart += 1;
    }
    else{
         product.inCart = 1;    
         cartIteams = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify  (cartIteams));
}

function totalCost(product) {
    // console.log("the Online workinghjhjkhjkh", product.price);

    let cartCost = localStorage.getItem("totalCost");

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartIteams =localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem("totalCost");

    cartIteams = JSON.parse(cartIteams);

    let proCart = document.querySelector("#ali");
    console.log(cartIteams);
    if (cartIteams && proCart) {
        proCart.html = "";
        Object.values(cartIteams).map(item => {
            proCart.innerHTML += `
               <tr>
                    <td> <i class="fal fa-times-circle moves" id="remove"></i></td>
                    <td><img src="img/products/${item.tag}.jpg" alt=""></td>
                    <td>${item.name}</td>
                    <td>$${item.price}.00</td>
                    <td>
                        <button><i class="fal fa-minus"></i></button>
                        <input type="text" value="${item.inCart}" id="probox">
                        <button><i class="fal fa-plus"></i></button>
                    </td>
                    <td>$<span id="itemval itemvals">${item.inCart * item.price}.00</span></td>
                </tr>
            `; 
        });


}
        let proCartIn = document.querySelector("#ali2");
        if (cartIteams && proCart) {
            proCartIn.html = "";
                proCartIn.innerHTML += `
                <tr>
                    <td>Cart Subtotal</td>
                    <td>$${cartCost}.00</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$${cartCost}.00</td>
                </tr>
                `; 
    }
}





onLoadNumbers();
displayCart();

