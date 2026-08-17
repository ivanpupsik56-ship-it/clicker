const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();



let coins = Number(localStorage.getItem("coins")) || 0;

let hero = localStorage.getItem("hero") || "avatar";

let power = Number(localStorage.getItem("power")) || 1;



const coinsText = document.getElementById("coins");

const avatar = document.getElementById("avatar");



coinsText.innerHTML = coins;


avatar.src = "./characters/" + hero + ".png";





document.getElementById("click").onclick = () => {


coins += power;


coinsText.innerHTML = coins;


localStorage.setItem(
"coins",
coins
);



avatar.classList.add("jump");


setTimeout(()=>{

avatar.classList.remove("jump");

},150);



};






document.getElementById("shopBtn").onclick = ()=>{


document
.getElementById("shop")
.classList.remove("hidden");


};






document.getElementById("closeShop").onclick = ()=>{


document
.getElementById("shop")
.classList.add("hidden");


};






document.getElementById("buyBald").onclick = ()=>{


if(coins >= 100){


coins -= 100;


hero="bald";


power=2;



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



avatar.src="./characters/bald.png";


coinsText.innerHTML=coins;



alert("Лисий Чемпіон куплен!");



}

else{


alert("Нужно 100 монет");


}


};
