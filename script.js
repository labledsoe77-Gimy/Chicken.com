// Chicken image (new image for spawn and rain)
const chickenImages = [
    "https://cdn.britannica.com/07/183407-050-C35648B5/Chicken.jpg"
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
    img.src = chickenImages[0];
    img.style.width = "150px";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    chickenArea.appendChild(img);
};

// Chicken rain
let raining = false, rainInterval;

rainBtn.onclick = () => {
    if (!raining) {
        raining = true;
        rainInterval = setInterval(() => {
            const c = document.createElement("img");
            c.src = chickenImages[0];
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

// Chicken facts (new updated list)
const chickenFacts = [
    "Chickens can run up to 9 miles per hour.",
    "A group of chickens is called a flock.",
    "Chickens have excellent color vision, even better than humans.",
    "Chickens can remember over 100 different faces.",
    "The longest recorded lifespan of a chicken is 16 years.",
    "Chickens make over 30 different sounds to communicate.",
    "Some chickens can fly short distances despite being domesticated.",
    "Chickens are the closest living relatives of the Tyrannosaurus Rex."
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

// Close button reloads the page
closeBtn.onclick = () => location.reload();
