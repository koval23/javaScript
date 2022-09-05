
//function TellBook() {

//	// массив контатов
//	this.contacts = []

//	// добавление контакта
//	this.addContact = function (contact) {
//		if (contact.__phone == Number) {
//			this.contacts.push(contact)
//		} else {
//			alert('Ведите коректный номер')
//		}
//	}
//	// удаление контакта
//	this.deleteContact = function (contact) {
//		for (user of this.contacts) {
//			if (user.__name == contact) {
//				this.contacts.splice(this.contacts.indexOf(user), 1)
//			} else {
//				alert('Такого контакта нет: ' + contact)
//			}
//		}
//	}
//	// поиск контакта
//	this.searchContact = function (contact) {
//		for (user of this.contacts) {
//			if (user.__name == contact) {
//				console.log(user);
//			} else {
//				alert('Такого контакта нет: ' + contact)
//			}
//		}
//	}
//	// показать все контакты
//	this.showTellBook = function () {
//		for (let contact of this.contacts) {
//			console.log(contact);
//		}
//	}
//}
////Инициализируем контакт
//function Contact(name, phone) {
//	this.__name = name;
//	this.__phone = phone;
//}
////инициализируем телефонную книгу
//let tellBook = new TellBook();


////инициализируем контакты
////let vova = new Contact("Vova", "32131231");
////let vana = new Contact("Vana", "34543");
////let kolya = new Contact("Kolya", "3453453");
////let ira = new Contact("Ira", "2342343");
////let vasa = new Contact("Vasa", "567657");
////проверка методов
////tellBook.addContact(vova);
////tellBook.addContact(vana);
////tellBook.addContact(kolya);
////tellBook.addContact(ira);
////tellBook.addContact(vasa);

//let exit = false;
//do {
//	let menu = Number(prompt('Введите номер из меню'))
//	switch (menu) {
//		case 1: {
//			// Добавить контак
//			const name = prompt('введите имя контакта')
//			const phone = Number(prompt('введите номер контакта'))
//			const contact = new Contact(name, phone)
//			tellBook.addContact(contact);
//			break
//		}
//		case 2: {
//			//Посмотреть телефонную книгу
//			tellBook.showTellBook()
//			break
//		}
//		case 3: {
//			//Найти контакт по имени
//			const search = prompt('введите имя контакта')
//			tellBook.searchContact(search)
//			break
//		}
//		case 4: {
//			// Удалить контакт по имени
//			let name = prompt('введите имя контакта которое хотите удалить')
//			tellBook.deleteContact(name);
//			break
//		}
//		case 5: {
//			//Выход из меню
//			exit = true;
//			break
//		}
//		default: {
//			alert('такого пункта нет')
//		}
//	}
//} while (exit == false);