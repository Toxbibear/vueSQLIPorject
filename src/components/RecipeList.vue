<!-- filepath: c:\Users\iilali\vueSQLIPorject\src\components\ReciepeList.vue -->
<template>
  <div class="recipeList">
    <h1>Recipe List</h1>
    <ul v-if="recipes.length">
      <div v-for="recipe in recipes" :key="index" class="recipeItem">
        <img :src="recipe.images[0]" :alt="recipe.images[0]">
        <div class="recipeItemContainer">
          <h2>{{ recipe.name }}</h2>
          <p><strong>Ingredients:</strong> {{ recipe.ingredients }}</p>
          <p><strong>Instructions:</strong> {{ recipe.instructions }}</p>
        </div>
      </div>
    </ul>
    <p v-else>No recipes available. Please add some!</p>
  </div>
</template>

<script setup>
import { recipes } from '../../mock-data/recipe';
import { defineProps } from 'vue';
defineProps({
  recipes: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.recipeList {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ccc;
  ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
  }
  .recipeItem {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;    
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    .recipeItemContainer{
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h2 {
      margin: 0 0 10px;
    }
    
     p {
      margin: 5px 0;
  }
  }
}

</style>