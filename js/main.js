const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".close")

cartButton.addEventListener("click", function (event) {
  modal.classList.add("show")
})

modalClose.addEventListener("click", function (event) {
  modal.classList.remove("show")
})