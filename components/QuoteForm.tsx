"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const postcode = String(data.get("postcode") || "").trim();

    if (!name) nextErrors.name = "Enter your full name.";
    if (!phone && !email) nextErrors.contact = "Add a phone number or email so we can reply.";
    if (!postcode) nextErrors.postcode = "Enter the site postcode.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      // Integration point: connect to your enquiry endpoint / CRM here,
      // e.g. POST to /api/enquiry or a provider such as Formspree.
      // await fetch("/api/enquiry", { method: "POST", body: data });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-line bg-white p-8 text-center"
      >
        <p className="font-display text-xl font-medium text-ink">
          Enquiry received
        </p>
        <p className="mt-2 text-sm text-ink/65">
          Thanks — we&rsquo;ll come back to you with a clear proposal shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <fieldset>
        <legend className="text-sm font-medium text-ink">I&rsquo;m interested in</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {["Security", "Cleaning", "Both"].map((option, index) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink/75 has-[:checked]:border-steel has-[:checked]:bg-steel has-[:checked]:text-paper"
            >
              <input
                type="radio"
                name="interest"
                value={option}
                defaultChecked={index === 2}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Full name" name="name" required error={errors.name} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Email" name="email" type="email" />
      </div>
      {errors.contact ? (
        <p className="-mt-3 text-sm text-red-700">{errors.contact}</p>
      ) : null}
      <Field label="Site postcode" name="postcode" required error={errors.postcode} />

      <div>
        <label htmlFor="requirements" className="text-sm font-medium text-ink">
          Requirements
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows={4}
          className="mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-steel focus:ring-2 focus:ring-steel/15"
          placeholder="Tell us about the premises and what cover you need"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-steel px-6 py-3.5 text-[0.95rem] font-medium text-paper transition-colors hover:bg-steel-light disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-red-700">
          Something went wrong sending this — please call or email us directly.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-steel focus:ring-2 focus:ring-steel/15"
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
