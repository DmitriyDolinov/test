var quest = +prompt("Ваш бюджет?");
var name =  prompt("Название вашего магазина?");
var obj = {
	name: "John",
	age: 25 
};
var mainList = {
		 budjet: quest,
		 magaz: name,
		 emp: obj,
		 isOpen: true
};
var sale1 = +prompt("Какой тип товарова продавать?");
var sale2 = +prompt("Какой тип товарова продавать?");
var sale3 = +prompt("Какой тип товарова продавать?");
var shopGoods = [sale1, sale2, sale3];
alert(quest/30);