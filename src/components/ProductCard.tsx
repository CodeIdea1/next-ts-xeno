import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  if (!product.id) {
    return null;
  }

  return (
    <div className="card">
      <Link href={`/product-details/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          priority
          style={{ objectFit: "contain" }}
        />
        <h2>{product.title}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
      </Link>

      <AddToCartButton product={product} />
    </div>
  );
}