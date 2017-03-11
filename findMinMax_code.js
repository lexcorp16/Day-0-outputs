function findMinMax(arr){
/*solves the problem of finding the minimum and maximum value in
an array using the built in array.reduce method*/
	var max = arr.reduce(function(a, b) {
    	return Math.max(a, b);
	});

	var min = arr.reduce(function(a, b) {
    	return Math.min(a, b);
	});
	if (min === max){
		return [min];
	}
	else{
		return [min, max];
	}
}