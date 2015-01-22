// Even Fibonacci numbers
// Problem 2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

//Step 1: create array of Fibonacci numbers up to 4 million.

var fibArray = [1, 2];
var a = 1;
var b = 2;

while (b <= 4000000) {
	c = a + b;
	fibArray.push(c);
	a = b;
	b = c;
}

return fibArray;

// Step 2: add up all the even numbers in the array.
// Need sum variable.
// Need to ignore cells with odd numbers, or remove them from array.
//pseudocode:
// var total = 0;
//function evenSum (fibArray) {
// 	for (length of array) {
// 		if (number is odd) {
// 			change number to 0 or undefined;
// 		} else (number is even) {
// 			leave it alone
// 		} 
// 	return fibArray;
// 	total = total + fibArray[i];
// 	}

// }

var total = 0;

function evenSum(fibArray) {
	for (i = 0; i <= fibArray.length; i++) {
		if (fibArray[i] % 2 != 0) {
			fibArray[i] = undefined;
			return fibArray;
		}
	total = total + fibArray[i];
	}
return fibArray;	
}

evenSum(fibArray);

console.log(total);

//this doesn't seem to be working, so I will try seperating out into two functions in next version.




