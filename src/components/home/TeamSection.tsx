import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerList } from "@/components/ui/StaggerList";
import { homeTeamMembers, type TeamMember } from "@/lib/data/team";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

type TeamMemberCopy = Dictionary["home"]["team"]["members"][number];

interface TeamSectionProps {
  readonly dict: Dictionary;
}

export function TeamSection({ dict }: TeamSectionProps): React.ReactElement {
  const t = dict.home.team;
  return (
    <section
      id="equipo"
      aria-labelledby="team-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <header className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              {t.eyebrow}
            </div>
            <div className="space-y-6">
              <h2
                id="team-heading"
                className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl"
              >
                {t.headingLead}
                <span className="block font-normal text-subtle">
                  {t.headingTrail}
                </span>
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                {t.description}
              </p>
            </div>
          </header>
        </Reveal>

        <StaggerList
          className="mt-16 grid gap-px bg-border md:grid-cols-2"
          itemClassName="flex flex-col bg-background"
        >
          {t.members.map((copy, i) => {
            const member = homeTeamMembers[i];
            if (!member) return null;
            return (
              <TeamMemberCard
                key={member.id}
                member={member}
                copy={copy}
                placeholderEyebrow={t.placeholderEyebrow}
              />
            );
          })}
        </StaggerList>
      </div>
    </section>
  );
}

interface TeamMemberCardProps {
  readonly member: TeamMember;
  readonly copy: TeamMemberCopy;
  readonly placeholderEyebrow: string;
}

function TeamMemberCard({
  member,
  copy,
  placeholderEyebrow,
}: TeamMemberCardProps): React.ReactElement {
  return (
    <article className="flex h-full flex-col">
      <figure className="relative aspect-[4/5] w-full overflow-hidden border-b border-border bg-surface">
        <Image
          src={member.imageSrc}
          alt={copy.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale"
          priority={false}
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-border bg-background/80 px-6 py-3 backdrop-blur">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            {placeholderEyebrow}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            {copy.role.split("·")[0]?.trim()}
          </span>
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col gap-6 p-8 md:p-10">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            {copy.role}
          </p>
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
            {copy.name}
          </h3>
        </div>

        <p className="text-pretty text-sm leading-relaxed text-muted md:text-base">
          {copy.bio}
        </p>

        <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 text-sm">
          {copy.credentials.map((credential) => (
            <div key={credential.label} className="space-y-1.5">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                {credential.label}
              </dt>
              <dd className="text-sm text-foreground">{credential.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
