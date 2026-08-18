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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg mb-12">
              We are dedicated to leveraging data analysis to create a positive
              impact in our community. SUDS partners with nonprofits, government
              agencies, and social impact organizations to help them accelerate
              their work through data science, analytics, and machine learning.
            </p>

            <h2 className="mb-6">Our History</h2>
            <p className="mb-4">
              Students Using Data for Social Good (SUDS) was founded in 2017 at
              Carnegie Mellon University with a simple but powerful vision: to
              connect students passionate about data science with organizations
              working to make a positive social impact.
            </p>
            <p className="mb-4">
              What began as a small group of students has grown into a vibrant
              community of data scientists, analysts, and machine learning
              enthusiasts committed to using their skills for good.
            </p>
            <p className="mb-12">
              Over the years, we&apos;ve partnered with dozens of organizations
              across various sectors, helping them leverage data to enhance their
              operations, reach more people, and maximize their impact.
            </p>

            <h2 className="mb-6">Our Data Science Community</h2>
            <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
              <div className="md:w-1/4">
                <Image
                  src="/dsc.svg"
                  alt="CMU Data Science Club Logo"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div className="md:w-3/4">
                <p className="mb-4">
                  SUDS is proud to be part of Carnegie Mellon&apos;s vibrant data
                  science ecosystem. Our sister organization, the{" "}
                  <a
                    href="https://cmudsc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-800 font-medium"
                  >
                    CMU Data Science Club
                  </a>
                  , focuses on helping students develop their data science skills
                  through events, workshops, and competitions.
                </p>
                <p className="mb-4">
                  While SUDS emphasizes applying data skills through real-world
                  consulting projects for social good, the Data Science Club
                  provides valuable learning opportunities for students looking to
                  build and enhance their technical abilities in the field.
                </p>
              </div>
            </div>

            <h2 className="mb-6">How We Work</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">Partner</h3>
                <p className="text-gray-600">
                  We collaborate with organizations that are making a difference in
                  their communities.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">Analyze</h3>
                <p className="text-gray-600">
                  Our student teams apply data science and analytics to solve
                  real-world problems.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">Impact</h3>
                <p className="text-gray-600">
                  We deliver insights and solutions that help organizations amplify
                  their social impact.
                </p>
              </div>
            </div>

            <h2 className="mb-8">Meet the Board</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {boardMembers.map((member) => (
                <div key={member.name}>
                  <div className="mb-5 overflow-hidden rounded-2xl aspect-[3/2] w-full relative">
                    <Image
                      src={member.picture}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold tracking-tight text-gray-900 leading-none">
                        {member.name}
                      </h3>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-600 hover:text-accent-800"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-base text-gray-600 mt-0.5">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
