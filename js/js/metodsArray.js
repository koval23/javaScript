
//TODO ========================= indexOf ====================================

// перебирает масив и к каждому елементу применить каккое либо действие или функцию

// если такое значение есть то возвращает его первое совпадение в масиве если елементы 
// повторяються то второй и далее не возвращаютсья если нет то возвращает -1
// indexOf(2,0) второе значения в методе означает с какого индекса начинать искать(не обезательно)

// const a = [3, 4, 5, 6, 7, 8, 9]
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

const r = [3, 4, 5, 6, 7, 8, 9]

if (r.includes(7, 3)) {
	console.log('yes');
}
else {
	console.log('no');

}






//================================================================================


