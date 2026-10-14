import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/singhshivamraj",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shivam-raj-0148592a5",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-transparent text-white">
      {/* Subtle top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-6 pt-12 md:px-10 md:pt-16">
        {/* Main footer */}
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 md:items-start lg:grid-cols-[1.4fr_0.7fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="inline-block">
              <span className="text-3xl font-black tracking-tight ">
                Shivam
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Raj
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Building thoughtful digital experiences with code, creativity,
              and curiosity.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/[0.07] px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              <span className="text-xs text-indigo-200">
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Explore
            </h3>

            <nav className="flex flex-col items-start gap-3">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-indigo-300"
                >
                  {label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Let's connect
            </h3>

            <p className="mb-5 max-w-xs text-sm leading-6 text-gray-400">
              Have an idea or opportunity? I'd love to hear from you.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold transition hover:from-indigo-500 hover:to-purple-500"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>

            <div className="mt-5 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-gray-400 transition hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-300"
                >
                  <Icon size={18} />
                </a>
              ))}

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-gray-400 transition hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {year} Shivam Raj. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Designed with care. Built with code.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 self-start text-xs text-gray-400 transition hover:text-indigo-300 sm:self-auto"
          >
            Back to top
            <span className="rounded-lg border border-white/10 p-2">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
