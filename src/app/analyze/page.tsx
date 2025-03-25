import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import PostAnalyzer from "@/components/analyze/post-analyzer";

export const metadata: Metadata = {
  title: "Analyze | Mental Health Social Analyzer",
  description: "Analyze social media posts for mental health indicators",
};

export default function AnalyzePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Analyze Posts</h1>
        <PostAnalyzer />
      </div>
    </DashboardLayout>
  );
}
