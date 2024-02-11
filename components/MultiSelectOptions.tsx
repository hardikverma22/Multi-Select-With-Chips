import {MouseEvent, useEffect, useRef} from "react";
import {ProductType} from "../lib/types";
import MultiSelectOption from "./MultiSelectOption";
const MultiSelectOptions = ({
  products,
  show,
  add,
  selectedIndex,
}: {
  products: ProductType[];
  show: boolean;
  add: (product: ProductType) => void;
  selectedIndex: number;
}) => {
  if (!show) return null;

  const handleListItemClick = (e: MouseEvent<HTMLLIElement>, product: ProductType) => {
    e.stopPropagation();
    console.log(product);
    add(product);
  };

  return (
    <div
      className="mt-2 shadow-md rounded-xl p-1 w-3/4 bg-white h-80 overflow-y-scroll"
      onMouseDown={(e) => e.preventDefault()}
    >
      <ul className="flex flex-col gap-2">
        {products.map((product, index) => (
          <MultiSelectOption
            product={product}
            isFocused={selectedIndex === index}
            handleListItemClick={handleListItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default MultiSelectOptions;
