const minusButton = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const plusButton = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
const buttonsAdd = Array.from(document.getElementsByClassName('product__add'));
const cart = document.getElementsByClassName('cart__products')[0];

let id, quantity, imgsrc, products;

//При нажатии на кнопки увеличения/уменьшения количества товаров, число должно также меняться. Минимальное число товаров - 1 (отрицательные значения не допускаются)
minusButton.forEach((el) => {
  el.addEventListener('click', minusOne);
});

plusButton.forEach((el) => {
  el.addEventListener('click', plusOne);
});

function minusOne() {
  if (this.parentNode.querySelector('.product__quantity-value').textContent > 0){
    this.parentNode.querySelector('.product__quantity-value').textContent -= 1;
  }
}

function plusOne() {
  this.parentNode.querySelector('.product__quantity-value').textContent  = parseInt(this.parentNode.querySelector('.product__quantity-value').textContent) + 1;
}


//кнопки добавить в корзину
buttonsAdd.forEach((el) => {
  el.addEventListener('click', buttonClick);
});

function buttonClick() {
  id = this.closest('.product').dataset.id;
  quantity = parseInt(this.closest('.product__quantity').querySelector('.product__quantity-value').textContent);
  imgsrc = this.closest('.product').querySelector('.product__image').getAttribute('src');

  products = Array.from(document.querySelectorAll('.cart__product'));
    products.forEach((el) => {
      if (el.dataset.id == id) {
        //добавляем число к товару который уже в корзине
        el.querySelector('.cart__product-count').textContent = parseInt(el.querySelector('.cart__product-count').textContent) + quantity;
        console.log(el)
        el.parentNode.children[el.parentNode.children - 1].remove();
      }
  })

if (quantity > 0) addTheProductToCart();
products = Array.from(document.querySelectorAll('.cart__product'));
}//enf of function



function addTheProductToCart() {
  cart.innerHTML += `
  <div class="cart__product" data-id=${id}>
    <img class="cart__product-image" src=${imgsrc}>
    <div class="cart__product-count">${quantity}</div>
  </div>
  `
}
