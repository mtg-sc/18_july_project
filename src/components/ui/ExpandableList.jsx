import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandableItem = ({
  question,
  answer,
  isExpanded,
  onToggle,
  ...props
}) => {
  return (
    <div
      className="w-full bg-secondary rounded-[14px] shadow-[5px_18px_10px_#00000066] transition-all duration-300"
      {...props}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 md:p-8 flex justify-between items-start text-left focus:outline-none focus:ring-2 focus:ring-accent rounded-[14px]"
        aria-expanded={isExpanded}
      >
        <span className="text-base font-inter font-normal leading-5 md:leading-6 text-primary pr-4">
          {question}
        </span>
        {/* The image icon (which looked like an 'x' or a toggle icon) has been removed from here */}
      </button>

      {isExpanded && answer && (
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <p className="text-sm md:text-base font-inter font-normal leading-5 md:leading-6 text-tertiary">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const ExpandableList = ({ items = [], ...props }) => {
  const [expandedItems, setExpandedItems] = useState(new Set([0])); // First item expanded by default

  const defaultItems = [
    {
      question: "What services do you provide?",
      answer: "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences."
    },
    {
      question: "How do I start working with you?",
      answer: "Simply reach out through our contact form or email, and we will schedule a consultation to discuss your project needs and goals."
    },
    {
      question: "What design tools do you use?",
      answer: "I primarily use Figma for UI/UX design, Photoshop for image editing, and various other industry-standard tools depending on the project requirements."
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines vary depending on scope and complexity. Typically, brand identity projects take 2-4 weeks, while larger projects may take 6-8 weeks."
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes, I include multiple revision rounds in all my packages to ensure the final design meets your expectations and requirements."
    },
    {
      question: "What industries do you work with?",
      answer: "I work with clients across various industries including technology, healthcare, retail, hospitality, and more. Each project is tailored to the specific industry needs."
    },
    {
      question: "Do you offer development services?",
      answer: "While my primary focus is on design, I work with trusted development partners to bring designs to life when needed."
    },
    {
      question: "What is your pricing structure?",
      answer: "Pricing varies based on project scope, timeline, and requirements. I offer both fixed-price packages and hourly rates depending on the project type."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! I offer website redesign services to improve user experience, modernize the visual design, and enhance overall functionality."
    }
  ];

  const faqItems = items.length > 0 ? items : defaultItems;

  const toggleItem = (index) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(index)) {
      newExpandedItems.delete(index);
    } else {
      newExpandedItems.add(index);
    }
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className="w-full max-w-4xl space-y-4" {...props}>
      {faqItems.map((item, index) => (
        <ExpandableItem
          key={index}
          question={item.question}
          answer={item.answer}
          isExpanded={expandedItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

ExpandableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string
    })
  ),
};

ExpandableItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ExpandableList;