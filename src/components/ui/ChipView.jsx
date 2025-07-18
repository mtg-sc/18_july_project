import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChipItem = ({ children, selected = false, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-2.5 py-2.5 rounded-lg text-sm md:text-base font-inter font-normal leading-5 text-center transition-all duration-200
        ${selected 
          ? 'bg-accent text-primary' :'bg-secondary text-tertiary hover:bg-tertiary hover:text-primary'
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};

const ChipView = ({ items = [], onSelectionChange, multiSelect = false, ...props }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const defaultItems = [
    "Product Design",
    "Brand Identity Design", 
    "UX Design",
    "Branding",
    "Packaging Design",
    "Figma",
    "Photoshop"
  ];

  const chipItems = items.length > 0 ? items : defaultItems;

  const handleItemClick = (item, index) => {
    let newSelection;
    
    if (multiSelect) {
      newSelection = new Set(selectedItems);
      if (newSelection.has(index)) {
        newSelection.delete(index);
      } else {
        newSelection.add(index);
      }
    } else {
      newSelection = selectedItems.has(index) ? new Set() : new Set([index]);
    }
    
    setSelectedItems(newSelection);
    
    if (onSelectionChange) {
      const selectedValues = chipItems.filter((_, i) => newSelection.has(i));
      onSelectionChange(selectedValues);
    }
  };

  return (
    <div className="w-full" {...props}>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {chipItems.map((item, index) => (
          <ChipItem
            key={index}
            selected={selectedItems.has(index)}
            onClick={() => handleItemClick(item, index)}
          >
            {item}
          </ChipItem>
        ))}
      </div>
    </div>
  );
};

ChipView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onSelectionChange: PropTypes.func,
  multiSelect: PropTypes.bool,
};

ChipItem.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ChipView;