import { quotes, colors } from "./arrays.js";

//get random num between 0 and amount of quotes - 1
const getRandomNum = (quotes) => Math.floor(Math.random() * quotes);

console.log(getRandomNum(quotes.length));

const quoteButton = document.getElementById("quoteButton");
const quoteContainer = document.getElementById("quoteContainer");

const getNewQuote = e => {
  let newNum = getRandomNum(quotes.length);
  quoteContainer.innerHTML = `${quotes[newNum]}`;
  quoteContainer.style.color = colors[newNum];
}

quoteButton.addEventListener("click", getNewQuote);
