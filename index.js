document.addEventListener('DOMContentLoaded', function () {
  const quotes = [
    "Water is the driving force of all nature. – Leonardo da Vinci",
    "Drinking water is essential to maintaining good health. – Unknown",
    "Pure water is the world’s first and foremost medicine. – Slovakian Proverb",
    "The body is over 60% water. It’s essential to drink enough! – Unknown",
    "Water is life. Drink plenty of it. – Unknown"
  ];

  let currentQuoteIndex = 0;

  // Function to change quote every few seconds
  function changeQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  }

  // Initial quote change
  changeQuote();

  // Change quote every 5 seconds (5000ms)
  setInterval(changeQuote, 5000);
});
