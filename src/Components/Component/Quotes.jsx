import React, { useState, useEffect, useCallback } from 'react';
import '../Styles/Quotes.css';
import IconImg from '../Assets/Images/Group 3.svg';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [number, setNumber] = useState(1); // Start from 1

  const fetchQuote = useCallback(async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setQuote(data.slip.advice);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }, []);

  useEffect(() => {
    // Fetch a new quote immediately when the component mounts
    fetchQuote();

    // Fetch a new quote every minute
    const intervalId = setInterval(() => {
      fetchQuote();
      setNumber((prevNumber) => prevNumber + 1); // Increment after fetching
    }, 60000); // 60000 milliseconds = 1 minute

    // Clear the interval when the component is unmounted or updated
    return () => clearInterval(intervalId);
  }, [fetchQuote]);

  return (
    <div className='quote'>
      <h2>Quote #{number}</h2>
      <p>{quote}</p>
      <div className='circle1'>
        <img alt='imgHere' src={IconImg} />
      </div>
    </div>
  );
}

export default Quotes;
