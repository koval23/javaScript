/*
Больница в которой есть 10 палат
У нас есть пациенты
У нас есть доктора

1 - Добавить доктора
	 имя и специальнось
2 - Добавить пациента
	 имя и болезнь если есть свободные места.
3 - Посмотреть докторов
	 *1 показывается информация об каждом докторе
4 - Посмотреть пациентов
	 *2 показывается информация об каждом пациента
5 - Призначить пациенту доктора
	 вводишь имя доктора, пациента и происходит призначение
6 - Выписать пациента
	 Удаляется пациент, а доктору зачисляется в статистику +1 вылеченный
7 - Посмотреть топ докторов
	 Показывает именна 3 докторов их специальность и сколько вылечили они пациентов
8 - Посмотреть количество свободных мест в больнице
9 - Выйти

*1 - имя, специализация / имя, специализация и имена пациентов
*2  -имя, болзень / имя, болзень и доктор который лечит
*/



/*
function Medical() {
	this.__doctors = [];
	this.__patients = [];
	// Добавить доктора имя и специальнось
	this.addDoctor = function (doc) {
		//Проверка на наличие докора в системе
		this.__doctors.push(doc)
		return true
	}
	// Добавить пациента
	//!===
	this.addPatient = function (pacient) {
		if (this.__patients.length <= 10) {
			this.__patients.push(pacient)
			return true
		} else {
			//alert('Извените все места заняты')
			return false
		}
	}
	// Посмотреть докторов
	this.getShowNamesDoctors = function () {
		for (let doctor of this.__doctors) {
			console.log('Имя доктора' + ': ' + doctor.getName());
			console.log('Специализация доктора' + ': ' + doctor.__spechality);
			if (doctor.__doctorPatients.length > 0) {
				for (let patient of doctor.__doctorPatients) {
					console.log('Пациенты' + ': ' + patient);
				}
			} else {
				console.log('Пациентов нет');
			}
		}
	}
	// Посмотреть пациентов
	this.getShowNamesPatients = function () {
		for (let patient of this.__patients) {
			console.log('Имя пациента' + ': ' + patient.__name);
			console.log('Болезнь пациента' + ': ' + patient.__disease);
		}
	}
	//Призначить пациенту доктора
	this.addPacientDoctor = function (namePatient, nameDoctor) {
		let patObject = '';

		for (let patient of this.__patients) {
			if (patient.__name == namePatient) {
				patObject = patient
			}
		}
		for (let doctor of this.__doctors) {
			if (doctor.__name == nameDoctor) {
				doctor.__doctorPatients.push('Имя пациента ' + patObject.__name + '; ' + 'Болезнь: ' + patObject.__disease)
			}
		}
	}
	// Выписать пациента
	this.deletPatient = function (pacientDel) {

		for (patient of this.__patients) {
			if (patient.__name == pacientDel) {
				this.__patients.splice(this.__patients.indexOf(patient), 1)
			}
		}

	}
	//Посмотреть топ докторов
	this.topDoctors = function () {

		//console.log(w1.__doctorPatients.length);

		let arr = this.__doctors.sort(function (a, b) {
			if (a.__doctorPatients.length > b.__doctorPatients.length) {
				return 1
			}
			if (a.__doctorPatients.length < b.__doctorPatients.length) {
				return -1
			}

		})

		let text = ''
		for (let i = 0; i < 3; i++) {
			text += arr[i] + '\n';
		}
		return text

	}


	// Посмотреть количество свободных мест в больнице
	this.vacancion = function () {
		const result = 10 - this.__patients.length
		console.log('Свободных мест: ' + result);
	}
}



let q4 = new Patient('yura', 'Петров')
let q5 = new Patient('ira', 'Петров')

function Doctor(name, spechality) {
	this.__doctorPatients = [q4, q5];
	this.__name = name;
	this.__spechality = spechality;

	this.getName = function () {
		return this.__name;
	}

}

function Patient(name, disease) {
	this.__name = name;
	this.__disease = disease;

	this.setDisease = function (disease) {
		this.__disease = disease;
	}
}

const medical = new Medical()



let w1 = new Doctor('vita', 'dantist')
let w2 = new Doctor('olga', 'pediatr')
let w3 = new Doctor('vala', 'dantist')
let w4 = new Doctor('vasa', 'hirurg')

medical.addDoctor(w1)
medical.addDoctor(w2)
medical.addDoctor(w3)
medical.addDoctor(w4)


//console.log(w1.__name);


let q1 = new Patient('kola', 'Петров')
let q2 = new Patient('Vova', 'Петров')
let q3 = new Patient('vasa', 'Петров')


medical.addPacientDoctor(q2)

medical.addPatient(q1)
medical.addPatient(q2)
medical.addPatient(q3)
medical.addPatient(q4)
medical.addPatient(q5)


let exit = false
do {
	let menu = Number(prompt('введите число от 1 до 9'))

	switch (menu) {
		case 1: {
			// Добавить доктора имя и специальнось
			const name = prompt('ведите имя доктора')
			const spechality = prompt('ведите специальность доктора')
			const doctor = new Doctor(name, spechality)
			const resAddDoctor = medical.addDoctor(doctor)
			resAddDoctor ? alert("Доктор добавлен") : alert("Ошибка добавления")
			break
		}
		case 2: {
			// Добавить пациента
			const name = prompt('ведите имя пациента')
			const disease = prompt('ведите болезнь пациента')
			const patient = new Patient(name, disease)
			medical.addPatient(patient)
			break
		}

		case 3: {
			// Посмотреть докторов
			medical.getShowNamesDoctors()
			break
		}
		case 4: {
			// Посмотреть пациентов
			medical.getShowNamesPatients()
			break
		}
		case 5: {
			// Призначить пациенту доктора
			const namePatient = prompt('ведите имя пациента')
			const nameDoctor = prompt('ведите имя доктора')
			medical.addPacientDoctor(namePatient, nameDoctor)
			break
		}
		case 6: {
			// Выписать пациента
			const namePatientDel = prompt('Введите имя пациента которого нужно выписать')
			medical.deletPatient(namePatientDel)
			break
		}
		case 7: {
			// Посмотреть топ докторов
			medical.topDoctors()
			break
		}
		case 8: {
			// Посмотреть количество свободных мест в больнице
			medical.vacancion()
			break
		}
		case 9: {
			//выход из меню
			exit = true
			break
		}
		default: {
			alert('такого пункта нет')
		}
	}

} while (exit == false)
*/

//Наследование
/*
function User(name, age) {
	this.name = name
	this.age = age
}

function test(name) {
	this.name = name
}

const user = new User("Andrey", 22)
test.call(user, 'kolya')
test.apply(user, ['kolya'])
console.log(user)

//test.call
//test.apply
*/



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

//student.setName("Kirill")
console.log(student.getName())
console.log(student)












