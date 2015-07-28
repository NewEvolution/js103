var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a <div> element in your HTML
function domAdder (element, index, array) {
  $("#content").append("<div>" + element + "</div>");
  if(index === array.length -1) {
    $("#content").append("<hr>");
  }
};

planets.forEach(domAdder);

// Use the map method to create a new array where the first letter of each planet is capitalized
function capMaker (element) {
  var eleArr = element.split("");
  eleArr[0] = eleArr[0].toUpperCase();
  return eleArr.join("");
};

var cappedPlanets = planets.map(capMaker);
cappedPlanets.forEach(domAdder);

// Use the filter method to create a new array that contains planets with the letter 'e'
function eFinder (element) {
  if(element.indexOf("e") >= 0) {
    return element;
  }
};

var ePlanets = planets.filter(eFinder);
ePlanets.forEach(domAdder);

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];