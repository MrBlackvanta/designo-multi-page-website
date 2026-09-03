import { contactDetails, office, socialLinks } from "@/data";
import Attribution from "./attribution";
import Logo from "./logo";
import NavLinks from "./nav-links";

export default function SiteFooter() {
  return (
    <footer className="relative bg-black pt-16 pb-16 text-white md:pt-20 md:pb-20 lg:pt-18 lg:pb-18">
      <div className="v-container">
        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-between">
          <Logo className="v-focus-on-dark" />
          <NavLinks variant="footer" />
          <hr className="order-2 mt-8 w-full border-t border-white/10 md:order-3 md:mt-10" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-10 text-center md:mt-8 md:flex-row md:items-end md:justify-between md:gap-0 md:text-left">
          <div className="text-body grid gap-10 font-bold text-white/50 md:w-114 md:grid-cols-2 md:gap-x-2.5 md:gap-y-0 lg:w-182.5 lg:gap-x-7.5">
            <address className="not-italic">
              <span className="block">{office.name}</span>
              {office.lines.map((line) => (
                <span key={line} className="block font-normal">
                  {line}
                </span>
              ))}
            </address>

            <address className="not-italic">
              <span className="block">{contactDetails.label}</span>
              <span className="block">
                P :{" "}
                <a
                  href={contactDetails.phoneHref}
                  className="v-focus-on-dark hover:underline"
                >
                  {contactDetails.phone}
                </a>
              </span>
              <span className="block">
                M :{" "}
                <a
                  href={contactDetails.emailHref}
                  className="v-focus-on-dark hover:underline"
                >
                  {contactDetails.email}
                </a>
              </span>
            </address>
          </div>

          <ul className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="v-tap v-focus-on-dark text-peach hover:text-peach-light flex motion-safe:transition-colors"
                >
                  <Icon className="size-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Attribution />
    </footer>
  );
}
