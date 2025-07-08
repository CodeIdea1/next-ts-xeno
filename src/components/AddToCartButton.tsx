'use client';

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import AddToCartPopup from "./CartPopup";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <AddToCartPopup
        product={product}
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}