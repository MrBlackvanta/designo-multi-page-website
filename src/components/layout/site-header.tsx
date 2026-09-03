import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="relative z-50 bg-white">
      <div className="v-container flex h-24 items-center justify-between md:h-auto md:py-16">
        <Logo className="v-focus" />
        <NavLinks variant="header" />
        <MobileMenu />
      </div>
    </header>
  );
}
