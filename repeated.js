function repeated(arr) {
	return arr.reduce((acc, current) => {
		if(!acc[current]) {
			acc[current] = 1;
		}
		else {
			acc[current] = acc[current] + 1;
		}
		return acc;
	}, {});
}

repeated([11, 21, 16, 19, 46, 29, 46, 19, 21]);
// { '11': 1, '16': 1, '19': 2, '21': 2, '29': 1, '46': 2 }