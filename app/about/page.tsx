import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBoardMembers } from "@/lib/board";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const boardMembers = getBoardMembers();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-6">ABOUT SUDS</h1>
            <p className="text-xl text-gray-700">
              Learn about our mission, history, and the team behind Students Using
              Data for Social Good.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + History */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:gap-20">
            {/* Mission */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-600">
                What We Believe
              </p>

              <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900">
                Our Mission
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                We are dedicated to using data to create meaningful impact in
                our community. SUDS partners with nonprofits, government
                agencies, and social impact organizations to help them
                accelerate their work through data science, analytics, and
                machine learning.
              </p>
            </div>

            {/* History */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-600">
                Since 2017
              </p>

              <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900">
                Our History
              </h2>

              <p className="mb-4 leading-7 text-gray-600">
                Students Using Data for Social Good was founded in 2017 at
                Carnegie Mellon University with a vision to connect students
                passionate about data with organizations working to create
                positive social impact.
              </p>

              <p className="leading-7 text-gray-600">
                Since then, SUDS has grown into a community of students applying
                their technical skills to real-world challenges across a variety
                of sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white px-6 py-10 shadow-sm md:px-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 md:text-4xl">
                  2017
                </p>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  Founded at CMU
                </p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 md:text-4xl">
                  25+
                </p>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  Partner Organizations
                </p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 md:text-4xl">
                  50+
                </p>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  Student Consultants
                </p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 md:text-4xl">
                  30+
                </p>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-600">
                Our Process
              </p>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                How We Work
              </h2>

              <p className="text-lg leading-7 text-gray-600">
                Every SUDS project brings students and organizations together to
                turn real challenges into practical, data-driven solutions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Partner */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-sm font-bold text-primary-600">
                  01
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Partner
                </h3>

                <p className="leading-7 text-gray-600">
                  We collaborate with nonprofits, community organizations, and
                  social impact groups to understand their goals and identify
                  where data can help.
                </p>
              </div>

              {/* Analyze */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-sm font-bold text-primary-600">
                  02
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Analyze
                </h3>

                <p className="leading-7 text-gray-600">
                  Student teams explore the data, build models, create
                  visualizations, and develop solutions tailored to each
                  organization&apos;s needs.
                </p>
              </div>

              {/* Impact */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-sm font-bold text-primary-600">
                  03
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Impact
                </h3>

                <p className="leading-7 text-gray-600">
                  We deliver actionable insights, tools, and recommendations
                  that organizations can use to strengthen and expand their
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Community */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-10 rounded-3xl bg-primary-50 p-8 md:flex-row md:p-12 lg:gap-14">
              <div className="flex w-full justify-center md:w-1/4">
                <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-white p-6 shadow-sm">
                  <Image
                    src="/dsc.svg"
                    alt="CMU Data Science Club Logo"
                    width={160}
                    height={160}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="w-full md:w-3/4">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-600">
                  CMU Data Community
                </p>

                <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900">
                  Part of something bigger
                </h2>

                <p className="mb-4 leading-7 text-gray-600">
                  SUDS is proud to be part of Carnegie Mellon&apos;s broader
                  data science community. Our sister organization, the{" "}
                  <a
                    href="https://cmudsc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary-600 underline-offset-4 transition hover:text-primary-800 hover:underline"
                  >
                    CMU Data Science Club
                  </a>
                  , focuses on helping students strengthen their technical
                  skills through workshops, events, and competitions.
                </p>

                <p className="leading-7 text-gray-600">
                  While SUDS emphasizes applying data skills through real-world
                  consulting projects for social good, the Data Science Club
                  provides valuable learning opportunities for students looking
                  to build and enhance their technical abilities in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="border-t border-gray-100 bg-white py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-600">
                Our Team
              </p>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                Meet the Board
              </h2>

              <p className="max-w-2xl text-lg leading-7 text-gray-600">
                Meet the students leading SUDS, organizing projects, and helping
                connect student teams with organizations across the community.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {boardMembers.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={member.picture}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                        {member.name}
                      </h3>

                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-primary-50 hover:text-primary-600"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <p className="mt-1 text-base text-gray-500">
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-8">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-gradient-to-br from-primary-50 via-white to-accent-50 px-6 py-14 text-center ring-1 ring-gray-100 md:px-12 md:py-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-600">
                Get Involved
              </p>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Want to work with SUDS?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-lg leading-7 text-gray-600">
                Whether you&apos;re a student interested in joining a project or
                an organization looking to use data more effectively, we&apos;d
                love to hear from you.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-w-40 items-center justify-center rounded-xl bg-primary-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-primary-700 hover:shadow-md"
                >
                  Work With Us
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex min-w-40 items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
                >
                  Explore Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}