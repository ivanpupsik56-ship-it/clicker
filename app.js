const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();


// ==========================
// ФОНОВАЯ МУЗЫКА
// ==========================

const music = document.getElementById("music");

if (music) {
    music.volume = 0.25;
}

function playMusic() {

    if (music) {
        music.play().catch(() => {});
    }

}


// ==========================
// ДАННЫЕ ИГРОКА
// ==========================

let coins =
    Number(localStorage.getItem("coins")) || 0;

let hero =
    localStorage.getItem("hero") || "avatar";

let power =
    Number(localStorage.getItem("power")) || 1;


let bought;

try {

    bought =
        JSON.parse(
            localStorage.getItem("bought")
        );

    if (!Array.isArray(bought)) {
        bought = ["avatar"];
    }

} catch {

    bought = ["avatar"];

}


if (!bought.includes("avatar")) {
    bought.push("avatar");
}


// ==========================
// ЭЛЕМЕНТЫ
// ==========================

const coinsText =
    document.getElementById("coins");

const avatar =
    document.getElementById("avatar");

const clickButton =
    document.getElementById("click");

const shopButton =
    document.getElementById("shopBtn");

const shop =
    document.getElementById("shop");

const closeShop =
    document.getElementById("closeShop");


// ==========================
// ЗАГРУЗКА ИГРЫ
// ==========================

function loadGame() {

    coinsText.textContent = coins;

    // Для Меллстроя отдельное расширение
    if (hero === "mellstroy") {

        avatar.src =
            "characters/mellstroy.png";

    } else {

        avatar.src =
            "characters/" + hero + ".png";

    }

}

loadGame();


// ==========================
// КЛИК
// ==========================

clickButton.addEventListener(
    "click",
    () => {

        playMusic();

        coins += power;

        saveGame();

    }
);


// ==========================
// СОХРАНЕНИЕ
// ==========================

function saveGame() {

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


// ==========================
// ОТКРЫТЬ МАГАЗИН
// ==========================

shopButton.addEventListener(
    "click",
    () => {

        playMusic();

        shop.classList.remove(
            "hidden"
        );

    }
);


// ==========================
// НАЗАД
// ==========================

closeShop.addEventListener(
    "click",
    () => {

        shop.classList.add(
            "hidden"
        );

    }
);


// ==========================
// ЛИСЫЙ ЧЕМПИОН
// +2
// 100
// ==========================

document
    .getElementById("buyBald")
    .addEventListener(
        "click",
        () => {

            buyHero(
                "bald",
                100,
                2,
                "Лисий Чемпион"
            );

        }
    );


// ==========================
// ПУЗАТИК
// +5
// 750
// ==========================

document
    .getElementById("buyBoss")
    .addEventListener(
        "click",
        () => {

            buyHero(
                "puzatik",
                750,
                5,
                "Пузатик"
            );

        }
    );


// ==========================
// БОСС
// +10
// 1500
// ==========================

document
    .getElementById("buyBoss2")
    .addEventListener(
        "click",
        () => {

            buyHero(
                "boss",
                1500,
                10,
                "Босс"
            );

        }
    );


// ==========================
// КОЧ БРАТАН
// +20
// 2000
// ==========================

document
    .getElementById("buyKoch")
    .addEventListener(
        "click",
        () => {

            buyHero(
                "koch",
                2000,
                20,
                "Коч братан"
            );

        }
    );


// ==========================
// МЕЛЛСТРОЙ
// +50
// 5000
// ==========================

document
    .getElementById("buyMellstroy")
    .addEventListener(
        "click",
        () => {

            buyHero(
                "mellstroy",
                5000,
                50,
                "Меллстрой"
            );

        }
    );


// ==========================
// ПОКУПКА ПЕРСОНАЖА
// ==========================

function buyHero(
    name,
    price,
    strength,
    title
) {


    // Уже куплен

    if (bought.includes(name)) {

        alert(
            title +
            " уже куплен! ✅"
        );

        return;

    }


    // Не хватает монет

    if (coins < price) {

        alert(
            "Не хватает монет 😢\n\n" +
            "Нужно: " +
            price +
            " 🪙\n" +
            "У тебя: " +
            coins +
            " 🪙"
        );

        return;

    }


    // Покупаем

    coins -= price;

    hero = name;

    power = strength;

    bought.push(name);


    // Меняем картинку

    if (name === "mellstroy") {

        avatar.src =
            "characters/mellstroy.png";

    } else {

        avatar.src =
            "characters/" +
            name +
            ".png";

    }


    // Сохраняем

    saveGame();


    // Сообщение

    alert(
        title +
        " куплен! 🎉\n\n" +
        "Теперь ты получаешь +" +
        strength +
        " 🪙 за клик!"
    );

}
