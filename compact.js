function compact(arr) {
	return arr.filter(Boolean);
}

compact([1, 2, '', false, true, undefined])