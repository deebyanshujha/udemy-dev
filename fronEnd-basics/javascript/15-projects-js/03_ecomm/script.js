document.addEventListener('DOMContentLoaded',function(){
    const ProductList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartTotal = document.getElementById("cart-total");
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    const products = [
        {id : 1, name: "Nike Air max", price: 4999.00},
        {id : 2, name: "Nike Jordan lows", price: 7999.00},
        {id : 3, name: "Puma perfomance", price: 4500.00},
    ];

    const cart = [];
    products.forEach((prod)=>{
        const prodDiv = document.createElement('div');
        prodDiv.classList.add('product')
        prodDiv.innerHTML = `
        <span>${prod.name} - &#8377;${prod.price.toFixed(2)}</span>
        <button data-id="${prod.id}">Add to cart</button>
        `;
        ProductList.appendChild(prodDiv)
    })

    ProductList.addEventListener('click',function(e){
        if(e.target.tagName !== 'BUTTON')return;
        console.log("clicked!!");
        const data_id = e.target.getAttribute('data-id');
        products.forEach((prod)=>{
            if(prod.id === parseInt(data_id)){
                cart.push(prod);
                renderProductInCart(prod);
            }
        })
        
    })

    function renderProductInCart(product){
        emptyCart.classList.add('hidden');
        cartTotal.classList.remove('hidden');
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
        <span>${product.name} - &#8377;${product.price.toFixed(2)}</span>
        `;
        cartItems.appendChild(productDiv);
        let total = 0;
        cart.forEach((prod)=>{
            total += prod.price;
        })
        totalPrice.textContent = `₹${total.toFixed(2)}`;
    }

    checkoutBtn.addEventListener('click',function(){
        cart.length = 0;
        alert('checkout successfully!');
        cartItems.innerHTML = `${emptyCart.innerText}`;
        emptyCart.classList.remove('hidden');
        cartTotal.classList.add('hidden'); 
    })
})