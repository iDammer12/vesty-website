

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
  style: "height: 105px; margin-top: 5px;"
}, {
  image: "images/nike-dunk-retro-white.webp", 
  name: "Nike Dunk Retro", 
  price: 2399, 
  sale: "<div></div>"
}, {
  image: "images/nike-juniper-trail-2.png", 
  name: "Nike JT 2", 
  price: 1750, 
  sale: "<div>-5%</div>", 
  style: "height: 115px"
}, {
  style: "transform: scaleX(-1);", 
  image: "images/air-max-90-g-golf-shoes-lJzgKP.png", 
  name: "Nike Air Golf 90", 
  price: 2670, 
  sale:"<div>-15%</div>",
  style: "height: 100px"
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


    const adidas = [{
      image: "images/adidas-forum-low-white-brown.webp",
      name: "Adidas Forum  ", 
      price: 2299,
      sale: "<div>-20%</div>"
    }, {
      image: "images/adidas-adifoam-black.webp", 
      name: "Adidas Adifoam Q", 
      price: 1699, 
      sale: "<div>25%</div>",
      style: "height: 70px; margin-top: -15px;  transform: scaleX(-1);"
    }, {
      image: "images/adidas-nizza-white.png", 
      name: "Adidas Nizza ", 
      price: 1699 ,
      sale: "<div>-5%</div>", 
      style: "height: 100px; margin-top: -5px; transform: scaleX(-1);"
    }, {
      image: "images/adidas-ultraboost-cream.webp", 
      name: "Adidas UltraBoost ", 
      price: 2599, 
      sale: "<div></div>", 
      style: "height: 65px; margin-top: 5px; "
    }, {
      image: "images/adidas-hoope-3-mid-black-white.webp", 
      name: "Adidas Hoops 3", 
      price: 1750, 
      sale: "<div>10%</div>", 
      style: "height: 50px; margin-top: 5px;"
    }, {
      style: "transform: scaleX(-1);", 
      image: "images/adidas-duramo-sl.webp", 
      name: "Adidas Duramo", 
      price: 1399, 
      sale:"<div>-15%</div>",
      style: "height: 100px",
      style: "transform: scaleX(-1); height:115px; margin-top: 15px",
    }];
    
    
    let adidasHTML = ''
    
    adidas.forEach((adidas) => {

      adidasHTML +=`
      <div class="square">
        <div class="product-image">
          <img style="${adidas.style}" src="${adidas.image}" alt="">
        </div>
        <div class="product-title">
          ${adidas.name}
        </div>
        <div class="product-price">
          ${adidas.price} MDL ${adidas.sale}
        </div>
        <div class="product-details">
          <button>Detalii</button>
        </div>
      </div>
      `
      console.log(adidasHTML)
    })
    
    document.querySelector('.adidas-grid-container').innerHTML = adidasHTML