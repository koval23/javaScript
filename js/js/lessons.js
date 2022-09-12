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

//let a = [2, 4, 3, 5, 8, 22, 7, 3];
//console.log(a);
//=================================

//const mean = (a) => {

//	let total = a.reduce((accum, item) => {
//		return accum + item
//	}, 0)
//	return total / a.length;
//}
//console.log(mean(a));

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

/*
let users = [
	{ name: 'Pasha', age: 17 },
	{ name: 'Roma', age: 25 },
	{ name: 'Kola', age: 16 },
	{ name: 'Vana', age: 28 },
]
*/

//let userNames = users.reduce((accum, user) => {
//	accum.push(user.age)
//	return accum
//}, [])

//userNames = userNames.reduce((accum, user) => {
//	accum += user
//	return accum / userNames.length
//}, 0)
//console.log(userNames);

//let nameUsers = users.filter(item => {
//	if (item.age > 18) {
//		return true;
//	}
//	return false
//})
//console.log(nameUsers);
//=================================
//let nameUsers = users.map((item, index) => {

//	return item.name + ',' + index

//})
//console.log(nameUsers);
//================================

/*
const numbers = [3, 5, 7, 3, 5]
numbers.forEach((item, index, array) => {
	array[index] += 1
})
console.log(numbers);
*/

//const numbers = [5, 8, 6, 8, 4, 2, 6, 4]

//const num = numbers.find(n => n == 6)
//const num = numbers.filter(n => n == 6)

/*
let users = [
	{ name: 'Pasha', age: 17 },
	{ name: 'Roma', age: 25 },
	{ name: 'Kola', age: 16 },
	{ name: 'Vana', age: 28 },
]

let user = users.filter(item => {
	if (item.age > 18) {
		return true;
	}
})

console.log(user);
*/
//const user = users.find(user => user.name == 'Kola' && user.age == 16)
//console.log(user)

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
//=================================
/*
const arr = [5, 8, 2, 5, 1]
arr.sort()
console.log(arr)
*/

/*
const names = ['Bogdan', 'C', "Alla"]
names.sort()
console.log(names)
*/


/*
function compare(a, b) {
	if (a > b) return 1321;
	if (a == b) return 0;
	if (a < b) return -165456546;
}
*/

/*
const arr = [1, 6, 2, 8, 3, 15]
arr.sort((a, b) => a - b)
console.log(arr)
*/

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
//========29.08 ============
//func oop js

//Инкапсуляция Наследование Полиморфизм

//function User(name, age) {
//	this.name = name;
//	this.age = age;
//	this.cars = [];

//	this.addCar = function (car) {
//		this.cars.push(car)
//	}

//	this.info = function () {
//		console.log(this.name, this.age)
//		for (const car of this.cars) {
//			car.info();
//		}
//	}

//}

//function Car(model, mark, price) {
//	this.model = model
//	this.mark = mark
//	this.price = price

//	this.info = function () {
//		console.log(this.model, this.mark, this.price)
//	}

//}

//const andrey = new User("Andery", 21)
//andrey.addCar(new Car('x5', 'bmw', 120000))
//andrey.addCar(new Car('es300', 'lexus', 80000))
//andrey.info()




/*
! DZ=================
	телефонная книга

	1 - Добавить контакт в телефонную книгу (Имя,номер)
	2 - Посмотреть телефонную книгу (Показывает все имена)
	3 - Найти контакт по имени
	4 - Удалить контакт по имени
	5 - выйти
*/

//function TellBook() {
//	this.contacts = []

//	this.addContact = function (contact) {
//		this.contacts.push(contact)
//	}


//}

//function Contact(name, phone) {
//	this.name = name;
//	this.phone = phone;
//}

//let tellBook = new TellBook();


//let vova = new Contact("Vova", "32131231");
//let vana = new Contact("Vana", "2342352454");
//tellBook.addContact(vova);
//tellBook.addContact(vana);

//console.log(tellBook);

//console.log('1 - Добавить контакт в телефонную книгу');
//console.log('2 - Посмотреть телефонную книгу');
//console.log('3 - Найти контакт по имени');
//console.log('4 - Удалить контакт по имени');
//console.log('5 - Выход');






//!=====================================

//function Client(userName, userLastName) {
//	this.name = userName
//	this.lastName = userLastName
//}

//let vova = new Client('Vova', 'Petrov');
//console.log(vova.lastName + ' ' + vova.name);
//* создание обектов с помощю init
//const Client = {

//	init(userName, userLastName) {

//		this.name = userName

//		this.lastName = userLastName

//		return this

//	}

//}

//let vova = Object.create(Client).init('Vova', 'Petrov');
//vova.init('Vova', 'Petrov');//если нет this в function
//console.log(vova);
//===============================

//function Client(userName, userLastName) {
//	this.name = userName
//	this.lastName = userLastName
//	this.hey = function () {
//		console.log(this.name + ' ' + this.lastName);
//	}
//}
// для добавления метода в prototype
//Client.prototype.hello = function () {
//	console.log('hello' + ' ' + this.name);
//}

//let vova = new Client('Vova', 'Petrov');
//let kolya = new Client('Kolya', 'Ivanov');
//console.log(vova);

//vova.hello()
//vova.hey()
//kolya.hey()

//!========================


//let car = {
//	mark: 'Volvo',
//	color: 'red',
//	speed: 200,

//}

//for (let key in car) {
//	console.log(key + ': ' + car[key]);
//}

/*
клас - это описание характеристик
Пример:
Свойства(имя, фамилия, возраст,вес, рост)

обэкт - это конкретный екземпляр
Пример:
Свойства(Вася, Пупкин,27,70,180)

Действия которые обект может тот или иной называеться методами
Пример:
Методы(Ходить,Писать,Рисовать,Говорить)
*/
//*==================================
// ES 5
//function User(name, id) {
//	this.name = name;
//	this.id = id;
//	this.avatar = 'Photo';
//this.avatarDelete = function () {
//	this.avatar = null;
//};
//}
//User.prototype.avatarDelete = function () {
//	this.avatar = null;
//};


//let vova = new User('vova', 25)
//let ivan = new User('Ivan', 30)

//console.log([1, 2, 3]);
//*==================================
// ! 1.09

//Методы акссесоры или же методы доступа
//getter setter
//getter - для получения данных
//setterr - для изменения данных

// Инкапсуляция - это сокрытие доступа к свойствам из вне. Это ограничение
//доступа к данным. Это контроль над полученными данными. Это объединение общей
//структуры объекта в один механизм


//react, api, redux, mobx
// (node js + express) + sql


/*
//function User(name, age) {
//	this.__name = name;
//	this.__age = age;

//	this.setAge = function (age) {
//		if (age > 0 && age < 100 && typeof (age) == 'number') {
//			this.__age = age
//		}
//	}

//	this.getName = function () {
//		if (this.__age >= 18) {
//			return this.__name
//		}
//	}
//}

//const user = new User("Pasha", 16)



//console.log(user.getName())
*/

//! call и apply используеться при наследие

function Human(name, age) {
	this.__name = name;
	this.__age = age;

	this.getName = function () {
		return this.__name
	}
	this.setName = function (name) {
		this.__name = name
	}
	this.getAge = function () {
		return this.__age
	}

}

function Student(name, age, univer) {
	Human.call(this, name, age)
	this.__univer = univer

	this.getUniver = function () {
		return this.__univer
	}

}

function Employee(name, age, firm) {
	Human.call(this, name, age)
	this.__firm = firm
	this.getFirm = function () {
		return this.__firm
	}
}

const student = new Student("Anton", 21, 'KN21');

student.setName("Kirill")
console.log(student.getName())
console.log(student)


////Наследование

//function User(name, age) {
//	this.name = name
//	this.age = age
//}

//function test(name) {
//	this.name = name
//}

//const user = new User("Andrey", 22)
//test.call(user, 'kolya')// вызвал функцыю и указал что this  будет обект user
//test.apply(user, ['kolya'])
//console.log(user)

//call(context, arg1 ,arg2...[если параметры в квадратных скобочках то они не обезательные]) - метод

//apply() - тоже самое что и apply  но параметры передаються масивом










