import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getClients } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const clients = getClients(6);

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="mb-6">Student Using Data for Social Good</h1>
              <p className="text-xl text-gray-700 mb-8">
                We strengthen the Pittsburgh community through partnering with local 
                nonprofits to provide pro bono services, based on real data.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/work-with-us" className="cta-button">
                  Work With Us
                </Link>
                <Link
                  href="/projects"
                  className="bg-white hover:bg-gray-100 text-accent-600 border border-accent-600 font-medium rounded transition-colors inline-flex items-center justify-center h-10 px-6"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-accent-100 max-w-[600px] max-h-[400px] rounded-lg p-4 relative z-10">
                <Image
                  src="/hammerschlag.jpg"
                  alt="Hammerschlag Hall at Carnegie Mellon University"
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute inset-0 bg-accent-200 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">Past Clients</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We&apos;ve had the privilege of working with a diverse range of
            organizations committed to making a positive impact. Here are some of
            the partners we&apos;ve collaborated with on data-driven projects.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-lg p-6 flex flex-col text-inherit hover:shadow-lg transition-shadow"
              >
                <div className="h-28 flex items-center justify-center mb-4">
                  <Image
                    src={`/${client.logo}`}
                    alt={`${client.name} logo`}
                    width={220}
                    height={120}
                    className="object-contain max-h-28 w-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{client.name}</h3>
                {client.description && (
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {client.description}
                  </p>
                )}
                <span className="text-accent-600 font-medium text-sm">
                  Visit website →
                </span>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 italic">
              Interested in becoming our next partner?{" "}
              <Link href="/work-with-us" className="font-medium">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you&apos;re a student looking to apply your data skills or
              an organization seeking data-driven solutions, we&apos;d love to
              connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/for-students" className="cta-button h-10">
                Join as a Student
              </Link>
              <Link
                href="/work-with-us"
                className="bg-white hover:bg-gray-100 text-accent-600 border border-accent-600 font-medium rounded transition-colors inline-flex items-center justify-center h-10 px-6"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
