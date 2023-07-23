import { Container } from "./../type/Container";
import { NextFunction, Request, Response } from "express";
import fs from "fs";

function readData(): Container {
  const data = fs.readFileSync("src/database/db.json", "utf-8");
  return JSON.parse(data);
}

function saveData(data: Container) {
  fs.writeFileSync("src/database/db.json", JSON.stringify(data));
}

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
  const data = readData();
  res.status(200).json(data);
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
  newProduct.id = data.products.length > 0 ? Math.max(...data.products.map((product) => product.id)) + 1 : 1;
  if (req.body !== null) {
    console.log("here");
    data.products.push(newProduct);
    saveData(data);
    res.status(201).send("Produto registrado com sucesso");
    return;
  }
  res.status(404).send("dados inválidos.");
};

export const updateProduct = (req: Request, res: Response, next: NextFunction) => {
  const data = readData();
  const index = data.products.findIndex((product) => product.id === parseInt(req.params.id));
  if (index !== -1) {
    data.products[index] = req.body;
    saveData(data);
    res.status(202).json(readData()).send("atualizado com sucesso");
    return;
  }

  res.status(404).send("Registro não encontrado.");
};
export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
  const data = readData();
  const index = data.products.findIndex((product) => product.id === parseInt(req.params.id));
  if (index !== -1) {
    data.products.splice(index, 1);
    console.log(data);
    saveData(data);
    res.status(200).send("deletado com sucesso");
    return;
  }
  res.status(400).send("Não foi deletado meu chapa.");
};
