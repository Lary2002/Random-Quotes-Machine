import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuotes } from "./getQuotes";


const getRandomColor = () => {
  const colors = ["#E63946", "#1D3557", "#457B9D", "#2A9D8F", "#FFB703"];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [quotes, setQuotes] = useState([]);
  const [bgColor, setBgColor] = useState(getRandomColor());

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await getQuotes();
      setQuotes(quotes);
      const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(newQuote);
    };
    fetchQuotes();
  }
  , []);

  const getNewQuote = async () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(newQuote);
    setBgColor(getRandomColor());
  };

  return (
    <div id="app-container" style={{ backgroundColor: bgColor }}>
      <div id="quote-box">
        <p id="text">"{quote.quote}"</p>
        <h5 id="author">- {quote.author}</h5>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.quote}" - ${quote.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
          <button id="new-quote" onClick={getNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
