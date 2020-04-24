const flattenDeep = (arr) => {
	return arr.reduce((acc, current) => {
		if(Array.isArray(current)) {
			return acc.concat(flattenDeep(current));
		}
		return acc.concat(current);
	}, []);
}

flattenDeep([1, [2, [3, [4]]], [5, [6, [7]]]])