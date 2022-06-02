

function myFunction1() {
  var x = document.getElementById("lichthidau");
  var test = document.getElementById("test");
  if (x.style.display === "none" || test.style.display === "block") {
    x.style.display = "block";
    test.style.display = "none";
  } else {
    x.style.display = "none";
  }
}function myFunction() {
  var y = document.getElementById("test");
  var x = document.getElementById("lichthidau");
  if (y.style.display === "none" || x.style.display === "block") {
    y.style.display = "block";
    x.style.display = "none";
  } else {
    y.style.display = "none";
  }
}