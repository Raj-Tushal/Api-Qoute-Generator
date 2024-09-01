
import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [quote, setQuote] = useState("");

  async function fetchQuote() {
    try {
      const res = await fetch('https://api.adviceSlip.com/advice');
      const data = await res.json();
      console.log(data);
      setQuote(data.slip.advice);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to fetch quote.");
    }
  }

  return (
        <section className="flex justify-center items-center w-screen h-screen bg-blue-400">
       <div className="App w-4/6 h-34 bg-blue-950 flex flex-col justify-center items-center p-3 rounded-3xl">
        <h1 className="text-black font-extrabold text-xl text-center">Random Quote Generator</h1>
        <div className="text-center">
            <p className="text-white">{quote}</p>
            <button onClick={fetchQuote} className="text-red-600 mt-2">Click Me</button>
        </div>
    </div>
        </section>
      );
    }
