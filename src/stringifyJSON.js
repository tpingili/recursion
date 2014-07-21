// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  //Wrap strings in quotes as per JSON specs
  if(typeof obj === 'string'){
    return '"'+obj+'"';
  }
  //temp array used to hold Array and Object results.
  var result =[];

  //Check if obj is an array
  if(Array.isArray(obj)){
    //Iterate over each element of the array
    for(var i = 0; i < obj.length; i++ ){
      //Stringify element and add to result array.
      result.push(stringifyJSON(obj[i]));
    }
    //wrap the array with the square brackets and convert it into a string
    return '[' + result + ']';
  }
  //check if obj is an object and not null
  if(typeof obj === 'object' && obj !== null){
    //iterate through each key value pair
    for(var key in obj){
      //if the value is not a function or undefined
      if(!(typeof obj[key] === 'function' || obj[key] === undefined)){
        //stringify the key and value and add it to result array
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    //wrap the array with curly brackets and convert it into a string
    return '{' + result + '}';
  }
  //return obj coerced into a string
  return ''+obj;
};
