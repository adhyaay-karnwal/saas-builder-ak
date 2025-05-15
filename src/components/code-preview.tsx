"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CodePreview() {
  const [files, setFiles] = useState<Record<string, string>>({});
  const [selectedFile, setSelectedFile] = useState<string>("");

  useEffect(() => {
    // Here we'll connect to the backend to get real-time updates
    // For now, showing a mock structure
    setFiles({
      "package.json": JSON.stringify({
        name: "my-saas-app",
        version: "0.1.0",
        private: true,
      }, null, 2),
      "src/app/page.tsx": "export default function Home() {\n  return <div>Hello World</div>;\n}",
    });
    setSelectedFile("package.json");
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 h-[600px]">
      <div className="col-span-3 border-r">
        <ScrollArea className="h-full">
          <div className="space-y-2 p-4">
            {Object.keys(files).map((file) => (
              <button
                key={file}
                onClick={() => setSelectedFile(file)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  selectedFile === file
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted"
                }`}
              >
                {file}
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="col-span-9">
        <Card className="h-full bg-muted">
          <ScrollArea className="h-full">
            <pre className="p-4">
              <code>{files[selectedFile] || "Select a file"}</code>
            </pre>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}