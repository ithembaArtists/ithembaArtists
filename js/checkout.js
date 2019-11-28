var cart = {};
var total;

function goToPayfastCheckout(){
  
  $('.payfast_click_me').click();
  // if (Object.prototype.hasOwnProperty.call(cart, prop)) {
  //   // do stuff
  //   total = cart[prop] + total;
  //   console.log('prop',cart[prop]);
  // }
  // var item = "Hello world";
  // window.location = "https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=14342506&amp;item_name=" + item + "&amp;item_description=Test+Description&amp;amount=10.00&amp;return_url=https%3A%2F%2Fwww.google.com%2F&amp;cancel_url=https%3A%2F%2Fwww.google.com%2F";
  // str.link("https://www.w3schools.com");
}

function addToCart(type){
  console.log('products[type]', products[type]);
  if(!cart[type] || cart[type] === 0){
    $('.checkout .cart').append('<p class="' + type + '">' + products[type].text + ' (' + products.currencyType + products[type].converted + ') <button  onclick=\'removeFromCart("' + type +  '")\' class="px-1 pt-0 btn btn-danger"><img width="20px" src="img/website/product/delete.png" alt="delete"></button></p>');
  }
  cart[type] = products[type].converted;
  calculateTotal();
}

function calculateTotal(){
  total = 0;
  for (var prop in cart) {
    if (Object.prototype.hasOwnProperty.call(cart, prop)) {
        // do stuff
        total = cart[prop] + total;
        console.log('prop',cart[prop]);
      }
  }
  // console.log('total', total);
  $('.checkout .total').html(products.currencyType + total);
  
  // EMPTY CART
  if(total === 0){
    $('.checkout').fadeOut(500);
    $('#checkoutModal').modal('hide');
  }

}

function addVideo(){
  addToCart("video");
  $('.cartOverlay').fadeIn(500);

}

function buyingPainting() { 
  // $('.payfast_anchor').attr('href','https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=14342506&amp;item_name=Test&amp;item_description=Test+Description&amp;amount=10.00&amp;return_url=https%3A%2F%2Fwww.google.com%2F&amp;cancel_url=https%3A%2F%2Fwww.google.com%2F');
  $('.itemName').attr('value','HELLO WORLD');
  $('.itemPrice').attr('value','400');
  $('.checkoutModal').show();
  $('.cartOverlay').fadeOut(500);
  // console.log('FIND PAINTING'); // NEED TO DO
  addToCart('largeImage'); // temp
}

function removeFromCart(type){
  // console.log('remove:', type);
  $('.cart .' + type).remove();
  cart[type] = 0;
  calculateTotal();
}

function addExtras(){
  $('.cartOverlay').fadeIn(500);
  var extras = ['frameMount', 'frameWithoutMount', 'giftWrap', 'message'];
  extras.forEach(function (c) {
    if($('.' + c).is(":checked")){
      addToCart(c);
    }
  });
}



$(document).scroll(function() {
  console.log('total', total);
  if ($(document).scrollTop() >= 50 && !jQuery.isEmptyObject(cart) && total !== 0) {
    $('.checkout').fadeIn(500);
  } else {
    $('.checkout').fadeOut(500);
  }
});