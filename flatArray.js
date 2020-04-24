function flatArray(arr) {
	arr.reduce((acc, current) => {
		return acc.concat(current);
	}, [])
}

flatArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


