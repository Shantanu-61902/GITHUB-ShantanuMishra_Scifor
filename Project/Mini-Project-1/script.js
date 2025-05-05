function addToCart() {
  let cartCount = document.getElementById("cart-count");
  let currentCount = parseInt(cartCount.innerText);
  currentCount++;

  cartCount.innerText = currentCount;

  let popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerText = `Added to cart!`;
  document.body.appendChild(popup);

  let cartIcon = document.getElementById("cart-icon");
  let rect = cartIcon.getBoundingClientRect();
  popup.style.left = rect.left + window.scrollX + "px";
  popup.style.top = rect.top + window.scrollY - 30 + "px";

  setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
}

let addToCartIcons = document.querySelectorAll(".cart");
addToCartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    addToCart();
  });
});



