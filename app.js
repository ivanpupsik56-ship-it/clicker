const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();


// ФОНОВАЯ МУЗЫКА

const music = new Audio("sounds/background.mp3");

music.loop = true;
music.volume = 0.25;



// данные игрока

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


    // запуск музыки после первого касания телефона

    music.play();


    coins += power;


    save();


};







// СОХРАНЕНИЕ

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







// ОТКРЫТЬ МАГАЗИН

document.getElementById("shopBtn").onclick = ()=>{


    music.play();


    document
    .getElementById("shop")
    .classList.remove("hidden");


};







// ЗАКРЫТЬ МАГАЗИН

document.getElementById("closeShop").onclick = ()=>{


    document
    .getElementById("shop")
    .classList.add("hidden");


};










// ЛИСИЙ ЧЕМПИОН

document.getElementById("buyBald").onclick = ()=>{


buyHero(
"bald",
100,
2,
"Лисий Чемпион"
);


};









// ПУЗАТИК

document.getElementById("buyBoss").onclick = ()=>{


buyHero(
"puzatik",
750,
5,
"Пузатик"
);


};









// БОСС

document.getElementById("buyBoss2").onclick = ()=>{


buyHero(
"boss",
1500,
10,
"Босс"
);


};









// ПОКУПКА

function buyHero(name, price, strength, title){



    if(bought.includes(name)){


        alert(
        title + " уже куплен!"
        );


        return;


    }






    if(coins >= price){



        coins -= price;


        hero = name;


        power = strength;



        bought.push(name);





        avatar.src =
        "characters/" + name + ".png";



        save();




        alert(
        title + " куплен! ⚡ +" 
        + strength 
        + " за клик"
        );



    }

    else{


        alert(
        "Не хватает монет 😢"
        );


    }


}
