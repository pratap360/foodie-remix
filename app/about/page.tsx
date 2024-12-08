import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">About Foodie Remix</CardTitle>
          </CardHeader>
          <CardContent className="prose">
            <p>
              Welcome to Foodie Remix, your AI-powered recipe generator. I help
              you create delicious recipes from the ingredients you have on
              hand.
            </p>
            <br />
            <h3>How It Works</h3>
            <p>
              Simply enter the ingredients you have available, add any dietary
              preferences or restrictions, and let our AI create a customized
              recipe just for you.
            </p>
            <br />
            <h3>Our Mission</h3>
            <p>
              I aim to make cooking more accessible and fun by helping you
              discover new recipes and reduce food waste.
            </p>
          </CardContent>
          <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center pb-4">About Me</h2>
            <Card className="w-full max-w-4xl mx-auto">
              <CardContent className="flex items-center justify-between p-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src="https://cdn.bio.link/uploads/profile_pictures/2024-11-09/M1e51WSsCaLWAR4lW3n8XWjPqg2h3Whv.png"
                    // src="https://github.com/pratap360.png"
                    alt="Profile picture"
                  />
                  <AvatarFallback>pratap360</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center mx-4">
                  <h2 className="text-2xl font-bold">Pratap Parui</h2>
                  <p className="text-muted-foreground">Frontend Developer | UI UX | Blogger</p>
                </div>
                <Link href={"https://pratapparui.bio.link/"} target="_blank">
                  <Button>Connect with me</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>
    </main>
  );
}
