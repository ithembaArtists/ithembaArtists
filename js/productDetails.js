function getSecondPart(str) {
  return str.split('#')[1];
}

document.getElementById("id").innerHTML = getSecondPart(window.location.href);