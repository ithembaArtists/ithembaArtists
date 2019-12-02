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
  productDetails.size = obj.size;

}
// display imageObj

// DISPLAY PRICES
function displayPrices(obj){
  if(obj.size === 'card'){
    artType = products.smallImage;
  }
  else if(obj.size === 'small'){
    artType = products.smallImage;
  }
  else if(obj.size === 'medium'){
    artType = products.mediumImage;
  }
  else if(obj.size === 'large'){
    artType = products.largeImage;
  }
}
// display prices
