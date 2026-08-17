const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();


let score = Number(localStorage.getItem("clicks")) || 0;


const text = document.getElementById("score");
const btn = document.getElementById("click");
const avatar = document.querySelector(".avatar");


text.innerHTML = score;



btn.onclick = () => {

    score++;

    text.innerHTML = score;


    // сохраняем
    localStorage.setItem(
        "clicks",
        score
    );


    // вибрация в Telegram
    if(tg.HapticFeedback){

        tg.HapticFeedback.impactOccurred(
            "medium"
        );

    }


    // анимация лица
    avatar.classList.add("jump");


    setTimeout(()=>{

        avatar.classList.remove("jump");

    },150);



    // +1 эффект
    let plus = document.createElement("div");

    plus.innerHTML="+1";

    plus.className="plus";


    document.querySelector(".game")
    .appendChild(plus);



    setTimeout(()=>{

        plus.remove();

    },800);


};
