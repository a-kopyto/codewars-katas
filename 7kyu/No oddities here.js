//    ***  No oddities here  ***
//
//
//Write a small function that returns the values of an array that are not odd.
//
//All values in the array will be integers. Return the good values in the order they are given.
//
//    function noOdds( values )





// I solution:

function noOdds( values ){
isEven = (num) => num % 2 == 0;
newArr = values.filter(isEven);

return newArr;
}










// II solution:

function noOdds( values ){
let newArr = [];
  for (i = 0; i < values.length; i++) {
    if (i % 2 == 0) {
    newArr.push(i);
    }
  }
  return newArr;
}