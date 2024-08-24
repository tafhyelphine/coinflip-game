// src/app/page.tsx
"use client";

import { useState } from 'react';

const Home = () => {
  const [side, setSide] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<string>('');

  const handleFlip = () => {
    const outcome = Math.random() > 0.5 ? 'heads' : 'tails';
    if (outcome === side) {
      setResult(`You won! ${amount * 2} tokens`);
    } else {
      setResult('You lost. Try again!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-800">Coinflip Game</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <select
            value={side}
            onChange={(e) => setSide(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select side</option>
            <option value="heads">Heads</option>
            <option value="tails">Tails</option>
          </select>
        </div>
        <button
          onClick={handleFlip}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Flip Coin
        </button>
        {result && <p className="mt-4 text-xl font-semibold text-gray-700">{result}</p>}
      </div>
    </div>
  );
};

export default Home;
