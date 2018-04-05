import listProduct from './shop/products';

document.addEventListener("DOMContentLoaded", (event) => {
  addToCart();
  printProducts();
  removeFromCart();
  removeAllCart();
});

const printProducts = () => {
  const products = document.querySelector('#products');
  listProduct.forEach((product) => {
  let name = product.name;
      const newProducts = '<div class="box product"><article class="media"><div class="media-left"><figure class="image is-64x64"><img src="' +(product.img)+ '" alt="Image"></figure></div><div class="media-content"><div class="content"><p><strong>' +(product.name)+ '</strong> for only </small><b>' +(product.price.toFixed(2))+ '</b><br>' +(product.description)+ '</p></div><nav class="level is-mobile"><div class="level-left"><a class="level-item" class="product-button-buy"><span class="icon is-small"><i class="fas fa-shopping-cart"></i></span></a></div></nav></div></article></div>';
      products.innerHTML += newProducts;

  });
} 
const addToCart = () => {
  const products = document.querySelector('#products');
  const contentMedia = document.querySelector('.content');
  const listShopping = document.querySelector('#listShopping');
  const cartAdder = document.querySelector('.level-item');
  products.addEventListener('click',(product) => {
    if(product.target.tagName === ('path' || 'svg')){
      const parent = product.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      const searchContains = parent.firstElementChild.children[0];
      const nameProduct = searchContains.children[0].innerText;
      const priceProduct = searchContains.children[1].innerText;
      const nameAddedProduct = Array.from(listShopping.querySelectorAll('tr td:first-child'));
      
      const filter = nameAddedProduct.filter((name) => {
        return name.innerText === nameProduct;
      })
      if(filter[0] == undefined){
        const boxHtml = '<tr><td>' +(nameProduct)+ '</td><td>1</td><td><a class="remove-cart-item"><i class="fas fa-minus-square"></i></a></td></tr>'
        listShopping.innerHTML += boxHtml;
      } else {
        let numberItem = parseInt(filter[0].nextSibling.innerText);
        numberItem++;
        filter[0].nextSibling.innerText = numberItem;
        filter[0].parentElement.dataset.price = priceProduct;
      }

      let cartPrice = document.querySelector('#cart-price').firstElementChild;
      cartPrice.innerText = parseInt(cartPrice.innerText) + parseInt(priceProduct);

    }
  });
}


const removeAllCart = () => {
  const clearCart = document.querySelector('#clear-cart');
  const listShopping = document.querySelector('#listShopping')
  clearCart.addEventListener('click',(clear) => {
    listShopping.innerText = '';
    let cartPrice = document.querySelector('#cart-price').firstElementChild;
    cartPrice.innerText = '00.00';
  });
}
const removeFromCart = () => {
  const cart = document.querySelector('#cart article');
  cart.addEventListener('click',(divider) => {
    const parent = divider.target.parentElement.parentElement.parentElement.parentElement;

    if(divider.target.tagName === 'path'){
      let numberItem = parent.children[1];
      numberItem.innerText = parseInt(numberItem.innerText) - 1;
      let cartPrice = document.querySelector('#cart-price').firstElementChild;
      cartPrice.innerText = parseInt(cartPrice.innerText) - parseInt(parent.dataset.price);

      if(numberItem.innerText ==='0'){
        parent.remove(parent);
      }

    }
  });
}