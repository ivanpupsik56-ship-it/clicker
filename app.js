const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();



let coins = Number(localStorage.getItem("coins")) || 0;

let hero = localStorage.getItem("hero") || "avatar";

let power = Number(localStorage.getItem("power")) || 1;



let bought = JSON.parse(
    localStorage.getItem("bought")
) || ["avatar"];





const coinsText = document.getElementById("coins");

const avatar = document.getElementById("avatar");



coinsText.innerHTML = coins;


avatar.src = "characters/" + hero + ".png";






// КЛИК

document.getElementById("click").onclick = ()=>{


coins += power;


coinsText.innerHTML = coins;



localStorage.setItem(
    "coins",
    coins
);



};








// открыть магазин

document.getElementById("shopBtn").onclick = ()=>{

document
.getElementById("shop")
.classList.remove("hidden");

};







// закрыть магазин

document.getElementById("closeShop").onclick = ()=>{


document
.getElementById("shop")
.classList.add("hidden");


};









// ЛИСИЙ ЧЕМПИОН

document.getElementById("buyBald").onclick = ()=>{


if(bought.includes("bald")){


alert("Лисий Чемпион уже куплен!");

return;


}



if(coins >= 100){


coins -= 100;


hero = "bald";


power = 2;



bought.push("bald");



save();



avatar.src = "characters/bald.png";



alert("Лисий Чемпион куплен! +2 за клик 🔥");



}

else{


alert("Нужно 100 монет");


}


};









// ПУЗАТИК

document.getElementById("buyBoss").onclick = ()=>{


if(bought.includes("puzatik")){


alert("Пузатик уже куплен!");

return;


}




if(coins >= 750){


coins -= 750;


hero = "puzatik";


power = 5;



bought.push("puzatik");



save();



avatar.src = "characters/puzatik.png";



alert("Пузатик куплен! +5 за клик 🐷🔥");



}

else{


alert("Нужно 750 монет");


}


};









function save(){


coinsText.innerHTML = coins;



localStorage.setItem(
"coins",
coins
);



localStorage.setItem(
"hero",
hero
);



localStorage.setItem(
"power",
power
);



localStorage.setItem(
"bought",
JSON.stringify(bought)
);



}
