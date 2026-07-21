import portalCover from "../assets/projects/portal/portal.webp";
import portalGallery1 from "../assets/projects/portal/portal-gallery1.webp";
import portalGallery2 from "../assets/projects/portal/portal-gallery2.webp";
import type { Project } from "../types/project";

export const portal: Project = {
  slug: "motomtech-portal",
  name: "Motomtech Portal",
  detailTitle: "Motomtech Portal — Project and Client Management Platform",
  role: "Frontend Developer",
  description:
    "Contributed to the React frontend of a modular, role-based platform that centralizes Motomtech's project and client service lifecycle. The portal gives clients and internal teams dedicated interfaces for project onboarding, team formation, delivery tracking, account management, documents, billing, contracts, and collaboration within a shared workspace.",
  features: [
    "Role-based client and admin experiences",
    "Client and project management",
    "Employee and team formation workflows",
    "Client and administrator settings",
    "User invitations and role assignment",
    "Dependency-aware user removal",
    "Billing, contracts, and legal documents",
    "Searchable and sortable data tables",
    "Multi-select filters and status controls",
    "Validated multi-step forms",
    "Authentication and account recovery",
    "Profile and password management",
    "Drag-and-drop file uploads",
    "Responsive dashboards and navigation",
  ],
  techStack: [
    "React 18",
    "TypeScript",
    "Vite",
    "TanStack Query",
    "TanStack Router",
    "TanStack Table",
    "React Hook Form",
    "Zod",
    "Tailwind CSS",
    "Radix UI",
    "Framer Motion",
    "REST APIs",
    "Presigned S3 Uploads",
    "Git",
  ],
  images: [
    {
      src: portalCover,
      alt: "Motomtech Portal dashboard with goals, project team, updates, links, and calendar",
      caption: "Role-based client project dashboard",
    },
    {
      src: portalGallery1,
      alt: "Motomtech Portal team hierarchy showing project roles and allocations",
      caption: "Project team structure and allocation view",
    },
    {
      src: portalGallery2,
      alt: "Motomtech Portal interfaces showing dashboards, user tables, filters, and project documents",
      caption: "Portal dashboards, administration, and document workflows",
    },
  ],
  cvBulletPoints: [
    "Developed responsive React and TypeScript interfaces for a role-based platform managing clients, projects, employees, billing, contracts, documents, and administrative users.",
    "Built client and administrator settings modules including profile management, password updates, user invitations, role assignment, and account configuration.",
    "Integrated REST APIs with TanStack Query, implementing queries, mutations, caching, role-based filtering, error handling, and automatic interface synchronization.",
    "Created reusable searchable and sortable tables, multi-select filters, role badges, status controls, modals, side drawers, and responsive navigation using Tailwind CSS and Radix UI.",
    "Implemented validated forms with React Hook Form and Zod for onboarding, project creation, team formation, and account-management workflows.",
    "Developed a dependency-aware user-removal workflow that requires assigned clients and projects to be transferred before deletion, protecting operational ownership relationships.",
    "Delivered authentication and account-security screens for sign-in, account setup, forgotten passwords, password reset, profile management, and password changes.",
    "Built drag-and-drop file-upload workflows using presigned Amazon S3 URLs and role-specific navigation with TanStack Router.",
    "Collaborated with product designers and backend developers to translate business requirements and API contracts into maintainable frontend features.",
    "Contributed to a platform reported to reduce project onboarding time by 50%, improve internal alignment fourfold, accelerate communication threefold, and increase client satisfaction by 60%.",
  ],
  caseStudy: {
    subtitle: "Role-based frontend for the technology service lifecycle",
    problem:
      "Clients and internal Sales, HR, Delivery, and Account Management teams needed a shared source of truth without losing the workflows, permissions, and views specific to each role.",
    solution:
      "Developed modular React and TypeScript interfaces backed by typed API integrations, TanStack state management, reusable data tables, validated forms, role-specific routing, secure account workflows, and dependency-aware administration tools.",
    result:
      "A maintainable frontend foundation for client onboarding, team formation, document and account management, delivery visibility, and internal collaboration. The broader platform reports 50% faster onboarding and a 60% increase in client satisfaction.",
  },
};
