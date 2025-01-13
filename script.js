// script.js

const players = {
  bronze: [
    { name: "Player A", rating: 60, rarity: "Common" },
    { name: "Player B", rating: 63, rarity: "Rare" },
    { name: "Player C", rating: 65, rarity: "Rare" },
  ],
  silver: [
    { name: "Player D", rating: 70, rarity: "Common" },
    { name: "Player E", rating: 73, rarity: "Rare" },
    { name: "Player F", rating: 75, rarity: "Rare" },
  ],
  gold: [
    { name: "Player G", rating: 80, rarity: "Common" },
    { name: "Player H", rating: 83, rarity: "Rare" },
    { name: "Player I", rating: 85, rarity: "Rare" },
  ],
};

// Open a pack and display the results
function openPack(packType) {
  const resultsContainer = document.getElementById("pack-results");
  const animationContainer = document.getElementById("pack-animation");

  // Clear previous results
  resultsContainer.innerHTML = "";
  animationContainer.classList.remove("hidden");

  // Simulate pack opening animation
  setTimeout(() => {
    animationContainer.classList.add("hidden");
    const pack = players[packType];
    const results = [];

    // Generate random cards (3 per pack)
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * pack.length);
      results.push(pack[randomIndex]);
    }

    // Display the results
    results.forEach((player) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p><strong>${player.name}</strong></p>
        <p>Rating: ${player.rating}</p>
        <p>Rarity: ${player.rarity}</p>
      `;
      resultsContainer.appendChild(card);
    });
  }, 2000);
}
