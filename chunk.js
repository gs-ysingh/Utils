function chunk(arr, size) {
	let len = arr.length;
	let result = [];
	let index = 0;
	for(let i = 1; i <= len; i++) {
		if(!result[index]) {
			result[index] = [];
		}
		result[index].push(arr[i - 1]);
		if(i % size === 0) {
			index++;
		}
	}
	return result;
}

chunk([1, 2, 3, 4, 5], 2)
[[1, 2], [3, 4], [5]]