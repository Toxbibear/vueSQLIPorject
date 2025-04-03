<!-- filepath: c:\Users\iilali\vueSQLIPorject\src\components\RecipeForm.vue -->
<template>
  <div class="recipe-form">
    <h1>Submit a Recipe</h1>
    <form @submit.prevent="submitRecipe">
      <div class="form-group">
        <label for="name">Recipe Name</label>
        <input
          type="text"
          id="name"
          v-model="recipe.name"
          placeholder="Enter recipe name"
          required
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="recipe.description"
          placeholder="Enter recipe description"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="prepTime">Preparation Time (minutes)</label>
        <input
          type="number"
          id="prepTime"
          v-model.number="recipe.prepTime"
          placeholder="Enter preparation time"
          required
        />
      </div>

      <div class="form-group">
        <label for="cookTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookTime"
          v-model.number="recipe.cookTime"
          placeholder="Enter cooking time"
          required
        />
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <input
          type="text"
          id="category"
          v-model="recipe.category"
          placeholder="Enter recipe category"
          required
        />
      </div>

      <div class="form-group">
        <label for="rating">Rating (1-5)</label>
        <input
          type="number"
          id="rating"
          v-model.number="recipe.rating"
          placeholder="Enter recipe rating"
          min="1"
          max="5"
          step="0.1"
          required
        />
      </div>

      <div class="form-group">
        <label for="servings">Servings</label>
        <input
          type="number"
          id="servings"
          v-model.number="recipe.servings"
          placeholder="Enter number of servings"
          required
        />
      </div>

      <div class="form-group">
        <label for="images">Images</label>
        <textarea
          id="images"
          v-model="recipe.images"
          placeholder="Enter image URLs (comma-separated)"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          v-model="recipe.ingredients"
          placeholder="Enter ingredients (comma-separated)"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="instructions">Instructions</label>
        <textarea
          id="instructions"
          v-model="recipe.instructions"
          placeholder="Enter instructions (period-separated)"
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { recipes } from "../../mock-data/recipe"; // Import the recipes array

const recipe = reactive({
  id: null,
  name: "",
  description: "",
  prepTime: 0,
  cookTime: 0,
  category: "",
  rating: 0,
  servings: 0,
  images: "",
  ingredients: "",
  instructions: "",
});

function submitRecipe() {
  // Add the new recipe to the recipes array
  recipes.push({
    id: recipes.length + 1, // Generate a new ID
    name: recipe.name,
    description: recipe.description,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    category: recipe.category,
    rating: recipe.rating,
    servings: recipe.servings,
    images: recipe.images.split(","), // Convert images to an array
    ingredients: recipe.ingredients.split(","), // Convert ingredients to an array
    instructions: recipe.instructions.split("."), // Convert instructions to an array
  });

  console.log("Updated recipes:", recipes);
  alert("Recipe submitted successfully!");

  // Reset the form
  recipe.id = null;
  recipe.name = "";
  recipe.description = "";
  recipe.prepTime = 0;
  recipe.cookTime = 0;
  recipe.category = "";
  recipe.rating = 0;
  recipe.servings = 0;
  recipe.images = "";
  recipe.ingredients = "";
  recipe.instructions = "";
}
</script>

<style scoped>
.recipe-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .form-group {
      flex: 1 1 calc(33.33% - 20px);
      margin-bottom: 15px;
      margin-right: 10px;
      margin-left: 10px;
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input,
      textarea {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
    }
    button {
      margin-top: 20px;
      width: 100%;
      padding: 10px 20px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: #218838;
      }
    }
  }
}
</style>
