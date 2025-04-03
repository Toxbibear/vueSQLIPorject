<template>
  <main>
    <RecipeList :recipes="recipes" />
    <!-- <RecipeItem :recipe="recipes" /> -->
 </main>
</template>

<script setup>
// import ReciepeForm from './components/RecipeForm.vue';
import RecipeList from "./components/RecipeList.vue";
// import RecipeItem from "./components/RecipeItem.vue";
import { recipes } from "../mock-data/recipe";
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}
main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
