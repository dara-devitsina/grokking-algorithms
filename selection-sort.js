function findSmallest(arr) {
	let smallest = arr[0];
	let smallestIndex = 0;
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
};

function selectionSort(arr) {
	const sortedArr = [];
	while (arr.length !== 0) {
		const smallestEl = findSmallest(arr);
		sortedArr.push(arr[smallestEl]);
		arr.splice(smallestEl, 1);
	}
	return sortedArr;
}