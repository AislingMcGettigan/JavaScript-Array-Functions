//REVERSE NUMBERS IN ARRAY
function printReverse(arr){
	for(var i=arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
};
printReverse([1,3,4,5]);

//	CHECK IF ALL NUMBERS ARE THE SAME

function isUniform(arr){
var first = arr[0];
for(var i = 1; i<arr.length; i++){
	if(arr[i] !=== first)
		return false;
}
return true;
}

// SUM OF ARRAY

function sumArray(arr){
	var total = 0;
	arr.forEach( function(element) {
		total +=element;
	});
 	return total;
}

//GET MAX IN new Array
function getMax(arr){
	var max = arr[0];
	for(var i=0; i< arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}