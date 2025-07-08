import { getProduct, getProducts } from "@/utils/api";
import { Product } from "@/types";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 259200;

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const product = await getProduct(params.id);
  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const id = params.id;
  const product: Product | null = await getProduct(id);

  if (!product) {
    notFound(); 
  }

  return (
    <div className="product-page">
      <Link href="/" className="back-link">
        Back to Home
      </Link>

      <div className="product-details">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="category">Category: {product.category}</p>
          <p className="description">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
