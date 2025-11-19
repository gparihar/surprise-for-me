const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const animation = document.getElementById("animation");

const questions = [
  "Heyy cutie how are you 😁",
  "Can I ask you something 😅",
  "If you going say yes or no I'm still going to ask 😏",
  "WHYY YOU SOOOO DAMN BEAUTIFUL AND GORGEOUS 😩😭",
  "Can you do one favour for me 👉👈"
];
let currentQ = 0;

function showMessage(text, side = "left") {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", side);
  bubble.innerText = text;
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function askBot() {
  if (currentQ < questions.length) {
    showMessage(questions[currentQ], "left");
  } else {
    triggerAnimation();
  }
}

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (!text) return;

  showMessage(text, "right");
  userInput.value = "";
  currentQ++;
  setTimeout(askBot, 600);
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Start the first message
askBot();

function triggerAnimation() {
  document.getElementById("chatContainer").style.display = "none";
  animation.style.display = "flex";
}
