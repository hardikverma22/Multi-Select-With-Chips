import {Dispatch, MouseEvent, SetStateAction, useEffect, useRef} from "react";
import {ProductType} from "../lib/types";
import MultiSelectOption from "./MultiSelectOption";

type MultiSelectOptionsProps = {
  products: ProductType[];
  show: boolean;
  add: (product: ProductType) => void;
  selectedIndex: number;
  setShowList: Dispatch<SetStateAction<boolean>>;
};

const MultiSelectOptions = ({
  products,
  show,
  add,
  selectedIndex,
  setShowList,
}: MultiSelectOptionsProps) => {
  if (!show) return null;

  const handleListItemClick = (e: MouseEvent<HTMLLIElement>, product: ProductType) => {
    add(product);
    setShowList(e.ctrlKey);
  };

  return (
    <div
      className="mt-2 shadow-md rounded-xl p-1 w-full bg-white max-h-80 overflow-auto"
      onMouseDown={(e) => e.preventDefault()}
    >
      <ul className="flex flex-col gap-2">
        {products.map((product, index) => (
          <MultiSelectOption
            key={product.id}
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
