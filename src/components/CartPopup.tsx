'use client';

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Product } from "@/types";
import Image from "next/image";

interface Props {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function AddToCartPopup({ product, isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const popupContent = (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="popup-body">
          <Image
            src={product.image}
            alt={product.title}
            width={80}
            height={80}
            style={{ objectFit: "contain" }}
          />
          <div className="popup-text">
            <h3>Added to Cart!</h3>
            <p>{product.title}</p>
            <p className="popup-price">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(popupContent, document.body);
}