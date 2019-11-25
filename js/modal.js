/* SEE MORE OPTIONS */
function seeOptions(){
  console.log('see options');
  
  $('#checkoutModal').modal('toggle');
  // $.scrollTo( $('.frames'), 500); // index start with 0


  $([document.documentElement, document.body]).animate({
    scrollTop: $(".extras").offset().top
}, 1000);

}
// more options