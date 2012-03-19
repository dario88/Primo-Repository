/**
* apply
* apply the given function to the given value
*
* @param {Function}
*
*/
// [f, x] -> [apply] -> f(x)
var apply = function(array) {
	return array[0](array[1]);
}


/**
* aa
* applay the given function to each element of the given array
*
* @param {Function} f function
* @return {Function}
*	@param {Mixed}
*/
var aa = function(f) {
	return function(array) {
		return array.map(f);
	}
}


/**
* comp2
* rerurns the composition of the given functions
*
* @param {Array} function array of function to compose
* @param {Function} [function[0]] f
* @param {Function} [function[1]] g
* @return {Function} the composition of the given functions
*/
// comp2([f, g])(x) -> f(g(x))
var comp2 = function(arrayFandG) {
	return function(x) {
		return arrayFandG[0](arrayFandG[1](x));
	}
}

// compone n funzioni
// comp([f, g, h]) -> (x) -> f(g(h(x)))
var comp = function(arrayNfunzioni) {
	return function(x) {
		return arrayNfunzioni.reduce(function(f, g) {
			return function(x) {
				return f(g(x));
			};
		});
	};
}
/**
var comp = function(array) {
	return function(x) {
		return array.reduce(comp2);
	};
}
*/



// cons
// [f, g, h] -> (x) -> [f(x), g(x), h(x)]
var cons = function(arrayFunzioni) {
	return	function(x) {
		return arrayFunzioni.map(function(item) {
			return item(x);
		});
	}
}



// distribute left
// ['a', [0,1,2,3]] -> [['a', 1], ['a', 2], ['a', 3]]
var distl = function(array) {
	var primo = array[0];
	var secondo = array[1];
	return secondo.map(function(item) {
		return [primo, item];
	})
}



// trans: trasposta
// trans([[0,1,2], [3,4,5], [6,7,8]]) -> [[0,3,6], [1,4,7] [6,7,8]]
var trans = function(matrice) {
	var result = [];

	matrice.forEach(function(row, i) {
		row.forEach(function(value, j) {
			(result[j] = result[i] || [])[i] = value;
		});
	});
	return result;
}