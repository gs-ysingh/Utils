function get(obj, path, defaultValue) {
	let keys = Array.isArray(path) ? path : path.replace(/(\[(\d)\])/g, '.$2').split('.');
	if(keys.length == 1) {
		return obj[keys[0]] || defaultValue;
	}
	else {
		return get(obj[keys[0]], keys.slice(1), defaultValue);
	}
}

var object = { 'a': [{ 'b': { 'c': 3 } }] };
var object2 = { 'a': { 'b': { 'c': 10 } } };

get(object, 'a[0].b.c'); //3
get(object2, 'a.b.c'); //10