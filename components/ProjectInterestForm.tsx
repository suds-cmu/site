"use client";

import { useMemo, useState } from "react";
import { buildMailto, type SiteForms } from "@/lib/forms";

type Props = {
  form: SiteForms["projectInterest"];
};

const fieldClass =
  "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600";

export default function ProjectInterestForm({ form }: Props) {
  const [organizationName, setOrganizationName] = useState("");
  const [website, setWebsite] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [role, setRole] = useState("");
  const [projectIdea, setProjectIdea] = useState("");
  const [availableData, setAvailableData] = useState("");
  const [preferredSemester, setPreferredSemester] = useState("Either");

  const mailtoHref = useMemo(
    () =>
      buildMailto(
        `SUDS project interest: ${organizationName || "new partner"}`,
        [
          `Organization: ${organizationName}`,
          `Website: ${website || "N/A"}`,
          `Contact name: ${contactName}`,
          `Contact email: ${contactEmail}`,
          `Role: ${role || "N/A"}`,
          `Preferred semester: ${preferredSemester}`,
          "",
          "Project idea:",
          projectIdea,
          "",
          "Available data:",
          availableData || "N/A",
        ].join("\n"),
      ),
    [
      organizationName,
      website,
      contactName,
      contactEmail,
      role,
      preferredSemester,
      projectIdea,
      availableData,
    ],
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-8 h-full">
      <h3 className="text-xl mb-3">{form.title}</h3>
      <p className="text-gray-600 mb-6">{form.description}</p>

      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = mailtoHref;
        }}
      >
        <label className="block text-sm font-medium text-gray-700">
          Organization name
          <input
            className={fieldClass}
            type="text"
            name="organizationName"
            value={organizationName}
            onChange={(event) => setOrganizationName(event.target.value)}
            required
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Website
          <input
            className={fieldClass}
            type="url"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            placeholder="https://"
            autoComplete="url"
          />
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block text-sm font-medium text-gray-700">
            Contact name
            <input
              className={fieldClass}
              type="text"
              name="contactName"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
              required
              autoComplete="name"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Contact email
            <input
              className={fieldClass}
              type="email"
              name="contactEmail"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
              required
              autoComplete="email"
            />
          </label>
        </div>
        <label className="block text-sm font-medium text-gray-700">
          Role
          <input
            className={fieldClass}
            type="text"
            name="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            autoComplete="organization-title"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Preferred semester
          <select
            className={fieldClass}
            name="preferredSemester"
            value={preferredSemester}
            onChange={(event) => setPreferredSemester(event.target.value)}
          >
            <option>Fall</option>
            <option>Spring</option>
            <option>Either</option>
            <option>Not sure</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Project idea
          <textarea
            className={fieldClass}
            name="projectIdea"
            value={projectIdea}
            onChange={(event) => setProjectIdea(event.target.value)}
            required
            rows={4}
            placeholder="What question, dataset, or decision would you like help with?"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Data you already have
          <textarea
            className={fieldClass}
            name="availableData"
            value={availableData}
            onChange={(event) => setAvailableData(event.target.value)}
            rows={3}
            placeholder="Spreadsheets, databases, surveys, or other sources."
          />
        </label>
        <button type="submit" className="cta-button w-full">
          Submit Project Interest
        </button>
      </form>
    </div>
  );
}
