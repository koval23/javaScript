
//TODO ========================= indexOf ====================================

// перебирает масив и к каждому елементу применить каккое либо действие или функцию

// если такое значение есть то возвращает его первое совпадение в масиве если елементы
// повторяються то второй и далее не возвращаютсья если нет то возвращает -1
// indexOf(2,0) второе значения в методе означает с какого индекса начинать искать(не обезательно)

// const a = [3,7, 4, 5, 6, 7, 8, 9]
// const b = ['hi', 'hello']

// console.table(a)
// console.log(a.indexOf(8));
// console.log(b.indexOf('hi'));

// проверка с помощю if
// если вместо 7 будет '7' то сравнение не пройдет
// только сторогое сравнение!!!!

// нкжно учитывать регистр строк!!!!!

//if (a.indexOf(7) !== -1) {
//	console.log('hello');
//} else {
//	console.log('goodbye');
//}

//function indexOfEmull(ar, item, from = 0) {
//	for (let i = from; i < ar.length; i++) {
//		if (ar[i] === item) {
//			return i;
//		}
//		return -1;
//	}
//}

//================================================================================
//===== метод Map, Filter ========================================================

//TODO ========================== MAP ===========================================
//! первоначальный масив не меняться
// ми применяем Map когда нам пужно перебрать обект и каждому елементу применить
// какое нибуть действие
// 1 перебирает масив
// 2 результирующий масив равен по размеру исхолному масиву

//const a = [3, 4, 5, 6, 7, 8, 9]

//let b = a.map(item => {
//	console.log(item);
//	return item * 3;
//});

//console.log(b);

/*
let students = [
	{ name: 'Egor', marks: [4, 6, 8, 4, 3, 4] },
	{ name: 'Andrey', marks: [7, 5, 3, 8, 1, 3] },
	{ name: "Misha", marks: [9, 1, 2, 4, 6, 1] },
]

students = students.map(student => {
	let sum = student.marks.reduce((accum, item) => {
		accum += item
		return accum
	}, 0)
	student.avarage = sum / student.marks.length
	return student
})

console.log(students)
*/





//TODO =========================== FILTER =====================================

//! возвращает только елемент масива исходного на основании return true / false

//const k = [3, 4, 5, 6, 7, 8, 9]

//let d = k.filter(item => {
//	if (item > 4) {
//		return true
//	}
//})
//console.log(d);


//================================================================================
//TODO =========================== INCLUDES ======================================

//! заменяет indexOf помогает сократить его визуальное написание
//* возвращфет либо true / false
// так же само как и indexOf зависит от типа данных и регистра
// так же есть второй параметр(не обезательно) с которого начинать проверку

//const r = [3, 4, 5, 6, 7, 8, 9]

//if (r.includes(7, 3)) {
//	console.log('yes');
//}
//else {
//	console.log('no');

//}






//================================================================================
//TODO =========================== SHIFT ======================================
// удаляет значение из начала масива

//================================================================================
//TODO =========================== FOREACH ======================================

//forEach = нчего нэ взвращает

//================================================================================
//TODO =========================== REDUCE ======================================

//перебор элементов массива и возврат новой структуры данных
//const redus = arr.reduce((accum, item, index, arr) => {

//})

//================================================================================
//TODO =========================== FIND ======================================

// позволяет найти элемент по условию и возвращает только один еелемент
//const arrFind = arr.filter((item, index, _arr))

//const numbers = [5, 8, 6, 8, 4, 2]

//const num = numbers.find(n => {
//	if (n == 6) {
//		return true
//	} else {
//		return false
//	}
//})

//console.log(num)

//================================================================================
//TODO =========================== FINDINDEX ======================================

// позволяет найти элемент по условию и возвращает индекс
//const arrFindIndex = arr.filter((item, index, _arr))

//================================================================================
//TODO =========================== FILTER ======================================

// возвращает истенный ноовый массив по истинному(true) условию
//const arrFilter = arr.filter((item, index, _arr))

//================================================================================
//TODO =========================== CONCAT ======================================

//создает новый масив с переданными значениями в конце
//обэденяет переданные елементы в один масив
// не мутирует исходный масив

//================================================================================
//TODO =========================== JOIN ======================================

// позволяе соединить масив в строку
//const str = 'iusdhfj';
//const arr = str.split('')
//! split - розбивает строку на масив (по значению в дужках)
//const newArrstr = arr.join('-')
//console.log(arr);
//console.log(newArrstr);

//================================================================================
//TODO =========================== .sort ======================================

//позволяе отсортировать масив
//const arr1 = arr.sort((a,b)=>)

//let users = [
//	{ name: 'Pasha', age: 17 },
//	{ name: 'Roma', age: 25 },
//	{ name: 'Kola', age: 16 },
//	{ name: 'Vana', age: 28 },
//]

//users.sort((user1, user2) => {

//	if (user1.age < user2.age) return -1// ничего делать не нужно
//	if (user1.age == user2.age) return 0
//	if (user1.age > user2.age) return 1// миняем местами

//})
//console.log(users);



//================================================================================
//TODO =========================== .isArray ======================================
//const r = [3, 4, 5, 6, 7, 8, 9]
//позволяет проверить масив ли ето
//просто проверка
//console.log(Array.isArray(r));

//================================================================================
//TODO =========================== .splice ======================================

//позволяет удалять и вставлять елементы
//arr.splice(index, deleteCount, .....елементы которые нужно вставить)

//================================================================================
//TODO =========================== .slice ======================================

//позволяет вернуть целый массив или часть масива который нам нужен
//const aray = arr.slice(start,end)

//================================================================================
//TODO =========================== .lastIndexOf =================================

// возвращает индекс масива но поиск с права на лево

//================================================================================
//TODO =========================== .includes ===========================================

//возвращает true / false при нахождение item
//проверяем есть ли елемент в масиве или нет
//удобно использовать только с приметивами
//силочные типы данных передаються false
//const arr = [3, 4, 5, 6, 7, 8, 9]

//const chekArr = arr.includes(4)//true
//const chekArr2 = arr.includes(1)//false

//================================================================================
//TODO =========================== .reverse =================================

//переворачивает масив
//сам масив тоже переворачиваеться
//const arr4 = [1,2,3,4,5,6,7,8,9]
//arr4.reverse() //[9,8,7,6,5,4,3,2,1]

//================================================================================
