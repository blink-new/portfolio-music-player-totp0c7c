export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'scripting';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Alex Morgan",
  title: "Creative Developer & Designer",
  bio: "Hi there! I'm a passionate developer with a love for creating beautiful, interactive web experiences. With a background in both design and development, I strive to build digital products that are both visually stunning and functionally robust.",
  location: "San Francisco, CA",
  email: "hello@alexmorgan.dev",
  availableForWork: true,
};

export const skills: Skill[] = [
  { name: "Luau", level: 95, category: "scripting" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "CSS/SCSS", level: 90, category: "frontend" },
  { name: "Three.js", level: 75, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Figma", level: 85, category: "design" },
  { name: "Adobe CC", level: 80, category: "design" },
  { name: "UI/UX", level: 85, category: "design" },
  { name: "Git", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 65, category: "tools" }
];

export const socialLinks: SocialLink[] = [
  {
    name: "Discord",
    url: "https://discord.com/users/your-discord-id",
    icon: "Discord"
  },
  {
    name: "GitHub",
    url: "https://github.com/ShadowWalker2014",
    icon: "Github"
  },
  {
    name: "Roblox",
    url: "https://www.roblox.com/users/your-roblox-id/profile",
    icon: "Roblox"
  }
];
