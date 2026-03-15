"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/dictionaries/en";

type FormState = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  dict: Dictionary["contact"];
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mnjgbyzg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "error") {
    return (
      <div className="border border-border rounded-xl p-8 md:p-12 bg-ink/[0.02]">
        <p className="text-ink text-lg font-medium mb-2 tracking-[-0.01em]">
          {dict.errorTitle}
        </p>
        <p className="text-sm text-ink-secondary leading-relaxed mb-6">
          {dict.errorBody}
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-sm font-semibold text-ink underline underline-offset-4"
        >
          {dict.errorRetry}
        </button>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="border border-border rounded-xl p-8 md:p-12 bg-ink/[0.02]">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-3">
          {dict.sentLabel}
        </p>
        <p className="text-ink text-lg font-medium mb-2 tracking-[-0.01em]">
          {dict.sentTitle}
        </p>
        <p className="text-sm text-ink-secondary leading-relaxed">
          {dict.sentBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label={dict.contactFormAriaLabel}
    >
      <div className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-2"
          >
            {dict.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder={dict.namePlaceholder}
            className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-ink transition-colors duration-150"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-2"
          >
            {dict.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder={dict.emailPlaceholder}
            className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-ink transition-colors duration-150"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-2"
          >
            {dict.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder={dict.messagePlaceholder}
            className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-ink transition-colors duration-150 resize-none"
          />
        </div>

        <div className="pt-1">
          <Button
            type="submit"
            size="lg"
            disabled={state === "submitting"}
            className="w-full sm:w-auto"
          >
            {state === "submitting" ? dict.submittingButton : dict.submitButton}
          </Button>
        </div>
      </div>
    </form>
  );
}
