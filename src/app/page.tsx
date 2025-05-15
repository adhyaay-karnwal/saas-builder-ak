import { ProjectCreator } from "@/components/project-creator";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Build Your Next SaaS Project with AI
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Generate production-ready applications instantly, powered by advanced AI
          </p>
          <ProjectCreator />
        </div>
      </div>
    </main>
  );
}