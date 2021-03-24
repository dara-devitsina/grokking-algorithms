function findLargestNum(list) {
	if (list.length === 1) {
		return list[0];
	} if (list[1] > list[0]) {
		console.log(list);
		return findLargestNum(list.slice(1))
	}
};