import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    recipes: [],
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
    },
    deleteRecipe(id) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    },
    updateRecipe(updatedRecipe) {
      const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
      if (index !== -1) {
        this.recipes[index] = updatedRecipe;
      }
    },
  },
  getters: {
    getAllRecipes: (state) => state.recipes,
  }
});
