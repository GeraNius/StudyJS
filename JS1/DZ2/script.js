/*Задание №1*/
alert("Задание №1");
/*Дан код*/
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b); // 3
/*Почему код даёт именно такие результаты?*/
var s1 = "Задание №1: \n";
s1 += "a = 1, b = 1 \n";
s1 += "c = ++a - префиксный инкремент, сначала увеличение a, затем присваивание. a = 2, b = 1, c = 2 \n";
s1 += "d = b++ -  постфиксный инкремент, сначала присваивание, затем увеличение b. a = 2, b = 2, c = 2, d = 1 \n";
s1 += "c = (2+ ++a) - сначала увеличение a, затем сложение. a = 3, b = 2, c = 5, d = 1 \n";
s1 += "d = (2+ b++) - сначала сложение, затем увеличение b. a = 3, b = 3, c = 5, d = 4 \n";
alert(s1);
/*Задание №2*/
alert("Задание №2 \n x=5, так как сначала произведение a на 2, затем сложение с 1");
var a = 2;
var x = 1 + (a *= 2);
alert("x = " + x);
/*Задание №3*/
var m = prompt("Задание №3 \n Введите первое число");
var n = prompt("Задание №3 \n Введите второе число");
if ((parseInt(m) || m == 0) && (parseInt(n) || n == 0)) {
    if (m >= 0 && n >= 0) {
    	alert("Задание №3 \n Разность чисел равна " + (m-n));
    } else if (m < 0 && n < 0) {
    	alert("Задание №3 \n Произведение чисел равно " + (m*n));
    }
    else {
    	alert("Задание №3 \n Разность чисел равна " + (m+n));
    }
} else {
		alert("Задание №3 \n Хотя бы одно из введённых значений - не целое число \n Вычисление не получится");
}
/*Задание №4*/
var y = +prompt("Задание №4 \nВведите число в промежутке от 0 до 15");
var s2 = "Задание №4 \nЧисла от "+y+" до 15:\n";
switch(y){
	case 0: s2 += "0 ";
	case 1: s2 += "1 ";
	case 2: s2 += "2 ";
	case 3: s2 += "3 ";
	case 4: s2 += "4 ";
	case 5: s2 += "5 ";
	case 6: s2 += "6 ";
	case 7: s2 += "7 ";
	case 8: s2 += "8 ";
	case 9: s2 += "9 ";
	case 10: s2 += "10 ";
	case 11: s2 += "11 ";
	case 12: s2 += "12 ";
	case 13: s2 += "13 ";
	case 14: s2 += "14 ";
	case 15: s2 += "15 ";
	default: s2="Введенное число " + y + " не входит в промежуток от 0 до 15"
}
alert(s2);
/*Задание №5*/
function sumX(x,y) {
	return x+y;
}

function diffX(x,y) {
	return x-y;
}

function multX(x,y) {
	return x*y;
}

function divX(x,y) {
	if (y==0) {
		return "На 0 делить нельзя!";
	}
	return x/y;
}
var f = prompt("Задание №5 \nВведите первое число");
var g = prompt("Задание №5 \nВведите второе число");
if ((parseInt(f) || f == 0) && (parseInt(g) || g == 0)) {
	f = parseInt(f);
	g = parseInt(g);
	alert("Сумма чисел равна "+sumX(f,g)+"\nРазность чисел равна "+diffX(f,g)+"\nПроизведение чисел равно "+multX(f,g)+"\nЧастное чисел равно "+divX(f,g));
} else {
	alert("Задание №5 \n Хотя бы одно из введённых значений - не целое число \n Вычисление не получится");
}
/*Задание №6*/
function mathOperation(arg1, arg2, operation) {
	switch(operation){
		case "+": return sumX(arg1, arg2);
		case "-": return diffX(arg1, arg2);
		case "*": return multX(arg1, arg2);
		case "/": return divX(arg1, arg2);
		default: return "Введена неизвестная операция";
	}
}
var i = prompt("Задание №6 \nВведите первое число");
var j = prompt("Задание №6 \nВведите второе число");
var k = prompt("Задание №6 \nВведите операцию (+,-,*,/)");
if ((parseInt(i) || i == 0) && (parseInt(j) || j == 0)) {
	i = parseInt(i);
	j = parseInt(j);
	alert("Задание №6\n" + i + " " + k + " " + j + " = " + mathOperation(i,j,k));
} else {
	alert("Задание №6 \nХотя бы одно из введённых значений - не целое число \nВычисление не получится");
}
/*Задание №7*/
alert("Задание №7 \nТип значение null: " + typeof(null) + "\nТип значения 0: " + typeof(0) + "\nПоэтому реультат их сравнения: " + (0 == null));
/*Задание №8*/
function power(val, pow) {
	var result;
	if (pow == 0) {
		result = 1;
	}
	else if (pow == 1) {
		result = val;
	}
	else if (pow > 1) {
		result = val * power(val,pow-1);
	}
	else if (pow == -1) {
		result = 1/val;
	}
	else {
		result = 1 / val * power(val,pow+1)
	}
	return result;
}
var v = prompt("Задание №8 \nВведите число");
var p = prompt("Задание №8 \nВведите степень");
if ((parseInt(v) || v == 0) && (parseInt(p) || p == 0)) {
	v = parseInt(v);
	p = parseInt(p);
	alert("Задание №8\n" + v + " в степени " + p + " равно " + power(v, p));
} else {
	alert("Задание №8 \nХотя бы одно из введённых значений - не целое число \nВычисление не получится");
}