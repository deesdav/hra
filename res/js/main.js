const attack = document.getElementById("attack");
const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const hp1 = document.getElementById("hp1");
const hp2 = document.getElementById("hp2");
const info = document.getElementById("info");


attack.onmousedown = () => {
    if (hp2.innerHTML <= 0) {
        info.innerHTML = `zemřel nepřítel`;
        clearInterval(interval);
    } else if (hp1.innerHTML > 0 && hp2.innerHTML > 0) {
        player.style.left = "200px";
        hp2.innerHTML--;
    }
}
attack.onmouseup = () => {
    player.style.left = "0px";
}
const interval = setInterval(() => {
    hp1.innerHTML--;
    if (hp1.innerHTML <= 0) {
        info.innerHTML = `zemřel jsi`;
        clearInterval(interval);
    }
}, 500);