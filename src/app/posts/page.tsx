import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import PostsList from "@/components/posts/posts-list";

export const metadata: Metadata = {
  title: "Posts | Mental Health Social Analyzer",
  description: "View and analyze social media posts",
};

export default function PostsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Social Media Posts</h1>
        <PostsList />
      </div>
    </DashboardLayout>
  );
}
