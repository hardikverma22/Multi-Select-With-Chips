"use client";
import {useState} from "react";
import MultiSelect from "../components/MultiSelect";
import products from "@/data/product.json";
import {ProductType} from "../lib/types";
import Info from "../components/Info";

export default function Home() {
  const [productsList, setProductList] = useState<ProductType[]>(products.products);
  return (
    <main className="flex min-h-screen items-start justify-between p-24 bg-stone-100">
      <div className="w-full h-full">
        <Info />
      </div>
      <div className="w-full h-full">
        <MultiSelect
          productsList={productsList}
          selectedItems={[productsList[0], productsList[1]]}
        />
      </div>
    </main>
  );
}
