import React, { useState } from 'react';
import { Beaker } from 'lucide-react';
import { PeriodicTable } from './components/PeriodicTable';
import { ElementDetails } from './components/ElementDetails';
import { SearchBar } from './components/SearchBar';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { ElementCard } from './components/ElementCard';
import { useElements } from './hooks/useElements';
import { filterElements } from './utils/elementUtils';
import { Element } from './types/Element';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const { elements, loading, error } = useElements();

  const filteredElements = filterElements(elements, searchTerm);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Beaker className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Interactive Periodic Table</h1>
            </div>
            <div className="w-96">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-full mx-auto px-4 py-8">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : searchTerm ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 max-w-7xl mx-auto">
            {filteredElements.map((element) => (
              <ElementCard
                key={element.atomicNumber}
                element={element}
                onClick={setSelectedElement}
              />
            ))}
          </div>
        ) : (
          <PeriodicTable
            elements={elements}
            onElementClick={setSelectedElement}
          />
        )}
      </main>

      <ElementDetails
        element={selectedElement}
        onClose={() => setSelectedElement(null)}
      />
    </div>
  );
}

export default App;