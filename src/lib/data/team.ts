/**
 * Team members shown on the home page. Image URLs are temporary placeholders
 * (Unsplash) until the firm provides definitive profile photographs. Replace
 * `imageSrc` per member when the final assets are available.
 *
 * The translatable fields (name, role, bio, image alt) live in the dictionary
 * under `home.team.members`, indexed by the same order as this array.
 */

export interface TeamMember {
  readonly id: string;
  readonly imageSrc: string;
}

export const homeTeamMembers: readonly TeamMember[] = [
  {
    id: "member-1",
    imageSrc: "/team/member-1.png",
  },
  {
    id: "member-2",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
  },
] as const;
