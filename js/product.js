/*
* GET IMAGE INFO
*/
var imageObj;
var imageName = location.href.split('#')[1];


images.forEach(function(c, index){
  if(c.src == imageName){
    displayImage(c);
  }
});
// get info 

// DISPLAY IMAGE OBJ
function displayImage(obj){
  $('.kidsName').html(obj.name);
  $('.kidsDescription').html(obj.description);
  $('.kidsArt').attr('src', 'img/' + obj.month + obj.year + "/preview/" + obj.src);

}
// display imageObj

