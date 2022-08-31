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

//function filterRangeInPlace(arr, a, b) {
//	arrNum = arr.filter((num, index) => {
//		if (a > 0 && b < arrNum.length) {
//			if (a <= index && b >= index) {
//				return true
//			} else {
//				return false
//			}
//		} else {
//			return false
//		}
//	})
//	return arrNum
//}
//filterRangeInPlace(arrNum, 1, 2)
//console.log(arrNum);

//================================================
//*фильтрация по диапазону
//let arrNum = [5, 3, 4, 9, 10, 11, 12, 13, 14, 15, 6, 7,]

//function filterRange(arr, a, b) {
//	if (a > 0 && b < arrNum.length) {
//		arr = arr.filter(num => {
//			if (num >= a && num <= b) {
//				return true
//			} else {
//				return false
//			}
//		})
//	}
//	return arr
//}

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
//let usersMapped = users.map(user => {
//	return {fullName: `${user.name} ${user.suirname}`, id: user.id}
// user.city = 'Lvov'
//})

//console.log(usersMapped);

//==================================================
//* получить средний возраст

//let users = [
//	{ name: 'Pasha', age: 17 },
//	{ name: 'Roma', age: 25 },
//	{ name: 'Kola', age: 16 },
//	{ name: 'Vana', age: 28 },
//]

//function getAveregeAge(arr) {
//	averegeNum = arr.reduce((accum, item) => {
//		return accum + item.age
//	}, 0)
//	return averegeNum / arr.length
//}

//console.log(getAveregeAge(users));

//==================================================
//* оставить уникальные елементы массива

//let arrStr = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-0']

/*
function unique(arr) {
	let uniqueStr = arr.filter((str, ind, array) => {
		if (array.indexOf(str) === ind) {
			return true
		}
	})
	return uniqueStr
}
*/

//function unique(arr) {
//	return arr.reduce((accum, item) => {
//		if (!(accum.includes(item))) { // не true
//			accum.push(item)
//		}
//		return accum
//	}, [])
//}

//console.log(unique(arrStr))

//console.log(unique(arrStr));
//!====================================
//console.log(Array.from(new Set(arrStr)));
//!====================================

//==========================================
//* практика

//let arrNum = [5, 3, 4, 5, 6, 7,]

//let arrStr = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-0']

//let users = [
//	{ name: 'Pasha', age: 17 },
//	{ name: 'Roma', age: 25 },
//	{ name: 'Kola', age: 16 },
//	{ name: 'Vana', age: 28 },
//]

//console.log(result);
//dir - параметр который поможет выбирать напрвление сортировки

//function sortArray(arr, prop, dir = false) {

//	let result = arr.sort((a, b) => {

//		let dirIf = a[prop] < b[prop];

//		if (dir == true) dirIf = a[prop] > b[prop]

//		if (dirIf == true) return -1;

//	})

//	return result

//}
//console.log(sortArray(users, 'age', true));

//=====25.08.2022======


/*
let str = 'vasa,andrey,kirill,anton'
str = str.split(',');
str = str.join(' ');
console.log(str);
*/



//DZ
//1) 14:00 12.06.2021    ->   2021/06/12 14:00
//2) Создать констуктор машины. Описать ее.
// Реализовать метод показывания информации об машине
// реализовать метод старт машины.
// создать 5 объектов. поместить в массив. найти средниюю стоимость всех машин



//OOP   ->   func OOP    class OOP
/*
function createUser(name, age, city) {
	return {
		name: name,
		age: age,
		city: city,
		go: function () {
			console.log(`user ${this.name} go`)
		}
	}
}

const andrey = createUser("Andrey", 22, "Lvov");
const pasha = createUser("Pasha", 25, "Dnepr");

andrey.go()
pasha.go()
*/
// !dz =============

//function createCar(marka, color, year, price) {
//	return {
//		name: marka,
//		color: color,
//		year: year,
//		price: price,
//		inform: function () {
//			console.log(`car ${this.name} ${this.color} ${this.year} ${this.price}$`);
//		}
//	}
//}
//function aveagePrice(arr) {
//	let aveagePrice = arr.reduce((accum, item) => accum += item.price, 0) / arr.length

//	return aveagePrice
//}


//const volvo = createCar('Volvo', 'red', 2019, 3)
//const bmw = createCar('BMW', 'gray', 2021, 3)
//const mersedes = createCar('Mersedes', 'black', 2017, 3)
//const volga = createCar('Volga', 'green', 1988, 3)
//const ferrari = createCar('Ferrari', 'red', 2021, 3)

//let arrCars = [volvo, bmw, mersedes, volga, ferrari]

//console.log(aveagePrice(arrCars));

//volvo.inform()

//!===========================





//class Alert {
//	constructor(a, c, d) {
//		this.massage = a;
//		this.cssClass = c;
//		this.out = d;
//	}
//	showAlert() {
//		document.querySelector(this.out).innerHTML = `<p class = "${this.cssClass}">
//		 ${this.massage}</p>`;
//	}
//}


//class Alert2 extends Alert {
//	constructor(a, c, d, icon) {
//		super(a, c, d);
//		this.icon = icon;
//	}
//	showIconAlert() {
//		document.querySelector(this.out).innerHTML = `<p class = "${this.cssClass}">
//	<i class="material-icons">${this.icon}</i>
//	${this.massage}</p>`;
//	}
//}
//let m = new Alert('my message', 'orange', '.test');

//console.log(m);
//m.showAlert();


//console.log(Alert);
//!  tellBook   
console.log('1 - Добавить контакт в телефонную книгу');
console.log('2 - Посмотреть телефонную книгу');
console.log('3 - Найти контакт по имени');
console.log('4 - Удалить контакт по имени');
console.log('5 - Выход');

function TellBook() {
	// массив контатов
	this.contacts = []
	// добавление контакта
	this.addContact = function (contact) {
		this.contacts.push(contact)
	}
	// удаление контакта
	this.deleteContact = function (contact) {
		this.contacts.splice(this.contacts.indexOf(contact), 1)
	}
	// поиск контакта
	this.searchContact = function (contact) {
		console.log(contact);
	}
	// показать все контакты
	this.showTellBook = function () {
		for (let contact of this.contacts) {
			console.log(contact);
		}
	}
}

function Contact(name, phone) {
	this.name = name;
	this.phone = phone;
}
// инициализируем телефонную книгу
let tellBook = new TellBook();

// инициализируем контакты
let vova = new Contact("Vova", "32131231");
let vana = new Contact("Vana", "34543");
let kolya = new Contact("Kolya", "3453453");
let ira = new Contact("Ira", "2342343");
let vasa = new Contact("Vasa", "567657");

// проверка методов
tellBook.addContact(vova);
tellBook.addContact(vana);
tellBook.addContact(kolya);
tellBook.addContact(ira);
tellBook.addContact(vasa);
tellBook.deleteContact(vasa)
tellBook.showTellBook();
console.log(tellBook);
