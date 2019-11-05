/*
* POPULATE
*/

function testMax(string) {
  console.log('testMax', string);
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
      $('.namesContainer').append('<dd class="pointer nav-tag" onclick="testMax(' + image.name + ')">' + image.name + '</dd>')
    }
    console.log('sidebarNames',sidebarNames);
    // names
    // OCCASSION
    if( sidebarOccassions.indexOf(image.occassion) === -1 ) {
      sidebarOccassions.push(image.occassion);
    }
    console.log('sidebarOccassions',sidebarOccassions);
    // occassion
    // SIZE
    if( sidebarSizes.indexOf(image.size) === -1 ) {
      sidebarSizes.push(image.size);
    }
    console.log('sidebarSizes',sidebarSizes);
    // size
    // DATE
    if( sidebarDates.indexOf(image.date) === -1 ) {
      sidebarDates.push(image.date);
    }
    console.log('sidebarDates',sidebarDates);
    // date
    // AGE
    if( sidebarAge.indexOf(image.age) === -1 ) {
      sidebarAge.push(image.age);
    }
    console.log('sidebarAge',sidebarAge);
    // age
 
}

populate();
// populate

/*
* SEARCH
*/
function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
      if (array[i][key].includes(value)) {
        searchResults.push(array[i]);
      }
  }
  return null;
}

var searchResults = [];
function search(val){
  searchResults = [];
  findObjectByKey(images, 'occassion', val);
  findObjectByKey(images, 'size', val);
  findObjectByKey(images, 'name', val);
  findObjectByKey(images, 'year', val);
  console.log('searchResults', searchResults);
}

search('September 2019');
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