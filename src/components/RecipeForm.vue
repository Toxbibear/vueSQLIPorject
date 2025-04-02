<!-- filepath: c:\Users\iilali\vueSQLIPorject\src\components\ReciepeForm.vue -->
<template>
  <div class="recipe-form">
    <h1>Submit a Recipe</h1>
    <form @submit.prevent="submitRecipe">
      <div class="form-group">
        <label for="name">Recipe Name:</label>
        <input
          type="text"
          id="name"
          v-model="recipe.name"
          placeholder="Enter recipe name"
          required
        />
      </div>

      <div class="form-group">
        <label for="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          v-model="recipe.ingredients"
          placeholder="Enter ingredients (comma-separated)"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="instructions">Instructions:</label>
        <textarea
          id="instructions"
          v-model="recipe.instructions"
          placeholder="Enter cooking instructions"
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        name: "",
        ingredients: "",
        instructions: "",
      },
    };
  },
  methods: {
    submitRecipe() {
      // Handle form submission logic here
      console.log("Recipe submitted:", this.recipe);
      alert("Recipe submitted successfully!");
      // Reset the form
      this.recipe = {
        name: "",
        ingredients: "",
        instructions: "",
      };
    },
  },
};
</script>

<style scoped>
.recipe-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

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

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>