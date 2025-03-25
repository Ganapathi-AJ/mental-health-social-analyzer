import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | Mental Health Social Analyzer",
  description: "About the Mental Health Social Analyzer project",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About the Project</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>Our Mission</h2>
        <p>
          The Mental Health Social Analyzer is designed to identify potential mental health-related content in social media posts, providing early insights and categorization of user sentiments.
        </p>
        
        <h2>How It Works</h2>
        <p>
          Our platform leverages advanced AI models to analyze social media posts from various platforms including Twitter/X, Facebook, and Instagram. By using sophisticated natural language processing techniques, we can identify patterns that may indicate various mental health concerns.
        </p>
        
        <h2>Key Features</h2>
        <ul>
          <li><strong>Comprehensive Classification:</strong> Categorizes content into sleep issues, anxiety, depression, stress, self-harm references, and emotional distress patterns</li>
          <li><strong>AI-Powered Analysis:</strong> Utilizes state-of-the-art language models like Claude and GPT-4o for accurate classification</li>
          <li><strong>Data Visualization:</strong> Provides intuitive charts and graphics to visualize trends and patterns</li>
          <li><strong>Customizable Settings:</strong> Tailor the analysis parameters to your specific needs</li>
        </ul>
        
        <h2>Privacy and Ethics</h2>
        <p>
          We take privacy and ethical considerations seriously. Our platform only analyzes public posts and does not store personal identifiable information. The goal is to provide insights that can help understand mental health trends at a population level, not to diagnose individuals.
        </p>
      </div>
      
      <div className="mt-8">
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
