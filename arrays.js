var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element) {
  var myFavoriteCities = ["Boston", "Paris", "London", "Milan"];
  myFavoriteCities.unshift("New York");
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element) {
  var dinner = ["Pasta", "Fries"];
  dinner.push("Salad");
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array;
}

function accessElementInArray(array, index) {
  var array = ["English", "Music", "Computer Science", "Philosophy"];
  return array[0];
}
