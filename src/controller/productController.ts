import { NextFunction, Request, Response } from 'express';
import { ProductService } from '../service/productService';

const productService = new ProductService();

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
  let products = productService.getAllProducts();
  const search = String(req.query.search);

  if(search) {
   products =  products.filter((searchedValue)=>{
      return searchedValue.name.toUpperCase().includes(search.toLowerCase());
    })
  }
  res.status(200).json(products);
};

export const getProductById = (req: Request, res: Response, next: NextFunction) => {
  const product = productService.getProductById(parseInt(req.params.id));
  if (product) {
    res.status(202).json(product);
    return;
  }
  res.status(404).send('Registro não encontrado');
};

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const success = productService.createProduct(req.body);
  if (success) {
    res.status(201).send('Produto registrado com sucesso!');
    return;
  }
  res.status(400).send('dados inválidos. Todos atributos devem ser preenchidos.');
};

export const updateProduct = (req: Request, res: Response, next: NextFunction) => {
  const success = productService.updateProduct(parseInt(req.params.id), req.body);
  if (success) {
    res.status(202).send('atualizado com sucesso');
    return;
  }

  res.status(404).send('Registro não encontrado.');
};
export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
  const success = productService.deleteProduct(parseInt(req.params.id));
  if (success) {
    res.status(200).send('deletado com sucesso');
    return;
  }
  res.status(404).send('Registro não encontrado.');
};

