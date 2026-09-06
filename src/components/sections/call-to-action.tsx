import wash from "@/assets/patterns/call-to-action.svg";
import { Button } from "@/components/ui";

export default function CallToAction() {
  return (
    <section
      data-cta=""
      aria-labelledby="cta-heading"
      className="v-container relative z-10 -mb-47.25 md:-mb-21.5 lg:-mb-18"
    >
      <div className="bg-peach-band rounded-card relative isolate overflow-clip px-6 py-16 text-center text-white md:px-14.5 md:py-14.25 lg:flex lg:items-center lg:justify-between lg:px-23.75 lg:py-18 lg:text-left">
        <img
          src={wash.src}
          alt=""
          width={wash.width}
          height={wash.height}
          loading="lazy"
          className="v-drift pointer-events-none absolute inset-y-0 -left-60 -z-10 my-auto h-146 w-219 max-w-none md:-left-5 lg:left-58.75"
        />

        <div>
          <h2
            id="cta-heading"
            className="text-hero-sm md:text-cta font-medium md:mx-auto md:max-w-84 lg:mx-0 lg:max-w-67"
          >
            Let’s talk about your project
          </h2>
          <p className="mt-4 md:mx-auto md:max-w-115 lg:mx-0">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <Button
          href="/contact"
          ground="dark"
          className="mx-auto mt-8 lg:mx-0 lg:mt-0"
        >
          Get in touch
        </Button>
      </div>
    </section>
  );
}
