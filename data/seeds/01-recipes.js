exports.seed = function (knex) {
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Brownies" },
        { recipe_name: "Scrambled Eggs" },
        { recipe_name: "Nachos" },
      ]);
    });
};
