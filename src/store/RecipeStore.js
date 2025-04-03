import { defineStore } from 'pinia';
import { recipes as mockRecipes } from '../../mock-data/recipe'; // Import mock data

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    // Load recipes from local storage and merge with mock data
    recipes: (() => {
      const localRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
      const mergedRecipes = [...mockRecipes];

      // Add any missing mock recipes to the local recipes
      mockRecipes.forEach((mockRecipe) => {
        if (!localRecipes.some((localRecipe) => localRecipe.id === mockRecipe.id)) {
          localRecipes.push(mockRecipe);
        }
      });

      return localRecipes;
    })(),
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
      this.saveToLocalStorage(); // Save updated recipes to local storage
    },
    deleteRecipe(id) {
      this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
      this.saveToLocalStorage(); // Save updated recipes to local storage
    },
    updateRecipe(updatedRecipe) {
      const index = this.recipes.findIndex((recipe) => recipe.id === updatedRecipe.id);
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