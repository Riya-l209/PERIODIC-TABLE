import React from 'react';
import { Element } from '../types/Element';
import { getCategoryColor } from '../utils/elementUtils';

interface ElementCardProps {
  element: Element;
  onClick: (element: Element) => void;
}

export const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  return (
    <div
      onClick={() => onClick(element)}
      className={`${getCategoryColor(
        element.category
      )} p-2 rounded-lg cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-xl`}
    >
      <div className="text-[10px] text-right opacity-75">{element.atomicNumber}</div>
      <div className="text-xl font-bold text-center">{element.symbol}</div>
      <div className="text-[10px] text-center truncate">{element.name}</div>
      <div className="text-[10px] text-center opacity-75">{element.atomicMass}</div>
    </div>
  );
};