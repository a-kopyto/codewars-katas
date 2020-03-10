//***     Alternate capitalization    ***  
//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//The input will be a lowercase string with no spaces.
//Good luck!
    

    
// I solution:


function capitalize(s){
  let even  = s.split('').map((x, i) => i%2==0 ? x.toUpperCase() : x);
  let odd   = s.split('').map((x, i) => i%2!=0 ? x.toUpperCase() : x);
  
  
  return [even.join(''), odd.join('')];
};
    
    
    
    
// II solution:
    
function capitalize(s){
  let newArr = s.split('');
  let odd = [];
  let even = [];
  
  //even
  for (i = 0; i < newArr.length; i++) {
    if (i % 2 == 0) {
      even.push(newArr[i].toUpperCase());
      } else {
        even.push(newArr[i]);
        }
    }
  
  //odd
  for (i = 0; i < newArr.length; i++) {
    if (i % 2) {
      odd.push(newArr[i].toUpperCase());
      } else {
        odd.push(newArr[i]);
        }
    }
  
  
  return [even.join(''), odd.join('')];
};

