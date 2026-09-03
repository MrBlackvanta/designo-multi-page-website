import type { Project } from "@/data";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section aria-labelledby="projects-heading" className="v-container">
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>

      <ul className="grid gap-y-10 md:gap-y-8 lg:grid-cols-3 lg:gap-x-7.5">
        {projects.map(({ name, description, image }, index) => (
          <li
            key={name}
            className="bg-peach-pale rounded-card flex flex-col overflow-clip md:flex-row lg:flex-col"
          >
            <img
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              className="h-80 w-full object-cover md:h-77.5 md:flex-1 lg:h-80 lg:flex-none"
            />

            <div className="flex flex-col justify-center p-8 text-center md:w-87.5 md:shrink-0 lg:w-auto">
              <h3 className="text-label text-peach-ink font-medium uppercase">
                {name}
              </h3>
              <p className="text-body mt-4">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
