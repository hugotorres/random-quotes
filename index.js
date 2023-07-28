const quotes = require('./quotes.json');

exports.getRandomQuote = () => {
  if (quotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  } else {
    return null;
  }
};
