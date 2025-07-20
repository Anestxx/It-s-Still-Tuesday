const clickSound = document.getElementById("click-sound");
const typeSound = document.getElementById("type-sound");
const characterImg = document.getElementById("character");
const dialogueText = document.getElementById("dialogue-text");

let isShocked = false;
let dialogueIndex = 0;
let typingInterval = null;

// Dialogue lines
const dialogueLines = [
  "Hey! I see you 👀",
  "Why are you still staring?",
  "It’s still Tuesday, huh?",
  "I blink faster than your Wi-Fi.",
  "Do you like flowers? I do 🌸",
  "Click me again, I dare you.",
  "What if I'm sentient?",
  "Hmmmm...",
  "I know you touched the cheese."
];

// Typewriter effect with sound
function showDialogue(line) {
  clearInterval(typingInterval);
  typeSound.pause();
  typeSound.currentTime = 0;
  dialogueText.textContent = "";

  let i = 0;
  typingInterval = setInterval(() => {
    if (i === 0) {
      typeSound.loop = true;
      typeSound.play();
    }

    if (i < line.length) {
      dialogueText.textContent += line[i];
      i++;
    } else {
      clearInterval(typingInterval);
      typeSound.pause();
      typeSound.currentTime = 0;
    }
  }, 40);
}

// Rapid blink every 0.5s
setInterval(() => {
  if (isShocked) return;
  characterImg.src = "eyes closed.png";
  setTimeout(() => {
    if (!isShocked) characterImg.src = "eyes open.png";
  }, 150);
}, 500);

// Click event: shocked + dialogue
characterImg.addEventListener("click", () => {
  if (isShocked) return;

  isShocked = true;
  clickSound.currentTime = 0;
  clickSound.play();

  characterImg.src = "schcked.png";

  // Show dialogue
  const nextLine = dialogueLines[dialogueIndex % dialogueLines.length];
  showDialogue(nextLine);
  dialogueIndex++;

  setTimeout(() => {
    characterImg.src = "eyes open.png";
    isShocked = false;
  }, 1000);
});

// 🌸 Petal rain
const petalContainer = document.querySelector('.rain-petals');
const petals = ['🌸', '💮', '🌺', '🌼'];

for (let i = 0; i < 40; i++) {
  const petal = document.createElement('span');
  petal.classList.add('petal');
  petal.textContent = petals[Math.floor(Math.random() * petals.length)];
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (4 + Math.random() * 4) + 's';
  petal.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
  petalContainer.appendChild(petal);
}
