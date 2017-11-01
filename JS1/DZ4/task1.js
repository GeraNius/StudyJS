function numObj(n) {
	var numberObject = {units: 0, tens: 0, hundreds: 0};
	if (isNaN(n) || n < 0 || n > 999) {
		numberObject = null;
		console.log("Число "+n+" не входит в диапазон от 0 до 999");
	} else {
		numberObject.units = n%10;
		numberObject.tens = (n%100-n%10)/10;
		numberObject.hundreds = (n%1000-n%100)/100;
	}
	return numberObject;
}

var m = prompt("Задание №1. Введите число в диапазоне от 0 до 999 и результаты смотрите в консоли");
if (numObj(m) != null)
	console.log(numObj(m));