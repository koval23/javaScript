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

	this.info = function () {
		console.log(this.__name, this.__age)
	}

}

function Student(name, age, univer) {
	Human.call(this, name, age)
	this.__univer = univer

	this.getUniver = function () {
		return this.__univer
	}
	this.info = function () {
		console.log(this.__name, this.__age, this.__univer)
	}
}

function Employee(name, age, firm) {
	Human.call(this, name, age)
	this.__firm = firm
	this.getFirm = function () {
		return this.__firm
	}
}

Student.prototype.toString = function () {
	return this.__name
}

const student = new Student("Pasha", 21, "KN")
const employee = new Employee("Anton", 24, "Google")

let x = 5
console.log(x.toString())
console.log([5, 7, 3, 5, 7].toString())
console.log(String([5, 7, 3, 5, 7]))
console.log(String(student))
console.log(employee.toString())
student.info()
employee.info()











