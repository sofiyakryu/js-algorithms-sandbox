// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

const countUniqueValues = (arr) => {
	let uniqueValuesCounter = 1;

	if (arr.length === 0) {
		return 0;
	} else if (arr.length === 1) {
		return 1;
	} else {
		let left = 0;

		while (left <= arr.length - 2) {
			if (arr[left] !== arr[left + 1]) {
				uniqueValuesCounter++;
			} else {
				uniqueValuesCounter;
			}
			left++;
		}
		return uniqueValuesCounter;
	}
};

console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
