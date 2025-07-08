'use client';
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import Image from 'next/image';

export default function Header() {
  const { toggleCart, getTotalItems } = useCart();

  return (
    <header>
      <main>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <Image src="/logo.png" alt="Logo" fill style={{ objectFit: "contain" }} />
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/category">Categories</Link>
          <button onClick={toggleCart} className="cart-btn">
            Cart ({getTotalItems()})
          </button>
        </nav>
      </main>
    </header>
  );
}