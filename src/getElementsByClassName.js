// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // get the starting node
  var node = arguments[1] || document.body;
  // declare an empty array to hold the results
  var result =[];
  //split class strings into an array
  var classes = node.className.split(' ');

  // check if the current node has className
  if(classes.indexOf(className) >= 0){
    // push the node into result array
    result.push(node);
  }

  // check if the current node has children
  if(node.children){
    //iterate through each child
    for(var i = 0;i< node.children.length;i++){
      var child = node.children[i];
      //concat the result of getElementsByClassName function on each child
      result = result.concat(getElementsByClassName(className, child))
    }
  }
  //return result array
  return result;
}
