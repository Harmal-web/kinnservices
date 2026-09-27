"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/data/business";
import { Container } from "./Container";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Security", href: "/security" },
  { name: "Cleaning", href: "/cleaning" },
  { name: "About", href: "/about" },
  { name: "Areas", href: "/areas" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-steel text-sm font-semibold text-paper">
            K
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-[0.95rem] text-ink/75 transition-colors hover:text-ink after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-amber after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            className="text-[0.95rem] font-medium text-ink/80 hover:text-ink"
          >
            {business.phoneDisplay}
          </a>
          <Link
            href="/contact#quote"
            className="rounded-md bg-steel px-5 py-2.5 text-[0.9rem] font-medium text-paper transition-colors hover:bg-steel-light"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="#14181B" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2.5 5.5H17.5M2.5 10H17.5M2.5 14.5H17.5" stroke="#14181B" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-ink/85 hover:bg-steel/5"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-line pt-4">
              <a href={business.phoneHref} className="px-2 text-base font-medium text-ink">
                {business.phoneDisplay}
              </a>
              <Link
                href="/contact#quote"
                onClick={() => setOpen(false)}
                className="rounded-md bg-steel px-5 py-3 text-center text-base font-medium text-paper"
              >
                Request a quote
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
