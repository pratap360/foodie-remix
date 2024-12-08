'use client';

import { useState } from 'react';
import RecipeForm from './components/recipe-form';
import RecipeDisplay from './components/recipe-display';

export default function Home() {
  const [recipe, setRecipe] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const generateRecipe = async (formData: any) => {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      setRecipe(data.recipe);
    } catch (error) {
      console.error('Failed to generate recipe:', error);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Foodie Remix</h1>
        <h3 className='text-sm font-medium text-center'>powered by Gemini AI 🚀</h3>
        <RecipeForm onSubmit={generateRecipe} />
        <RecipeDisplay recipe={recipe} isLoading={false} />
      </div>
    </main>
  );
}