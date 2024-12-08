// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// export async function POST(req: Request) {
//   try {
//     const { ingredients, preferences } = await req.json();
    
//     const prompt = `Generate a recipe using these ingredients: ${ingredients}. 
//                    Additional preferences: ${preferences}.
//                    Format the response with these sections:
//                    - Recipe Name
//                    - Ingredients List
//                    - Instructions
//                    - Cooking Time
//                    - Difficulty Level`;

//     const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
    
//     return Response.json({ recipe: text });
//   } catch (error) {
//     return Response.json({ error: 'Failed to generate recipe' }, { status: 500 });
//   }
// }


// app/api/generate/route.ts
import { GeminiService } from "@/app/lib/gemini";

export async function POST(req: Request) {
  try {
    const { ingredients, preferences } = await req.json();
    
    if (!GeminiService.validateIngredients(ingredients)) {
      return Response.json(
        { error: 'Please provide at least one ingredient' }, 
        { status: 400 }
      );
    }

    const formattedIngredients = GeminiService.formatIngredients(ingredients);
    const { content, error } = await GeminiService.generateRecipe({
      ingredients: formattedIngredients,
      preferences
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ recipe: content });
  } catch (error) {
    return Response.json(
      { error: 'Failed to generate recipe' }, 
      { status: 500 }
    );
  }
}