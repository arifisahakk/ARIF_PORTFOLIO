import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="Let's build something">
      <Reveal>
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 p-px">
          <div className="rounded-3xl bg-panel px-6 py-12 text-center sm:px-12">
            <p className="mx-auto max-w-xl font-display text-2xl font-semibold text-white sm:text-3xl">
              Looking for an AI, ML or software engineering intern? Let's talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:brightness-110">{profile.email}</a>
              <a href={profile.linkedin} className="btn border border-white/15 text-white hover:bg-white/10">LinkedIn</a>
              <a href={profile.github} className="btn border border-white/15 text-white hover:bg-white/10">GitHub</a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
