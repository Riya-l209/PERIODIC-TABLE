import { useState, useEffect } from 'react';
import { Element } from '../types/Element';

export const useElements = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadElements = async () => {
      try {
        const response = await fetch('/src/data/elements.json');
        if (!response.ok) {
          throw new Error('Failed to fetch elements data');
        }
        const data = await response.json();
        setElements(data.elements);
        setError(null);
      } catch (error) {
        setError('Error loading periodic table data');
        console.error('Error loading elements:', error);
      } finally {
        setLoading(false);
      }
    };
    loadElements();
  }, []);

  return { elements, loading, error };
};