import { Element } from '../types/Element';

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'alkali metal': 'bg-red-500 text-white',
    'alkaline earth metal': 'bg-orange-500 text-white',
    'transition metal': 'bg-yellow-600 text-white',
    'post-transition metal': 'bg-green-600 text-white',
    metalloid: 'bg-teal-500 text-white',
    nonmetal: 'bg-blue-500 text-white',
    halogen: 'bg-indigo-500 text-white',
    'noble gas': 'bg-purple-500 text-white',
    lanthanoid: 'bg-pink-500 text-white',
    actinoid: 'bg-rose-500 text-white'
  };
  return colors[category] || 'bg-gray-300';
};

export const filterElements = (elements: Element[], searchTerm: string): Element[] => {
  const term = searchTerm.toLowerCase();
  return elements.filter(
    (element) =>
      element.name.toLowerCase().includes(term) ||
      element.symbol.toLowerCase().includes(term) ||
      element.atomicNumber.toString().includes(term)
  );
};

export const getGridPosition = (element: Element): string => {
  if (element.group === 0) {
    // Handle lanthanoids and actinoids
    if (element.period === 6) {
      return `col-start-${element.atomicNumber - 54} row-start-9`;
    }
    if (element.period === 7) {
      return `col-start-${element.atomicNumber - 86} row-start-10`;
    }
  }
  return `col-start-${element.group} row-start-${element.period}`;
};