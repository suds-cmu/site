import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

const placeholderImage = "/placeholder-project.svg";

export default function ProjectsPage() {
  const projects = [...getAllProjects()].sort(() => Math.random() - 0.5);

  return (
    <>
      <section className="bg-gradient-to-br from-accent-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Projects</h1>
            <p className="text-xl text-gray-700">
              Explore how we&apos;ve helped organizations leverage data to create
              positive social impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                  <h3 className="text-xl mb-2">{project.frontmatter.title}</h3>
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
