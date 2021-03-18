const db = require("../../data/db-config");

async function getRecipeById(id) {
  const recipes = await db("steps as s")
    .leftJoin("recipes as r", "r.recipe_id", "s.recipe_id")
    .leftJoin("step_ingredients as sti", "sti.step_id", "s.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "sti.ingredient_id")
    .select(
      "r.recipe_id",
      "created_at",
      "recipe_name",
      "s.step_id",
      "step_number",
      "step_instructions",
      "i.ingredient_id",
      "ingredient_name",
      "quantity"
    )
    .where("r.recipe_id", id);

  const recipeStructured = {
    recipe_id: recipes[0].recipe_id,
    recipe_name: recipes[0].recipe_name,
    created_at: recipes[0].created_at,
    steps: recipes[0].step_id
      ? recipes.map((recipe) => {
          const specificRecipe = {
            step_id: recipe.step_id,
            step_number: recipe.step_number,
            step_instructions: recipe.step_instructions,
            ingredients: recipe.ingredient_name
              ? [
                  {
                    ingredient_id: recipe.ingredient_id,
                    ingredient_name: recipe.ingredient_name,
                    quantity: recipe.quantity,
                  },
                ]
              : [],
          };
          return specificRecipe;
        })
      : [],
  };

  return recipeStructured;
}

module.exports = {
  getRecipeById,
};
