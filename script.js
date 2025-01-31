const facts = [
  "Cats spend between 30 to 50 percent of their day grooming themselves"
"Purring doesn't always mean a cat is happy. ..."
"It's possible that purring helps bone density. ..."
"A cat's nose has catnip receptors. ..."
"But most cats don't respond to catnip. ..."
"Cats make great private detectives."
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
