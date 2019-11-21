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