export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'tools';
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

export const projects: Project[] = [
  {
    id: "1",
    title: "Cosmic Explorer",
    description: "An interactive 3D visualization of our solar system built with Three.js and React Three Fiber.",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Three.js", "WebGL", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "2",
    title: "Rhythmic",
    description: "A music streaming platform with a unique visualization system that reacts to the audio in real-time.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Web Audio API", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "3",
    title: "PixelPerfect",
    description: "A design system and component library built for designers and developers to collaborate seamlessly.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Storybook", "Figma API", "Design Systems"],
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Urban Lens",
    description: "A photography portfolio and marketplace for urban photographers to showcase and sell their work.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Stripe", "Cloudinary"],
    liveUrl: "https://example.com"
  }
];

export const skills: Skill[] = [
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

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "Twitter"
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "Instagram"
  }
];