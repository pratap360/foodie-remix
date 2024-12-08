// lib/gemini.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Interface for recipe generation parameters
export interface RecipeParams {
  ingredients: string;
  preferences?: string;
}

// Interface for generated recipe
export interface GeneratedRecipe {
  content: string;
  error?: string;
}

export class GeminiService {
  private static model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  // Function to generate recipe content
  static async generateRecipe({ ingredients, preferences }: RecipeParams): Promise<GeneratedRecipe> {
    try {
      const prompt = `
        Create a detailed recipe using these ingredients: ${ingredients}
        ${preferences ? `Additional preferences/requirements: ${preferences}` : ''}
        
        Please format the recipe with the following sections:
        
        Recipe Name:
        [Provide a creative name for the dish]
        
        Preparation Time:
        [Specify prep time]
        
        Cooking Time:
        [Specify cooking time]
        
        Difficulty Level:
        [Easy/Medium/Hard]
        
        Ingredients:
        [List all ingredients with measurements]
        
        Instructions:
        [Provide step-by-step cooking instructions]
        
        Tips:
        [Add any helpful cooking tips or substitutions]
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return {
        content: text,
      };
    } catch (error) {
      console.error('Error generating recipe:', error);
      return {
        content: '',
        error: 'Failed to generate recipe. Please try again.',
      };
    }
  }

  // Function to validate ingredients input
  static validateIngredients(ingredients: string): boolean {
    return ingredients.length > 0 && ingredients.split(',').length > 0;
  }

  // Function to clean and format ingredients
  static formatIngredients(ingredients: string): string {
    return ingredients
      .split(',')
      .map(ingredient => ingredient.trim())
      .filter(ingredient => ingredient.length > 0)
      .join(', ');
  }
}

// Export a default instance
export default new GeminiService();