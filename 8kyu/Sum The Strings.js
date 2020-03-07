//    Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
//
//      sumStr("4", "5")    // should output "9"
//      sumStr("34", "5")   // should output "39"
//    If either input is an empty string, consider it as zero.


    
    
    
// I solution
    
    function sumStr(a,b) {
  return String(+a + +b);
}

// II solution
function sumStr(a,b) {
  return (+a + +b)+ ""; 
}

// III solution
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}



// IV solution
function sumStr(a,b) {
  if (a == "" && b =="") {
    a = '0';
    b = '0';
  } else if (b == "") {
    b = '0';
  } else if (a == "") {
    a = '0';
  } else {}
 
 return String(parseInt(a, 10) + parseInt(b, 10));
  
}