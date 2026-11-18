type Ingredient = {name: string; recipe: number; stock: number};
import type {Result} from "@shared/worksheet";

export function calculate(values: number[]): Result[] {
  const [flour, flourOnHand, water, salt, yeast, waterOnHand = -1, saltOnHand = -1, yeastOnHand = -1] = values;
  const ingredients: Ingredient[] = [
    {name: "Flour", recipe: flour, stock: flourOnHand},
    {name: "Water", recipe: water, stock: waterOnHand},
    {name: "Salt", recipe: salt, stock: saltOnHand},
    {name: "Yeast", recipe: yeast, stock: yeastOnHand},
  ];
  const tracked = ingredients.filter(ingredient => ingredient.recipe > 0 && ingredient.stock >= 0);
  const limit = tracked.reduce((smallest, ingredient) =>
    ingredient.stock / ingredient.recipe < smallest.stock / smallest.recipe ? ingredient : smallest);
  const factor = limit.stock / limit.recipe;
  return [
    {name: "Recipe scale", value: Number((factor * 100).toFixed(1)) + "%",
      detail: ["Limit: " + limit.name, "Stock " + limit.stock + "g / base " + limit.recipe + "g"], fraction: factor},
    ...ingredients.map(ingredient => ({
      name: ingredient.name, value: Number((ingredient.recipe * factor).toFixed(2)) + "g",
      detail: ["Original " + ingredient.recipe + "g", "Scale " + Number(factor.toFixed(3)) + "x"],
    })),
  ];
}
