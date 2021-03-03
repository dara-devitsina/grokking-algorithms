function countElements(list) {
	if (list.length === 0) {
		return 0;
	} else {
		return 1 + countElements(list.slice(1))
	}
};
