import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = (nextIndex) => {
      setExpandedIndex((currentExpandedIndex) => {
        if (currentExpandedIndex === nextIndex) {
          // Collapse item
          return -1;
        } else {
          // Expand item
          return nextIndex;
        }
      });
    };

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
