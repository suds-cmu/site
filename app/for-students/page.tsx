import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Students",
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function ForStudentsPage() {
  const benefits = [
    {
      title: "Real-World Experience",
      description:
        "Work on actual projects for real organizations, building your portfolio and gaining valuable experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Community",
      description:
        "Connect with like-minded students who are passionate about using data for social good.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Skill Development",
      description:
        "Enhance your technical and soft skills through mentorship, workshops, and hands-on project work.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Attend Kickoff GBM",
      description:
        "Come to our General Body Meetings at the beginning of the fall semester to learn about our organization and the projects we'll be working on.",
      note: "Follow our social media and join our mailing list to be notified about upcoming GBMs.",
    },
    {
      step: "02",
      title: "Fill Out Application Form",
      description:
        "After the GBM, fill out our application form indicating your interest in specific projects and whether you'd like to apply as a project manager or project member.",
      note: "The application form will be shared during the GBM and through our mailing list.",
    },
    {
      step: "03",
      title: "Team Matching",
      description:
        "Based on your application, we'll match you to a project team that aligns with your skills and interests.",
      note: "You'll be notified about your team placement and can begin working on your project right away.",
    },
  ];

  const skills = [
    "Experience with Python, R, or other data analysis tools",
    "Understanding of data analysis techniques",
    "Comfort working with data and learning new tools as needed",
    "Strong communication and teamwork abilities",
  ];

  const commitments = [
    "5-10 hours per week during the semester",
    "Attendance at weekly team meetings",
    "Participation in monthly all-hands meetings",
    "Commitment to completing assigned tasks on time",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-accent-50">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent-100/50 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-accent-50 blur-3xl" />

        <div className="container relative mx-auto px-6 py-24 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent-600">
              Get Involved
            </p>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              For Students
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              Join our community of students using data science skills to create
              positive social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-600">
                Why SUDS
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Why Join SUDS?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg"
                >
                  <div className="absolute right-5 top-5 text-sm font-semibold text-gray-300">
                    0{index + 1}
                  </div>

                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
              {/* Left side */}
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-600">
                  How to Join
                </p>

                <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Application Process
                </h2>

                <p className="max-w-md leading-7 text-gray-600">
                  Getting involved starts with learning about our projects,
                  sharing your interests, and getting matched with a team.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute bottom-5 left-[22px] top-5 w-px bg-accent-200" />

                <div className="space-y-10">
                  {applicationSteps.map((item) => (
                    <div
                      key={item.step}
                      className="relative grid grid-cols-[46px_1fr] gap-5"
                    >
                      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-accent-600 text-sm font-semibold text-white shadow-sm">
                        {item.step}
                      </div>

                      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mb-3 leading-7 text-gray-600">
                          {item.description}
                        </p>

                        <p className="text-sm leading-6 text-gray-500">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-600">
                What We Look For
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Requirements
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              {/* Skills */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 md:p-10">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-50" />

                <div className="relative">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-accent-600">
                        What you bring
                      </p>

                      <h3 className="text-2xl font-semibold text-gray-900">
                        Skills
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {skills.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4 transition-colors hover:bg-accent-50"
                      >
                        <CheckIcon />

                        <span className="text-sm leading-6 text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Commitment */}
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent-600 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-accent-600">
                      What to expect
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900">
                      Commitment
                    </h3>
                  </div>
                </div>

                <ul className="space-y-5">
                  {commitments.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-gray-200 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                        <CheckIcon />
                      </div>

                      <span className="leading-6 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl border border-accent-100 bg-accent-50 px-8 py-14 md:px-12 md:py-16">
              <div className="absolute -right-20 -top-24 h-60 w-60 rounded-full bg-accent-100/70" />
              <div className="absolute -bottom-24 right-32 h-44 w-44 rounded-full bg-white/80" />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-600">
                    Get Involved
                  </p>

                  <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                    Ready to Join?
                  </h2>

                  <p className="text-lg leading-7 text-gray-600">
                    Register for our mailing list on Tartan Connect to stay
                    updated on upcoming GBMs and application opportunities.
                  </p>
                </div>

                <a
                  href="https://tartanconnect.cmu.edu/suds/club_signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-accent-600 px-7 py-3.5 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-md"
                >
                  Join Our Mailing List
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}