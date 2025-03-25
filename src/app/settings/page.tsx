import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import SettingsForm from "@/components/settings/settings-form";

export const metadata: Metadata = {
  title: "Settings | Mental Health Social Analyzer",
  description: "Manage application settings",
};

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <SettingsForm />
      </div>
    </DashboardLayout>
  );
}
