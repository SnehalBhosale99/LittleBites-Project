let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");
let total = 0;

function displayCart() {
    cartItems.innerHTML = "";
    total = 0;

    cart.forEach((product, index) => {
        let div = document.createElement("div");

        div.innerHTML = `
            ${product.item} - ₹${product.price}
            <button onclick="removeItem(${index})">❌</button>
        `;

        cartItems.appendChild(div);
        total += product.price;
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);  // remove item
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // refresh UI
}

displayCart();