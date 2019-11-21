var artPrice = 18;
$.get("https://ipinfo.io", function(response) {
  // console.log(response.city, response.country);
  $.get("https://restcountries.eu/rest/v1/alpha/" + response.country, function (data) {
    // console.log(data);
// $.get("https://restcountries.eu/rest/v1/alpha/ZA", function (data) {
      currencyMatchSymbol(data.currencies[0]);
    }
  );
}, "jsonp");

function currencyMatchSymbol(code) {
  var data = currencyCodes;
    // the input which contains the code
    $.each(data, function(i, v){
        if(i === code){
            $('.currencySymbol').html(v.symbol);
            convert(artPrice, v.code);
            $('.currencySymbol').html(v.symbol);

            /* CHECK IF SOUTH AFRICAN */
            console.log(v.code);
            if(v.code === "ZAR"){
              $('.payfast').show();
              $('.paypal').hide();
            } else {
              $('.payfast').hide();
              $('.paypal').show();
            }
            // check if South African
            return;
        }
    });
}

function convert(price, code) {
  $.get("https://free.currconv.com/api/v7/convert?q=PHP_" + code + ",PHP_EUR&compact=ultra&apiKey=d9c9c252da47042dee7d", function(response) {
    var currencyless = price/response.PHP_EUR;
    var currency = currencyless * response["PHP_" + code];
    currency = currency.toFixed(0);
    console.log(code,currency);
    $('.currencyValue').html(currency);
    var letterTotal = $('.priceSize .currencyValue').html.length + $('.priceSize .currencySymbol').html.length;
    console.log('letterTotal', letterTotal);
    if(currency.length === 6){
      $('.priceSize').css({'font-size':'15px',"padding-top":"14px"});
    }
    if(currency.length === 5){
      $('.priceSize').css({'font-size':'20px',"padding-top":"7px"});
    }
  });
}

/*
* CURRENCY DROPDOWN
*/
function toggleDropdown() {
  $('.currencyDisclaimer').toggle();
  $('.currencyDropdown').toggle();
}

function currencySelected() {
  // var currency = $('.currencyDropdown select').value;
  var code = document.getElementById("chooseCurrency").value;
  // console.log('currency: ', currency);
  currencyMatchSymbol(code);
}
// currency dropdown