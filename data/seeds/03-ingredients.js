exports.seed = function (knex) {
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Brownie Mix" },
        { ingredient_name: "Eggs" },
        { ingredient_name: "Water" },
        { ingredient_name: "Chips" },
        { ingredient_name: "Cheese" },
      ]);
    });
};
