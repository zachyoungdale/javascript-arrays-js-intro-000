var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return ['foo', ...array]
}
function addElementToEndOfArray(array, element) {
  return [...array, "foo"]
}
function destructivelyAddElementToEndOfArray(array, element) {
  return [...array, 'foo']
}
function accessElementInArray(array, index) {
  var array = [1, 2, 3]
  return array[3]
}
