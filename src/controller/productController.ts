import { hasEmptyValues, readData, saveData } from "./../service/service";
import { NextFunction, Request, Response } from "express";

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
  const data = readData();
  res.status(200).json(data.products);
};

export const getProductById = (req: Request, res: Response, next: NextFunction) => {
  const data = readData();
  const index = data.products.findIndex((product) => product.id === parseInt(req.params.id));
  if (index !== -1) {
    res.status(202).json(data.products[index]);
    return;
  }
  res.status(404).send("Registro não encontrado");
};

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const data = readData();
  const newProduct = req.body;
  newProduct.id = data.nextId++;
  if (!hasEmptyValues(newProduct)) {
    data.products.push(newProduct);
    saveData(data);
    res.status(201).send("Produto registrado com sucesso!");
    return;
  }
  res.status(400).send("dados inválidos. Todos atributos devem ser preenchidos.");
};

export const updateProduct = (req: Request, res: Response, next: NextFunction) => {
  const data = readData();
  const index = data.products.findIndex((product) => product.id === parseInt(req.params.id));

  if (index !== -1) {
    if (!hasEmptyValues(req.body)) {
      Object.assign(data.products[index], req.body);
      // data.products[index] = req.body;
      saveData(data);
      res.status(202).json(readData()).send("atualizado com sucesso");
      return;
    }
    res.status(400).send("Dados inválidos. Todos os atributos devem ser preenchidos.");
    return;
  }

  res.status(404).send("Registro não encontrado.");
};
export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
  const data = readData();
  const index = data.products.findIndex((product) => product.id === parseInt(req.params.id));
  if (index !== -1) {
    data.products.splice(index, 1);
    saveData(data);
    res.status(200).send("deletado com sucesso");
    return;
  }
  res.status(404).send("Registro não encontrado.");
};
