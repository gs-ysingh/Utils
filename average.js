function average(arr) {
	return arr.reduce((acc, current, index, array) => {
		if(index < array.length - 1) {
			return acc + current;
		}
		else {
			return (acc + current) / (index + 1)
		}
	}, 0)
}