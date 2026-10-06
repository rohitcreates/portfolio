export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  tech: string[];
  featuredTech: string[];
  image: string;
  slug: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "NovaFlow",
    shortDescription:
      "A full-stack workspace and project management platform.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    featuredTech: ["Next.js", "TypeScript", "MongoDB"],
    image: "/images/projects/novaflow.png",
    slug: "novaflow",
    liveUrl: "https://nova-flow-8omm.vercel.app/",
    githubUrl: "https://github.com/rohitcreates/NovaFlow",
  },

  {
    id: "02",
    title: "CineScope",
    shortDescription:
      "A movie discovery platform for exploring films, trailers, cast, similar movies, and personal favorites.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "TMDB API",
    ],
    featuredTech: ["React", "Tailwind CSS", "TMDB API"],
    image: "/images/projects/cinescope.png",
    slug: "cinescope",
    liveUrl: "https://cine-scope-pi-lac.vercel.app/",
    githubUrl: "https://github.com/rohitcreates/cineScope",
  },

  {
    id: "03",
    title: "Vanta Studio",
    shortDescription:
      "A full-stack e-commerce application with authentication, checkout, orders, and an admin dashboard.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
      "Zod",
    ],
    featuredTech: ["Next.js", "TypeScript", "Prisma"],
    image: "/images/projects/vanta-studio.png",
    slug: "vanta-studio",
    liveUrl: "https://vanta-studio-delta.vercel.app/",
    githubUrl: "https://github.com/rohitcreates/vanta-studio",
  },
];