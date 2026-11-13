import type { Metadata } from "next";
import FormCard from "@/components/FormCard";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { roleOptions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Eminent One LLC, a Maryland healthcare staffing agency. Call 410-929-9388 or send us a message.",
};

const linkClass = "link-underline font-semibold text-forest";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Talk to our office."
        lead="Staffing requests and job inquiries, by phone or email."
      />
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <dl className="border-t border-rule">
              <div className="border-b border-rule py-7">
                <dt className="eyebrow">Call</dt>
                <dd className="display mt-3 text-4xl">
                  <a href={site.phoneHref} className="link-underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="border-b border-rule py-7">
                <dt className="eyebrow">Email</dt>
                <dd className="mt-3 break-all text-xl font-bold">
                  <a href={`mailto:${site.email}`} className="link-underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-rule py-7">
                <dt className="eyebrow">Visit</dt>
                <dd className="mt-3 text-lg leading-relaxed">
                  {site.street}
                  <br />
                  {site.city}
                  <br />
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-2 inline-block`}>
                    Get directions
                  </a>
                </dd>
              </div>
              <div className="border-b border-rule py-7">
                <dt className="eyebrow">Service areas</dt>
                <dd className="mt-3 text-lg">{site.areas}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            <FormCard title="Send us a message" lead="We reply by phone or email.">
              <InquiryForm
                subject="Website inquiry"
                submitLabel="Send message"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel" },
                  {
                    name: "type",
                    label: "I am a",
                    type: "select",
                    options: ["Healthcare facility", "Healthcare professional", "Other"],
                  },
                  { name: "service", label: "Service", type: "select", options: roleOptions },
                  {
                    name: "source",
                    label: "How did you hear about us?",
                    type: "select",
                    options: ["Social media", "Referral", "Search", "Other"],
                  },
                  { name: "message", label: "Message", type: "textarea", required: true },
                ]}
              />
            </FormCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
