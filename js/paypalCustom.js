
// test currency add
paypal.Buttons({
  createOrder: function(data, actions) {
    var buyer = getUser();
    console.log('buyer: ', buyer);
    return actions.order.create({
      purchase_units: [{
        description: 'test product final',
        amount: {
          // currency_code: 'GBP',
          value: '4.00'
        },
        // items:[
        //   {
        //     name:"Denim Woven Shirt",
        //     price:"20.00",
        //     quantity:"1",
        //     sku:"SKU1",
        //   },
        // ],

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