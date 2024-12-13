import React from 'react';
import { X } from 'lucide-react';
import { Element } from '../types/Element';
import { getCategoryColor } from '../utils/elementUtils';

interface ElementDetailsProps {
  element: Element | null;
  onClose: () => void;
}

export const ElementDetails: React.FC<ElementDetailsProps> = ({ element, onClose }) => {
  if (!element) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className={`${getCategoryColor(element.category)} p-4 rounded-lg`}>
            <div className="text-3xl font-bold">{element.symbol}</div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">{element.name}</h2>
            <p className="text-gray-600 capitalize">{element.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-gray-600">Atomic Number:</div>
          <div>{element.atomicNumber}</div>
          
          <div className="text-gray-600">Atomic Mass:</div>
          <div>{element.atomicMass}</div>
          
          <div className="text-gray-600">Block:</div>
          <div>{element.block}</div>
          
          <div className="text-gray-600">Electron Configuration:</div>
          <div>{element.electronConfiguration}</div>
          
          <div className="text-gray-600">Phase:</div>
          <div className="capitalize">{element.phase}</div>
          
          <div className="text-gray-600">Density:</div>
          <div>{element.density} g/cm³</div>

          {element.meltingPoint && (
            <>
              <div className="text-gray-600">Melting Point:</div>
              <div>{element.meltingPoint} K</div>
            </>
          )}

          {element.boilingPoint && (
            <>
              <div className="text-gray-600">Boiling Point:</div>
              <div>{element.boilingPoint} K</div>
            </>
          )}

          {element.electronegativity && (
            <>
              <div className="text-gray-600">Electronegativity:</div>
              <div>{element.electronegativity}</div>
            </>
          )}

          {element.discoveredBy && (
            <>
              <div className="text-gray-600">Discovered By:</div>
              <div>{element.discoveredBy}</div>
            </>
          )}

          {element.yearDiscovered && (
            <>
              <div className="text-gray-600">Year Discovered:</div>
              <div>{element.yearDiscovered}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};