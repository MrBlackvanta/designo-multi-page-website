import wash from "@/assets/patterns/hero-contact-desktop.svg";
import washSmall from "@/assets/patterns/hero-contact-mobile.svg";
import { ContactForm } from "@/components/ui";

export default function ContactHero() {
  return (
    <section className="md:v-container">
      <div className="bg-peach-band md:rounded-card relative isolate overflow-clip px-6 py-18 text-center text-white md:px-14.5 md:py-17.75 md:text-left lg:flex lg:px-23.75 lg:py-13.75">
        <picture className="pointer-events-none absolute top-0 -left-23 -z-10 h-247.5 w-219 md:-top-20.75 md:-left-30.5 md:size-160 lg:-top-40 lg:left-0">
          <source media="(min-width: 48rem)" srcSet={wash.src} />
          <img
            src={washSmall.src}
            alt=""
            width={washSmall.width}
            height={washSmall.height}
            className="size-full"
          />
        </picture>

        <div className="lg:flex-1 lg:pt-20">
          <h1 className="text-hero-sm md:text-hero font-medium">Contact Us</h1>

          <p className="mt-6 md:mt-8 lg:max-w-111.25">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <ContactForm className="mt-12 md:mt-10 lg:mt-0 lg:w-95 lg:shrink-0" />
      </div>
    </section>
  );
}
