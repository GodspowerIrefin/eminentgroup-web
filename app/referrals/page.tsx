import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import FormCard from "@/components/FormCard";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Referrals",
  description: "Refer a healthcare professional or facility to Eminent One LLC.",
};

export default function Referrals() {
  return (
    <>
      <PageHero
        eyebrow="Referrals"
        title="Refer a facility or a healthcare professional."
        lead="Give us their contact details and we will follow up with them directly."
      />
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-[900px]">
          <FormCard
            title="Refer someone"
            lead="Tell us who to contact and whether they need staff or are looking for work."
          >
            <InquiryForm
              subject="Referral"
              submitLabel="Send referral"
              fields={[
                { name: "name", label: "Your name", required: true },
                { name: "email", label: "Your email", type: "email", required: true },
                { name: "referred", label: "Who are you referring?", required: true },
                { name: "theirContact", label: "Their email or phone", required: true },
                {
                  name: "type",
                  label: "They are a",
                  type: "select",
                  options: ["Healthcare facility", "Healthcare professional"],
                  wide: true,
                },
                { name: "notes", label: "Notes", type: "textarea" },
              ]}
            />
          </FormCard>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
