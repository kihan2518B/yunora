"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X, Menu } from "lucide-react";

const categories = [
  { label: "Mattresses", href: "/mattresses" },
  { label: "Pillows", href: "/pillows" },
  { label: "Bedsheets", href: "/bedsheets" },
  { label: "Mattress Protectors", href: "/mattress-protectors" },
  { label: "Bath Towels", href: "/bath-towels" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur border-b border-borderLight"
            : "bg-white"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* BRAND */}
            <Link
              href="/"
              className="font-serif text-2xl font-semibold text-textPrimary"
            >
              Yunora
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10">
              {/* PRODUCTS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((p) => !p)}
                  className={`flex items-center gap-1 text-sm font-medium transition ${
                    pathname.startsWith("/matt")
                      ? "text-brand"
                      : "text-textPrimary hover:text-brand"
                  }`}
                >
                  Products <ChevronDown size={16} />
                </button>

                {dropdownOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full mt-3 w-64 rounded-lg border border-borderLight bg-white shadow-xl"
                  >
                    <ul className="py-2">
                      {categories.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            role="menuitem"
                            className={`block px-4 py-2 text-sm transition ${
                              isActive(item.href)
                                ? "bg-mutedBg text-brand font-medium"
                                : "text-textPrimary hover:bg-mutedBg hover:text-brand"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* OTHER LINKS */}
              {[
                { label: "About Yunora", href: "/about" },
                { label: "Blogs", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition ${
                    isActive(item.href)
                      ? "text-brand"
                      : "text-textPrimary hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">
              <Link
                href="https://wa.me/919999999999"
                className="hidden md:inline-flex rounded-md border border-brand px-4 py-2 text-sm font-semibold text-brand hover:bg-brand hover:text-white transition"
              >
                WhatsApp
              </Link>

              <Link
                href="/mattresses"
                className="inline-flex rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Shop
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden rounded-md border border-borderLight p-2"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="font-serif text-2xl font-semibold">Yunora</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <div className="px-6 py-6 space-y-6 text-lg">
            <div>
              <p className="mb-3 text-sm text-textSecondary">Products</p>
              <ul className="space-y-3">
                {categories.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block ${
                        isActive(item.href)
                          ? "text-brand font-medium"
                          : "text-textPrimary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-6 border-t">
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About Yunora
              </Link>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Blogs
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>

            <div className="pt-6">
              <Link
                href="https://wa.me/919999999999"
                className="block w-full rounded-md border border-brand px-4 py-3 text-center font-semibold text-brand"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
