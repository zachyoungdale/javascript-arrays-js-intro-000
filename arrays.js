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
  return array[3]
}
