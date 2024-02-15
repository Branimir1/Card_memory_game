// Card.tsx
import React from 'react';
import { CardProps } from './Types';

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={card.image} alt={card.code} />
    </div>
  );
};

export default Card;
