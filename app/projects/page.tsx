import { Suspense } from "react";
import { ProjectStats } from "./project-stats";
import { ProjectRows } from "./project-rows";
import { StatsSkeleton, RowsSkeleton } from "./skeletons";

export const dynamic = "force-dynamic";

export default function ProjectsPage() {
  return (
    <main className="px-16 py-8">
      <h1 className="mt-4 text-4xl font-bold">Projects</h1>

      <Suspense fallback={<StatsSkeleton />}>
        <ProjectStats />
      </Suspense>

      <Suspense fallback={<RowsSkeleton />}>
        <ProjectRows />
      </Suspense>
    </main>
  );
}