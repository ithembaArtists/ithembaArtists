var cart = {'art':'0', 'extras':'0', 'video':'0'}

function checkout(){
  console.log('checkout');
}

function addVideo(price){
  cart.video = price
}

$(document).scroll(function() {
  if ($(document).scrollTop() >= 50) {
    $('.checkout').fadeIn(500);
    console.log(1);
  } else {
    $('.checkout').fadeOut(500);
    console.log(2);
  }
});