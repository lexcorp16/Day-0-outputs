function fizzBuzz(num){
	var numberDivisibleBy3 = (num%3 === 0);
	var numberDivisibleBy5 = (num%5 === 0);

	if ( numberDivisibleBy3 && numberDivisibleBy5){
		return "FizzBuzz";
	}
	else if (numberDivisibleBy3){
		return "Fizz";
	}
	else if (numberDivisibleBy5){
		return "Buzz";
	}
	else{
		return num;
	}
}


