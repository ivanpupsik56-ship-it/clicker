const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();



let coins = Number(localStorage.getItem("coins")) || 0;

let hero = localStorage.getItem("hero") || "avatar";



const coinsText = document.getElementById("coins");

const avatar = document.getElementById("avatar");



coinsText.innerHTML = coins;


avatar.src =
"characters/" + hero + ".png";





document.getElementById("click").onclick = ()=>{


coins++;


save();


};





function save(){


coinsText.innerHTML = coins;


localStorage.setItem(
"coins",
coins
);


}





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







function buyBald(){


if(coins >= 100){


coins -= 100;


hero="bald";


localStorage.setItem(
"hero",
hero
);



avatar.src=
"characters/bald.png";



save();



alert("Персонаж куплен!");



}

else{


alert("Нужно 100 монет");

}


}
