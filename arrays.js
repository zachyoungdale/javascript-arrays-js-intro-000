var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element) {
  return [...array, 'foo']
}
function accessElementInArray(array, index) {
  return array[element]
}
