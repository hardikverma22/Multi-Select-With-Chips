"use client";

import {useRef} from "react";

import MultiSelectChip from "./MultiSelectChip";
import MultiSelectOptions from "./MultiSelectOptions";
import {ProductType} from "../lib/types";
import useMultiSelect from "../hooks/useMultiSelect";
import MultiSelectChips from "./MultiSelectChips";

const MultiSelect = ({
  productsList,
  selectedItems,
}: {
  productsList: ProductType[];
  selectedItems: ProductType[];
}) => {
  const {
    showList,
    setShowList,
    selectedProducts,
    remove,
    add,
    lastHightlight,
    searchValue,
    handleKeyDown,
    handleOnChange,
    filteredProductsList,
    selectedIndex,
  } = useMultiSelect(productsList, selectedItems);
  //ref
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (!showList) {
      setShowList(true);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h2 className="mb-5 font-bold text-xl text-stone-600">Custom Select with Chips</h2>
      <div
        className="rounded-md shadow-md w-3/4
                    flex gap-2 justify-start items-center
                    flex-wrap p-1.5
                    bg-white
                    border-2 border-slate-100
                    focus-within:outline-blue-300 focus-within:outline-2 focus-within:outline"
        onClick={handleContainerClick}
      >
        <MultiSelectChips
          selectedProducts={selectedProducts}
          remove={remove}
          lastHightlight={lastHightlight}
        />
        <input
          ref={inputRef}
          type="text"
          className="min-w-[50%]
                    flex-1 ml-1
                    placeholder:text-sm placeholder:font-sans
                    rounded-md
                    border-none bg-none outline-none
                    p-0.5"
          placeholder="Search..."
          value={searchValue}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setShowList(false)}
        />
      </div>

      <MultiSelectOptions
        products={filteredProductsList}
        show={showList && filteredProductsList.length > 0}
        add={add}
        selectedIndex={selectedIndex}
      />
    </div>
  );
};

export default MultiSelect;
