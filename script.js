function chooseRandomFromArray(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function chooseRandomFromArray(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

const emojis = [
  "😂", "👍", "🔥", "😎", "🤔", "👏", 
  "🙌", "👀", "😜", "🤣", "🔫", "💯", 
  "🙏", "🤷‍♂️", "💀", "🤯", "😈", 
  "👽", "🚀", "💥", "🌟", "🎉", "💩", 
  "🍕", "🍔", "🍟", "🌭", "🍿", "🍩", 
  "🍰", "🍺", "🍹", "🍸", "🎮", "🎬", 
  "📱", "💻", "💾", "💿", "📺", "🎤", 
  "🎧", "🎵", "🎶", "🎤", "🎸", "🎹", 
  "🥁", "🎺", "🎷", "🎻", "🚗", "🚕", 
  "🚙", "🚌", "🚎", "🏎️", "🚓", "🚔", 
  "🚒", "🚑", "🚐", "🚚", "🚛", "🚜", 
  "🛴", "🛵", "🚲", "🛺", "🚀", "🛸"
];

async function generateProverb() {
  const cr = [
    "wjebie",
    "nasra do mordy",
    "pstryknie w jajko",
    "kupi harnolda",
    "utnie napleta",
    "pomacha petarą",
    "zagra na wągrach",
    "życzy pecha",
    "życzy szczęścia",
    "życzy gołębia",
  ];
  const komus = [
    "staremu",
    "gołębiowi",
    "siostrze zakonnej",
    "księdzowi",
    "rabinowi",
    "knurowi",
    "hebanowej kurwie",
    "masnemu benowi",
    "php developerowi",
    "tuskowi",
    "mamie mamy córki",
  ];
  const cos = [
    "ma pecha",
    "zajdzie w ciąże",
    "chuj",
    "rucha siostre",
    "ma szczescie",
    "czarnuch",
    "wiadomo co",
    "lepi pierogi butaprenem",
    "jest bielszy niż majonez",
    "dzisiaj zaliczy",
  ];

  const corobi = chooseRandomFromArray(cr);
  const komu = chooseRandomFromArray(komus);
  const co = chooseRandomFromArray(cos);

  let proverb = `Kto ${corobi} ${komu}, ten ${co}.`;

  // Check if emojis should be added
  if (document.getElementById("emoji").checked) {
    const startEmoji = chooseRandomFromArray(emojis);
    const endEmoji = chooseRandomFromArray(emojis);
    proverb = `${startEmoji} ${proverb} ${endEmoji}`;
  }

  return proverb;
}

async function showProverb() {
  const proverbElement = document.getElementById("proverb");
  proverbElement.innerText = await generateProverb();
}

document
  .getElementById("generateButton")
  .addEventListener("click", showProverb);

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]; // Add your images here
const container = document.getElementById("particle-container");

function spawnParticle() {
  const particle = document.createElement("img");
  particle.src = images[Math.floor(Math.random() * images.length)];
  particle.classList.add("particle");

  // Randomize the starting position and size
  const startX = Math.random() * window.innerWidth;
  const size = Math.random() * (100 - 50) + 50; // Between 50px and 100px
  particle.style.left = `${startX}px`;
  particle.style.width = `${size}px`;
  particle.style.height = "auto";

  container.appendChild(particle);

  // Remove the particle after animation ends
  setTimeout(() => {
    particle.remove();
  }, 10000); // Matches animation duration
}

// Spawn particles at intervals
setInterval(spawnParticle, 500);
