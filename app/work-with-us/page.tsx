import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-primary-600 mr-2 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const whyPartner = [
  {
    title: "Skilled Student Teams",
    description:
      "Access talented CMU students with expertise in data science, machine learning, and analytics.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Pro Bono Expertise",
    description:
      "Leverage the data science skills of our dedicated volunteer student teams at no cost to your organization.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Operationalized Experience",
    description:
      "With numerous successful projects completed, our organization is structured for effective collaboration and client success.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Fresh Perspectives",
    description:
      "Benefit from innovative approaches and the latest techniques in data science.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const offerings = [
  {
    title: "Data Analysis",
    description:
      "Extract insights from your existing data to inform decision-making and strategy.",
    items: ["Exploratory data analysis", "Statistical modeling", "Data visualization"],
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Develop predictive models and automated systems to enhance your operations.",
    items: ["Predictive modeling", "Natural language processing", "Computer vision"],
  },
  {
    title: "Data Tools & Dashboards",
    description:
      "Build custom tools and visualizations to help you interact with and understand your data.",
    items: ["Interactive dashboards", "Data pipelines", "Custom web applications"],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your needs and determine if there's a good fit.",
  },
  {
    step: 2,
    title: "Project Scoping",
    description: "We define project goals, timeline, and deliverables.",
  },
  {
    step: 3,
    title: "Team Assignment",
    description: "We match students with the right skills to your project.",
  },
  {
    step: 4,
    title: "Project Execution",
    description:
      "Our team works with you to deliver valuable insights and solutions.",
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Work With Us</h1>
            <p className="text-xl text-gray-700">
              Partner with our talented students to leverage data science for your
              organization&apos;s mission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="mb-6">Why Partner With Us?</h2>
                <div className="space-y-6">
                  {whyPartner.map((item) => (
                    <div key={item.title} className="flex items-start">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mb-6">What We Offer</h2>
                {offerings.map((offering) => (
                  <div key={offering.title} className="bg-white shadow-md rounded-lg p-6 mb-6 last:mb-0">
                    <h3 className="text-lg font-medium mb-3">{offering.title}</h3>
                    <p className="text-gray-600 mb-4">{offering.description}</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {offering.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8 mb-16">
              <h2 className="text-center mb-8">Contact Us</h2>
              <p className="text-center text-gray-600 mb-8">
                Interested in working with us? Please email us directly at{" "}
                <a href="mailto:sudscmu@gmail.com" className="text-primary-600 hover:text-primary-800">
                  sudscmu@gmail.com
                </a>
                .
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-8">
              <h2 className="text-center mb-6">Our Process</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary-700">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
