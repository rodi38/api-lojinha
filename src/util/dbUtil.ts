import fs from "fs";
import { Container } from "../type/Container";
import { Product } from "../type/product";

export function readData(): Container {
  const data = fs.readFileSync("src/database/db.json", "utf-8");
  return JSON.parse(data);
}

export function saveData(data: Container) {
  fs.writeFileSync("src/database/db.json", JSON.stringify(data));
}



