import React from 'react';
import { Element } from '../types/Element';
import { ElementCard } from './ElementCard';
import { getGridPosition } from '../utils/elementUtils';

interface PeriodicTableProps {
  elements: Element[];
  onElementClick: (element: Element) => void;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({ elements, onElementClick }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-18 gap-1 min-w-[1200px] p-4">
        {elements.map((element) => (
          <div
            key={element.atomicNumber}
            className={getGridPosition(element)}
          >
            <ElementCard
              element={element}
              onClick={onElementClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};