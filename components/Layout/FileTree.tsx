"use client";

import { useRouter } from "next/navigation";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { NAVIGATION } from "@/constants";
import { FolderOpenIcon, Folder as FolderIcon } from "lucide-react";
import { FileIcon } from "@/components/Layout/FileIcon";
import { useLayoutStore } from "@/store/layoutStore";

export function FileTree() {
  const router = useRouter();
  const { closeSidebar, isMobile } = useLayoutStore();

  const goTo = (path: string) => {
    router.push(path);
    if (isMobile) closeSidebar();
  };

  const handleSelect = (id: string) => {
    console.log("Selected:", id);
    switch (id) {
      case "home.tsx":
        goTo("/");
        break;
      case "skills.json":
        goTo("/skills");
        break;
      case "projects/overview.tsx":
        goTo("/projects");
        break;
      case "blog.md":
        goTo("/blog");
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-none bg-transparent">
      <Tree
        className="overflow-hidden rounded-md text-gray-200"
        initialSelectedId="home.tsx"
        initialExpandedItems={[
          "src",
          "home.tsx",
          "skills.json",
          "projects",
          "projects/overview.tsx",
        ]}
        elements={NAVIGATION}
        openIcon={<FolderOpenIcon className="size-4 text-gray-400" />}
        closeIcon={<FolderIcon className="size-4 text-gray-400" />}
      >
        <Folder element="src" value="src">
          <File
            value="home.tsx"
            fileIcon={<FileIcon filename="home.tsx" className="w-4 h-4" />}
          >
            <p onClick={() => handleSelect("home.tsx")}>home.tsx</p>
          </File>
          <File
            value="skills.json"
            fileIcon={<FileIcon filename="skills.json" className="w-4 h-4" />}
          >
            <p onClick={() => handleSelect("skills.json")}>skills.json</p>
          </File>
          <Folder value="projects" element="projects">
            <File
              value="projects/overview.tsx"
              fileIcon={
                <FileIcon
                  filename={"projects/overview.tsx"}
                  className="w-4 h-4"
                />
              }
            >
              <p onClick={() => handleSelect("projects/overview.tsx")}>
                overview.tsx
              </p>
            </File>
          </Folder>
          <File
            value="blog.md"
            fileIcon={<FileIcon filename="blog.md" className="w-4 h-4" />}
          >
            <p onClick={() => handleSelect("blog.md")}>blog.md</p>
          </File>
        </Folder>
      </Tree>
    </div>
  );
}
