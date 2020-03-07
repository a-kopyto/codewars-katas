Personalized greeting
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

        case	                   return
        name equals owner	      'Hello boss'
        otherwise	              'Hello guest'


// I solution:

function greet (name, owner) {
  return name == owner ? 'Hello boss' : 'Hello guest';
}


// II solution:

function greet (name, owner) {
  if (name == owner) {
  return 'Hello boss';
  } else {
  return 'Hello guest';
  }
}