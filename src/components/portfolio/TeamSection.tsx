import { CircularAvatarTeam, TeamMember } from "./CircularAvatarTeam";

const TEAM_MEMBERS: TeamMember[] = [
  // Row 1 — 3 avatars
  {
    id: 1,
    name: "Nick / Enuzna",
    role: "Founder & Full Stack Dev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Phantom",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Cipher",
    role: "Backend Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  // Row 2 — 4 avatars
  {
    id: 4,
    name: "Vex",
    role: "DevOps & Systems",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Rogue",
    role: "Security Researcher",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Zero",
    role: "Mobile Developer",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 7,
    name: "Shade",
    role: "UI / UX Designer",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face",
  },
  // Row 3 — 3 avatars
  {
    id: 8,
    name: "Nyx",
    role: "Database Engineer",
    avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 9,
    name: "Atlas",
    role: "Cloud Infrastructure",
    avatar: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 10,
    name: "Helix",
    role: "API Developer",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  // Row 4 — 5 avatars
  {
    id: 11,
    name: "Ghost",
    role: "Penetration Tester",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 12,
    name: "Nova",
    role: "Game Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 13,
    name: "Kira",
    role: "Content & Strategy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 14,
    name: "Spark",
    role: "Tool Developer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 15,
    name: "Void",
    role: "Systems Programmer",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="border-t border-border">
      <CircularAvatarTeam
        members={TEAM_MEMBERS}
        logoText="DEATHLEGION"
      />
    </section>
  );
}
