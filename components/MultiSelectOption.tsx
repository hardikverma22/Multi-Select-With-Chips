import {MouseEvent, useEffect, useRef} from "react";
import {ProductType} from "../lib/types";

type MultiSelectOptionProps = {
  product: ProductType;
  handleListItemClick: (e: MouseEvent<HTMLLIElement>, product: ProductType) => void;
  isFocused: boolean;
};

const MultiSelectOption = ({product, handleListItemClick, isFocused}: MultiSelectOptionProps) => {
  // Ref used to access individual item
  const ref = useRef<HTMLLIElement>(null);

  // As we are doing manual focus management
  // We need to keep selected item into the view when using up down arrow keys
  // Because of overflow in the suggestions list
  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.scrollIntoView({behavior: "auto", block: "nearest"});
    }
  }, [isFocused]);
  return (
    <li
      ref={ref}
      key={product.id}
      onClick={(e) => handleListItemClick(e, product)}
      className={`cursor-pointer
              border-b 
              flex justify-between items-center
              hover:bg-stone-100 hover:rounded-lg
              px-1 py-2 text-sm
              ${isFocused ? "bg-stone-100 rounded-lg" : ""}`}
    >
      <span>{product.title}</span>
      <span>${product.price}</span>
    </li>
  );
};

export default MultiSelectOption;
