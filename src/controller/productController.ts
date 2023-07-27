import { NextFunction, Request, Response } from "express";
import { ProductService } from "../service/productService";

const productService = new ProductService();

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
  let products = productService.getAllProducts();
  let search = req.query.search ? String(req.query.search) : "";
  console.log(products)
  console.log(search)

  if (search) {
    console.log(`passou na verificação`)
    products = products.filter((searchedValue) => {
      return searchedValue.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  console.log(products)
  res.status(200).json(products);
};

export const getProductById = (req: Request, res: Response, next: NextFunction) => {
  const product = productService.getProductById(parseInt(req.params.id));
  if (product) {
    res.status(202).json(product);
    return;
  }
  res.status(404).send("Registro não encontrado");
};

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const success = productService.createProduct(req.body);
  if (success) {
    res.status(201).json("Produto registrado com sucesso!");
    return;
  }
  res.status(400).json("dados inválidos. Todos atributos devem ser preenchidos.");
};

export const updateProduct = (req: Request, res: Response, next: NextFunction) => {
  const success = productService.updateProduct(parseInt(req.params.id), req.body);
  if (success) {
    res.status(200).json({message: "atualizado com sucesso"});
    return;
  }

  res.status(404).json({message: "Registro não encontrado."});
};
export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
  const success = productService.deleteProduct(parseInt(req.params.id));
  if (success) {
    res.status(200).json("deletado com sucesso");
    return;
  }
  res.status(404).json("Registro não encontrado.");
};
