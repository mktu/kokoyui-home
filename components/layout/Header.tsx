"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "心結HOMEとは", href: "#about" },
  { label: "サービス内容", href: "#services" },
  { label: "選ばれる理由", href: "#reasons" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              心結<span className="text-primary">HOME</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0120-000-0000"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0120-000-0000</span>
            </a>
            <Link
              href="#contact"
              className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              無料相談
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-6 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-4 border-t mt-2">
            <a
              href="tel:0120-000-0000"
              className="flex items-center gap-2 text-gray-700 mb-3"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0120-000-0000</span>
            </a>
            <Link
              href="#contact"
              className="block bg-primary text-white px-5 py-3 rounded-full text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              無料相談
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
