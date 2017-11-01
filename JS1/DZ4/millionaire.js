alert('Задание №3. Игра "Кто хочет стать миллионером?!"');
var usera, ok;
var usersum = 0;
var str = "";
for(var i=0; i<game.length;i++) {
	do {
    ok = 0;
    usera = prompt("Вопрос №"+(i+1)+" на сумму "+game[i].sum+"\n"+game[i].question+"\n1. "+game[i].A+"\n2. "+game[i].B+"\n3. "+game[i].C+"\n4. "+game[i].D+"\nВыберите один из вариантов (1, 2, 3, 4) либо введите 0, чтобы забрать деньги");
    ok = isAnswer(game[i].count,usera);
} while (!ok);
  if (ok==1) {
	  usersum = game[i-1].sum;
	  break;
  } else {
	  if (usera==game[i].right) {
		if (i = game.length-1)
			alert("И это правильный ответ!\nВы выиграли!!!");
		else
			alert("И это правильный ответ!\nВы выиграли сумму " + game[i].sum +"\nПереходим к следующему вопросу");
		if (game[i].fireproof)
			usersum = game[i].sum;
		} else {
			alert("Это неверный ответ!");
			break;
		}	
  }

}
alert("Игра окончена.\nВаш выигрыш равен "+ usersum);

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return 0;
    }
    else if (event < 0 || event > q) {
        alert('Ваш ответ выходит из допустимого диапазона');
        return 0;
    }
	else if (event == 0) {		
        alert('Благодарим за игру');
		return 1;
	}
    else {
        return 2;
    }
}
