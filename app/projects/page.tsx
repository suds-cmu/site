import type { Metadata } from "next";
import Link from "next/link";
import { getProjectsGroupedBySemester } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

const placeholderImage = "/placeholder-project.svg";

const futurePractices = [
  {
    title: "Take 3 per semester",
    description:
      "We feature up to three projects each semester so this page stays focused on our strongest, most recent work.",
  },
  {
    title: "Check with clients",
    description:
      "Before a project is highlighted here, we confirm with the partner that we can share the story publicly.",
  },
  {
    title: "Video record & incentivize",
    description:
      "We video-record project outcomes and incentivize teams and partners to help tell the story of the work.",
  },
];

export default function ProjectsPage() {
  const semesterGroups = getProjectsGroupedBySemester(3);

  return (
    <>
      <section className="bg-gradient-to-br from-accent-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Top Projects in SUDS</h1>
            <p className="text-xl text-gray-700">
              A chronological look at featured SUDS partnerships, grouped by
              semester.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4">For Future Practices</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              How we will keep this page current as new projects wrap each
              semester.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {futurePractices.map((practice, index) => (
                <div
                  key={practice.title}
                  className="bg-white shadow-md rounded-lg p-6"
                >
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold text-accent-700">{index + 1}</span>
                  </div>
                  <h3 className="text-xl mb-2">{practice.title}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {semesterGroups.map((group) => (
              <div key={group.timeframe}>
                <div className="flex items-end justify-between gap-4 mb-8">
                  <h2>{group.label}</h2>
                  <p className="text-gray-500 mb-1">
                    {group.projects.length}{" "}
                    {group.projects.length === 1 ? "project" : "projects"}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.projects.map((project) => (
                    <div
                      key={project.slug}
                      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                    >
                      <div className="h-48 flex items-center justify-center bg-gray-50 p-6">
                        <img
                          src={project.frontmatter.image || placeholderImage}
                          alt={project.frontmatter.partner}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl mb-2">
                          {project.frontmatter.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Partner: {project.frontmatter.partner}
                        </p>
                        <p className="text-gray-600 mb-3">
                          {project.frontmatter.timeframe}
                        </p>
                        <div className="mt-auto">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="text-accent-600 hover:text-accent-800 font-medium"
                          >
                            View Project Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Have a Project in Mind?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;re always looking for new organizations to partner with. If
              you have a data-related challenge that could benefit from our
              expertise, we&apos;d love to hear from you.
            </p>
            <Link href="/work-with-us" className="cta-button inline-block">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
