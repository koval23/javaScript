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




function Medical() {
	this.__doctors = [];
	this.__patients = [];

	//!
	this.getPatients = function () {
		return this.__patients
	}
	this.getDoctors = function () {
		return this.__doctors
	}
	//!

	//todo Добавить доктора имя и специальнось
	this.addDoctor = function (doc) {
		//Проверка на наличие докора в системе
		this.getDoctors().push(doc)

		return true
	}
	// todo Добавить пациента
	this.addPatient = function (pacient) {
		if (this.getPatients().length <= 10) {
			this.getPatients().push(pacient)
			return true
		} else {
			return false
		}
	}
	//todo Посмотреть докторов
	this.getShowNamesDoctors = function () {
		let infoDoctors = ''
		for (let doctor of this.getDoctors()) {
			infoDoctors += `Имя доктора ${doctor.getName()} специализация ${doctor.getSpechality()} пациенты `
			if (doctor.getDoctorPatients().length > 0) {
				for (let patient of doctor.getDoctorPatients()) {
					infoDoctors += patient.getName() + ', '
				}
			} else {
				infoDoctors += `отсутствуют`
			}
			infoDoctors += '\n'
		}
		return infoDoctors
	}
	//todo Посмотреть пациентов
	this.getShowNamesPatients = function () {
		let infoPatients = ''
		for (let patient of this.getPatients()) {
			infoPatients += `Имя пациента :  ${patient.getName()}, \n Болезнь пациента : ${patient.getDisease()}\n`
		}
		return infoPatients
	}
	//todo Призначить пациенту доктора
	this.addPacientDoctor = function (namePatient, nameDoctor) {
		let patObject = '';
		let info = '';
		for (let patient of this.getPatients()) {
			if (patient.getName() == namePatient) {
				patObject = patient
			} else {
				return info = `такого пациента нету: ${patient.getName()}`
			}
		}
		for (let doctor of this.getDoctors()) {
			if (doctor.getName() == nameDoctor) {
				doctor.getDoctorPatients().push('Имя пациента ' + patObject.getName() + '; ' + 'Болезнь: ' + patObject.getDisease())
			} else {
				return info = `такого доктора нету: ${doctor.getName()}`
			}
		}
		info = 'Пациент добавлен доктору'
		return info
	}
	//todo Выписать пациента
	this.deletPatient = function (pacientDel) {
		for (patient of this.getPatients()) {
			if (patient.getName() == pacientDel) {
				this.getPatients().splice(this.getPatients().indexOf(patient), 1)
			}
		}
	}
	//todo Посмотреть топ докторов
	this.topDoctors = function () {
		let arr = this.getDoctors().sort(function (a, b) {
			if (a.getDoctorPatients().length > b.getDoctorPatients().length) {
				return 1
			}
			if (a.getDoctorPatients().length < b.getDoctorPatients().length) {
				return -1
			}
		})
		let text = ''
		for (let i = 0; i < 3; i++) {
			text += arr[i] + '\n';
		}
		return text
	}
	//todo Посмотреть количество свободных мест в больнице
	this.vacancion = function () {
		const result = 10 - this.getPatients().length
		return result
	}
}

//* главный обект
function Human(name) {

	this.__name = name;

	this.getName = function () {
		return this.__name;
	}
	this.setName = function (name) {
		this.__name = name;
	}
}

//* инициализируем докторов
function Doctor(name, spechality) {

	Human.call(this, name)

	this.__doctorPatients = [q1, q2];
	this.__spechality = spechality;

	this.getSpechality = function () {
		return this.__spechality;
	}
	this.setSpechality = function (spechality) {
		this.__spechality = spechality;
	}
	this.getDoctorPatients = function () {
		return this.__doctorPatients;
	}

}

//* инициализируем пациентов
function Patient(name, disease) {

	Human.call(this, name)

	this.__disease = disease;

	this.setDisease = function (disease) {
		this.__disease = disease;
	}
	this.getDisease = function () {
		return this.__disease;
	}
}

Patient.prototype.toString = function () {
	return `${this.__name} ${this.__disease}`;
}

const medical = new Medical()
//* добавляем пациентов для теста ===================================================

let q1 = new Patient('kola', 'Петров')
let q2 = new Patient('Vova', 'Петров')
let q3 = new Patient('vasa', 'Петров')
let q4 = new Patient('yura', 'Петров')
let q5 = new Patient('ira', 'Петров')

medical.addPacientDoctor(q2)
medical.addPatient(q3)
medical.addPatient(q4)
medical.addPatient(q5)

let w1 = new Doctor('vita', 'dantist')
let w2 = new Doctor('olga', 'pediatr')
let w3 = new Doctor('vala', 'dantist')
let w4 = new Doctor('vasa', 'hirurg')

medical.addDoctor(w1)
medical.addDoctor(w2)
medical.addDoctor(w3)
medical.addDoctor(w4)


//document.querySelector('button').onclick = () => {
let exit = false
do {
	let menu = Number(prompt('введите число от 1 до 9'))

	switch (menu) {
		case 1: {
			//todo Добавить доктора имя и специальнось
			const name = prompt('ведите имя доктора')
			const spechality = prompt('ведите специальность доктора')
			const doctor = new Doctor(name, spechality)
			const resAddDoctor = medical.addDoctor(doctor)
			resAddDoctor ? alert("Доктор добавлен") : alert("Ошибка добавления")
			break
		}
		case 2: {
			//todo Добавить пациента
			const name = prompt('ведите имя пациента')
			const disease = prompt('ведите болезнь пациента')
			const patient = new Patient(name, disease)
			const resAdd = medical.addPatient(patient)
			resAdd ? alert("Добавлен пациент") : alert('Извените все места заняты')
			break
		}
		case 3: {
			//todo Посмотреть докторов
			const info = medical.getShowNamesDoctors()
			info == '' ? alert('Докторов нет') : alert(info);
			break
		}
		case 4: {
			//todo Посмотреть пациентов
			let info = medical.getShowNamesPatients()
			alert(info);
			break
		}
		case 5: {
			//todo Призначить пациенту доктора
			const namePatient = prompt('ведите имя пациента')
			const nameDoctor = prompt('ведите имя доктора')
			let result = medical.addPacientDoctor(namePatient, nameDoctor)
			alert(result);
			break
		}
		case 6: {
			//todo Выписать пациента
			const namePatientDel = prompt('Введите имя пациента которого нужно выписать')
			medical.deletPatient(namePatientDel)
			break
		}
		case 7: {
			//todo Посмотреть топ докторов
			medical.topDoctors()
			break
		}
		case 8: {
			//todo Посмотреть количество свободных мест в больнице
			const result = medical.vacancion()
			alert('Свободных мест: ' + result);
			break
		}
		case 9: {
			//todo выход из меню
			exit = true
			break
		}
		default: {
			alert('такого пункта нет')
		}
	}
} while (exit == false)
//}



























