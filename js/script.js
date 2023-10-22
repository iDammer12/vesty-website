

const product = [{
  image: "images/jordan-1-black-orange.webp", 
  name: "Air Jordan 1 ", 
  price: 2199,
  sale: "<div>-30%</div>"
}, {
  image: "images/air-jordan-1-low-black-lucky-green-3.png", 
  name: "Jordan AJ 1 Low", 
  price: 2199, 
  sale: "<div></div>",
  style: "height: 65px; margin-top: 10px;"
}, {
  image: "images/nike-air-force-1-07-white.png", 
  name: "Air Force 1 07'", 
  price: 2299 ,
  sale: "<div>-10%</div>", 
  style: "height: 110px; margin-top: 5px;"
}];


let productsHTML = ''

product.forEach((product) => {

  productsHTML +=`
  <div class="square">
    <div class="product-image">
      <img style="${product.style}" src="${product.image}" alt="">
    </div>
    <div class="product-title">
      ${product.name}
    </div>
    <div class="product-price">
      ${product.price} MDL ${product.sale}
    </div>
    <div class="product-details">
      <button>Detalii</button>
    </div>
  </div>
  `
})

document.querySelector('.grid-container').innerHTML = productsHTML


let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }