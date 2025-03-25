"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BarChart3, Settings, MessageSquare, LayoutDashboard, PlusCircle, Menu, X } from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Posts",
    href: "/posts",
    icon: <MessageSquare className="mr-2 h-4 w-4" />,
  },
  {
    title: "Analyze",
    href: "/analyze",
    icon: <BarChart3 className="mr-2 h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar - Mobile (Overlay) */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden bg-background/80 backdrop-blur-sm",
          sidebarOpen ? "block" : "hidden"
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 w-64 h-full border-r bg-background transition-transform lg:translate-x-0 lg:relative",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              MH Analyzer
            </Link>
          </div>

          <nav className="mt-2 flex-1">
            <div className="px-4 space-y-1">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Button
                    key={item.href}
                    asChild
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start">
                    <Link href={item.href}>
                      {item.icon}
                      {item.title}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => setSidebarOpen(false)}
              asChild
            >
              <Link href="/analyze">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Analysis
              </Link>
            </Button>

            <div className="mt-4 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  );
}
