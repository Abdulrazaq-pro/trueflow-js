// components/footer.tsx
import { siteConfig } from "@/config/site";
import { TrueFlowLogoDark } from "./Header";
import { AbsolutePosition } from "@/components/Absolute";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white w-full px-4 py-12 relative overflow-hidden">
      <AbsolutePosition top={-50} left={-50}>
        {/* <div className="bg-pink-500 text-white p-3 rounded shadow-lg">
                  Custom: top=100px, left=200px
                </div> */}
        <img src="/ornament-left.svg" alt="" />
      </AbsolutePosition>
      <AbsolutePosition bottom={-50} right={-70}>
        {/* <div className="bg-pink-500 text-white p-3 rounded shadow-lg">
                  Custom: top=100px, left=200px
                </div> */}
        <img src="/ornament-right.svg" alt="" />
      </AbsolutePosition>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <TrueFlowLogoDark />
            <p className="text-gray-300 text-sm">
              {siteConfig.footer.description}
            </p>
            <p className="text-gray-400 text-sm">{siteConfig.footer.email}</p>
          </div>

          {/* Dynamic Columns */}
          {siteConfig.footer.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-white font-medium">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
