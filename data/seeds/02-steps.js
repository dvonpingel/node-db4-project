exports.seed = function (knex) {
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_number: 1,
          step_instructions: "Pour brownie mix in bowl",
          recipe_id: 1,
        },
        {
          step_number: 2,
          step_instructions: "Add eggs into the bowl",
          recipe_id: 1,
        },
        {
          step_number: 3,
          step_instructions: "Add water to the bowl",
          recipe_id: 1,
        },
        {
          step_number: 1,
          step_instructions: "Crack eggs into bowl",
          recipe_id: 2,
        },
        {
          step_number: 2,
          step_instructions: "Mix eggs",
          recipe_id: 2,
        },
        {
          step_number: 1,
          step_instructions: "Add chips on pan",
          recipe_id: 3,
        },
        {
          step_number: 2,
          step_instructions: "spread bag of cheese on chips",
          recipe_id: 3,
        },
      ]);
    });
};
