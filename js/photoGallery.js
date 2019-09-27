function intGallery(){
  var folder = "img/1/";

  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                console.log('helo');
                var clickName = ("\"" + val + "\"").replace(/%20/g, " ");
                var item = "<div class='col-md-4' onclick='goProductDetails(" +  clickName + ")'> <img class='w-100' src="+ clickName +" alt=''></div>";
                
                $(".imageGallery .row").append( item );


              } 
          });
      }
  });
}

function goProductDetails(id) {
  console.log(id);
  location.href='productDetails.html#' + id;
}

intGallery();