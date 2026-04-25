/**
 * Team members shown on the home page. Some image URLs are temporary
 * placeholders (Unsplash) until the firm provides definitive profile
 * photographs. Toggle `isPlaceholder` to false once the final asset is in
 * place; that hides the "provisional photo" caption overlay.
 *
 * The translatable fields (name, role, bio, image alt) live in the dictionary
 * under `home.team.members`, indexed by the same order as this array.
 */

export interface TeamMember {
  readonly id: string;
  readonly imageSrc: string;
  readonly isPlaceholder: boolean;
}

export const homeTeamMembers: readonly TeamMember[] = [
  {
    id: "member-1",
    imageSrc: "/team/member-1.png",
    isPlaceholder: false,
  },
  {
    id: "member-2",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true,
  },
] as const;
