//======= 18.08.2022 =========
//splice , slice , forEach , includes, find , filter , findIndex , map,  push, pop , shift ,  unshift ,
// indexOf

//методы

/*
* добавлем и извлекаем елементы

pop - удаляет елемент из конца(возвращает удаленный елемент)

push - добавляет елемент в конец масива

shift -  удаляет значение из начала масива и переиндексирует масив (возвращает удаленный елемент)

unshift - добавляет елемент в начало масива и переиндексирует масив (возвращает новую длину масива)

*/

/*
* вырезаем елементы из масивов

splice -
slice(num, num2) -  не меняет исходный масив , копирует исходный масив начиная с числа которое задано в
						  параметре первым(num), и до числа заданого вторым(num2)
						  slice МОЖНА ПРИМЕНЯТЬ К СТРОКЕ
! ДЛЯ ЧЕГО НУЖЕН SLICE
! ЕСЛИ НЕОБХОДИМО СОЗДАТЬ МАСИВ НА ОСНОВЕ ИСХОДНОГО НЕ ИЗМЕНЯЯ ИСХОДНЫЙ И СКОПИРОВАТЬ ТУДА
! ПОСЛЕДОВАТЕЛЬНО ЕЛЕМЕНТЫ (копирует от первого включительно до второго не включительно)

*/



/*
* перебор масивов

indexOf- возврвщает индек елемента
forEach -
filter - возвращает елемент если он true
map - возвращает измененный елемент масива
includes - возвращает елемент

*/
//==================================================
//*фильтрация по диапазону 'на месте'

//let arrNum = [5, 3, 4, 5, 6, 7,]

function filterRangeInPlace(arr, a, b) {
	arrNum = arr.filter((num, index) => {
		if (a > 0 && b < arrNum.length) {
			if (a <= index && b >= index) {
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	})
	return arrNum
}
//filterRangeInPlace(arrNum, 1, 2)
//console.log(arrNum);

//================================================
//*фильтрация по диапазону
//let arrNum = [5, 3, 4, 9, 10, 11, 12, 13, 14, 15, 6, 7,]

function filterRange(arr, a, b) {
	if (a > 0 && b < arrNum.length) {
		arr = arr.filter(num => {
			if (num >= a && num <= b) {
				return true
			} else {
				return false
			}
		})
	}
	return arr
}

//console.log(filterRange(arrNum, 3, 9));
//================================================
//*скопировать и отсортировать
//const arrStr = ['HTML', 'CSS', 'JavaScript']

//function copySorted(arr) {
//	let copyArr = arr.slice(0, arr.length)
//	return copyArr.sort()
//}

//let copySorted2 = copySorted(arrStr)
//console.log(copySorted2);//возращает новый отсортированый массив
//console.log(arrStr);//возвращает старый масив
//===================================================
//* трансформировать массив имен
//let users = [
//	{ name: 'Pasha', age: 17 },
//	{ name: 'Roma', age: 25 },
//	{ name: 'Kola', age: 16 },
//	{ name: 'Vana', age: 28 },
//]
//console.log(users);

//let names = users.reduce((accum, item) => {
//	return accum.concat(item.name);
//}, [])
//console.log(names);

//==================================================
//*трансформировать в обэкт

//let users = [
//	{ name: 'Pasha', suirname: 'Пупкин', id: 1 },
//	{ name: 'Kolya', suirname: 'Иванов', id: 2 },
//	{ name: 'Vova', suirname: 'Петров', id: 3 },
//]
//let usersMapped = users.map(user => ({
//	fullName: `${user.name} ${user.suirname}`, id: user.id
//}))

//console.log(usersMapped);

//==================================================
//* получить средний возраст

//let users = [
//	{ name: 'Pasha', age: 17 },
//	{ name: 'Roma', age: 25 },
//	{ name: 'Kola', age: 16 },
//	{ name: 'Vana', age: 28 },
//]

function getAveregeAge(arr) {
	averegeNum = arr.reduce((accum, item) => {
		return accum + item.age
	}, 0)
	return averegeNum / arr.length
}

//console.log(getAveregeAge(users));

//==================================================
//* оставить уникальные елементы массива

//let arrStr = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-0']

function unique(arr) {
	let uniqueStr = arr.filter((str, ind, array) => {
		if (array.indexOf(str) === ind) {
			return true
		}
	})
	return uniqueStr
}

//console.log(unique(arrStr));
//!====================================
//console.log(Array.from(new Set(arrStr)));
//!====================================

//==========================================
//* практика

//let arrNum = [5, 3, 4, 5, 6, 7,]

let arrStr = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-0']

let users = [
	{ name: 'Pasha', age: 17 },
	{ name: 'Roma', age: 25 },
	{ name: 'Kola', age: 16 },
	{ name: 'Vana', age: 28 },
]

//console.log(result);
//dir - параметр который поможет выбирать напрвление сортировки

function sortArray(arr, prop, dir = false) {

	let result = arr.sort((a, b) => {

		let dirIf = a[prop] < b[prop];

		if (dir == true) dirIf = a[prop] > b[prop]

		if (dirIf == true) return -1;

	})

	return result

}
console.log(sortArray(users, 'age', true));