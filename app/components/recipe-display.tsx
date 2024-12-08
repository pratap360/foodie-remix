import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingProgress } from "./loading-progress";

interface RecipeDisplayProps {
  recipe: string;
  isLoading: boolean;
}
export default function RecipeDisplay({ recipe, isLoading }: RecipeDisplayProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Generated Recipe</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <LoadingProgress />
        ) : recipe ? (
          <div className="prose">
            <pre className="whitespace-pre-wrap font-sans">{recipe}</pre>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Your recipe will appear here
          </p>
        )}
      </CardContent>
    </Card>
  );
}