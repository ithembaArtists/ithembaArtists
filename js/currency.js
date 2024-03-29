internationalShipping = false;
getCurrency(artType, products.largeImage.class);
// getCurrency(products.video, products.video.class);
// getCurrency(products.frameMount, products.frameMount.class);
// getCurrency(products.frameWithoutMount, products.frameWithoutMount.class);
// getCurrency(products.giftWrap, products.giftWrap.class);
// getCurrency(products.message, products.message.class);
var currencyDifference;

function getCurrency(product, classname, countryCode){
  
  if(countryCode){
    
    // FIND COUNTRY PRICE
    $.get("https://restcountries.eu/rest/v1/alpha/" + countryCode, function (data) {
      currencyMatchSymbol(data.currencies[0], classname, product);
    });
    // find country price

  } else {
    // FIND WHERE USER IS
    $.get("https://ipinfo.io", function(response) {
      // console.log(response.city, response.country);
      $.get("https://restcountries.eu/rest/v1/alpha/" + response.country, function (data) {
        
        // FAKE SOUTH AFRICA
    // $.get("https://restcountries.eu/rest/v1/alpha/ZA", function (data) {
          currencyMatchSymbol(data.currencies[0], classname, product);
        }
      );
    }, "jsonp").catch(function (){
      // if fails do south african
      console.log('Currency exchange server is down, only using SA prices.'); // or whatever     
      $('.currencyIssue').show();
      $.get("https://restcountries.eu/rest/v1/alpha/ZA", function (data) {
        currencyMatchSymbol(data.currencies[0], classname, product);
      });

      $('.internationalDelivery').show();
      $('.southAfricaDelivery').hide();

    });
    // find where user is
  }
}

  function currencyMatchSymbol(code, classname, product) {
    var data = currencyCodes;
      // the product which contains the code
      $.each(data, function(i, v){
          if(i === code){

            // HACK PAYPAL TO CORRECT CURRENCY 
            // console.log('v.code:', v.code);
            // var my_awesome_script = document.createElement('script');
            // my_awesome_script.setAttribute('src','https://www.paypal.com/sdk/js?client-id=AUVR9O8iFRN2USlVCe2xjQ95kNg0OLuCEm4pJZ4t6SiE-3Oe4jAA9fFDnIOd_-VqL2C16CYeR-9w7yw7&currency=' + v.code);
            // document.head.appendChild(my_awesome_script);
            // setTimeout(function(){ 
            //   var my_awesome_script = document.createElement('script');
            //   // paypal script
            //   my_awesome_script.setAttribute('src','https://ithembaartists.github.io/ithembaArtists/js/paypalCustom.js');
            //   document.head.appendChild(my_awesome_script);
            // }, 2000);
              
              // CURRENCY SYMBOL
              $(classname).html(v.symbol);
              $('.currencySymbol').html(v.symbol);
              products.currencyType = v.symbol;
              
              // CONVERT TO CURRENCY
              convert(product, v.code, classname);

              // USE PAYFAST FOR EVERYTHING
              $('.payfast').show();
              $('.paypal').hide();


              // if(v.code === "ZAR"){ // check if south african  
              //   internationalShipping = 0;
              // } else {
              //   internationalShipping = 100 * currencyDifference;
              //   $('.internationalShipping .internationalDisclaimer').show().html('To ship a picture outside of South Africa costs: ');
              //   $('.internationalShipping .internationalPrice').show().html(internationalShipping);
              // }


              /* DEAL WITH INTERNATIONAL PAYMENTS */      
              if(v.code !== "ZAR"){ // check if south african  
                internationalShipping = true;
              } else {
                internationalShipping = false;
              }
              // check if South African

              /* CHECK IF SOUTH AFRICAN */              
              // if(v.code === "ZAR"){
              //   $('.paypal').hide();
              // } else {
              //   $('.payfast').hide();
              //   $('.paypal').show();
              // }
              // check if South African
              return;
          }
      });
  }

  function convert(product, code, classname) {

    $.get("https://free.currconv.com/api/v7/convert?q=PHP_" + code + ",PHP_ZAR&compact=ultra&apiKey=d9c9c252da47042dee7d", function(response) {
      // FIND AMOUNT IN ANOTHER CURRENCY
      // console.log('response: ', response);
      var currencyless = product.price/response.PHP_ZAR;
      var currency = currencyless * response["PHP_" + code];
      currency = currency.toFixed(0);

      
      // SAVE CURRENCY DIFFERENCE
      currencyDifference = currency/product.price;

      // SAVE ART TYPE
      products[productDetails.type].converted = currencyDifference * productDetails.price;

      displayOtherProducts();
      // console.log(code,currency);
      $(classname).append(currency);   

      // console.log('letterTotal', letterTotal);
      // ADJUST PRICE SIZE FONT
      if(classname === '.priceSize'){
        if(currency.length === 6){
          $('.priceSize').css({'font-size':'15px',"padding-top":"14px"});
        }
        if(currency.length === 5){
          $('.priceSize').css({'font-size':'20px',"padding-top":"7px"});
        }
      }
      // adjust price size font
    }).fail(function() {
      console.log('Currency exchange server is down, only using SA prices.'); // or whatever
      $('.currencyIssue').show();
      networkError = true;
      currencyDifference = 1;
      products.currencyType = 'R';
      $(product.class).html(products.currencyType + product.price);
      displayOtherProducts();

      $('.internationalDelivery').show();
      $('.southAfricaDelivery').hide();

    }, "jsonp");
  }

/*
* CURRENCY DROPDOWN
*/
function toggleDropdown() {
  $('.currencyDisclaimer').toggle();
  $('.currencyDropdown').toggle();
}

function displayOtherProducts() {
  // console.log('currency difference: ' , currencyDifference);
  // getCurrency(products.video, products.video.class);
// getCurrency(products.frameMount, products.frameMount.class);
// getCurrency(products.frameWithoutMount, products.frameWithoutMount.class);
// getCurrency(products.giftWrap, products.giftWrap.class);
// getCurrency(products.message, products.message.class);
  products.video.converted =  (products.video.price * currencyDifference).toFixed(0);
  $(products.video.class).html(products.currencyType + products.video.converted);
  products.frameMount.converted =  (products.frameMount.price * currencyDifference).toFixed(0);
  $(products.frameMount.class).html(products.currencyType + products.frameMount.converted);
  products.frameWithoutMount.converted =  (products.frameWithoutMount.price * currencyDifference).toFixed(0);
  $(products.frameWithoutMount.class).html(products.currencyType + products.frameWithoutMount.converted);
  products.giftWrap.converted =  (products.giftWrap.price * currencyDifference).toFixed(0);
  $(products.giftWrap.class).html(products.currencyType + products.giftWrap.converted);
  products.message.converted =  (products.message.price * currencyDifference).toFixed(0);
  $(products.message.class).html(products.currencyType + products.message.converted);
  
  $(products.international.class).html(products.currencyType + products.international.price * currencyDifference);
  products.international.converted =  products.international.price * currencyDifference;
  $('.deliveryCharge').html(products.international.converted);
  $(products.internationalFrame.class).html(products.currencyType + products.internationalFrame.price * currencyDifference);
  products.internationalFrame.converted =  (products.internationalFrame.price * currencyDifference).toFixed(2);

}

function currencySelected() {
  // var currency = $('.currencyDropdown select').value;
  var code = document.getElementById("chooseCurrency").value;
  console.log('code: ', code);
  // currencyMatchSymbol(code);
  getCurrency(artType, products.largeImage.class, code);
  // getCurrency(products.video, products.video.class, code);
  // getCurrency(products.frameMount, products.frameMount.class, code);
  // getCurrency(products.frameWithoutMount, products.frameWithoutMount.class, code);
  // getCurrency(products.giftWrap, products.giftWrap.class, code);
  // getCurrency(products.message, products.message.class, code);
}
// currency dropdown