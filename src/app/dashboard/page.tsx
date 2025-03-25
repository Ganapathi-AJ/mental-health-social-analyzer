import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import OverviewMetrics from "@/components/dashboard/overview-metrics";
import PostsAnalysisChart from "@/components/dashboard/posts-analysis-chart";

export const metadata: Metadata = {
  title: "Dashboard | Mental Health Social Analyzer",
  description: "Dashboard for analyzing social media posts for mental health indicators",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <OverviewMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PostsAnalysisChart />
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-muted-foreground">No recent activity</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
