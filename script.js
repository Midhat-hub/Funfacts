const facts = [
    "I love hiking.",
    "I am an avid coder and love to code often",
    "I once cooked a Taco",
    "I speak three languages fluentlys.",
    "I’m learning to play the guitar in my free time."
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
