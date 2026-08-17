const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();


// =========================
// ФОНОВАЯ МУЗЫКА
// =========================

const music = document.getElementById("music");

music.volume = 0.25;

function playMusic() {
    music.play().catch(() => {});
}


// =========================
// ДАННЫЕ ИГРОКА
// =========================

let coins = Number(localStorage.getItem("coins")) || 0;

let hero = localStorage.getItem("hero") || "avatar";

let power = Number(localStorage.getItem("power")) || 1;

let bought = JSON.parse(
    localStorage.getItem("bought")
) || ["avatar"];


// =========================
// ЭЛЕМЕНТЫ
// =========================

const coinsText = document.getElementById("coins");

const avatar = document.getElementById("avatar");


// =========================
// ЗАГРУЗКА
// =========================

coinsText.textContent = coins;

avatar.src = "characters/" + hero + ".png";


// =========================
// КЛИК
// =========================

document.getElementById("click").onclick = () => {

    // запускаем музыку после первого нажатия
    playMusic();

    // добавляем монеты
    coins += power;

    // сохраняем
    save();

};


// =========================
// СОХРАНЕНИЕ
// =========================

function save() {

    coinsText.textContent = coins;

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


// =========================
// ОТКРЫТЬ МАГАЗИН
// =========================

document.getElementById("shopBtn").onclick = () => {

    playMusic();

    document
        .getElementById("shop")
        .classList.remove("hidden");

};


// =========================
// НАЗАД ИЗ МАГАЗИНА
// =========================

document.getElementById("closeShop").onclick = () => {

    document
        .getElementById("shop")
        .classList.add("hidden");

};


// =========================
// ЛИСИЙ ЧЕМПИОН
// 100 монет
// +2 за клик
// =========================

document.getElementById("buyBald").onclick = () => {

    buyHero(
        "bald",
        100,
        2,
        "Лисий Чемпион"
    );

};


// =========================
// ПУЗАТИК
// 750 монет
// +5 за клик
// =========================

document.getElementById("buyBoss").onclick = () => {

    buyHero(
        "puzatik",
        750,
        5,
        "Пузатик"
    );

};


// =========================
// БОСС
// 1500 монет
// +10 за клик
// =========================

document.getElementById("buyBoss2").onclick = () => {

    buyHero(
        "boss",
        1500,
        10,
        "Босс"
    );

};


// =========================
// КОЧ БРАТАН
// 2000 монет
// +20 за клик
// =========================

document.getElementById("buyKoch").onclick = () => {

    buyHero(
        "koch",
        2000,
        20,
        "Коч братан"
    );

};


// =========================
// ПОКУПКА ПЕРСОНАЖА
// =========================

function buyHero(name, price, strength, title) {

    // уже куплен
    if (bought.includes(name)) {

        alert(
            title + " уже куплен! ✅"
        );

        return;
    }


    // хватает денег
    if (coins >= price) {

        coins -= price;

        hero = name;

        power = strength;

        bought.push(name);


        // меняем главного персонажа
        avatar.src =
            "characters/" + name + ".png";


        // сохраняем
        save();


        alert(
            title +
            " куплен! ⚡ +" +
            strength +
            " за клик"
        );

    }

    else {

        alert(
            "Не хватает монет 😢"
        );

    }

}
