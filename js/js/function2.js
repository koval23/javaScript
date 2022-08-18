/*
function sum(num1, num2=0) {
	return num1 + num2
}

console.log(sum(8))
*/

/*
function sum(...numbers) {
	console.log(numbers)
}

sum(4, 7, 9, 34, 3)
*/


// =>

/*
function test() {
	console.log('hello')
}
*/

//const display = name => console.log('hello', name)
//const display = (name, age) => console.log('hello', name, 'age', age)

//display("Egor", 12)
//display("Andrey", 43)

/*
function sum(num1, num2=0) {
	return num1 + num2
}
*/

//const sum = (num1, num2) => num1 + num2
/*
const sum = (num1, num2) => {
	return num1 + num2
}

console.log(sum(4, 6))
*/
//const books = [
//	{ name: '1', price: 25 },
//	{ name: '2', price: 20 },
//	{ name: '3', price: 15 },
//	{ name: '4', price: 10 },
//]
//найти среднее значение стоимости книг
//const mean = (arrBooks) => {
//	let sum = 0
//	for (book of arrBooks) {
//		console.log(book);
//		sum += book.price
//	}
//	return sum / books.length
//}
//console.log(mean(books));

//найти максимальную стоимость книги
//const maxNumber = (arrBooks) => {
//	let firstNumber = 0
//	for (book of arrBooks) {
//		if (book.price > firstNumber)
//			firstNumber = book.price
//	}
//	return firstNumber
//}
//console.log(maxNumber(books));

//найти минимальную стоимость книги
//const minNumber = (arrBooks) => {
//	let min = books[0].price
//	for (book of arrBooks) {
//		if (book.price < min) {
//			min = book.price
//		}
//	}
//	return min
//}
//console.log(minNumber(books));

//добавить книгу в масив
//let nameBook = prompt('введите название книги')
//let bookPrice = Number(prompt('введите цену книги'))

//const addBook = (name, price)=> {
//	const book = { name: name, price: price }
//	books.push(book)
//	return true
//}
//console.log(addBook(nameBook, bookPrice));
//===============================================
//====== function========


/*
console
console.log(console)


const math = {
	sum: function(x1,x2) {
		return x1+x2
	}
}

math.sum()
*/



//console.log()

/*
const arr = [1, 2, 3, 4, 5]
arr.push(6, 7, 8, 9, 10)
let finish = arr.pop()
arr.unshift(-5, -4, -3, -2, -1, 0)
let start = arr.shift()
console.log(arr, start, finish)
*/

//DZ - [1,2,3,4,5] - перевернуть массив

//const arr = [1, 2, 3, 4, 5]
//const idx = arr.indexOf(3)
//arr.splice(idx, 2)
//console.log(arr)




//===== перевернуть массив
//console.log(arr);
//arr.reverse()
//console.log(arr);

/*
let arr = [4, 5, 6, 8, 9]

let tmp = []
while (arr.length != 0) {
	tmp.push(arr.pop())
}

arr = tmp
console.log(arr)
*/
//========================

//arr.reverse()

//========================

//for (idx in arr) {
//	if (idx <= arr.length) {
//		arr.unshift(Number(idx) + 1)
//	}
//}
//arr.splice(5, 5)
//console.log(arr);

//=========================
//======= номер 2 ==================

/*
0. - Создать массив имен.
1. - Реализовать фунцию
2. - в которую отдается массив
3. - и отдается имя из масива одно любое
4. - из массива удаляется это имя.
5. - возвращается тру если получилось сделать удаление
6. - и возращается фолсе если нет
*/
//==========DZ START=========

//function deletNameFromArr(arr, name) {
//	for (value of arr) {
//		if (value.name == name) {
//			let idx = arrNames.indexOf(value)
//			arrNames.splice(idx, 1)
//			return true
//		}
//	}
//	return false
//}
//const arrNames = [
//	{ name: 'Andrey' },
//	{ name: 'Kola' },
//	{ name: 'Vova' },
//	{ name: 'Igor' },
//]
//for (nameValue of arrNames) {
//	console.log(nameValue.name)
//}
//console.log(arrNames);
//let nameDelete = String(prompt('введите имя'))
//const deletName = deletNameFromArr(arrNames, nameDelete)
//if (deletName == true) {
//	alert('имя ' + nameDelete + ' уделенно')
//} else {
//	alert('такого имени нет')
//}
//for (nameValue of arrNames) {
//	console.log(nameValue.name)
//}
//console.log(arrNames);

//==========DZ FINISH=========


//const numbers = [4, 8, 4, 1, 3, 6]

//console.log(numbers.indexOf(4, 3))

//numbers.splice(1, 1, 9, '5', '1')
//console.log(numbers)


//const names = ['Pasha', 'Kirill', 'Pasha', 'Anton', 'Pasha', 'Misha']

//names.splice(0, 1, '')
//names.splice(2, 1, '')

/*
for (let i = 0; i < names.length; i++) {
	if (names[i] == 'Pasha') {
		names[i] = ''
	}
}
*/

/*
for (const name of names) {
	if (name == 'Pasha') {
		names.splice(names.indexOf(name), 1, '')
	}
}
*/

//slice

//const names = ['Pasha', 'Kirill', 'Pasha', 'Anton', 'Pasha', 'Misha']

//console.log(names.slice(1, 3))

//console.log(names);

//let nums1 = [1, 2, 3, 4, 5]
//let nums2 = [6, 7, 8, 9, 10]
/*
let res = []

for (const num of nums1) {
	res.push(num)
}
for (const num of nums2) {
	res.push(num)
}
*/

//const res = nums1.concat(nums2, ['1', '2', '3'], 5, 5)
//const res = [].concat(nums2, ['1', '2', '3'], 5, 5)

//console.log(res)
//console.log(nums1)
//console.log(nums2)
//====#1============


/*
Пользователь вводит слово.
Разрезать слово по полам и поменять начало
с концом
Пример:
a n d r e y
r e y a n d
*/
//let name1 = ['a','n','d','r','e','y']
//name1.length     -> 4-1  -> 1 - 3
//name1.length / 2 -> 2-1  -> 0 - 1

////console.log(name1);
//function name(name) {
//	let x = name1.length/2
//	for(num of x){

//	}
//}

//name(name1)

//====================
//узнать длину масива
//let name1 = ['a', 'n', 'd', 'r', 'e', 'y']
//let name2 = ['qqqwww']

//function y(arr1) {
//	let arrName = arr1[0].length / 2
//	let x1 = []
//	let x2 = []
//	for (let i = 0; i < arrName; i++) {
//		x1 += arr1[0][i]
//	}
//	for (let i = arrName; i < arr1[0].length; i++) {
//		x2 += arr1[0][i]
//	}
//	name2 = [x2 + x1]
//	console.log(name2);
//}
//y(name2)


//let q = []
//for (letter of name1) {
//	q.unshift(letter)
//}
//console.log(q);

/*
let name = 'andrey'
name = Array.from(name)
const first = name.splice(0, name.length / 2)
const second = name.splice(0, name.length)
name = name.concat(second, first)
name = name.join('')
console.log(name)
*/

/*
Запросить у пользователя текст
Посчиттаь количество слов в нем.
*/

/*
let text = prompt('введите текс')
let wordsArray = Array.from(text)
let lengs = 0

for (letter of wordsArray) {
	console.log(letter)
	if (letter == ' ') {
		console.log('q')
		lengs += letter
	}
}

console.log(`Количество слов: ${lengs.length}`);
*/
//Количество слов: 3

//ARRAY, STRING, OBJECT, OOP FUNC, OOP CLASS, DOM, REACT,
//TS

//console.log(name1);

//function x(arr) {
//	let leng = arr.length / 2
//	if (leng % 2 == 0) {
//		newArr(leng, arr)
//	} else {
//		let num = Math.round(leng)
//		newArr(num, arr)
//	}
//}
/*
function x(arr) {
	let leng = arr.length / 2
	if (leng % 2 == 0) {
		let num2 = []
		let splice = arr.splice(0, leng)
		let splice2 = arr.splice(0, leng)
		let revers = splice.reverse()
		let revers2 = splice2.reverse()
		num2 = [revers + ',' + revers2] // [[','],[',']]
		console.log(num2);
	}

	else {
		let num = Math.round(leng)
		let splice = arr.splice(num, arr.leng)
		console.log('hello');

	}
}
*/
/*
function newArr(lengs, arr) {
	let num1 = []
	let num2 = []
	for (let i = 0; i < lengs; i++) {
		num1.push(arr[i])
	}
	for (let i = lengs; i < arr.length; i++) {
		num2.push(arr[i])
	}
	name1 = [num2 + ',' + num1]
}
*/
//function newArr(lengs, arr) {
//	let num1 = []
//	let num2 = []
//	for (let i = 0; i < lengs; i++) {
//		num1 += arr[i]
//	}
//	for (let i = lengs; i < arr.length; i++) {
//		num2 += arr[i]
//	}
//	name1 = [num2 + num1]
//}

//x(name1)
//console.log(name1);

//console.log(name1);

//x(name1)
//console.log(name1);


//==============#2=======

/*
Взять массив имен где был Паша
Удалить всех Паш.
*/
//const names = ['Pasha', 'Kirill', 'Pasha', 'Anton', 'Pasha', 'Misha']
//for (nameConsol of names) {
//	console.log(nameConsol);
//}
//let nameDelet = prompt('введите имя которое нужно удалить')
//function deletNameArr(arr, nameDelet) {
//	for (doubleName of arr) {
//		if (doubleName == nameDelet) {
//			arr.splice(arr.indexOf(doubleName), 1)
//		}
//	}
//}
//deletNameArr(names, nameDelet)
//console.log(names);
//================


//const numbers = [3, 7, 6, 3, 4, 2]

/*
for (let num of numbers) {
	if (num == 2) {
		num = 5
	}
}
*/

/*
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] == 2) {
		numbers[i] = 5
	}
}
*/

/*
numbers.forEach((num, idx, arr) => {
	if (num == 2) {
		arr[idx] = 5
	}
})

console.log(numbers)
*/

/*
numbers.forEach(function (num, idx, array) {
	console.log(num, idx, array)
})
*/



/*
3) Cоздать функцию, которая принимает строку имен, разделенную через пробел
И принимает имя. Удаляет все повторения веденного имени из строки и
возвращает новую строку
Пример:
const res = delNames('Pasha Dasha Pasha Masha','Pasha')
console.log(res) // 'Dasha Masha'
*/
//====================================================
/*
let names = prompt('введите имена')
let nameDelet = prompt('введите имя какое нужно удалить')

function deletName(namesString, nameDelet) {

	let namesArr = namesString.split(' ')
	namesArr.forEach((name, idx) => {
		if (name == nameDelet) {
			namesArr.splice(idx, 1)
		}
	});

	console.log(namesArr);
}

while
deletName(names, nameDelet)
*/
//====================================================


//2) Cоздать массив чисел, все четные числа возвести в куб.
/*
function numberIsCube(arr) {
	arr.forEach((num, idx) => {
		if (num % 2 == 0) arr[idx] = Math.pow(num, 3);
	});
}

const numbers = [1, 4, 5, 22, 7, 6, 25, 4,]
numberIsCube(numbers)
console.log(numbers)
*/
//==========================================




//1) Пользователь вводит текст, посчитать количество каждого слова в тексте
/*
hello world hello wo r ld hello qwe qwe
hello - 3
world - 1
wo - 1
r - 1
ld - 1
qwe -2
*/
//==========================================
//let text = prompt('ввведите текст')

/*
function countWord(string) {
	let worldsCount = {}
	let worldsArray = string.split(' ')

	for (world of worldsArray) {
		if (worldsCount[world]) {
			worldsCount[world] = worldsCount[world] + 1
		} else {
			worldsCount[world] = 1
		}
	}

	return worldsCount
}

let text = prompt('ввведите текст')
const res = countWord(text)
for (const key in res) {
	console.log(key, res[key])
}
*/


//for (letter of wordsArray) {
//	console.log(letter)
//	if (letter == ' ') {
//		console.log('q')
//		lengs += letter
//	}
//}




//==========================================
//INCLUDES, FIND

/*
const names = ['Pasha', 'Anton', 'Misha']
console.log(names.includes('Anton'))
*/

/*
const users = [{ name: 'Pasha', age: 25 }, { name: 'Anton', age: 32 }]
const user = users[0]
console.log(users.includes(user))
*/

/*
const names = ['Pasha', 'Anton', 'Misha']

const name = names.find((n) => {
	if (n == 'Anton') {
		return true;
	}
})

console.log(name)
*/
//const users = [{ name: 'Pasha', age: 25 }, { name: 'Anton', age: 32 }]

//const user = users.find(u => {
//	if (u.name == "Anton") {
//		return true
//	}
//})

//console.log(user)

//let user = [
//	{ name: 'Pasha', age: 25 },
//	{ name: 'Roma', age: 25 },
//	{ name: 'Kola', age: 25 },
//	{ name: 'Vana', age: 25 },
//]
//if (user.includes(user.name)) {
//	console.log('yes');
//} else {
//	console.log('no');

//}


/*
const names = ['Pasha', 'Roma', 'Kola', 'Vana']

const name = names.find((n) => n == 'Kola')

console.log(name)
*/

//FILTER
/*
let users = [
	{ name: 'Pasha', age: 17 },
	{ name: 'Roma', age: 25 },
	{ name: 'Kola', age: 16 },
	{ name: 'Vana', age: 28 },
]

let usersAvarange = users.filter((user) => user.age > 18)
console.log(usersAvarange);

//let name = user.find((n) => n.name == 'Pasha')
//console.log(name);
*/


//findIndex
/*
let users = [
	{ name: 'Pasha', age: 17 },
	{ name: 'Roma', age: 25 },
	{ name: 'Kola', age: 16 },
	{ name: 'Vana', age: 28 },
]
*/
//console.log(users.indexOf({ name: 'Kola', age: 16 }))

//const idx = users.findIndex(user => user.name == 'Kola')
//users.splice(idx, 1)
/*
let newUser = []
for (user of users) {
	if (user.name != 'Kola') {
		newUser.push(user)
	}
}
users = newUser
console.log(users);
*/

/*
users = users.filter(item => item.name != 'Pasha')
console.log(users)
*/


/*
let names = ['Pasha', 'Roma', 'Kola', 'Vana']

names = names.map((name, idx) => {
	if (idx % 2 == 1) {
		return name.toUpperCase()
	}
	return name
})
console.log(names)
*/

let users = [
	{ name: 'Pasha', age: 17 },
	{ name: 'Roma', age: 25 },
	{ name: 'Kola', age: 16 },
	{ name: 'Vana', age: 28 },
]



/*
	[
		{ name: 'Pasha', age: 17, sucesses: false },
		{ name: 'Roma', age: 25, sucesses: true}
		...
	]
*/

users = users.map((user) => {
	if (user.age > 18) {
		user.sucesses = true
		return user
	}
	user.sucesses = false
	return user
})

console.log(users)

/*
users = users.map((user) => {
	return user.name
})

console.log(users);
*/