const MAX_COUNT = 9;
const GAL_COUNT = 3;

// 
var goods;
var gallery;
var basket;
var beginIndex;
var orderSum;

function initGoods() {
    goods = new Array(MAX_COUNT);
    goods[0] = { name: "В корзине пока нет товаров", price: "", image: "img/gallery/no_photo.jpg", icon: "" };
    for (var i = 1; i < goods.length; i++) {
        goods[i] = { shortname: i, name: i, price: i * 100, icon: "img/gallery/small/" + i + ".jpg" }
    }
    goods[1].name = "Астана, Казахстан";
    goods[2].name = "Шанхай, Китай";
    goods[3].name = "Каир, Египет";
    goods[4].name = "Арабские Эмираты";
    goods[5].name = "Иерусалим, Израиль";
    goods[6].name = "Леон, Испания";
    goods[7].name = "Кёльн, Германия";
    goods[8].name = "Медина, Саудовская Аравия";    
    goods[1].shortname = "Астана";
    goods[2].shortname = "Шанхай";
    goods[3].shortname = "Каир";
    goods[4].shortname = "Эмираты";
    goods[5].shortname = "Иерусалим";
    goods[6].shortname = "Леон";
    goods[7].shortname = "Кёльн";
    goods[8].shortname = "Медина";
}

function initGallery() {
    var b;
    if (beginIndex >= 1 && beginIndex <= 6) {
        b = beginIndex;
    }
    gallery = new Array(GAL_COUNT);
    for (var i = 0; i < gallery.length; i++) {
        gallery[i] = goods[b + i];
        gallery[i].border = false;
        console.log(gallery[i]);
    }
    var images = document.getElementsByClassName("goods");
    for (var i = 0; i < images.length; i++) {
        images[i].src = gallery[i].icon;
        images[i].onclick = changeBigPicture;
    }
    var names = document.getElementsByClassName("nameprice");
    for (var i = 0; i < names.length; i++) {
        names[i].innerHTML = gallery[i].shortname+" "+gallery[i].price;
    }
}

function initBasket() {
    basket = new Array(1);
    basket[0] = goods[0];
    orderSum = 0;
}

function printBasket() {
    var basketDiv = document.getElementById("basket");
    basketDiv.innerHTML = "<h3 class = 'basket'>Ваша корзина</h3>";
    for (var i = 0; i < basket.length; i++) {
        var goodElement = document.createElement("div");
        goodElement.innerHTML = "<p class = 'nameprice'>" + basket[i].name+"&nbsp;" + basket[i].price + "</p>";
        basketDiv.appendChild(goodElement);
    }
    var total = document.createElement("div");
    total.innerHTML = "<p class = 'nameprice'>Сумма заказа " + orderSum + "</p>";
    basketDiv.appendChild(total);
}

function init() {
    initGoods();
    beginIndex = 1;
    initGallery();
    initBasket();
    printBasket();
}

function changeBigPicture(eventObj) {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.src.split("img/gallery/small/");
    var src = "img/gallery/big/" + imageNameParts[1];
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);
    /*1) Доработать функцию замены картинки в галерее таким образом, 
    чтобы она проверяла наличие картинки по указанному в src адресу.*/
    imageDomElement.onerror = function() {
        imageDomElement.src = "img/gallery/no_photo.jpg";
    };
    //imgColor(eventElement);
}

function imgColor(elem) {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (gallery[i].border) {
            images[i].style.borderColor = "#ba1000";
        } else {
            images[i].style.borderColor = "#ffffff";
        }
    }
}

/*2) Реализовать модуль корзины. Создать блок товаров и блок корзины. 
У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. 
Корзина должна уметь считать общую сумму заказа.*/
function fillBasket(index) {  
    console.log(index);
    var len = basket.length;
    if (orderSum == 0) {
        basket[0] = gallery[index-1];
    } else {
       basket[len] = gallery[index-1];
    }
    orderSum += gallery[index-1].price;
    printBasket();
}

/*3) * Добавить в галерею функцию перехода к следующему изображению. 
По сторонам от большой картинки должны быть стрелки “вперед” и “назад”, 
по нажатию на которые происходит замена изображения на следующее или предыдущее.*/
function movePics(dir) {
    console.log("movePics " + dir);
    if (dir == "left") {
        beginIndex--;
    } else {
        beginIndex++;
    }
    initGallery();
}

window.onload = init;