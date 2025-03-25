# Mental Health Social Analyzer

A web application designed to analyze social media posts and identify potential mental health-related content, providing early insights and categorization of user sentiments.

## Core Features

- Integration with social media APIs (Twitter/X, Facebook, Instagram)
- Collection of public posts using specific data retrieval mechanisms
- Mental health content analysis using AI (Claude and ChatGPT)
- Classification of posts into mental health categories:
  - Sleep-related issues
  - Anxiety indicators
  - Depression signals
  - Stress markers
  - Potential self-harm references
  - Emotional distress patterns
- Dashboard visualization of mental health trends
- Detailed post analysis with AI-generated insights

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- MongoDB
- OpenAI API (GPT-4o)
- Anthropic API (Claude)
- Social Media APIs (Twitter, Facebook, Instagram)

## Setup and Installation

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your API keys
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

## License

MIT