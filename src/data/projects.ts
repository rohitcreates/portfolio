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
      "A full-stack workspace and project management application with authentication, workspace roles, projects, task assignments, documentation, comments, and attachments.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    featuredTech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    image: "/images/projects/novaflow.png",
    slug: "novaflow",
    liveUrl: "https://nova-flow-8omm.vercel.app/",
    githubUrl: "https://github.com/rohitcreates/NovaFlow",
  },
  {
    id: "02",
    title: "CineScope",
    shortDescription:
      "A React-based movie discovery app using the TMDB API, with search, movie details, trailers, cast information, similar titles, and locally saved favourites.",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "TMDB API",
    ],
    featuredTech: ["React", "JavaScript", "TMDB API"],
    image: "/images/projects/cinescope.png",
    slug: "cinescope",
    liveUrl: "https://cine-scope-pi-lac.vercel.app/",
    githubUrl: "https://github.com/rohitcreates/cineScope",
  },
  {
    id: "03",
    title: "Vanta Studio",
    shortDescription:
      "A full-stack e-commerce application with product discovery, customer accounts, cart and wishlist management, checkout flow, order history, and an admin interface.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zod",
      "bcrypt",
    ],
    featuredTech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/images/projects/vanta-studio.png",
    slug: "vanta-studio",
    liveUrl: "https://vanta-studio-delta.vercel.app/",
    githubUrl: "https://github.com/rohitcreates/vanta-studio",
  },
];