// Types.ts
export interface CardData {
    code: string;
    image: string;
  }
  
  export interface CardProps {
    card: CardData;
    onClick: () => void;
  }
  