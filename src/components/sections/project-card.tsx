import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/projects";

export function ProjectCard({ project, priority = false }: { project: CaseStudy; priority?: boolean }) {
  const hasLive = Boolean(project.live);

  const media = (
    <>
      <Image
        src={project.image}
        alt={`${project.title}: ${project.summary}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transform-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {project.category}
      </span>
    </>
  );

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-card motion-reduce:transform-none motion-reduce:transition-none">
      {hasLive ? (
        <a
          href={project.live!}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit the ${project.title} live site`}
          className="relative block aspect-[16/10] overflow-hidden"
        >
          {media}
        </a>
      ) : (
        <div className="relative block aspect-[16/10] overflow-hidden">{media}</div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mutedink">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-mutedink"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
          {hasLive ? (
            <a
              href={project.live!}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-accent-ink"
            >
              Visit live site
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            /* Private / unlinked build: show the affordance, but link nowhere. */
            <span className="inline-flex cursor-default items-center gap-1 text-sm font-medium text-faint">
              Visit site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
