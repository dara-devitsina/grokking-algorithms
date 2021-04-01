//sort array of 2 elements:
function sort(elements) {
	if (elements[0] < elements[1]) {
		return elements;
	} else {
		const temp = elements[0];
		elements[0] = elements[1];
		elements[1] = temp;
		return elements;
	}
};

function quickSort(items) {
	if (items.length < 2) {
		return items;
	} if (items.length === 2) {
		return sort(items);
	} else {
		const pivot = items[Math.floor(items.length / 2)];
		const leftElements = [];
		const rightElements = [];
		for (let i = 0; i < items.length; i += 1) {
			if (items[i] < pivot) {
				leftElements.push(items[i]);
			} if (items[i] > pivot) {
				rightElements.push(items[i]);
			}
		}
		return [quickSort(leftElements), pivot, quickSort(rightElements)].flat();
	}

};

console.log(quickSort([7, 6, 3, 2, 5, 4, 1]))