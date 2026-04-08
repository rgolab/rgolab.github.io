"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  X,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        "https://n8n.nocodeplatform.pl/webhook/e7924f64-e136-42db-99ce-1859d5d992c3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setError(
        "Failed to send message. Please try again or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { href: profileData.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: profileData.github, icon: Github, label: "GitHub" },
    { href: profileData.instagram, icon: Instagram, label: "Instagram" },
    { href: profileData.twitter, icon: X, label: "X" },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <h2 className="heading mb-14">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
                Let&apos;s Connect
              </h3>
              <p className="text-muted leading-relaxed">
                I&apos;m always interested in discussing new opportunities,
                challenging projects, or how I can help your team achieve its
                DevOps and cloud infrastructure goals.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3 text-muted hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <div className="p-2.5 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <Mail className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-sm">{profileData.email}</span>
              </a>

              <div className="flex items-center gap-3 text-muted">
                <div className="p-2.5 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <MapPin className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-sm">{profileData.location}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-surface-darkBorder">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
                Follow Me
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-100 dark:bg-surface-darkElevated rounded-xl hover:bg-gray-200 dark:hover:bg-surface-darkBorder transition-colors"
                      title={link.label}
                    >
                      <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              <div aria-live="polite">
                {isSubmitted && (
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>
                      Thank you for your message! I&apos;ll get back to you
                      soon.
                    </span>
                  </div>
                )}
                {error && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl text-sm">
                    <span>{error}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
