import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import RecipeList from '../src/components/RecipeList.vue';
import { recipes } from '../mock-data/recipe.js';

describe('RecipeList.vue', () => {
  it('renders a list of recipes when recipes are provided', () => {

    let ListRecipe;
    try {
      ListRecipe = ('../src/components/RecipeList.vue').default;
    }
    catch (error) {
      console.error('Error loading RecipeList component:', error);
      throw error; // rethrow the error to fail the test
    }

    const wrapper = mount(RecipeList, {
      props: { recipes },
    });

    // Check if the correct number of recipes is rendered
    const recipeItems = wrapper.findAll('.recipeItem');
    expect(recipeItems.length).toBe(recipes.length);

    // Check if the first recipe's name is rendered
    expect(wrapper.text()).toContain('Classic Spaghetti Carbonara');

    // Check if the first recipe's ingredients are rendered
    expect(wrapper.text()).toContain('200g spaghetti');
    expect(wrapper.text()).toContain('100g pancetta');
  });

  it('renders a message when no recipes are available', () => {
    const wrapper = mount(RecipeList, {
      props: { recipes: [] },
    });

    // Check if the "no recipes available" message is displayed
    expect(wrapper.text()).toContain('No recipes available. Please add some!');
  });

  it('renders the correct image for each recipe', () => {
    const wrapper = mount(RecipeList, {
      props: { recipes },
    });

    // Check if the first recipe's image is rendered correctly
    const firstImage = wrapper.find('img');
    expect(firstImage.attributes('src')).toBe('/assets/../assets/carbonara-main.jpg');
  });

  it('renders the details button for each recipe', () => {
    const wrapper = mount(RecipeList, {
      props: { recipes },
    });

    // Check if the "Details" button exists for each recipe
    const detailButtons = wrapper.findAll('.details');
    expect(detailButtons.length).toBe(recipes.length);
    expect(detailButtons[0].text()).toBe('Details');
  });
});