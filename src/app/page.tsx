import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Mental Health Social Analyzer
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A powerful tool that analyzes social media posts to identify potential mental health-related content, providing early insights and categorization of user sentiments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="text-md px-8">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button asChild variant="outline" className="text-md px-8">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
