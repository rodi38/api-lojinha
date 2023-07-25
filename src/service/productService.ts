import { readData, saveData} from '../util/dbUtil'
import { hasEmptyValues } from '../util/objUtil'


export class ProductService {
  getAllProducts() {
    const data = readData();
    return data.products;
  }

  getProductById(id: number) {
    const data = readData();
    const index = data.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return data.products[index];
    }
    return null;
  }

  createProduct(newProduct: any) {
    const data = readData();
    newProduct.id = data.nextId++;
    if (!hasEmptyValues(newProduct)) {
      data.products.push(newProduct);
      saveData(data);
      return true;
    }
    return false;
  }

  updateProduct(id: number, updatedProduct: any) {
    const data = readData();
    const index = data.products.findIndex((product) => product.id === id);

    if (index !== -1) {
      if (!hasEmptyValues(updatedProduct)) {
        Object.assign(data.products[index], updatedProduct);
        saveData(data);
        return true;
      }
      return false;
    }
    return false;
  }

  deleteProduct(id: number) {
    const data = readData();
    const index = data.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      data.products.splice(index, 1);
      saveData(data);
      return true;
    }
    return false;
  }
}


