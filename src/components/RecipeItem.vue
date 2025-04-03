<template>
  <div v-for="recipe in recipes" class="recipe-item">
    <h3>{{ recipe.name }}</h3>
    <p><strong>Category:</strong> {{ recipe.category }}</p>
    <p><strong>Description:</strong> {{ recipe.description }}</p>
    <p>
      <strong>Prep Time:</strong> {{ recipe.prepTime }} mins |
      <strong>Cook Time:</strong> {{ recipe.cookTime }} mins
    </p>
    <p><strong>Servings:</strong> {{ recipe.servings }}</p>
    <p><strong>Rating:</strong> ⭐ {{ recipe.rating }}</p>

    <!-- Image Gallery -->
    <div class="image-gallery">
      <img
        v-for="image in recipe.images"
        :key="image"
        :src="image"
        :alt="recipe.name"
        class="recipe-image"
      />
    </div>

    <!-- Ingredients List -->
    <h4>Ingredients:</h4>
    <ul>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>

    <!-- Instructions (Toggleable) -->
    <button @click="showInstructions = !showInstructions">
      {{ showInstructions ? "Hide" : "Show" }} Instructions
    </button>
    <div v-if="showInstructions">
      <h4>Instructions:</h4>
      <ol>
        <li v-for="(step, index) in recipe.instructions" :key="index">
          {{ step }}
        </li>
      </ol>
    </div>

    <!-- Actions -->
    <button @click="$emit('edit-recipe', recipe)">Edit</button>
    <button @click="$emit('delete-recipe', recipe.id)">Delete</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  recipe: Object,
});

const showInstructions = ref(false);

const toggleInstructions = () => {
  showInstructions.value = !showInstructions.value;
};
</script>

<style scoped>
.recipe-item {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.image-gallery {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}
.recipe-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
