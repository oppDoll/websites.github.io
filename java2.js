let carts = document.querySelectorAll(".cart");
let products = [
    {
        name:"T-Shirts",
        tag:"q1",
        price:40,
        inCart:0,
    },    
    {
        name:"Hoody",
        tag:"r1",
        price:40,
        inCart:0,
    },    
    {
        name:"Shirts",
        tag:"s1",
        price:40,
        inCart:0,
    },    
    {
        name:"Full-Arms Shirts",
        tag:"t1",
        price:40,
        inCart:0,
    },    
    {
        name:"Chid-Animated T-Shirts",
        tag:"u1",
        price:40,
        inCart:0,
    },    
    {
        name:"Girls T-Shirts",
        tag:"v1",
        price:40,
        inCart:0,
    },    
    {
        name:"Mockup T-Shirts",
        tag:"w1",
        price:40,
        inCart:0,
    },    
    {
        name:"TIR-Blend T-Shirts",
        tag:"x1",
        price:40,
        inCart:0,
    },    
    {
        name:"Jeans Short Pant's",
        tag:"y1",
        price:40,
        inCart:0,
    },    
    {
        name:"Girl's Jinns Pant",
        tag:"z1",
        price:40,
        inCart:0,
    },    
    {
        name:"Shoe's",
        tag:"as1",
        price:40,
        inCart:0,
    },    
    {
        name:"Boys Jeans Pant",
        tag:"op1",
        price:40,
        inCart:0,
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

