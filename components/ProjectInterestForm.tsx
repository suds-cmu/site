import type { ProjectInterestFormConfig } from "@/lib/forms";

type Props = {
  form: ProjectInterestFormConfig;
};

export default function ProjectInterestForm({ form }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-center mb-4">{form.title}</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {form.description}
      </p>
      <div className="text-center mb-8">
        <a
          href={form.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block"
        >
          Open Project Interest Form
        </a>
      </div>
      <iframe
        src={form.embedUrl}
        title={form.title}
        className="w-full min-h-[1100px] rounded-md border border-gray-200"
      >
        Loading…
      </iframe>
    </div>
  );
}
