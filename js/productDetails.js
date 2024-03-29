function getSecondPart(str) {
  return str.split('#')[1].replace(/%20/g, " ");
}

// get image
var imageName = getSecondPart(window.location.href)
document.getElementById("id").innerHTML = imageName;
document.getElementById("mainImage").src = "img/1/" + imageName;
document.getElementById("mainImage").alt = imageName;

// description name
var str = getSecondPart(window.location.href)
var itemName = str.substring(0, str.length - 4);
// console.log(itemName);

// description
var description = itemName + '.txt';

fetch('description/' + description)
  .then(response => response.text())
  .then(text => document.getElementById("description").innerText = text );
