import RecipeForm from "./components/RecipeForm.vue";
import RecipeItem from "./components/RecipeItem.vue";
import RecipeList from "./components/RecipeList.vue";

export const routes = [
  { path: '/', component: RecipeList },
  { path: '/addrecipe', component: RecipeForm },
  { path: '/editrecipe/:id', component: RecipeItem },
];