import heroDesktop from "@/assets/about/desktop/hero.webp";
import heroMobile from "@/assets/about/mobile/hero.webp";
import heroTablet from "@/assets/about/tablet/hero.webp";
import wash from "@/assets/patterns/hero-about-desktop.svg";
import washSmall from "@/assets/patterns/hero-about-mobile.svg";

export default function AboutHero() {
  return (
    <section className="md:v-container relative">
      <div className="bg-light-grey/50 pointer-events-none absolute top-80 left-0 -z-10 hidden h-148.5 w-251.5 rounded-full rounded-bl-none lg:block" />

      <div className="bg-peach-band md:rounded-card relative isolate overflow-clip text-center text-white lg:flex lg:flex-row-reverse lg:text-left">
        <picture className="pointer-events-none absolute top-45 right-0 -z-10 h-236.5 w-219 md:-top-27.25 md:right-auto md:-left-30.5 md:size-160 lg:top-auto lg:bottom-0 lg:left-0">
          <source media="(min-width: 48rem)" srcSet={wash.src} />
          <img
            src={washSmall.src}
            alt=""
            width={washSmall.width}
            height={washSmall.height}
            className="size-full"
          />
        </picture>

        <picture className="block h-80 w-full lg:h-auto lg:w-119 lg:shrink-0">
          <source media="(min-width: 64rem)" srcSet={heroDesktop.src} />
          <source media="(min-width: 48rem)" srcSet={heroTablet.src} />
          <img
            src={heroMobile.src}
            alt=""
            width={heroMobile.width}
            height={heroMobile.height}
            fetchPriority="high"
            className="size-full object-cover"
          />
        </picture>

        <div className="px-6 py-20 md:px-14.5 md:py-16 lg:flex-1 lg:py-33.75 lg:pl-23.75">
          <h1 className="text-hero-sm md:text-hero font-medium">About Us</h1>

          <p className="mt-6 md:mt-8 lg:max-w-114.5">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
    </section>
  );
}
