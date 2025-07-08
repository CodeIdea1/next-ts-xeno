import axios from "axios";
import { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data.slice(0, 8);
}

export async function getProduct(id: string): Promise<Product> {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
}

export async function getCategories(): Promise<string[]> {
  const response = await axios.get("https://fakestoreapi.com/products/categories");
  return response.data;
}