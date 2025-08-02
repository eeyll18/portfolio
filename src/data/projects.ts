export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Study-Tracker",
    description:
      "Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş modern ders takibi platformu.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
    githubUrl: "https://github.com/eeyll18/study-tracker",
  },
  {
    title: "Jobber",
    description:
      "Yapay zeka destekli işe alım platformu — React ve Vite ile oluşturulmuş Front-End çalışması.",
    tags: ["React", "JavaScript", "TailwindCSS", "Redux"],
    githubUrl: "https://github.com/eeyll18/jobber-frontend",
  },
  {
    title: "NextFlix",
    description:
      "Bir medya akışı hizmeti için modern, duyarlı bir kullanıcı arayüzünün uygulanmasını gösteren bir Front-End uygulaması.",
    tags: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/eeyll18/nextflix-project",
  },
  {
    title: "Shared Shopping List",
    description:
      "Next.js, Prisma ve PostgreSQL ile oluşturulmuş, ortak alışveriş listesi için full-stack bir CRUD uygulaması.",
    tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
    githubUrl: "https://github.com/eeyll18/shared-shopping-list",
  },
];
