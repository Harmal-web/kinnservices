import Link from "next/link";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { Container } from "./Container";

export function Footer() {
  const security = services.filter((s) => s.category === "security");
  const cleaning = services.filter((s) => s.category === "cleaning");

  return (
    <footer className="bg-steel text-paper/90">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <span className="font-display text-lg font-medium text-paper">
            {business.name}
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/65">
            Security and commercial cleaning for businesses across{" "}
            {business.serviceAreaLine}.
          </p>
          <div className="mt-5 space-y-1 text-sm text-paper/75">
            <a href={business.phoneHref} className="block hover:text-paper">
              {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} className="block hover:text-paper">
              {business.email}
            </a>
          </div>
        </div>

        <FooterList title="Site" items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Areas covered", href: "/areas" },
          { name: "Contact", href: "/contact" },
        ]} />

        <FooterList
          title="Security"
          items={security.map((s) => ({ name: s.name, href: `/security#${s.slug}` }))}
        />

        <FooterList
          title="Cleaning"
          items={cleaning.map((s) => ({ name: s.name, href: `/cleaning#${s.slug}` }))}
        />
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.legalName}. Company number{" "}
            {business.companyNumber}.
          </p>
          <p>Registered office: {business.addressLine}</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  items,
}: {
  title: string;
  items: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-medium text-paper">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-paper/65">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-paper">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
