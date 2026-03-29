let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item, price) {
    cart.push({item, price});
      console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item + " added to cart!");
     
}