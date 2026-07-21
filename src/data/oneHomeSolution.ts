import oneHomeCover from "../assets/projects/ohs/Ohs.png";
import gallery1 from "../assets/projects/ohs/gallery1.png";
import gallery2 from "../assets/projects/ohs/ohs-gallery1.png";
import gallery3 from "../assets/projects/ohs/ohs-gallery2.png";
import gallery4 from "../assets/projects/ohs/ohs-gallery3.png";
import gallery5 from "../assets/projects/ohs/ohs-gallery4.png";
import gallery6 from "../assets/projects/ohs/ohs-gallery5.png";
import gallery7 from "../assets/projects/ohs/ohs-gallery6.png";
import gallery8 from "../assets/projects/ohs/ohs-gallery7.png";
import gallery9 from "../assets/projects/ohs/ohs-gallery8.png";

import type { Project } from "../types/project";

export const oneHomeSolution: Project = {
  slug: "one-home-solution",
  name: "One Home Solution",
  liveUrl: "https://onehomesolution.com/",
  detailTitle:
    "One Home Solution — Cross-platform Customer & Field Service Applications",
  role: "React Native / Expo Engineer",
  timeline: "2025–2026",
  description:
    "Contributed to a production-oriented home-services ecosystem comprising separate customer and field-technician applications for iOS, Android, and web. The Yarn workspace monorepo contains approximately 686 TypeScript and TSX source files across both applications and a shared internal package for design tokens, reusable components, layouts, hooks, assets, and responsive platform configuration.",
  features: [
    "Customer and field-technician applications",
    "Properties, appliances, and memberships",
    "AI-assisted quotes and appliance extraction",
    "Technician schedules and job workflows",
    "Scheduling and rescheduling",
    "Estimates, invoices, and line items",
    "Stripe payments and subscriptions",
    "Recurring services and maintenance reminders",
    "Deep-linked push notifications",
    "Checklists, notes, and attachments",
    "Time tracking and price books",
    "Media uploads and maps",
    "Shared responsive design system",
    "EAS builds and OTA releases",
  ],
  techStack: [
    "React Native 0.79.6",
    "React 19",
    "TypeScript 5.8",
    "Expo SDK 53",
    "Expo Router 5",
    "React Navigation 7",
    "TanStack React Query 5",
    "Zustand",
    "React Context",
    "Tamagui",
    "React Hook Form",
    "Zod",
    "Reanimated",
    "Moti",
    "Gorhom Bottom Sheet",
    "React Native Gesture Handler",
    "FlashList",
    "Stripe React Native",
    "Stripe Web SDK",
    "Expo Notifications",
    "Expo SecureStore",
    "Expo Image",
    "Expo Image Picker",
    "Expo Document Picker",
    "React Native Maps",
    "Google Maps",
    "React Native Web",
    "EAS Build",
    "EAS Update",
    "Expo Development Client",
    "GitHub Actions",
    "Yarn 4 Workspaces",
    "iOS",
    "Android",
    "Web",
  ],
  images: [
    {
      src: oneHomeCover,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery1,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery2,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery3,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery4,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery5,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery6,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery7,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery8,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
    {
      src: gallery9,
      alt: "Connected smart home and service network representing One Home Solution",
      caption: "One Home Solution cross-platform ecosystem concept",
    },
  ],
  cvBulletPoints: [
    "Contributed to a cross-platform home-services ecosystem comprising separate customer and field-technician applications for iOS, Android, and web.",
    "Led the migration of both applications from Expo SDK 51 to SDK 53, including React Native 0.74 to 0.79, React 18 to 19, Expo Router 3 to 5, React Navigation 6 to 7, TypeScript 5.3 to 5.8, and aligned Expo ecosystem dependencies.",
    "Resolved migration compatibility issues involving typed navigation, Android edge-to-edge layouts and safe areas, splash-screen configuration, push notifications, gestures, bottom sheets, Stripe payments, Tamagui icons, calendars, forms, tabs, dialogs, and platform-specific views.",
    "Developed and maintained operational features including technician scheduling and rescheduling, job-status workflows, inbox notifications, review workflows, invoices, line items, property management, and customer quote flows.",
    "Implemented deep-linked push notifications that route users directly to typed business destinations such as invoices, jobs, estimates, and properties.",
    "Supported Stripe payment and subscription workflows, AI-assisted quote creation, appliance information extraction, media uploads, maps, scheduling, and recurring-service management.",
    "Used TanStack React Query for server-state caching and invalidation, persisted environment-specific query caches with AsyncStorage, Zustand for application and multi-step workflow state, and React Context for scoped feature flows.",
    "Maintained a typed REST client supporting access and refresh tokens, JSON and form data, automatic retry after unauthorized responses, session expiration, shared headers, and user-facing API errors.",
    "Maintained reusable UI foundations through the shared Tamagui package, including design tokens, responsive breakpoints, forms, buttons, tables, cards, switches, date and time pickers, image upload, headers, layouts, hooks, and native/web variants.",
    "Worked within a role-separated Yarn 4 monorepo where customer and technician applications retain independent workflows, identities, deep links, and release channels while sharing the design foundation and common assets.",
    "Configured EAS Build, EAS Update, Expo development clients, staging and production channels, OTA releases, universal links, Android App Links, preview and production identifiers, and GitHub Actions deployment workflows.",
    "Implemented platform-specific adapters with web and Android file variants, including native SecureStore with web storage behavior and resolver handling for native-only map modules.",
    "Integrated OTA update detection with splash-screen readiness to deliver compatible frontend updates through environment-specific release channels.",
    "Upgraded and reconciled native dependencies across Expo, React Native, Tamagui, Stripe, notifications, maps, bottom sheets, gestures, calendars, media, and build tooling while removing obsolete workarounds.",
  ],
  caseStudy: {
    subtitle: "Two-application monorepo and Expo SDK migration",
    problem:
      "Distinct customer and field-technician workflows needed independent navigation, native capabilities, and release identities without duplicating the product's responsive design system and common frontend foundations. Both applications also required a coordinated migration across major Expo, React Native, React, routing, and native dependency versions.",
    solution:
      "Maintained a role-separated Yarn workspace with independent Expo applications and a shared Tamagui package, then led the SDK 51-to-53 migration while resolving cross-platform routing, Android layout, notification, payment, gesture, bottom-sheet, calendar, and native-view compatibility issues.",
    result:
      "A modernized cross-platform foundation for customer and technician operations across iOS, Android, and web, with reusable shared UI, deep-linked workflows, environment-aware data caching, and repeatable EAS and GitHub Actions delivery.",
  },
};
