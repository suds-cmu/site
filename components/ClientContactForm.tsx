"use client";

import { useMemo, useState } from "react";
import {
  buildMailto,
  isUsableHttpUrl,
  type SiteForms,
} from "@/lib/forms";

type Props = {
  form: SiteForms["clientContact"];
};

const fieldClass =
  "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600";

export default function ClientContactForm({ form }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const driveUrl = isUsableHttpUrl(form.googleDriveUrl)
    ? form.googleDriveUrl
    : null;

  const mailtoHref = useMemo(
    () =>
      buildMailto(
        "SUDS client contact",
        [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || "N/A"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      ),
    [name, email, organization, message],
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-8 h-full flex flex-col">
      <h3 className="text-xl mb-3">{form.title}</h3>
      <p className="text-gray-600 mb-6">{form.description}</p>

      {driveUrl && (
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button w-full mb-6"
        >
          Open Contact Form in Google Drive
        </a>
      )}

      <form
        className="space-y-4 flex-grow flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = mailtoHref;
        }}
      >
        <label className="block text-sm font-medium text-gray-700">
          Name
          <input
            className={fieldClass}
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Email
          <input
            className={fieldClass}
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Organization
          <input
            className={fieldClass}
            type="text"
            name="organization"
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 flex-grow">
          Message
          <textarea
            className={`${fieldClass} min-h-28`}
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            rows={5}
          />
        </label>
        <button type="submit" className="cta-button w-full">
          Send a Message
        </button>
      </form>
    </div>
  );
}
