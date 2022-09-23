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


class Medical {
	#doctors
	#patients
	constructor(doctors, pacients) {
		this.#doctors = [doctors];
		this.#patients = [pacients];
	}
	get patients() {
		return this.#patients
	}
	get pacients() {
		return this.#patients
	}
	//todo Добавить доктора имя и специальнось
	addDoctor(doc) {
		this.#doctors.push(doc);
		return true
	}
	// todo Добавить пациента
	addPatient(pacient) {
		if (this.#patients.length <= 10) {
			this.#patients.push(pacient);
			return true
		} else {
			return false;
		}
	}
	//todo Посмотреть докторов
	showNamesDoctors() {
		let infoDoctors = ''
		for (let doctor of this.#doctors) {
			infoDoctors += `Имя доктора ${doctor.name} специализация ${doctor.spechality} пациенты `
			if (doctor.doctorPatients.length > 0) {
				for (let patient of doctor.doctorPatients) {
					infoDoctors += patient.name + ', '
				}
			} else {
				infoDoctors += `отсутствуют`
			}
			infoDoctors += '\n'
		}
		return infoDoctors
	}
	//todo Посмотреть пациентов
	showNamesPatients() {
		let infoPatients = ''
		for (let patient of this.#patients) {
			infoPatients += `Имя пациента :  ${patient.name}, \n Болезнь пациента : ${patient.disease}\n`
		}
		return infoPatients
	}
	//todo Призначить пациенту доктора
	addPacientDoctor(namePatient, nameDoctor) {
		let patObject = '';
		let info = '';
		for (let patient of this.#patients) {
			if (patient.name == namePatient) {
				patObject = patient
			} else {
				return info = `такого пациента нету: ${patient.name}`
			}
		}
		for (let doctor of this.#doctors) {
			if (doctor.name == nameDoctor) {
				doctor.doctorPatients.push('Имя пациента ' + patObject.name + '; ' + 'Болезнь: ' + patObject.disease)
			} else {
				return info = `такого доктора нету: ${doctor.name}`
			}
		}
		info = 'Пациент добавлен доктору'
		return info
	}
	//todo Выписать пациента
	//! нужен ответ
	deletPatient(pacientDel) {
		for (patient of this.#patients) {
			if (patient.name == pacientDel) {
				this.#patients.splice(this.#patients.indexOf(patient), 1)
			}
		}
	}
	//todo Посмотреть топ докторов
	topDoctors() {
		let arr = this.#doctors.sort(function (a, b) {
			if (a.doctorPatients.length > b.doctorPatients.length) {
				return 1
			}
			if (a.doctorPatients.length < b.doctorPatients.length) {
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
	vacancion() {
		const result = 10 - this.#patients.length
		return result
	}
}

//* главный конструктор 
class Human {
	#name
	constructor(name) {
		this.#name = name;
	}
	get name() {
		return this.#name;
	}
	set changeName(name) {
		this.#name = name;
	}
}

//* инициализируем докторов
class Doctor extends Human {
	#doctorPatients
	#spechality
	constructor(name, spechality, doctorPatients) {
		super(name)
		this.#doctorPatients = [doctorPatients];
		this.#spechality = spechality;
	}
	get doctorPatients() {
		return this.#doctorPatients;
	};
	get spechality() {
		return this.#spechality;
	};
}

//* инициализируем пациентов
class Patient extends Human {
	#disease
	constructor(name, disease) {
		super(name)
		this.#disease = disease;
	}

	get disease() {
		return this.#disease;
	}
}


//Patient.prototype.toString = function () {
//	return `${this.__name} ${this.__disease}`;
//}

const medical = new Medical()
//* добавляем пациентов для теста ===================================================

let q1 = new Patient('kola', 'Петров')
let q2 = new Patient('Vova', 'Петров')
let q3 = new Patient('vasa', 'Петров')
let q4 = new Patient('yura', 'Петров')
let q5 = new Patient('ira', 'Петров')

//medical.addPacientDoctor(q2)
//medical.addPatient(q3)
//medical.addPatient(q4)
//medical.addPatient(q5)

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
			resAddDoctor ? alert("Доктор добавлен") : alert("не ввели имя доктора")
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
			//const findPatient = medical.findPatient(namePatient)

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

//!дз СДЕЛАТЬ ВСЕ ВОЗМОЖНЫЕ ПРОВЕРКИ





