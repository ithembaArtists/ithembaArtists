(async () => {
  // const response = await fetch('https://api.github.com/repos/:user/:repo/contents/');
  // const response = await fetch('https://api.github.com/repos/ithembaArtists/ithembaArtists/contents/');
  var response = await fetch('https://api.github.com/repos/ithembaArtists/ithembaArtists/contents/img/');
  var data = await response.json();
  var folder = [];
  for (let file of data) {
    // htmlString += `${file.name}`;
    folder.push(`${file.name}`);
  }
    console.log('folder', folder);
  var imgs = [];


  for (let c of folder) {
  // folder.forEach(function(c) {
    console.log(c);
    response = await fetch('https://api.github.com/repos/ithembaArtists/ithembaArtists/contents/img/1/');
    data = await response.json();
    for (let file of data) {
      // htmlString += `${file.path}">${file.name}`;
      // htmlString += `${file.name}`;
      
      imgs.push(`${file.name}`);

      // var imageName = (`${file.name}`).replace(" ", '%20');
      imageName = '/ithembaArtists/img/1/' + encodeURIComponent(`${file.name}`.trim());
      console.log(imageName);
      var item = "<div class='col-md-4' onclick='goProductDetails(\"" + `${file.name}` + "\")'> <span>" +  `${file.name}` + "</span><img class='w-100' src=" +  imageName + " alt=''></div>";
      $(".imageGallery .row").append( item );
    }
  };
    console.log('imgs', imgs);



})()