// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
//if multiple classes are given as arguments, store them in an array
  var classNames = String.prototype.split.call(className, " ");
  //array to store the selected elements
  var resultElement =[];

  var checkForClass = function(element){
  	//if element has classes
  	if(element.classList){
  		//check whether the element's classes match the class names in the classNames array
  		var result = true;
  		for(var i = 0; i < classNames.length; i++)
			result = result && element.classList.contains(classNames[i])
		//result returns true only if the element's classes contains all the classes asked for, then push it into the array returned
		if(result)
			resultElement.push(element);
  	}
  	//if element has children, run the recursive function on each of the child nodes
  	if(element.childNodes){
  		var children = element.childNodes;
  		for(var i = 0; i < children.length;i++)
  			checkForClass(children[i]);
  	}
  	return resultElement;
  };
  return checkForClass(document.body);
};
