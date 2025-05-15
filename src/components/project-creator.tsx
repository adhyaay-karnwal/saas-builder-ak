"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectForm } from "@/components/project-form";
import { Sidebar } from "@/components/sidebar";
import { CodePreview } from "@/components/code-preview";
import { useToast } from "@/components/ui/use-toast";
import { useProjectStore } from "@/lib/stores/project-store";

export function ProjectCreator() {
  const [step, setStep] = useState<"form" | "building">("form");
  const { toast } = useToast();
  const { setProject, project } = useProjectStore();

  const handleProjectSubmit = async (formData: any) => {
    try {
      setStep("building");
      setProject({
        name: formData.name,
        description: formData.description,
        techStack: formData.techStack,
        model: formData.model,
        apiKey: formData.apiKey,
      });
      
      // Start the build process
      toast({
        title: "Project creation started",
        description: "Your project is being generated...",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start project creation",
        variant: "destructive",
      });
      setStep("form");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3">
        <Sidebar step={step} />
      </div>
      <div className="lg:col-span-9">
        <Card className="p-6">
          {step === "form" ? (
            <ProjectForm onSubmit={handleProjectSubmit} />
          ) : (
            <CodePreview />
          )}
        </Card>
      </div>
    </div>
  );
}