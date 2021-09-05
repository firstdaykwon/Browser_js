const quotes = [
  {
    quote: "Travel is only glamorous in retrospect.",
    author: "Paul Theroux",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote: "The less their ability, the more their conceit.",
    author: "Ahad HaAm",
  },
  {
    quote: "The place where optimism most flourishes is the lunatic asylum.",
    author: "Havelock Ellis",
  },
  {
    quote:
      "The discovery of a new dish does more for human happiness than the discovery of a new star.",
    author: "Anthelme Brillat-Savarin",
  },
  {
    quote:
      "I'm youth, I'm joy, I'm a little bird that has broken out of the egg.",
    author: "James M. Barrie",
  },
  {
    quote:
      "A flatterer is a friend who is your inferior, or pretends to be so.",
    author: "Aristotle",
  },
  {
    quote: "Friends have all things in common.",
    author: "Plato",
  },
  {
    quote: "Friends may come and go, but enemies accumulate.",
    author: "Thomas Jones",
  },
  {
    quote: "United we stand, divided we fall.",
    author: "Aesop",
  },
];

const quote = document.querySelector(".quote p");
const author = document.querySelector(".quote span");
const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
