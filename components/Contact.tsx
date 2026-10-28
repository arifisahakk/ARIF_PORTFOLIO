import Section from "./Section";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's work together">
      <p className="max-w-xl text-lg text-slate-600">
        I'm looking for AI, ML and software engineering internships. If you have an opportunity, I'd love to hear from you.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-accent">{profile.email}</a>
        <a href={profile.linkedin} className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent">LinkedIn</a>
        <a href={profile.github} className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent">GitHub</a>
      </div>
    </Section>
  );
}
