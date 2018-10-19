var Array = [1, 2, 3, 4, 5, 6];

function searchArray(arr) {

// perform an action for each element in an array, in this example we search for a particular number
// and add it to an empty array variable

var Result = [];

arr.forEach(function(element) {
	
	if (element == 4){
  
		Result.push(element)
    
	} 

});

return Result;

}

searchArray(Array);
// expected output [4]
