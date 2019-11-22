// test currency add
$('.currencyScript').attr('src','https://www.paypal.com/sdk/js?client-id=AUVR9O8iFRN2USlVCe2xjQ95kNg0OLuCEm4pJZ4t6SiE-3Oe4jAA9fFDnIOd_-VqL2C16CYeR-9w7yw7&currency=GBP');
  setTimeout(function(){

paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        description: 'hello world',
        amount: {
          // currency_code: 'GBP',
          value: '0.05'
        }


      }]
    });
  },
  onApprove: function(data, actions) {
    // Capture the funds from the transaction
    return actions.order.capture().then(function(details) {
      // Show a success message to your buyer
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
  }
}).render('#paypal-button-container');
}, 3000);