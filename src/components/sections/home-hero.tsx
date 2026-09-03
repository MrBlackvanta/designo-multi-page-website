import phone from "@/assets/home/hero-phone.webp";
import { Button } from "@/components/ui";

export default function HomeHero() {
  return (
    <section className="md:v-container relative">
      <div className="bg-light-grey/50 pointer-events-none absolute top-80 left-0 -z-10 hidden h-148.5 w-251.5 rounded-full rounded-bl-none lg:block" />

      <div className="bg-peach md:rounded-card relative isolate min-h-210.75 overflow-clip px-6 pt-20 text-center text-black md:px-14.5 md:pt-15 lg:flex lg:min-h-160 lg:items-center lg:px-23.75 lg:pt-0 lg:text-left">
        <div className="from-wash/0 to-wash/15 pointer-events-none absolute inset-y-0 left-0 -z-10 my-auto size-160 rounded-full bg-linear-to-t/srgb md:-right-30.5 md:left-auto lg:right-0" />

        <img
          src={phone.src}
          alt=""
          width={phone.width}
          height={phone.height}
          fetchPriority="high"
          className="pointer-events-none absolute top-75.5 left-1/2 h-228.25 w-156 max-w-none -translate-x-1/2 md:top-71.25 lg:-top-7.75 lg:-right-18.75 lg:left-auto lg:translate-x-0"
        />

        <div>
          <h1 className="text-hero-sm md:text-hero font-medium md:mx-auto md:max-w-143.25 lg:mx-0 lg:max-w-135">
            Award-winning custom designs and digital branding solutions
          </h1>

          <p className="mt-6 md:mx-auto md:max-w-111.25 lg:mx-0 lg:mt-8">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>

          <Button
            href="/about"
            ground="dark"
            className="mx-auto mt-6 lg:mx-0 lg:mt-10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
