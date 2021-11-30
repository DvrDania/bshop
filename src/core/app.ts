export enum IngredientCategory {
  "Bun",
  "Burger",
  "Topping",
  "Side",
  "SideDish",
  "Drink",
}

export class Ingredient {
  name: string;
  amount: number;
  category: IngredientCategory;
  price: number;

  constructor(
    name: string,
    amount: number,
    category: IngredientCategory,
    price: number
  ) {
    this.name = name;
    this.amount = amount;
    this.category = category;
    this.price = price;
  }
}
