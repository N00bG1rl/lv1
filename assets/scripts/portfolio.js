// TEHTUD GRID FILTER

// Filter #tehtud grid elements
filterSelection('all')
function filterSelection(element) {
  var x, i;
  x = document.getElementsByClassName("grid-item");
  if (element == "all")
    element = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(element) > -1) addClass(x[i], "show");
  }
}
// Show elements that is selected
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that is not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current select
var listContainer = document.getElementById("list-container");
var list = listContainer.getElementsByClassName("list");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}