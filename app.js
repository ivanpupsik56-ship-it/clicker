let score = 0;

const text = document.getElementById("score");
const btn = document.getElementById("click");

btn.onclick = () => {

score++;

text.innerHTML = score;

};
