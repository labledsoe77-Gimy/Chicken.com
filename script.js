// Chicken images
const chickenImages = [
    "https://i.imgur.com/8aJJeYp.jpeg",
    "https://i.imgur.com/3cZb2at.jpeg",
    "https://i.imgur.com/D1ybx5t.jpeg",
    "https://i.imgur.com/xPUy7UO.jpeg",
    "https://i.imgur.com/U5Q9e0y.jpeg"
];

// DOM elements
const spawnBtn = document.getElementById("spawnBtn");
const rainBtn = document.getElementById("rainBtn");
const factBtn = document.getElementById("factBtn");
const closeBtn = document.getElementById("closeBtn");
const cluckBtn = document.getElementById("cluckBtn");
const speakBtn = document.getElementById("speakBtn");
const danceBtn = document.getElementById("danceBtn");
const danceImg = document.getElementById("danceImg");
const chickenArea = document.getElementById("chickenArea");

// Spawn a chicken
spawnBtn.onclick = () => {
    const img = document.createElement("img");
    img.src = chickenImages[Math.floor(Math.random() * chickenImages.length)];
    img.style.width = "150px";
    chickenArea.appendChild(img);
};

// Chicken rain
let raining = false, rainInterval;

rainBtn.onclick = () => {
    if (!raining) {
        raining = true;
        rainInterval = setInterval(() => {
            const c = document.createElement("img");
            c.src = chickenImages[Math.floor(Math.random() * chickenImages.length)];
            c.style.position = "fixed";
            c.style.width = "80px";
            c.style.top = "-100px";
            c.style.left = Math.random() * window.innerWidth + "px";
            c.style.transition = "top 2s linear";
            document.body.appendChild(c);
            setTimeout(() => { c.style.top = window.innerHeight + "px"; }, 50);
            setTimeout(() => c.remove(), 2500);
        }, 300);
    } else {
        raining = false;
        clearInterval(rainInterval);
    }
};

// Facts
const chickenFacts = [
    "Chickens recognize over 100 faces.",
    "Chickens dream during REM sleep.",
    "Chickens communicate before hatching.",
    "A chicken lived 18 months without a head."
];

factBtn.onclick = () => {
    const fact = chickenFacts[Math.floor(Math.random() * chickenFacts.length)];
    alert(fact);
};

// Sounds
cluckBtn.onclick = () => new Audio("https://www.fesliyanstudios.com/play-mp3/6686").play();
speakBtn.onclick = () => speechSynthesis.speak(new SpeechSynthesisUtterance("Chickens are awesome!"));

// Dancing chicken
let dancing = true;
danceBtn.onclick = () => {
    dancing = !dancing;
    danceImg.style.display = dancing ? "block" : "none";
};

// Close
closeBtn.onclick = () => location.reload();
