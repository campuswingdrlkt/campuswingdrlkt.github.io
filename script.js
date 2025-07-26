const updates = [
  {
    title: "Calligraphy Competation",
    image: "calligraphy.png",
    description: "Check out our new feature!",
    link: "oi.com",
  },
  {
    title: "Islamic Quiz Competation",
    image: "quizcompetation.png",
    description: "Join us for the next event.",
    link: "oi.com",
  },
];
// Function to load update cards dynamically
function loadUpdates() {
  const updateCardsContainer = document.getElementById("update-cards");
  updates.forEach((update) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
<img src="${update.image}" alt="${update.title}" />
<h3>${update.title}</h3>
<p>${update.description}</p>
<button><a href="${update.link}">Goto page</a></button>`;
    updateCardsContainer.appendChild(card);
  });
}
// Function to load about cards dynamically
window.onload = function () {
  loadUpdates();
};
