// App.tsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { CardData } from './Types';
import './styles.css'; // Import the CSS file

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [score, setScore] = useState<number>(0);
  const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);


  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=14');
      const data = await response.json();
      setCards(data.cards);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const shuffleCards = () => {
    setCards([...cards].sort(() => Math.random() - 0.5));
  };

  const handleClick = (index: number) => {
    if (clickedIndexes.includes(index)) {
      setScore(0);
      setClickedIndexes([]);
    } else {
      setScore(score + 1);
      setClickedIndexes([...clickedIndexes, index]);
    }
    //setClickedIndexes([index]);
    console.log('Clicked Indexes:', clickedIndexes);
  };

  
  return (
    <div>
      <div>Score: {score}</div>
      <div className="cards-container">
        <div className='grid'>
        {cards.map((card, index) => (
          <Card key={index} card={card} onClick={() => handleClick(index)} />
        ))}
        </div>
      </div>
      <button onClick={shuffleCards}>Shuffle</button>
    </div>
  );
};

export default App;
