import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Students",
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-accent-600 mr-2 mt-0.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ForStudentsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-100 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">For Students</h1>
            <p className="text-xl text-gray-700">
              Join our community of students using data science skills to create
              positive social impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Why Join SUDS?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">Real-World Experience</h3>
                <p className="text-gray-600">
                  Work on actual projects for real organizations, building your
                  portfolio and gaining valuable experience.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">Community</h3>
                <p className="text-gray-600">
                  Connect with like-minded students who are passionate about using
                  data for social good.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">Skill Development</h3>
                <p className="text-gray-600">
                  Enhance your technical and soft skills through mentorship,
                  workshops, and hands-on project work.
                </p>
              </div>
            </div>

            <h2 className="mb-8">Application Process</h2>
            <div className="bg-white shadow-md rounded-lg p-8 mb-16">
              <div className="relative">
                <div className="absolute left-4 inset-y-0 w-0.5 bg-accent-200" />
                <div className="space-y-12 relative">
                  {[
                    {
                      step: 1,
                      title: "Attend Kickoff GBM",
                      description:
                        "Come to our General Body Meetings at the beginning of the fall semester to learn about our organization and the projects we'll be working on.",
                      note: "Follow our social media and join our mailing list to be notified about upcoming GBMs.",
                    },
                    {
                      step: 2,
                      title: "Fill Out Application Form",
                      description:
                        "After the GBM, fill out our application form indicating your interest in specific projects and whether you'd like to apply as a project manager or project member.",
                      note: "The application form will be shared during the GBM and through our mailing list.",
                    },
                    {
                      step: 3,
                      title: "Team Matching",
                      description:
                        "Based on your application, we'll match you to a project team that aligns with your skills and interests.",
                      note: "You'll be notified about your team placement and can begin working on your project right away.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex">
                      <div className="flex flex-col items-center mr-6">
                        <div className="rounded-full bg-accent-600 text-white w-8 h-8 flex items-center justify-center z-10">
                          {item.step}
                        </div>
                        {item.step < 3 && <div className="h-full w-0.5 bg-accent-200" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-500">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="mb-8">Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl mb-4">Skills</h3>
                <ul className="space-y-2">
                  {[
                    "Experience with Python, R, or other data analysis tools",
                    "Understanding of data analysis techniques",
                    "Familiarity with machine learning concepts (for ML projects)",
                    "Strong communication and teamwork abilities",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl mb-4">Commitment</h3>
                <ul className="space-y-2">
                  {[
                    "5-10 hours per week during the semester",
                    "Attendance at weekly team meetings",
                    "Participation in monthly all-hands meetings",
                    "Commitment to completing assigned tasks on time",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-accent-50 rounded-lg p-8 text-center">
              <h2 className="mb-4">Ready to Join?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Register for our mailing list on Tartan Connect to stay updated on
                upcoming GBMs and application opportunities.
              </p>
              <a
                href="https://tartanconnect.cmu.edu/suds/club_signup"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-block"
              >
                Join Our Mailing List
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
