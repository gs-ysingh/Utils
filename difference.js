function difference(source, target) {
	const map = target.reduce((acc, current) => {
		acc[current] = true;
		return acc;
	}, {});
	
	return source.reduce((acc, current) => {
		if(!map[current]) {
			acc = acc.concat(current);
		}
		return acc;
	}, []);
}

difference([1, 2, 3, 4, 5], [5, 2, 10])