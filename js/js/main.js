

/*
boolean, NaN, undefined, number(int,float),string, object, null
*/

//let num;
//Not a Number isNaN() -> boolean

/*
let age = prompt('Enter age:')
age = Number(age)
if (isNaN(age)) {
	console.log("It`s not a number")
} else {
	console.log(age * 2)
}
*/

/*
console.log(Number("313.2g"))
console.log(parseInt("313.2g"))
console.log(parseFloat("313.2g"))
console.log(4 + (+"313.2"))
*/
//let x = 4;
//console.log(++x) // Инкремент


/*
Запросить 2 числа у пользователя
Найти среднее значение двух чисел
Если среднее значение больше 5
вывести в алерт - Выполненно
В противном же случае
Вывести в алерт - еррор
Предусмотреть ошибку ввода букв
*/

//isNaN(NaN) -> true    isNaN(3,'3',true) -> false

/*
const num1 = Number(prompt('введите первое число'));
const num2 = Number(prompt('введите второе число'));
const result = (num1 + num2) / 2;
result > 5 ? alert('выполнено') : alert('error')
if (isNaN(result)) {
	alert('вы ввели буквы')
}
*/

//for, while, do while, for of, for in

//Обсудить %

// 7 % 4 -> 7 - 4 = 3
// 7 % 3 -> 7 - 6 = 1
// 10 % 2 -> 10 - 10 = 0
// 9%4 = 9 - 8 = 1
/*
for (let i = 5; i <= 10; i++) {
	//prompt if for alert
	if (i % 2 == 0) {
		console.log(i)
	}
}
*/

/*
let i = 5
while(i <= 10) {

	i++;
}
*/

/*
	>> Enter text: hello
	<< hello
	>> Enter text: Pasha
	<< Pasha
	>> exit
	<< Goodbye
*/

/*
let i = prompt('');
alert(i)

while (i != "exit") { //'exit' != 'exit'
	i = prompt('')
	alert(i)
	if (i == "exit") {
		alert("goodbye")
	}
}
*/


/*
ДЗ с проверками на букву выше
for, while Повторение
ДЗ с while
Запросить у пользователя 2 числа от и до
И выводить каждое третье значение
Пример:
>> 4
>>17
4 7 10 13 16
Темы:
Do while,Массивы,for of


//1) Создать программу для посчета тормозного пути.
/*
Запрашиваешь у пользователя скорость движения
Тип асфальта
Вывести тормозной путь
Предусмотреть ввод букв !!!
*/
//============= задача 1 =====================
/*

проверить на буквы!!!!

const speedAuto = Number(prompt('введите скорость:'));
const type = prompt('введите покрытия:');
let numType;

if (type == 'лед') {
	numType = 0.1;
} else if (type == 'снег') {
	numType = 0.2
} else if (type == 'влага') {
	numType = 0.4
} else if (type == 'чисто') {
	numType = 0.7
}

console.log(numType)

const S = (1 / (254 * numType)) * (speedAuto ** 2)
alert(S)
*/








//2) Запросить у пользователя 2 числа и запустить цикл в заданном диапозоне
/**
	>> 4
	>> 12

	4
	5
	6
	7
	8
	9
	..
	12
 */
//============= задача 2 =====================
//const num1 = Number(prompt('введите число 1')); //8
//const num2 = Number(prompt('введите число 2')); // 4


//if (num1 < num2) {
//	for (let i = num1; i <= num2; i++) {
//		console.log(i);
//	}
//} else {
//	for (let i = num1; i >= num2; i--) {
//		console.log(i);
//	}
//}


//================== задача №3===========
//const num1 = Number(prompt('введите число 1')); //8
//const num2 = Number(prompt('введите число 2')); // 4


//if (num1 < num2) {
//	for (let i = num1; i <= num2; i++) {
//		if (i % 3 === 0) {
//			console.log(i);
//		}
//	}
//} else {
//	for (let i = num1; i >= num2; i--) {
//		console.log(i);
//	}
//}
//========================
/*
const num1 = Number(prompt('введите число 1')); //8
const num2 = Number(prompt('введите число 2')); // 4


if (num1 < num2) {
	let i = num1;
	while (i <= num2) {
		if (i % 3 === 0) {
			console.log(i);
		}
		i++
	}
} else {
	let i = num1;
	while (i >= num2) {

		if (i % 3 === 0) {
			console.log(i);
		}
		//console.log(i)
		//i -= 3
	}
}

*/


//for (let i = 100; i >= 10; i /= 2)
//	console.log(i)


//================= урок 3

/*

do {
	console.log(1)
} while (false)


while (false) {
	console.log(1)
}
*/

/*

let exit = false;
do {
	console.log("1 - посмотреть среднее значение")
	console.log("2 - посмотреть минимальное значение")
	console.log("3 - посмотреть максимальное значение")
	console.log("4 - Выйти")
	const menu = prompt("Пункт:")
	if (menu == '1') {

	} else if (menu == '4') {
		exit = true
	}
} while (exit == false)

*/

//min = arr[0]
//const arr = [7, 5, 3, 9]
/*
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i])
}
*/
/*
let i = 0;
while (i < arr.length) {
	console.log(arr[i])
	i++
}
*/
/*
arr[2] = 'hello'
arr[4] = true
arr[arr.length] = false
arr.unshift(10)
console.log(arr)
console.log(arr[3])
console.log(arr.length)
*/


//const numbers = [7, 5, 2, 4, 8, 9, 1, 2, 3, 1, 6]
//let exit = false;
//do {
//	console.log("1 - посмотреть сумму значений")
//	console.log("2 - посмотреть среднее значение")
//	console.log("3 - посмотреть минимальное значение")
//	console.log("4 - посмотреть максимальное значение")
//	console.log("5 - Выйти")
//	const menu = prompt("Пункт:")
//	if (menu == '1') {
//		let sum = 0
//		for (let i = 0; i < numbers.length; i++) {
//			sum += numbers[i] //sum = sum + numbers[i] 0+7  7+5  12+2 ...
//		}
//		console.log(sum)
//	}
//	else if (menu == '2') {
//		let sum = 0
//		for (let i = 0; i < numbers.length; i++) {
//			sum += numbers[i]
//		}
//		console.log(sum / numbers.length)
//	}


//	else if (menu == '3') {

//		console.log(Math.min(...numbers)); ... - spread оператор Math.min(6,3,7,8,1,2)
//	}
//	else if (menu == '4') {

//		console.log(Math.max(...numbers));
//	}
//	else if (menu == '5') {
//		exit = true
//	}
//} while (exit == false)
/*
let arr = [6, 5, 1, 3, 4]
let min = arr[0]
for (let i = 0; i < arr.length; i++) {
	if (min > arr[i]) {
		min = arr[i]
	}
}
console.log('min', min)
*/
//while, do while, for, if, for of, arr

//let p = document.querySelector('.p1');
//let tmp = '';
//for (let i = 4; i <= 40; i++) {
//	tmp = tmp + i + ' ';
//}
//p.innerHTML = tmp;
//=============
//let p2 = document.querySelector('.p2');
//let tmp2 = '';
//for (let i = 20; i > 0; i--) {
//	tmp2 = tmp2 + i + ' ';
//}
//p2.innerHTML = tmp2;
//============================
//let p2 = document.querySelector('.p2');
//let tmp2 = '';
//for (let i = 1983; i <= 2022; i++) {
//	tmp2 = tmp2 + i + ', ';
//}
//p2.innerHTML = tmp2;
//================================
//let p2 = document.querySelector('.p2');
//let tmp2 = '';
//for (let i = -4; i <= 20; i++) {
//	tmp2 = tmp2 + i + ', ';
//}
//p2.innerHTML = tmp2;
//============================
//let p2 = document.querySelector('.p2');
//let tmp2 = '';
//for (let i = 1; i <= 9; i++) {
//	tmp2 = tmp2 + i + ' * 7' + ' = ' + 7 * i + '<br>';
//}
//p2.innerHTML = tmp2;
//======================
//let p2 = document.querySelector('.p2');
//let tmp2 = '';
//for (let i = 1300; i <= 1500; i++) {
//	tmp2 = tmp2 + '&#' + i + ' ';
//}
//p2.innerHTML = tmp2;
//==============================
//let sum = 0;
//for (let i = 0; i <= 50; i++) {
//	sum = sum + i;
//	console.log(sum);
//}
//let body = document.querySelector('body');
//body.innerHTML = sum;
//====================================
//let mult = 1;
//for (let i = 1; i <= 5 ; i++) {
//	mult = mult * i;
//}
//console.log(mult);
//======= if else ============================
//document.getElementById('calc').onclick = function () {
//	let flat = document.getElementById('flat').value;
//	flat = parseInt(flat);

//	if (flat >= 1 && flat <= 20) {
//		console.log('первый подезд');
//	} else if (flat >= 21 && flat <= 48) {
//		console.log('второй подезд');
//	} else if (flat >= 49 && flat <= 90) {
//		console.log('третий подезд');
//	} else {
//		alert('некоректное значение');
//	}
//}
//====================================
//document.getElementById('calc').onclick = function () {
//	let y = document.getElementById('year').value;
//	let old = 2018 - y;
//	if (old >= 16) alert('добро пожаловать вам ' + old);
//	else alert('ошибка фхода вам ' + old)
//}
//========================================
//document.getElementById('calc').onclick = function () {
//	let x = document.getElementById('login').value;
//	let y = document.getElementById('password').value;
//	let password = '1111';
//	let login = 'ivan';
//	if (y == password && x == login) alert('пароль верный');
//	else alert('пароль не верный');
//}
//=======================================
//document.getElementById('calc').onclick = function () {
//	let y = document.getElementById('num').value;
//	y = parseInt(y);
//	if (y >= 0 && y <= 3) alert('ваша надбавка 0%');
//	else if (y >= 3 && y <= 10) alert('ваша надбавка 10%');
//	else alert('error');
//}
//=======================================

//let arr = [2, 3, 5, -2, -6, 5, 2, 0, 9];
//let sum = 0;
//for (let i = 0; i <= arr.length; i++) {
//	if (arr[i] > 0) {
//		sum += arr[i]
//	}
//}
//console.log(sum);

//============ урок4

//while,for,do while

//Запрпосить у пользователя имя и есть такое имя есть в массиве
//Вывести True в консоль

//break

/*
const names = ["Pasha", "Masha", "Dasha", "Sasha"]
let name = prompt('');
let findName = false;
for (let i = 0; i < names.length; i++) {
	if (names[i] == name) {            //  ["Pasha", "Masha", "Dasha", "Sasha"] == name
		console.log(true);
		findName = true;
		break
	}
}
if (findName == false) {
	console.log(false);
}
*/

/*
for (let i = 0; i <= 5; i++) {
	if (i % 2 == 0) {
		continue
	}
	console.log(i)
}
*/

//const students = [
//	['Pasha', 32, [5, 7, 4, 2]],
//	['Egor', 11, [6, 5, 2, 1]],
//	["Sasha", 43, [8, 5, 8, 9]]
//]

//for (let i = 0; i < students.length; i++) {
//	console.log(students[i][0])
//	for (let j = 0; j < students[i][2].length; j++) {
//		console.log(students[i][2][j]) //students[0][2][2] = 4
//	}
//}


//1 - Запросить имяВывести true если такой студент есть, false если нету
//2 - Выводить имя, а рядом минимальный и максимальный балл студента
//Приме: Pasha: min-2, max-7
//3 - Выводить имя, а рядом средний балл студента
//4 - Запросить имя и оценку которую надо добавить. Указаному студенту
//добавляется оценка
//5 - Вывести имена всех совершеннолетних студентов

//for of, {name:"Pasha"}, if, for in


//for для задачи диапозона,
// for of - array,
// for in -,
// do while - цикл который как минимум 1 раз отработает,
// while - работа по условию

/*
const names = ['Pasha', 'Masha', 'Dasha']

for (let name of names) {
	console.log(name)
}
*/

/*
const names = ['Pasha', 'Masha', 'Dasha']
const user = { name: "Andrey", age: 32, marks: [3, 54, 2, 3, 1] }

for (const key in user) {
	console.log(key, '-', user[key])
}
*/

//console.log(user['name'])
//console.log(user.name)


/*
for (const idx in names) {
	console.log(idx)
}
*/

//dz while, do while

/*
const students = [
	{ name: 'Pasha', age: 21, marks: [5, 7, 4, 2, 5] },
	{ name: 'Gosha', age: 14, marks: [5, 2, 1, 2, 1] },
	{ name: 'Rita', age: 18, marks: [4, 9, 4, 8, 7] },
];

for (const student of students) {

	let textStudent = '';

	for (const key in student) {
		textStudent += `${key}: ${student[key]}, `
	}

	document.write(`<div>${textStudent}</div>`);
}
*/

//document.write('hello')


//Name: Pasha, age: 21, marks: 5,7,4,2,5


/*
function displayInfo(name, age) {
	return `Hello ${name} age ${age}`
}

const userName = 'Kirill'
const userAge = 12

const info1 = displayInfo(userName, userAge)
console.log(info1)
console.log(displayInfo("Andey", 33))
*/

/*
function checkFindNumber(arr, number) {
	for (const num of arr) {
		if (num == number) {
			return true
		}
		console.log(num)
	}
	return false
}

const arr = [4, 5, 7, 9, 3, 5, 7, 2]

console.log(checkFindNumber(arr, 66))
*/


//Создать функцию, которая принимает массив студентов и имя студента
//и возвращает найденную информацию по имени студента

//function findStudent(arr, name) {

//	let textStudent = '';

//	for (const student of arr) {

//		if (name == student.name) {

//			for (key in student) {


//				textStudent += `${key}: ${student[key]}, `

//			}

//		}
//	}
//	return textStudent
//}

//const students = [
//	{ name: 'Pasha', age: 21, marks: [5, 7, 4, 2, 5] },
//	{ name: 'Gosha', age: 14, marks: [5, 2, 1, 2, 1] },
//	{ name: 'Rita', age: 18, marks: [4, 9, 4, 8, 7] },
//];

//console.log(findStudent(students, 'Pasha'));





//let student = findStudent(students, 'Gosha')
//console.log(student) // 'name: Gosha, age: 14, marks: 5,2,1,2,1'
//student = findStudent(students, 'Andrey')
//console.log(student) // ''

