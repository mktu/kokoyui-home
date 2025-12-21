import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navItems = [
  { label: "心結HOMEとは", href: "#about" },
  { label: "サービス内容", href: "#services" },
  { label: "選ばれる理由", href: "#reasons" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                心結<span className="text-primary">HOME</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              お客様の理想の住まいを実現する
              <br />
              リフォーム・リノベーション会社です。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">メニュー</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:0120-000-0000"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>0120-000-0000</span>
              </a>
              <a
                href="mailto:info@kokoyui-home.jp"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@kokoyui-home.jp</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  〒000-0000
                  <br />
                  東京都○○区○○ 0-0-0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 心結HOME. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
