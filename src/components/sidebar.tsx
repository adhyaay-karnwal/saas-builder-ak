import { cn } from "@/lib/utils";
import {
  CircleDot,
  Code2,
  Database,
  KeyRound,
  LayoutDashboard,
  Server,
} from "lucide-react";

const steps = [
  {
    id: "init",
    name: "Project Initialization",
    description: "Setting up project structure",
    icon: LayoutDashboard,
  },
  {
    id: "ui",
    name: "UI Generation",
    description: "Creating components and layouts",
    icon: Code2,
  },
  {
    id: "auth",
    name: "Authentication",
    description: "Implementing auth system",
    icon: KeyRound,
  },
  {
    id: "data",
    name: "Data Layer",
    description: "Setting up database and models",
    icon: Database,
  },
  {
    id: "server",
    name: "Development Server",
    description: "Starting local environment",
    icon: Server,
  },
];

export function Sidebar({ step }: { step: "form" | "building" }) {
  return (
    <div className="space-y-4">
      <div className="font-semibold text-sm text-muted-foreground">
        Build Progress
      </div>
      <nav className="space-y-2">
        {steps.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg",
              step === "building" && "text-muted-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <div className="space-y-0.5">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="text-xs text-muted-foreground">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}