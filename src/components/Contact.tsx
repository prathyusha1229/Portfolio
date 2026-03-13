import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";
import { socials } from "../data/portfolio";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      data.append("access_key", "0b8bcb2b-6416-496c-87a3-9965d36a9ad9");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    }
  };

  const socialIcons = [
    { icon: <FiGithub />, href: socials.github, label: "GitHub" },
    { icon: <FiLinkedin />, href: socials.linkedin, label: "LinkedIn" },
    { icon: <FiMail />, href: `mailto:${socials.email}`, label: "Email" },
  ];

  return (
    <section id="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          title="Contact"
          subtitle="Have a project in mind? Let's talk."
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-surface-lighter bg-surface-light px-5 py-3 text-sm text-gray-200 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-surface-lighter bg-surface-light px-5 py-3 text-sm text-gray-200 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="w-full resize-none rounded-xl border border-surface-lighter bg-surface-light px-5 py-3 text-sm text-gray-200 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <div className="text-center">
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50"
            >
              {submitted ? (
                "Message Sent ✓"
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
          </div>
        </motion.form>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex items-center justify-center gap-6"
        >
          {socialIcons.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-full border border-surface-lighter p-3 text-lg text-gray-400 transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
