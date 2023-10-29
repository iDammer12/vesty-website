function h1(color) {
  document.querySelector('.h1').style.background = color;
}
function h2(color) {
  document.querySelector('.h2').style.background = color;
}
function h3(color) {
  document.querySelector('.h3').style.background = color;
}
function h4(color) {
  document.querySelector('.h4').style.background = color;
}

function change1() {
    h1('rgb(218, 218, 218)');
    h2('white')
    h3('white')
    h4('white')
}      
function change2() {
  h2('rgb(218, 218, 218)');
  h1('white')
  h3('white')
  h4('white')
}   
function change3() {
  h3('rgb(218, 218, 218)');
  h2('white')
  h1('white')
  h4('white') 
}   
function change4() {
  h4('rgb(218, 218, 218)');
  h2('white')
  h3('white')
  h1('white')
}    