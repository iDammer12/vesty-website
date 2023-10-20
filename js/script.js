let value = 1;

function addOne() {
  value += 1;
  if(value === 6) {
    value = 1
  }
  document.querySelector('.slideshow').innerHTML = `
  <img class="slideshow-element" src="images/product-${value}.webp" alt="">
  `
}

setInterval(addOne, 3000);

const product = [{
  image: "images/jordan-1-black-orange.webp", 
  name: "Air Jordan 1 Low", 
  price: 2199
}, {
  image: "images/air-jordan-1-low-black-lucky-green-3.png", 
  name: "Jordan AJ 1 Low", 
  price: 2199
}];


let productsHTML = ''

product.forEach((product) => {

  productsHTML +=`
  <div class="square">
    <div class="product-image">
      <img src="${product.image}" alt="">
    </div>
    <div class="product-title">
      ${product.name}
    </div>
    <div class="product-price">
      ${product.price} MDL <div>-30%</div>
    </div>
    <div class="product-details">
      <button>Detalii</button>
    </div>
  </div>
  `
})

document.querySelector('.grid-container').innerHTML = productsHTML
