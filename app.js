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






document.getElementById("click").onclick = ()=>{


coins += power;


save();


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








// Лисий Чемпион

document.getElementById("buyBald").onclick = ()=>{


buyHero(
"bald",
100,
2,
"Лисий Чемпіон"
);


};







// Пузатик

document.getElementById("buyBoss").onclick = ()=>{


buyHero(
"puzatik",
750,
5,
"Пузатик"
);


};







// Босс

document.getElementById("buyBoss2").onclick = ()=>{


buyHero(
"boss",
1500,
10,
"Босс"
);


};








function buyHero(name,price,strength,title){



if(bought.includes(name)){


alert(title+" уже куплен!");

return;


}




if(coins >= price){



coins -= price;


hero=name;


power=strength;



bought.push(name);



avatar.src =
"characters/"+name+".png";



save();



alert(title+" куплен! ⚡ +"+strength+" за клик");


}

else{


alert("Не хватает монет 😢");


}


}
