var cart = {};
var total;
var buyer = {}

function addToCart(type){
  // console.log('products[type]', products[type]);
  if(!cart[type] || cart[type] === 0){
    $('.checkout .cart').append('<p class="' + type + '">' + products[type].text + ' (' + products.currencyType + products[type].converted + ') <button  onclick=\'removeFromCart("' + type +  '")\' class="px-1 pt-0 btn btn-danger"><img width="20px" src="img/website/product/delete.png" alt="delete"></button></p>');
  }
  cart[type] = products[type].converted;
  calculateTotal();
}

function calculateTotal(){
  total = 0;
  // console.log('total', total);
  for (var prop in cart) {
    if (Object.prototype.hasOwnProperty.call(cart, prop)) {
        total = cart[prop] + total;
        console.log('cart[prop]', cart[prop]);
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
  addToCart('largeImage');
  $('.checkoutModal').show();
  $('.cartOverlay').fadeOut(500);
}

function payFast(buyer){
  $('.itemName').attr('value', buyer.cart);
  $('#item_description').attr('value', buyer.description);
  $('.itemPrice').attr('value', buyer.total);
  $('#payment_id').attr('value', buyer.invoiceId);
  $('#name_first').attr('value', buyer.firstName);
  $('#name_last').attr('value', buyer.lastName);
  $('#email_address').attr('value', buyer.email_address);
}

function getUser(){
  var buyer = {};
  total = 0;
  buyer.total = 0;
  buyer.firstName = $('#name_first').val();
  buyer.lastName = $('#name_last').val();
  buyer.email_address = $('#email_address').val();
  // buyer.message = 'Hello \n This is a test. I hope there are some line breaks in this email!!';
  // buyer.subject = "Test Formspree" 

  buyer.cart = productDetails.name;
  // console.log('productDetails', productDetails);
  for (var prop in cart) {
    if (Object.prototype.hasOwnProperty.call(cart, prop)) {
        total = cart[prop] + total;
        buyer.cart += '&' + prop + '_' + cart[prop];
      }
    }
  buyer.total = total;
  buyer.cart += ' ' + productDetails.date + "(" + productDetails.image + ").";
  buyer.description = "Name: " + productDetails.name + " (" + productDetails.date + ") Image: " + productDetails.image + "  Extras: " + buyer.cart;
  buyer.fullName = buyer.firstName + " " + buyer.lastName;
  return buyer;
}

function payFastPayment(){
  var buyer = getUser();
  payFast(buyer);
  // submitForm(buyer.fullName, buyer.email_address, buyer.message); // send email
  $('.payfast, .modal-footer').hide();
  $('.modal-body').html('One moment, redirecting you to payfast...');
  setTimeout(function(){ 
    console.log('buyer', buyer);
    // quickPostPaymentToPayFast(document.getElementById('payfast_url').value);
  },1000);
}

function removeFromCart(type){
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
  // console.log('total', total);
  if ($(document).scrollTop() >= 50 && !jQuery.isEmptyObject(cart) && total !== 0) {
    $('.checkout').fadeIn(500);
  } else {
    $('.checkout').fadeOut(500);
  }
});