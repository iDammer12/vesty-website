let value = 1;

function addOne() {
  value += 1;
  if(value === 6) {
    value === 1
  }
  console.log(value)
  document.querySelector('.slideshow').innerHTML = `
  <img class="slideshow-element" src="images/product-${value}.webp" alt="">
  `
}

setInterval(addOne, 2000);