import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function LoadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 90) {
          return prevProgress;
        }
        return prevProgress + 10;
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="w-full" />
      <p className="text-sm text-center text-muted-foreground">
        Generating your recipe...
      </p>
    </div>
  );
}