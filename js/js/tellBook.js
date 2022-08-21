//====== function========

//==================================================

/*

HTML CSS JS REACT NODE JS MySQL

Телефоная книга

Меню:
1 - Добавить контакт в телефонную книгу (Имя,номер)
2 - Посмотреть телефонную книгу (Показывает все имена)
3 - Найти контакт по имени
4 - Удалить контакт по имени
5 - Изменить контакт
6 - Выход

*/
//предусмотреть то что нельзя создать 2 аккаунта с одинаковым именем
//добавить возможность что 1 контакт может именть несколько номеров телефонов
//отдельный пункт добавить номер к существующему контакту
//2 одинаковых номера не может быть у контакта


//===================================================

//console.log('1 - Добавить контакт в телефонную книгу');
//console.log('2 - Посмотреть телефонную книгу');
//console.log('3 - Найти контакт по имени');
//console.log('4 - Удалить контакт по имени');
//console.log('5 - Добавить номер к существующему контакту');
//console.log('6 - Изменить существующий контакт');
//console.log('7 - Выход');



//const contacts = [];
/*
//1 - Добавить контакт в телефонную книгу (Имя,номер)
function checkConctact(name) {
	if (contacts.length == 0) {
		return false
	} else {
		for (const contact of contacts) {
			if (name == contact.name) {
				return true
			}
		}
	}
	return false
}

function addContact(name, tell) {
	if (typeof (tell) == "number") {
		const contact = { name: name, tell: [tell] }
		contacts.push(contact)
		return true
	} else {
		return false
	}


	//if (isNaN(tell) != true) {
	//	const contact = { name: name, tell: [tell] }
	//	contacts.push(contact)
	//	return true
	//} else {
	//	return false
	//}

}

//2 - Посмотреть телефонную книгу (Показывает все имена)
function watchTelBook() {
	let result = '';
	for (const user of contacts) {
		if (user.name != '') {
			let numbers = ''
			for (const phone of user.tell) {
				numbers += '+38' + phone + ', '
			}
			result += `${user.name} - ${numbers} ; \n`
		}
	}
	return result
}
//3 - Найти контакт по имени
function serchContactForName(searchName) {
	for (const nameSearch of contacts) {
		if (searchName == nameSearch.name) {
			let x = `имя - ${nameSearch.name}; телефон - ${nameSearch.tell};`
			return x
		}
	}
	return false
}
//4 - Удалить контакт по имени
function deleteContact(deleteContact) {
	for (const user of contacts) {
		if (deleteContact == user.name) {
			let x = ''
			user.name = x
			user.tell = x
			return deleteContact
		}
	}
	return false
}
//5 Добавить номер к существующему контакту
function addNumber(name, tell) {
	for (const nameSearch of contacts) {
		if (name == nameSearch.name) {
			nameSearch.tell.push(tell)
		}
	}
	return name, tell
}
//6 Изменить контакт
function serchContact(name) {
	for (const contact of contacts) {
		if (name == contact.name) return contact
	}
	return false
}

function changeContact(contact, idx, number) {
	for (const phons in contact.tell) {
		if (phons == idx - 1) {
			contact.tell[phons] = number
			return true
		}
	}
}

//====================================================

let exit = false
do {
	let menu = Number(prompt('введите число от 1 до 7'))

	switch (menu) {
		case 1: {
			//1 - Добавить контакт в телефонную книгу (Имя,номер)
			let name = prompt('введите имя')
			const findRes = checkConctact(name)
			if (findRes == true) {
				alert("Ошибка добавления такой контакт уже существует")
			} else {
				let tell = Number(prompt('введите телефон'))
				const resAdd = addContact(name, tell)
				resAdd == true ? alert("Контакт добавлен") : alert("Ошибка добавления2")
			}
			break
		}
		case 2: {
			//2 - Посмотреть телефонную книгу (Показывает все имена)
			let result = watchTelBook()
			alert(result)
			break
		}
		case 3: {
			//3 - Найти контакт по имени
			const searchName = prompt('введите нужное имя')
			let serch = serchContactForName(searchName)
			if (serch == false) {
				alert('такого имени нет')
				break
			}
			alert(serch);
			break
		}
		case 4: {
			//4 - Удалить контакт по имени
			let deletName = prompt('введите имя которое хотите удалить')
			const namedeleteContact = deleteContact(deletName)
			if (namedeleteContact == false) {
				alert('такого контакта нет')
				break
			}
			alert(`контакт ${deletName} удален`)
			break
		}
		case 5: {
			//5 Добавить номер к существующему контакту
			let contact2 = prompt('введите имя контакта')
			let newContact = Number(prompt('введите ище один номер'))
			addNumber(contact2, newContact)
			break
		}
		case 6: {
			//6 Изменить контакт
			let changeContactName = prompt('введите имя которое хотите поменять')
			let contact = serchContact(changeContactName)
			if (contact == false) {
				alert('такого имени нет')
				break
			}
			let idx = 1
			for (const phone of contact.tell) {
				console.log(idx, ')', phone)
				idx++;
			}
			let enterNumberIdx = prompt('введите №')
			let enterNewNumber = Number(prompt('введите новый номер'))
			changeContact(contact, enterNumberIdx, enterNewNumber)
			break
		}
		case 7: {
			//выход из меню
			exit = true
			break
		}
		default: {
			alert('такого пункта нет')
		}
	}


} while (exit != true)
*/
//==================================================




//===========================================



//DZ
//Cделать все возможные проверки на невернные вводы данных





