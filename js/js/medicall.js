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

let text = document.querySelector('.text')

function Medical() {
	this.__doctors = [];
	this.__patients = [];
	// Добавить доктора имя и специальнось
	this.setaddDoctor = function (doc) {
		this.__doctors.push(doc)
	}
	// Добавить пациента
	this.setaddPatient = function (pacient) {
		if (this.__patients.length <= 10) {
			this.__patients.push(pacient)
		} else {
			alert('Извените все места заняты')
		}
	}
	// Посмотреть докторов
	this.getShowNamesDoctors = function () {
		for (let doctor of this.__doctors) {
			console.log('Имя доктора' + ': ' + doctor.__name);
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

		let res = []
		for (doctor of this.__doctors) {
			if (doctor.__doctorPatients.length > 0) {
				res.push(doctor)
			}
			//res += doctor
		}

		console.log(res);

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
	this.__doctorPatients = [];
	this.__name = name;
	this.__spechality = spechality;
}

function Patient(name, disease) {
	this.__name = name;
	this.__disease = disease;
}

const medical = new Medical()



let w1 = new Doctor('vita', 'dantist')
let w2 = new Doctor('olga', 'pediatr')
let w3 = new Doctor('vala', 'dantist')
let w4 = new Doctor('vasa', 'hirurg')

medical.setaddDoctor(w1)
medical.setaddDoctor(w2)
medical.setaddDoctor(w3)
medical.setaddDoctor(w4)


//console.log(w1.__name);


let q1 = new Patient('kola', 'Петров')
let q2 = new Patient('Vova', 'Петров')
let q3 = new Patient('vasa', 'Петров')


medical.addPacientDoctor(q2)

medical.setaddPatient(q1)
medical.setaddPatient(q2)
medical.setaddPatient(q3)
medical.setaddPatient(q4)
medical.setaddPatient(q5)


let exit = false
do {
	let menu = Number(prompt('введите число от 1 до 9'))

	switch (menu) {
		case 1: {
			// Добавить доктора имя и специальнось
			const name = prompt('ведите имя доктора')
			const spechality = prompt('ведите специальность доктора')
			const doctor = new Doctor(name, spechality)
			medical.setaddDoctor(doctor)
			break
		}
		case 2: {
			// Добавить пациента
			const name = prompt('ведите имя пациента')
			const disease = prompt('ведите болезнь пациента')
			const patient = new Patient(name, disease)
			medical.setaddPatient(patient)
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