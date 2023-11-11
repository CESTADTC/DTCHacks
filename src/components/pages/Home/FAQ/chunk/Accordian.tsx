// components/Accordion.tsx
import React, { useState } from 'react';
import AnimatedText from '@/components/widget/AnimatedText';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  faqs: FAQ[];
}

const Accordion: React.FC<AccordionProps> = ({ faqs }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setActiveItem(id === activeItem ? null : id);
  };

  return (
    <div>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <div
            onClick={() => handleItemClick(faq.id)}
            className={`accordion-item ${
              faq.id === activeItem ? 'active' : ''
            }`}
          >
            <div className="question">
              <AnimatedText
                as="p"
                className="md:text-l lg:text-l xl:text-1xl mb-5 text-primary"
                text={faq.question}
                sudoClassName="before:text-base-200 before:content-['<p>'] after:text-base-200 after:content-['</p>']"
                minWidthIncreser={8}
              />
            </div>
            {faq.id === activeItem && (
              <div className="answer">{faq.answer}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
