/*
* GET IMAGE INFO
*/
var imageObj;
var imageName = location.href.split('#')[1];
var artType;
var productDetails = {}; 

images.forEach(function(c, index){
  if(c.src == imageName){
    displayImage(c);
    displayPrices(c);
  }
});
// get info 

// DISPLAY IMAGE OBJ
function displayImage(obj){
  $('.kidsName').html(obj.name);
  productDetails.name = obj.name;
  $('.kidsDescription').html(obj.description);
  productDetails.description = obj.description;
  $('.kidsArt').attr('src', 'img/' + obj.month + obj.year + "/preview/" + obj.src);
  productDetails.image = 'img/' + obj.month + obj.year + "/preview/" + obj.src;
  // save date
  productDetails.date = obj.date;
  // save size
  // console.log('obj.size', obj.size);
  productDetails.size = obj.size;

}
// display imageObj

function submitIdea(){
  var buyer = [];
  $('.idea_name').attr('value', buyer.email_address);
  $('.idea_email_address').attr('value', buyer.email_address);
  var buyer = {};
  buyer.name = $('.idea_name').val();
  buyer.email_address = $('.idea_email_address').val();
  buyer.message = $('.idea_message').val() + " Price: " + products.currencyType + $('.idea_price').val();
  // console.log('buyer: ', buyer);
  submitForm(buyer.name, buyer.email_address, buyer.message); // send email
}

// DO YOU WANT MORE?
$('#moreExtras').click(function(){
  $('.customExtras').toggle();
})

// DISPLAY PRICES
function displayPrices(obj){

  if(obj.size === 'card'){
    artType = products.smallImage;
    productDetails.price = products.cardImage.price;
    productDetails.text = products.cardImage.text;
    productDetails.type = 'cardImage';
  }
  else if(obj.size === 'small'){
    artType = products.smallImage;
    productDetails.price = products.smallImage.price;
    productDetails.text = products.smallImage.text;
    productDetails.type = 'smallImage';
  }
  else if(obj.size === 'medium'){
    artType = products.mediumImage;
    productDetails.price = products.mediumImage.price;
    productDetails.text = products.mediumImage.text;
    productDetails.type = 'mediumImage';
  }
  else if(obj.size === 'large'){
    artType = products.largeImage;
    productDetails.price = products.largeImage.price;
    productDetails.text = products.largeImage.text;
    productDetails.type = 'largeImage';
  }
}
// display prices
