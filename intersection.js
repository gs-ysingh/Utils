const intersection = (...args) => {
	return args.reduce((acc, current) => {
		let map = acc.reduce((a, b) => {
			a[b] = true;
			return a;
		}, {});

		return current.filter((item) => {
			return !!map[item];
		})
	});
}

intersection([1, 2, 3], [3, 4, 5], [3])