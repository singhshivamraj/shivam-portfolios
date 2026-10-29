import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import TubesCursor from "../components/TubesCursor";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/" },
  ];

  const inputStyle =
    "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-indigo-500";

  const iconStyle =
    "shrink-0 text-indigo-400";

  return (
    <>
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <TubesCursor />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-indigo-400">
            Get in touch
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            LET'S BUILD{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SOMETHING GREAT.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 md:text-base">
            Have an idea or opportunity? Let's connect.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
          >
            <h3 className="mb-5 text-lg font-semibold">Contact details</h3>

            <div className="space-y-5">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-white"
              >
                <Phone size={19} className={iconStyle} />
                <span>+91 7667767155</span>
              </a>

              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-white"
              >
                <Mail size={19} className={iconStyle} />
                <span>shivamraj6436@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={19} className={iconStyle} />
                <span>Meerut, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="mb-3 text-sm text-gray-400">Find me online</p>

              <div className="flex gap-3">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 text-indigo-400 transition hover:border-indigo-400/50 hover:bg-indigo-500/10"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>

            <blockquote className="mt-6 border-l-2 border-indigo-500 pl-4">
              <p className="text-sm italic leading-6 text-gray-300">
                "Great things happen when curiosity meets the courage to build."
              </p>
              <p className="mt-2 text-xs text-indigo-400">— Shivam Raj</p>
            </blockquote>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
          >
            <h3 className="mb-1 text-lg font-semibold">Send a message</h3>
            <p className="mb-5 text-sm text-gray-400">
              I'll be happy to hear from you.
            </p>

            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputStyle}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={inputStyle}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                required
                className={`${inputStyle} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold transition hover:from-indigo-500 hover:to-purple-500"
            >
              Send Message <Send size={16} />
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
              Opens your email app to send the message.
            </p>
          </motion.form>
        </div>

        
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
