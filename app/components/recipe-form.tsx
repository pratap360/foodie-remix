import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function RecipeForm({ onSubmit }) {
  const [ingredients, setIngredients] = React.useState('');
  const [preferences, setPreferences] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit({ ingredients, preferences });
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="pt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Ingredients</label>
            <Textarea
              placeholder="Enter ingredients (e.g., chicken, rice, tomatoes)"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferences</label>
            <Input
              placeholder="Any dietary restrictions or preferences?"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate Recipe'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}