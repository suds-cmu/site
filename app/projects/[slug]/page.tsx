import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.frontmatter.title };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <>
      <section className="bg-gradient-to-br from-accent-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-accent-600 hover:text-accent-800 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Projects
            </Link>
            <h1 className="mb-3">{frontmatter.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 mb-2">
              <span className="mr-4">Partner: {frontmatter.partner}</span>
              <span>{frontmatter.timeframe}</span>
            </div>
            {frontmatter.keywords && frontmatter.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {frontmatter.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="bg-accent-100 text-accent-800 text-sm px-3 py-1 rounded-full border border-accent-200 shadow-sm"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {frontmatter.image && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="prose-content">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">About the Partner</h3>
              <p className="text-gray-700">{frontmatter.partnerDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Interested in Working With Us?</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have a data-related challenge that could benefit from our
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
