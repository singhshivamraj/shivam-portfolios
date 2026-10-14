











import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

/* CONTACT — DIGITAL DREAMS GRADIENT THEME */

const GRADIENT_CLASS = 'from-indigo-400 via-purple-400 to-pink-400';
const ACCENT_RGB = '167, 139, 250';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`;

/* ANIMATED GRID LINES */
const GridLines = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ opacity: 0.04 }}
  >
    <defs>
      <pattern
        id="grid"
        width="60"
        height="60"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke={`rgba(${ACCENT_RGB},1)`}
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

/* ORBITING RING */
const OrbitRing = ({ size, duration, reverse, opacity = 0.12 }) => (
  <motion.div
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      border: `1px solid rgba(${ACCENT_RGB},${opacity})`,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    }}
  >
    <div
      className="absolute w-1.5 h-1.5 rounded-full -top-0.5 left-1/2 -translate-x-1/2 bg-pink-400 shadow-[0_0_8px_#F472B6]"
      style={{ opacity: opacity * 5 }}
    />
  </motion.div>
);

/* COPY TOAST */
const CopyToast = ({ visible, text }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.9 }}
        transition={{ duration: 0.22 }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest whitespace-nowrap z-50 bg-gradient-to-r from-indigo-400 to-pink-400 text-black font-black"
      >
        {text} Copied
      </motion.div>
    )}
  </AnimatePresence>
);

/* CONTACT LINK CARD */
const ContactCard = ({ icon, label, value, href, copyText, delay }) => {
  const [hov, setHov] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(copyText || value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <motion.a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 110, damping: 18 }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="relative flex items-center gap-6 p-6 rounded-2xl cursor-pointer overflow-hidden group/card bg-white/[0.015] border border-white/5"
      style={{
        borderColor: hov
          ? 'rgba(167,139,250,0.22)'
          : 'rgba(255,255,255,0.05)',
        background: hov
          ? 'rgba(167,139,250,0.04)'
          : 'rgba(255,255,255,0.015)',
        boxShadow: hov ? `0 0 40px rgba(${ACCENT_RGB},0.1)` : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-px -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 pointer-events-none bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

      <motion.div
        className="absolute left-0 top-0 w-[2px] h-full rounded-l-2xl"
        animate={{
          background: hov ? '#A78BFA' : 'rgba(255,255,255,0.04)',
          boxShadow: hov ? '0 0 12px #A78BFA' : 'none',
        }}
      />

      <motion.div
        animate={{
          background: hov
            ? `rgba(${ACCENT_RGB},0.15)`
            : 'rgba(255,255,255,0.04)',
          borderColor: hov
            ? 'rgba(167,139,250,0.3)'
            : 'rgba(255,255,255,0.06)',
        }}
        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
      >
        <motion.div
          animate={{
            color: hov ? '#F472B6' : 'rgba(255,255,255,0.3)',
          }}
        >
          {icon}
        </motion.div>
      </motion.div>

      <div className="flex flex-col flex-1 min-w-0 gap-1">
        <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-indigo-400/50">
          {label}
        </span>

        <motion.span
          animate={{
            color: hov
              ? 'rgba(255,255,255,0.92)'
              : 'rgba(255,255,255,0.55)',
          }}
          className="font-black italic uppercase text-base md:text-lg tracking-tight truncate leading-none"
        >
          {value}
        </motion.span>
      </div>

      <div className="flex items-center gap-3 shrink-0 relative">
        <CopyToast visible={copied} text={label} />

        <motion.button
          type="button"
          aria-label={`Copy ${label}`}
          onClick={handleCopy}
          animate={{
            opacity: hov ? 1 : 0,
            scale: hov ? 1 : 0.8,
          }}
          className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/10 border border-purple-500/20"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F472B6"
          >
            <rect
              x="9"
              y="9"
              width="13"
              height="13"
              rx="2"
              strokeWidth="1.6"
            />
            <path
              d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
              strokeWidth="1.6"
            />
          </svg>
        </motion.button>

        <motion.div
          animate={{
            opacity: hov ? 1 : 0.15,
            x: hov ? 0 : -4,
            color: hov ? '#F472B6' : 'rgba(255,255,255,0.2)',
          }}
          className="text-xl font-black"
        >
          ↗
        </motion.div>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();

    if (sending) return;

    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields.');
      setSent(false);
      return;
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setErrorMessage(
        'Email configuration is missing. Please check your .env file.'
      );
      setSent(false);
      return;
    }

    setSending(true);
    setSent(false);
    setErrorMessage('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);
      setFormState({ name: '', email: '', message: '' });

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setErrorMessage(
        'Message could not be sent. Please try again.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-32 px-4 md:px-10 bg-transparent"
    >
      <div className="absolute inset-0 pointer-events-none">
        <GridLines />

        <div
          className="absolute inset-0 opacity-45"
          style={{ backgroundImage: GRAIN, backgroundSize: '160px' }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px]"
          style={{
            background:
              'radial-gradient(ellipse,rgba(167,139,250,0.05) 0%,transparent 70%)',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 mb-20"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-indigo-400/50">
          — Initiate Transmission —
        </span>
        <div className="h-px w-12 bg-white/10" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="flex flex-col gap-10">
          <motion.div style={{ y }} className="flex flex-col gap-3">
            <h2
              className="font-black italic uppercase leading-none tracking-tighter text-white"
              style={{
                fontSize: 'clamp(3.5rem,8vw,7rem)',
                lineHeight: 0.92,
              }}
            >
              Let's
              <br />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${GRADIENT_CLASS}`}
                style={{
                  filter: `drop-shadow(0 0 20px rgba(${ACCENT_RGB},0.3))`,
                }}
              >
                Connect
              </span>
            </h2>

            <p className="text-sm font-mono uppercase tracking-widest mt-4 text-white/20 leading-loose max-w-sm">
              Open to Software Development Engineer (SDE) opportunities.
              <br />
              Let's connect to discuss how I can contribute to your team.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <ContactCard
              delay={0.1}
              label="Email"
              value="shivamraj6436@gmail.com"
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              }
              href="mailto:shivamraj6436@gmail.com"
            />

            <ContactCard
              delay={0.18}
              label="LinkedIn"
              value="in/shivamRaj"
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M7 10v7M7 7v.5M11 17v-4a2 2 0 014 0v4M11 10v7" />
                </svg>
              }
              href="https://www.linkedin.com/in/shivam-raj-0148592a5"
            />

            <ContactCard
              delay={0.26}
              label="GitHub"
              value="github.com/Shivam-Raj"
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              }
              href="https://github.com/singhshivamraj"
            />
          </div>

          <motion.div
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 self-start px-5 py-3 rounded-full border border-white/5 bg-white/[0.02]"
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22C55E]"
            />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
              Open to SDE Roles
            </span>
          </motion.div>
        </div>

        <motion.div
          transition={{ delay: 0.15 }}
          className="flex flex-col gap-8"
        >
          <div className="relative flex items-center justify-center h-40 mb-2">
            <OrbitRing size={140} duration={18} opacity={0.1} />
            <OrbitRing size={100} duration={12} reverse opacity={0.14} />

            <div className="absolute w-8 h-8 rounded-full flex items-center justify-center z-10 border border-purple-500/20 bg-purple-500/5 shadow-[0_0_20px_rgba(167,139,250,0.15)]">
              <div className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#F472B6]" />
            </div>

            <span className="absolute bottom-0 text-[9px] font-mono uppercase tracking-widest text-indigo-400/30">
              Signal Active
            </span>
          </div>

          <form
            onSubmit={handleSend}
            className="relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.015]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {[
                    'rgba(255,59,48,0.5)',
                    'rgba(255,196,0,0.5)',
                    'rgba(50,215,75,0.5)',
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>

                <span className="text-[9px] font-mono uppercase tracking-widest text-white/20">
                  quick_message.js
                </span>
              </div>

              <div className="text-[9px] font-mono text-indigo-400/40">
                ● {sending ? 'sending' : sent ? 'sent' : 'ready'}
              </div>
            </div>

            <div className="flex flex-col">
              {/* NAME FIELD */}
              <div className="flex items-center px-6 py-4 gap-4 border-b border-white/5">
                <label
                  htmlFor="contact-name"
                  className="text-[10px] font-mono w-20 shrink-0 text-indigo-400/40"
                >
                  const name
                </label>

                <span className="text-white/10 font-mono text-sm">=</span>

                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  value={formState.name}
                  onChange={(e) => {
                    setFormState((p) => ({ ...p, name: e.target.value }));
                    setErrorMessage('');
                    setSent(false);
                  }}
                  placeholder='"Your Name"'
                  className="min-w-0 flex-1 bg-transparent outline-none font-mono text-sm italic text-white/70"
                  disabled={sending}
                />
              </div>

              {/* EMAIL FIELD */}
              <div className="flex items-center px-6 py-4 gap-4 border-b border-white/5">
                <label
                  htmlFor="contact-email"
                  className="text-[10px] font-mono w-20 shrink-0 text-indigo-400/40"
                >
                  const email
                </label>

                <span className="text-white/10 font-mono text-sm">=</span>

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  value={formState.email}
                  onChange={(e) => {
                    setFormState((p) => ({ ...p, email: e.target.value }));
                    setErrorMessage('');
                    setSent(false);
                  }}
                  placeholder='"your@email.com"'
                  className="min-w-0 flex-1 bg-transparent outline-none font-mono text-sm italic text-white/70"
                  disabled={sending}
                />
              </div>

              {/* MESSAGE FIELD */}
              <div className="flex items-start px-6 py-4 gap-4">
                <label
                  htmlFor="contact-message"
                  className="text-[10px] font-mono w-20 shrink-0 mt-1 text-purple-400/40"
                >
                  const msg
                </label>

                <span className="text-white/10 font-mono text-sm mt-1">
                  =
                </span>

                <textarea
                  id="contact-message"
                  maxLength={5000}
                  required
                  value={formState.message}
                  onChange={(e) => {
                    setFormState((p) => ({ ...p, message: e.target.value }));
                    setErrorMessage('');
                    setSent(false);
                  }}
                  placeholder='"Your message here..."'
                  rows={4}
                  className="min-w-0 flex-1 bg-transparent outline-none font-mono text-sm italic resize-none text-white/70"
                  disabled={sending}
                />
              </div>
            </div>

            {errorMessage && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="px-6 pb-3 text-xs font-mono text-red-400"
              >
                {errorMessage}
              </motion.p>
            )}

            <div className="px-6 py-4 border-t border-white/5">
              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.01 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className={`relative w-full py-3 rounded-xl font-black italic uppercase text-[11px] tracking-[0.2em] transition-all duration-500 overflow-hidden border ${
                  sent
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : sending
                    ? 'bg-black border-purple-400/30 text-purple-300'
                    : `bg-gradient-to-r ${GRADIENT_CLASS} text-black border-transparent`
                }`}
              >
                <AnimatePresence mode="wait">
                  {sending ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3"
                    >
                      <svg
                        className="animate-spin"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="3"
                          opacity="0.25"
                        />
                        <path
                          d="M21 12a9 9 0 00-9-9"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending Transmission...
                    </motion.span>
                  ) : sent ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 12,
                        }}
                      >
                        ✓
                      </motion.span>
                      Sent Successfully
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Transmission →
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </form>

          <div className="flex items-center gap-4 opacity-20">
            <div className="h-px flex-1 bg-white" />
            <span className="text-[9px] font-mono tracking-[0.4em] text-white">
              Built with Precision · 2026
            </span>
            <div className="h-px flex-1 bg-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
