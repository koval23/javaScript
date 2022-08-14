

//for of, {name:"Pasha"}, if, for in

//============= задача №1 ================
//1 - Запросить имяВывести true если такой студент есть, false если нету

//let students = ['Pasha', 'Masha', 'Ira', 'Kola'];
//let name = prompt('');
//let findName = false;
//for (let i = 0; i < students.length; i++) {
//	if (name == students[i]) {
//		console.log(true);
//		findName = true;
//		break
//	}
//}
//if (findName == false) {
//	console.log(false);
//}
//========================================


//============= задача №2 ================
//2 - Выводить имя, а рядом минимальный и максимальный балл студента
//Пример: Pasha: min-2, max-7

//const students = [
//	['Pasha', [5, 7, 4, 2]],
//	['Egor', [6, 5, 2, 1]],
//	['Sasha', [8, 5, 8, 9]]
//]
//let nameSt = prompt('');
//let findName = false;
//for (let i = 0; i < students.length; i++) {
//	if (nameSt == students[i][0]) {
//		let min = students[i][1][0];
//		let max = students[i][1][0];
//		for (let j = 0; j < students[i][1].length; j++) {
//			if (students[i][1][j] > max) {
//				max = students[i][1][j]
//			}
//			if (students[i][1][j] < min) {
//				min = students[i][1][j]
//			}
//		}
//		//alert(students[i][0] + ' ' + 'max ' + Math.max(...students[i][1]) + ' min ' + Math.min(...students[i][1]))
//		alert(students[i][0] + ' ' + 'max ' + Math.max(...students[i][1]) + ' min ' + min)
//		findName = true;
//		break
//	}
//}
//if (findName == false) alert('введите коректное имя')

//========================================

//============= задача №3 ================
//3 - Выводить имя, а рядом средний балл студента

//const students = [
//	['Pasha', [5, 7, 4, 2, 5]],
//	['Egor', [6, 5, 2, 1]],
//	['Sasha', [5, 5, 5]]
//]
//let sum = 0;
//let nameSt = prompt('');
//let findName = false;
//for (let i = 0; i < students.length; i++) {
//	if(nameSt == students[i][0]){
//		for (let j = 0; j < students[i][1].length; j++) {
//			sum = sum + students[i][1][i];
//			findName = true;
//		}
//		alert(nameSt +' '+ (sum/students[i][1].length))
//	}
//}
//if (findName == false) alert('введите коректное имя');


//========================================

//============= задача №4 ================
// 4 - Запросить имя и оценку которую надо добавить. Указаному студенту
// добавляется оценка

//const students = [
//	['Pasha', [5, 7, 4, 2, 5]],
//	['Egor', [6, 5, 2, 1]],
//	['Sasha', [5, 5, 5]]
//]
//let name = prompt('введите имя ');
//let grade = prompt('введите оценку которую нужно добавить');

//for (let i = 0; i < students.length; i++) {
//	if (name == students[i][0]) {

//		alert(name + ' добавил оценку ' + grade)
//		students[i][1].push(grade)
//	}
//}
//console.log(students[0]);

//========================================

//============= задача №5 ================
//5 -  Вывести имена всех совершеннолетних студентов

//const students = [
//	['Pasha', 34, [5, 7, 4, 2, 5]],
//	['Egor', 28, [6, 5, 2, 1]],
//	['Sasha', 15, [5, 5, 5]]
//];

//for (let i = 0; i < students.length; i++) {

//	if (students[i][1] > 18) {
//		console.log(students[i][0] + ' ' + students[i][1]);
//	}
//}

//========================================




//const students = [
//	['Pasha', 34, [5, 7, 4, 2, 5]],
//	['Egor', 28, [6, 5, 2, 1]],
//	['Sasha', 15, [5, 5, 5]]
//];
//push - добавляет елемент в конец
//students.push(['qwe', 2, 4]);
//splise - удаляет определенный диапазон елементов
//students.splice(1, 3)
//

//let arr1 = ['Pasha', '34', '5', '7',
//	'4', '2', '5', 'Egor', '28', '6', '5',
//	'2', '1', 'Sasha', '15', '5', '5', '5'
//];
//let arr2 = [];
//let numbers = [];
//let names = [];
//for (let i = 0; i < arr1.length; i++) {
//	if (isNaN(Number(arr1[i]))) {
//		names[names.length] = arr1[i]
//	} else {
//		numbers[numbers.length] = arr1[i]
//	}
//}
//arr2 = [names, numbers]
//console.log(arr2);
//=================урок======================

//if (true) {
//	console.log(1)
//} else if (true) {
//	console.log(1)
//} else if (true) {
//	console.log(1)
//} else {
//	console.log(1)
//}

//for of

/*
const students = [
	['Pasha', 34, [5, 7, 4, 2, 5]],
	['Egor', 28, [6, 5, 2, 1]],
	['Sasha', 15, [5, 5, 5]]
];


for (const student of students) {
	console.log(student[0])
	for (const mark of student[2]) {
		console.log(mark)
	}
}
*/

/*
const students = [
	['Pasha', 21, [5, 7, 4, 2, 5]],
	['Egor', 12, [6, 5, 2, 1]],
	['Sasha', 15, [5, 5, 5]]
];


for (const student of students) {
	if (student[1] > 18) {
		console.log(student[0]);
	}
}
*/


/*
const arr = [6, 4, 6, 8, 2, 3]
for (const num of arr) {
	console.log(num)
}
*/


//=========обект===============

/*
const user = { name: "Pasha", age: 32 }

console.log(user.name)
console.log(user.age)
*/

/*
const students = [
	{ name: 'Pasha', age: 21, marks: [5, 7, 4, 2, 5] },
	{ name: 'Gosha', age: 14, marks: [5, 2, 1, 2, 1] },
	{ name: 'Rita', age: 18, marks: [4, 9, 4, 8, 7] },
];

for (const student of students) {
	console.log(student.name)
	for (const mark of student.marks) {
		console.log(mark)
	}
}
*/

/*
for (const student of students) {
	console.log(student[0])
	for (const mark of student[2]) {
		console.log(mark)
	}
}
*/

//const students = [
//	{ name: 'Pasha', age: 21, marks: [5, 7, 4, 2, 5] },
//	{ name: 'Gosha', age: 14, marks: [5, 2, 1, 2, 1] },
//	{ name: 'Rita', age: 18, marks: [4, 9, 4, 8, 7] },
//];


/*
for of

Вывести имя каждого студента и его средний балл
Пример:
Pasha 4
Gosha 3

*/
//for (const student of students) {
//	let sum = 0;
//	for (mark of student.marks) {
//sum = sum + mark
//sum += mark
//}
//console.log(student.name + ' ' + (sum / student.marks.length));
//console.log(student.name, sum / student.marks.length)
//}


//const students = [
//	{ name: 'Pasha', age: 21, marks: [5, 7, 4, 2, 5] },
//	{ name: 'Gosha', age: 14, marks: [5, 2, 1, 2, 1] },
//	{ name: 'Rita', age: 18, marks: [4, 9, 4, 8, 7] },
//];


//==============??????????===========
//сума чисел в масиве

//const students = [
//	['Pasha', 21, [5, 7, 4, 2, 5]],
//	['Egor', 12, [6, 5, 2, 1]],
//	['Sasha', 15, [5, 5, 5]]
//];
//console.log(students);

//let sum = 0;

//for (let i = 0; i < students[i][2].length; i++) {//
//	console.log(students[i][2]);
//	for (let j = 0; j < students[i][2].length; j++) {
//		sum += students[i][2][j];

//	}

//	console.log(sum);

//}

//===========================================


/*
const students = [
	['Pasha', 21, [5, 7, 4, 2, 5]],
	['Egor', 12, [6, 5, 2, 1]],
	['Sasha', 15, [5, 5, 5]],
];


for (key in students) {
	console.log(key);
}
*/

//for (key of students) {
//	console.log(key);
//}



