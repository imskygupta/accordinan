// accordian.tsx
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

export interface AccordionData {
  title: string;
  body: string;
}

interface AccordionProps {
  items?: AccordionData[];
}

const defaultData: AccordionData[] = [
  {
    title: "Accordion item 1",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odio nisi facilis, repellat ipsa obcaecati aliquid veritatis neque error debitis placeat excepturi cupiditate."
  },
  {
    title: "Accordion item 2",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odio nisi facilis, repellat ipsa obcaecati aliquid veritatis neque error debitis placeat excepturi cupiditate."
  },
  {
    title: "Accordion item 3",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odio nisi facilis, repellat ipsa obcaecati aliquid veritatis neque error debitis placeat excepturi cupiditate."
  },
];

const Accordion: React.FC<AccordionProps> = ({ items = defaultData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className='w-[50%] m-auto mt-5'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex}
          onToggle={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;