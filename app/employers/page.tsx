import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import FormCard from "@/components/FormCard";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { roleOptions } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "Request qualified, credentialed healthcare staff for your Maryland facility. Temporary, temp-to-perm, and permanent placements from Eminent One LLC.",
};

const expect = [
  "A reply from our office by phone or email.",
  "A match based on the role, shift, and facility requirements you give us.",
  "Credentialed professionals, with documents checked before they start.",
  "Temporary, temp-to-perm, or permanent terms.",
  "Follow-up from us after the first shift.",
];

export default function Employers() {
  return (
    <>
      <PageHero
        eyebrow="For employers"
        title="Leave the recruiting to us."
        lead="We recruit, screen, and place healthcare professionals for your facility. We handle the credentialing, so every placement meets regulatory and facility requirements."
      />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">What to expect</p>
            <ol className="mt-8 border-t border-rule">
              {expect.map((item, i) => (
                <li key={item} className="flex gap-6 border-b border-rule py-6 text-[17px] leading-relaxed">
                  <span className="display numeral text-2xl text-forest/35">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <FormCard
              id="request"
              title="Request staff"
              lead="Tell us the role, shift, and start date. Our office will contact you."
            >
              <InquiryForm
                subject="Staffing request"
                submitLabel="Send request"
                fields={[
                  { name: "facility", label: "Facility name", required: true },
                  { name: "contact", label: "Contact name", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel", required: true },
                  { name: "role", label: "Role needed", type: "select", options: roleOptions },
                  { name: "count", label: "Number of staff", type: "number" },
                  {
                    name: "terms",
                    label: "Type of staffing",
                    type: "select",
                    options: ["Temporary", "Temp-to-perm", "Permanent"],
                  },
                  { name: "start", label: "Start date", type: "date" },
                  { name: "details", label: "Shift and details", type: "textarea" },
                ]}
              />
            </FormCard>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
