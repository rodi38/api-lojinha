import { Container } from "../type/Container";
import { Product } from "../type/product";

export const hasEmptyValues = (obj) => {
    return Object.values(obj).some((value) => value === null || value === undefined || value === "");
};
export function isProductExists(data: Container, newProduct: Product): boolean {
    return data.products.some(product => product.name === newProduct.name || product.id === newProduct.id);
  }