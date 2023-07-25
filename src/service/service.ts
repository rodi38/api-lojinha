import fs from "fs";
import { Container } from "../type/Container";

export const hasEmptyValues = (obj) => {
  return Object.values(obj).some((value) => value === null || value === undefined || value === "");
};

export function readData(): Container {
  const data = fs.readFileSync("src/database/db.json", "utf-8");
  return JSON.parse(data);
}

export function saveData(data: Container) {
  fs.writeFileSync("src/database/db.json", JSON.stringify(data));
}
