function binarySearch(list, item) {
	let low = 0;
	let high = list.length - 1;

	while (low <= high) {
		let mid = (low + high) / 2;
		const guess = list[mid];
		console.log(mid);
		if (guess === item) {
			return mid;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}
console.log(binarySearch([1, 3, 5, 7, 9], 7))