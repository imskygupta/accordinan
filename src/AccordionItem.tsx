// AccordionItem.tsx
import React from 'react';

interface AccordionItemProps {
  title: string;
  body: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  body, 
  isOpen, 
  onToggle 
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className='border border-black mb-2 last:mb-0 rounded-md overflow-hidden'>
      <div 
        className='font-bold p-2 bg-slate-300 flex justify-between cursor-pointer'
        onClick={onToggle}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      > 
        <span>{title}</span>
        <span>{isOpen ? '👇' : '👉'}</span>
      </div> 
      {isOpen && (
        <div 
          id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className='p-2 bg-white'
          role="region"
        >
          {body}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;