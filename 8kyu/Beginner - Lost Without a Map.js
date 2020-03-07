Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.




// I solution - map method:

function maps(x){
  var newArr = x.map(function(i){
  return i*2;
})
  return newArr;
}



// II solution:

function maps(x){
  var i;
  var y=[];
  for(i = 0; i < x.length; i++){
    y[i] = x[i] * 2;
  }
  return y;
}