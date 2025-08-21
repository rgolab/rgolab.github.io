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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <h2 className="heading mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-muted mb-6">
                I&apos;m always interested in discussing new opportunities,
                challenging projects, or how I can help your team achieve its
                DevOps and cloud infrastructure goals.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3 text-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span>{profileData.email}</span>
              </a>

              <div className="flex items-center gap-3 text-muted">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  title="GitHub"
                >
                  <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={profileData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={profileData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  title="X"
                >
                  <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span>
                    Thank you for your message! I&apos;ll get back to you soon.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
