import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    // Load recipes from local storage or initialize with an empty array
    recipes: JSON.parse(localStorage.getItem('recipes')) || [],
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
      this.saveToLocalStorage(); // Save updated recipes to local storage
    },
    deleteRecipe(id) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== id);
      this.saveToLocalStorage(); // Save updated recipes to local storage
    },
    updateRecipe(updatedRecipe) {
      const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
      if (index !== -1) {
        this.recipes[index] = updatedRecipe;
        this.saveToLocalStorage(); // Save updated recipes to local storage
      }
    },
    saveToLocalStorage() {
      // Save the current state of recipes to local storage
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    },
  },
  getters: {
    getAllRecipes: (state) => state.recipes,
  },
});