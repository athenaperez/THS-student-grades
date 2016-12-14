console.log("here I am")

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;
var array = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

function listStuff() {
	for (var i = 0; i < array.length; i++) {

		if(array[i] <= 60) {
			F++;
		} else if (array[i] <= 70 && array[i] >= 61) {
			D++;
		} else if (array[i] <= 80 && array[i] >= 71) {
			C++;
		} else if (array[i] <= 90 && array[i] >= 81) {
			B++;
		} else if (array[i] <= 100 && array[i] >= 91) {
			A++;
		}
	}
}



listStuff();

console.log("There are " + A + " 'A' grades")
console.log("There are " + B + " 'B' grades")
console.log("There are " + C + " 'C' grades")
console.log("There are " + D + " 'D' grades")
console.log("There are " + F + " 'A' grades")

console.log("The lowest grade is " + array.sort()[0] + ".");
console.log("The highest grade is " + array.sort() + ".");
