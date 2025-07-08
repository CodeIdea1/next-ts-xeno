import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/utils/api";
import { Product } from "@/types";
import Image from 'next/image';

export const revalidate = 3600;

export default async function Home() {
  const products: Product[] = await getProducts();



  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Store</h1>
          <p className="hero-description">
            Discover amazing products at great prices
          </p>
          <button className="hero-button">Shop Now</button>
        </div>
        <div className="hero-img">
          <Image src="/landing-shirt2.webp" alt="Logo" fill />
        </div>

      </section>

      <section className="products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Get your products delivered quickly and safely</p>
          </div>
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>All our products are carefully selected for quality</p>
          </div>
          <div className="feature-card">
            <h3>Great Support</h3>
            <p>Our team is here to help you anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
}