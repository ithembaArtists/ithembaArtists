/*
* POPULATE
*/

function filterNav(type, search) {
  searchResults = [];
  findObjectByKey(images, type, search);
  console.log(searchResults);
  $('.thumbnailGallery').html("");
  searchResults.forEach(intPopulate);
}
var sidebarNames = [];
var sidebarDates = [];
var sidebarAge = [];
var sidebarOccassions = [];
var sidebarSizes = [];
function populate() {
  sidebarNames = [];
  sidebarDates = [];
  sidebarAge = [];
  sidebarOccassions = [];
  sidebarSizes = [];
  images.forEach(intPopulate);
}

function intPopulate(image, index) {

  // populates gallery
  $('.thumbnailGallery').append("\
    <div class='pointer col-sm-4 mt-5 thumbnail blue new'>\
      <p>new</p>\
      <img \
        src='img/" + image.month + image.year + "/thumbnail/" + image.src + "' \
        name='" + image.name + "' \
        date='" + image.date + "' \
        size='" + image.size + "'            \
        alt='" + image.name + "'s art' \
      > \
    </div>");

    // populate sidebar
    // NAMES
    if( sidebarNames.indexOf(image.name) === -1 ) {
      sidebarNames.push(image.name);
      $('.namesSidebar').append('<dd class="pointer nav-tag" onclick="filterNav(\'name\', \'' + image.name + '\')">' + image.name + '</dd>');      
      $('.namesMobile').append('<li onclick="mobileSearch(\'name\', \'' + image.name + '\')"><p>' + image.name + '</p></li>');
    }
    // names
    // OCCASSION
    if( sidebarOccassions.indexOf(image.occassion) === -1 ) {
      $('.occassionsSidebar').append('<dd class="pointer nav-tag" onclick="filterNav(\'occassion\', \'' + image.occassion + '\')">' + image.occassion + '</dd>')
      $('.occassionsMobile').append('<li onclick="mobileSearch(\'occassion\', \'' + image.occassion + '\')"><p>' + image.occassion + '</p></li>');
      sidebarOccassions.push(image.occassion);
    }
    // occassion
    // SIZE
    if( sidebarSizes.indexOf(image.size) === -1 ) {
      $('.sizesSidebar').append('<dd class="pointer nav-tag" onclick="filterNav(\'size\', \'' + image.size + '\')">' + image.size + '</dd>')
      $('.sizesMobile').append('<li onclick="mobileSearch(\'sizes\', \'' + image.sizes + '\')"><p>' + image.sizes + '</p></li>');
      sidebarSizes.push(image.size);
    }
    // size
    // DATE
    if( sidebarDates.indexOf(image.date) === -1 ) {
      $('.datesSidebar').append('<dd class="pointer nav-tag" onclick="filterNav(\'date\', \'' + image.date + '\')">' + image.date + '</dd>')
      $('.datesMobile').append('<li onclick="mobileSearch(\'date\', \'' + image.date + '\')"><p>' + image.date + '</p></li>');
      sidebarDates.push(image.date);
    }
    // date
    // AGE
    if( sidebarAge.indexOf(image.age) === -1 ) {
      $('.agesSidebar').append('<dd class="pointer nav-tag" onclick="filterNav(\'age\', \'' + image.age + '\')">' + image.age + '</dd>')
      $('.agesMobile').append('<li onclick="mobileSearch(\'age\', \'' + image.age + '\')"><p>' + image.age + '</p></li>');
      sidebarAge.push(image.age);
    }
    // age
 
}

populate();
// populate

/*
* SEARCH
*/

// mobile search
function mobileSearch(type, val){
  toogleNav();
  filterNav(type, val);
}

// key bind
$( ".searchInput" ).keyup(function() {
  $('.thumbnailGallery').html("");
  var searchVal = $('.searchInput').val();
  search(searchVal);
  searchResults.forEach(intPopulate);
});


function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
      if (array[i][key].toLowerCase().includes(value.toLowerCase())) {
        searchResults.push(array[i]);
      }
  }
  return null;
}


function getUnique(arr, comp) {

  const unique = arr
       .map(e => e[comp])

     // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

   return unique;
}


var searchResults = [];
function search(val){
  searchResults = [];
  findObjectByKey(images, 'occassion', val);
  findObjectByKey(images, 'size', val);
  findObjectByKey(images, 'name', val);
  findObjectByKey(images, 'year', val);
  searchResults = getUnique(searchResults,'src');
}
// search

/* 
* CONVERT MONTH
*/
// function intToMonth(int){
//   // convert months
//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   var months = {
//     '01' : "January",
//     '02' : "February",
//     '03' : "March",
//     '04' : "April",
//     '05' : "May",
//     '06' : "June",
//     '07' : "July",
//     '08' : "August",
//     '09' : "September",
//     '10' : "October",
//     '11' : "November",
//     '12' : "December"
//   }

//   return months[int];
// }
// convert month