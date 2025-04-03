<template>
  <div class="recipeList">
    <h1>Recipe List</h1>
    <ul v-if="recipes?.length">
      <div v-for="(recipe, index) in recipes" :key="index" class="recipeItem">
        <img :src="`/assets/${recipe.images[0]}`" :alt="recipe.images[0]" />
        <div class="recipeItemContainer">
          <h2>{{ recipe.name }}</h2>
          <p><strong>Ingredients:</strong></p>
          <div>
            <p v-for="(ingredient, index) in recipe.ingredients" :key="index">
              {{ ingredient }} &nbsp;
            </p>
          </div>
          <p><strong>Instructions:</strong></p>
          <div>
            <p v-for="(instruction, index) in recipe.instructions" :key="index">
              {{ instruction }} &nbsp;
            </p>
          </div>
          <button class="details">Details</button>
        </div>
      </div>
      <button @click="openModal" class="addRecipe">ADD RECIPE</button>
    </ul>
    <p v-else>No recipes available. Please add some!</p>

    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal">
        <button class="close-modal" @click="closeModal">X</button>
        <RecipeForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { recipes } from "../../mock-data/recipe";
import { ref } from "vue";
import RecipeForm from "./RecipeForm.vue"; // Import the RecipeForm component

const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true; // Open the modal
};

const closeModal = () => {
  isModalOpen.value = false; // Close the modal
};
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
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    .close-modal {
      color: #e60000;
      position: absolute;
      top: -30px;
      right: 0px;
      background: none;
      border: none;
      font-size: 22px;
      font-weight: 800;
      cursor: pointer;
    }
  }
}

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    .addRecipe {
      width: 50%;
      height: 40px;
      font-weight: 700;
      background-color: #ff9800;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        transform 0.2s ease;
      margin-top: 20px;
      &:hover {
        background-color: #e68900;
        transform: scale(1.01);
      }
    }
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
    img {
      width: 200px; /* Set a fixed width for the image */
      height: 300px; /* Maintain aspect ratio */
      border-radius: 8px; /* Add rounded corners */
      object-fit: cover; /* Ensure the image fits nicely */
      margin-right: 15px; /* Add spacing between the image and text */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
      transition: transform 0.2s ease; /* Add a hover animation */
      &:hover {
        transform: scale(1.05); /* Slightly enlarge the image on hover */
      }
    }

    .recipeItemContainer {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .details {
        width: 50%;
        height: 40px;
        font-weight: 600;
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        transition:
          background-color 0.2s ease,
          background-color 0.3s ease;
        &:hover {
          background-color: #0073ed;
          transform: scale(1.01);
        }
      }
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
