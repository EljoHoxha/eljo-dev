import wrentCover from "../assets/projects/wrent/wrent.webp";
import wrentGallery1 from "../assets/projects/wrent/wrent-gallery1.webp";
import wrentGallery3 from "../assets/projects/wrent/wrent-gallery3.webp";
import wrentGallery4 from "../assets/projects/wrent/wrent-gallery4.webp";
import wrentGallery5 from "../assets/projects/wrent/wrent-gallery5.webp";
import wrentGallery6 from "../assets/projects/wrent/wrent-gallery6.webp";
import wrentGallery7 from "../assets/projects/wrent/wrent-gallery7.webp";
import wrentGallery8 from "../assets/projects/wrent/wrent-gallery8.webp";
import wrentGallery9 from "../assets/projects/wrent/wrent-gallery9.webp";

import type { Project } from "../types/project";

export const wrent: Project = {
  slug: "wrent",
  name: "Wrent",
  detailTitle: "Wrent — Peer-to-Peer Tool Rental Marketplace",
  role: "React Native / React Frontend Engineer",
  timeline: "2025–2026",
  description:
    "Contributed to a production-oriented, two-sided tool-rental marketplace spanning a cross-platform mobile application and a responsive administration dashboard. Owners can list and monetize equipment, while renters can discover nearby tools, manage the complete rental lifecycle, pay securely, communicate in real time, and review their experience.",
  features: [
    "Owner and renter workflows",
    "Tool listings, pricing, and availability",
    "Map discovery and location clustering",
    "End-to-end rental lifecycle",
    "Stripe payments and Connect onboarding",
    "Wallet and promoted listings",
    "Real-time Socket.IO messaging",
    "Push notifications",
    "Ratings, reviews, and reports",
    "Delivery and drop-off options",
    "English and German localization",
    "Marketplace analytics",
    "Admin user and team management",
    "Searchable, paginated data tables",
    "Protected admin routes",
  ],
  techStack: [
    "React Native 0.79",
    "React 19",
    "TypeScript",
    "Expo SDK 53",
    "Expo Router 5",
    "Tamagui",
    "TanStack React Query",
    "Zustand",
    "Stripe",
    "Stripe Connect",
    "Socket.IO",
    "Expo Notifications",
    "Expo SecureStore",
    "React Native Maps",
    "Vite",
    "Tailwind CSS",
    "Radix UI",
    "Recharts",
    "TanStack Table",
    "EAS Build",
    "EAS Update",
    "iOS",
    "Android",
    "Web",
  ],
  images: [
    {
      src: wrentCover,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
      caption: "Wrent peer-to-peer tool rental marketplace concept",
    },
    {
      src: wrentGallery1,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
      caption: "Wrent peer-to-peer tool rental marketplace concept",
    },
    {
      src: wrentGallery3,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
      caption: "Wrent peer-to-peer tool rental marketplace concept",
    },
    {
      src: wrentGallery4,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
      caption: "Wrent peer-to-peer tool rental marketplace concept",
    },
    {
      src: wrentGallery5,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
      caption: "Wrent peer-to-peer tool rental marketplace concept",
    },
    {
      src: wrentGallery6,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
      caption: "Wrent peer-to-peer tool rental marketplace concept",
    },
    {
      src: wrentGallery7,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
      caption: "Wrent peer-to-peer tool rental marketplace concept",
    },
    {
      src: wrentGallery8,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
      caption: "Wrent peer-to-peer tool rental marketplace concept",
    },
    {
      src: wrentGallery9,
      alt: "Tools, mobile marketplace screens, and map routes representing Wrent",
    },
  ],
  cvBulletPoints: [
    "Contributed to a cross-platform, two-sided marketplace where owners list tools and renters discover, reserve, pay for, and review nearby equipment.",
    "Worked across a React Native and Expo mobile application and a responsive React administration dashboard supporting distinct marketplace roles and operational workflows.",
    "Supported map-based discovery, clustered locations, tool availability, saved addresses, delivery options, and the rental lifecycle from request and approval through return or extension.",
    "Integrated frontend flows for Stripe payments, Stripe Connect onboarding, wallets, promoted listings, real-time Socket.IO messaging, and push notifications.",
    "Implemented typed data access through API modules, TanStack React Query caching and invalidation, Zustand stores, reusable UI components, and protected navigation.",
    "Contributed to trust and safety experiences including ratings, reviews, reports, user profiles, cancellation handling, and English and German localization.",
    "Worked on an administration dashboard featuring marketplace and revenue analytics, searchable paginated tables, owner and renter management, team invitations, and cancellation-fee configuration.",
    "Supported preview and production delivery through Expo Application Services build and over-the-air update workflows.",
  ],
  caseStudy: {
    subtitle: "Two-sided marketplace across mobile and administration",
    problem:
      "A local rental marketplace must coordinate different owner, renter, and administrator needs while keeping listings, availability, payments, messaging, notifications, and rental-state transitions consistent.",
    solution:
      "Structured the frontend around typed API services, TanStack React Query hooks, Zustand state, reusable UI components, and protected role-specific navigation across the Expo mobile client and React administration dashboard.",
    result:
      "A commercially realistic marketplace experience covering nearby discovery, tool monetization, rental operations, payments, communication, trust and safety, localization, and administrative oversight.",
  },
};
