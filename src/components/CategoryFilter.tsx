'use client';

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

interface Props {
    products: Product[];
    categories: string[];
}
export default function CategoryFilter({ products, categories }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const filteredProducts =
        selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="category-layout">
        <aside className="category-sidebar">
            <ul className="category-list">
            {["all", ...categories].map((category) => (
                <li key={category}>
                <button
                    className={`category-btn ${
                    selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
                </li>
            ))}
            </ul>
        </aside>

        <main className="products-section">
            <div className="grid">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </main>
        </div>
    );
}
