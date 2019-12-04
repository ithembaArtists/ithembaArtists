
function getCurrency(){
  
    // FIND WHERE USER IS
    $.get("https://ipinfo.io", function(response) {
      // console.log(response.city, response.country);
      $.get("https://restcountries.eu/rest/v1/alpha/" + response.country, function (data) {
        
          currencySymbol(data.currencies[0]);
        }
      );
    }, "jsonp");
    // find where user is
}

  function currencySymbol(code) {
    var data = currencyCodes;
      // the product which contains the code
      $.each(data, function(i, v){
          if(i === code){

              // CURRENCY SYMBOL
              $('.currencySymbol').html(v.symbol);
              
              $.get("https://free.currconv.com/api/v7/convert?q=PHP_" + code + ",PHP_ZAR&compact=ultra&apiKey=d9c9c252da47042dee7d", function(response) {
                
                var currencyless = $('#foreignAmount').val()/response["PHP_" + code];
                var currency = currencyless * response.PHP_ZAR;
                // console.log('currency', currency);
                $('#amount').val(currency.toFixed(0));
          
                
                // SAVE CURRENCY DIFFERENCE
                currencyDifference = currency/$('#foreignAmount').val();
          
          });
        }
        
  });
}
  

getCurrency();
$('#foreignAmount').keyup(function(){
  getCurrency();
});