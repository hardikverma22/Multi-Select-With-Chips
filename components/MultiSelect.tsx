"use client";

import {useRef} from "react";

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
    <div className="flex flex-col items-start justify-start w-full">
      <h1 className="font-bold text-xl tracking-wide text-gray-600 mb-5">Search Products</h1>

      <div
        className="rounded-md shadow-md w-full
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
          id="search-input"
          name="search-input"
          className="min-w-[30%]
                    flex-1 ml-1
                    placeholder:text-sm placeholder:font-sans
                    rounded-md
                    border-none bg-none outline-none
                    p-0.5"
          placeholder="Search or click to see all options"
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
        setShowList={setShowList}
      />
    </div>
  );
};

export default MultiSelect;
