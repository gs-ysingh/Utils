function set(obj, path, value) {
	let keys = Array.isArray(path) ? path : path.replace(/(\[(\d)\])/g, '.$2').split('.');
	if(keys.length === 1) {
		obj[keys[0]] = value;
	}
	else {
		obj[keys[0]] = obj[keys[0]] || {};
		set(obj[keys[0]], keys.slice(1), value);
	}
}

var object = {};
set(object, 'a[0].b.c', 11);

// {
// 	"a":{
// 		 "0":{
// 				"b":{
// 					 "c":11
// 				}
// 		 }
// 	}
// }