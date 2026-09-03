import threeCircles from "@/assets/patterns/three-circles.svg";
import twoCircles from "@/assets/patterns/two-circles.svg";
import type { Story, StorySlug } from "@/data";
import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";

type StoryLayout = {
  pattern: StaticImageData;
  patternClass: string;
  bandClass: string;
};

const layouts: Record<StorySlug, StoryLayout> = {
  "world-class-talent": {
    pattern: threeCircles,
    patternClass: "lg:top-14 lg:left-82.5",
    bandClass: "lg:flex-row",
  },
  "the-real-deal": {
    pattern: twoCircles,
    patternClass: "lg:top-87 lg:left-0 lg:h-73",
    bandClass: "lg:flex-row-reverse",
  },
};

type AboutStoryProps = {
  story: Story;
};

export default function AboutStory({ story }: AboutStoryProps) {
  const { slug, name, paragraphs, images } = story;
  const { pattern, patternClass, bandClass } = layouts[slug];
  const headingId = `${slug}-heading`;

  return (
    <section aria-labelledby={headingId} className="md:v-container">
      <div
        className={cn(
          "bg-peach-pale md:rounded-card relative isolate overflow-clip text-center lg:flex lg:text-left",
          bandClass,
        )}
      >
        <picture
          className={cn(
            "pointer-events-none absolute top-80 left-0 -z-10 size-146 md:top-27 md:left-23.5",
            patternClass,
          )}
        >
          <source media="(min-width: 64rem)" srcSet={pattern.src} />
          <img
            src={threeCircles.src}
            alt=""
            width={threeCircles.width}
            height={threeCircles.height}
            loading="lazy"
            className="size-full"
          />
        </picture>

        <picture className="block h-80 w-full lg:h-auto lg:w-119 lg:shrink-0">
          <source media="(min-width: 64rem)" srcSet={images.desktop.src} />
          <source media="(min-width: 48rem)" srcSet={images.tablet.src} />
          <img
            src={images.mobile.src}
            alt=""
            width={images.mobile.width}
            height={images.mobile.height}
            loading="lazy"
            className="size-full object-cover"
          />
        </picture>

        <div className="min-h-136.25 px-6 py-20 md:min-h-104 md:px-14.5 md:py-17 lg:flex-1 lg:px-23.75 lg:py-38.5">
          <h2
            id={headingId}
            className="text-hero-sm md:text-heading text-peach-ink font-medium"
          >
            {name}
          </h2>

          <div className="mt-6 space-y-6.25 md:space-y-6.5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
