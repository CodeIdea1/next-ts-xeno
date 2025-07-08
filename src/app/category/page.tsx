import CategoryFilter from "@/components/CategoryFilter";
import { getProducts, getCategories } from "@/utils/api";
import { Product } from "@/types";

export const revalidate = 259200;

export default async function CategoryPage() {
  const products: Product[] = await getProducts();
  const categories: string[] = await getCategories();

  return (
    <div className="category-page">
      <h3 className="text-xl font-bold mb-4">Filter by Category</h3>
      <CategoryFilter products={products} categories={categories} />
    </div>
  );
}
