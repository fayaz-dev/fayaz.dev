import { useState, useEffect } from 'react';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" }
];

export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    // Auto-generate new quote every 10 seconds
    const interval = setInterval(generateNewQuote, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 border border-primary-100 dark:border-gray-600">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Developer Quote
        </h3>
        <button
          onClick={generateNewQuote}
          className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
          aria-label="Generate new quote"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        </button>
      </div>
      
      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "{currentQuote.text}"
        </blockquote>
        <cite className="text-sm font-medium text-primary-600 dark:text-primary-400">
          — {currentQuote.author}
        </cite>
      </div>
    </div>
  );
}