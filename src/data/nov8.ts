import nov8Cover from "../assets/projects/nov8/nov8.webp";
import type { Project } from "../types/project";

export const nov8: Project = {
  slug: "nov8",
  name: "NOV8",
  detailTitle: "NOV8 — AI SaaS Collaboration Platform",
  role: "Vue Frontend Developer",
  timeline: "November–December 2024",
  description:
    "Built a product-sized Vue 3 and TypeScript SaaS frontend during a three-week initial delivery after learning Vue fundamentals in approximately two to three days. The application includes complete authentication, user and super-admin experiences, AI chat with recorded-audio interaction, subscription and billing management, team administration, account settings, responsive layouts, validation, and role- and plan-aware routing.",
  features: [
    "User and super-admin experiences",
    "Registration and sign-in",
    "Email verification and invitations",
    "Password recovery and account setup",
    "AI chat and message history",
    "Typing and response states",
    "Microphone recording and transcription",
    "Message and audio downloads",
    "Subscription plan management",
    "Upgrades and downgrades",
    "Seat and team-member administration",
    "Payment methods and billing details",
    "Invoice management",
    "Role- and plan-based routing",
    "Theme and account preferences",
    "Responsive reusable UI",
  ],
  techStack: [
    "Vue 3",
    "TypeScript",
    "Vite",
    "Pinia",
    "Vue Router",
    "Tailwind CSS",
    "Radix Vue",
    "VeeValidate",
    "Zod",
    "Axios",
    "REST APIs",
  ],
  images: [
    {
      src: nov8Cover,
      alt: "AI SaaS workspace with chat, audio input, subscriptions, analytics, and team panels",
      caption: "NOV8 AI SaaS workspace concept",
    },
  ],
  cvBulletPoints: [
    "Developed a full Vue 3 and TypeScript SaaS frontend in a three-week initial delivery after learning Vue fundamentals in approximately two to three days.",
    "Built complete authentication workflows including registration, sign-in, email verification, password recovery, invitations, account setup, and separate administrator access.",
    "Developed user and super-admin dashboards with role- and subscription-plan restrictions enforced through Vue Router navigation flows.",
    "Implemented AI chat experiences with typing states, text conversations, microphone recording, audio transcription, message history, and content downloads.",
    "Built subscription and billing workflows covering plan upgrades and downgrades, seat management, payment methods, billing details, and invoices.",
    "Created team-management interfaces with member filtering, pagination, editing, deletion, and role- and plan-aware restrictions.",
    "Delivered reusable responsive UI foundations across 27 pages, nine layouts, and more than 200 application and UI component files using Tailwind CSS and Radix Vue.",
    "Implemented validated forms and error states with VeeValidate and Zod, plus persisted themes, account settings, profile management, and application notifications.",
    "Built functional mock-data workflows so frontend delivery could progress before backend availability, then integrated REST endpoints through approximately 90 Axios operations across 47 files.",
    "Collaborated in a fast-moving repository that reached 84 commits and approximately 18,600 inserted lines across the team during the initial three-week delivery window.",
  ],
  caseStudy: {
    subtitle: "From first Vue experience to product-sized delivery in three weeks",
    problem:
      "A broad SaaS experience spanning authentication, conversational AI, subscriptions, billing, team management, and administration needed to move forward quickly while backend endpoints were still becoming available.",
    solution:
      "Learned Vue fundamentals rapidly, structured the frontend with Vue Router, Pinia, reusable components, layouts, and validated forms, then implemented complete workflows against mock data before progressively connecting them to REST APIs.",
    result:
      "A feature-rich Vue frontend with 27 pages, nine layouts, more than 200 reusable application and UI components, and interconnected user and administrator workflows delivered within the initial three-week window.",
  },
};
