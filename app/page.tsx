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
        <div className="h-screen bg-[('/hammerschlag.jpg')] 
        bg-cover bg-center relative flex flex-col justify-center">
          <div className="flex items-center gap-8">
            <h1 className="mb-6">Students Using Data for Social Good</h1>
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
        </div>
      </section>
    
      <section className="py-10 bg-primary-600">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-lg text-white font-semibold">
            We strengthen the Pittsburgh community through partnering
            with local nonprofits to provide data analysis services,
            <span className="font-bold">completely pro bono.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">Past Clients</h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
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
      
      <section className="py-16 bg-grey-50">
        <div>
          <div className="container mx-auto px-4">
              <h2 className="mb-6">SUDS Calendar</h2>
              <p className="text-lg text-gray-700 mb-8">
                Catch us at one of our meetings!
              </p>
            <div className="flex items-center justify-center">
              <iframe src="https://calendar.google.com/calendar/embed?src=c_d0373453f1cd3b101e8d724ff6a1afd5200d564fd6b030b0ee934dbcd9136187%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no">
              </iframe>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
