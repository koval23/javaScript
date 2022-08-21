/*

* ============== примери масивов ==============


let numbers = [1, 4, 5, 22, 7, 6, 25, 4,];

let arrInArray = [[1,2,3],[4,5,6],[7,8,9]]

let users = [
	{ name: 'Pasha', age: 17 },
	{ name: 'Roma', age: 25 },
	{ name: 'Kola', age: 16 },
	{ name: 'Vana', age: 28 },
]

*/

//=========== REDUCE ===============

let a = [2, 4, 3, 5, 8, 22, 7, 3];
//console.log(a);
//=================================

const mean = (a) => {

	let total = a.reduce((accum, item) => {
		return accum + item
	}, 0)
	return total / a.length;
}
console.log(mean(a));

//=================================

//let b = a.reduce((accum, item, index) => {

//	console.log(accum);

//	if (item > accum[1]) {

//		return [index, item]; // accum = [index, item]

//	}
//	return accum

//}, [0, a[0]])

//console.log(b);

//======================================

//let arrInArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//let c = arrInArray.reduce((accum, item) => {

//	return accum.concat(item)

//}, [])

//console.log(c);










//let w = [
//	{ name: 'Pasha', age: 13 },
//	{ name: 'Kola', age: 27 },
//	{ name: 'Vana', age: 17 },
//	{ name: 'Vova', age: 24 },
//]



//let b = a.reduce((accum, item) => {
//	console.log(accum);
//	return accum + item

//}, 0)
//console.log(b);



//let sum = 0
//for (let i = 0; i < a.length; i++) {
//	sum += a[i]
//}
//console.log(sum);

//let max = a[0]
//for (let i = 0; i < a.length; i++) {
//	console.log(a[i]);
//	if (a[i] > max) {
//console.log(a[i]);
//max = a[i]
//console.log(max);
//	}
//}
//console.log(max);

//let b = a.reduce((accum, item) => {
//	if (accum < item) {
//		console.log(accum);
//		return item
//	} else {
//		return accum
//	}

//})
//console.log(b);
//===============================
//let accum = [0, [a[0]]]

//let b = a.reduce((accum, item, index) => {
//	if (item > accum[1]) {
//		return [index, item];
//	} else {
//		return accum
//	}
//}, [0, a[0]])
//console.log(b);


//=============================


// до старта reduce равно нулевой елемент масива
// если мы ек укажем сами


//let arrInArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//console.log(arrInArray);

//let newArr = arrInArray.reduce((accum, item) => {

//	return accum.concat(item);
//}, [])

//console.log(newArr);





//console.log('=============');
//console.log(b);
