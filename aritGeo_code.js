function aritGeo(arr){
	var firstItem = arr[0];
	var diff = arr[1] - firstItem;
	var ratio = arr[1]/firstItem;
	var typeOfSequence;

	if (arr.length === 0){
		return 0;
	}
	
    for (var i = 1; i < arr.length; ++i) {
        if ((firstItem += diff) == arr[i]){
            typeOfSequence = "Arithmetic";
        }
        else if ((arr[i-1] * ratio) == arr[i]){
            typeOfSequence = "Geometric";
            
        }
        else{
        	return -1
        }
    }

    return typeOfSequence;
	
}