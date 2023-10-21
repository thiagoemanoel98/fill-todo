export type CardStatus = 'todo' | 'done' | 'expired';

export interface CardProps {
  status: CardStatus;
}
