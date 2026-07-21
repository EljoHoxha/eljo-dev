import type { Project } from "../types/project";
import paramountLogo from "../assets/projects/paramount/paramount.png";
import paramount1 from "../assets/projects/paramount/paramount2.png";
import paramount2 from "../assets/projects/paramount/paramount3.png";
import gallery0 from "../assets/projects/paramount/gallery0.png";
import gallery1 from "../assets/projects/paramount/gallery1.png";
import gallery2 from "../assets/projects/paramount/gallery2.png";
import gallery3 from "../assets/projects/paramount/gallery3.png";
import gallery4 from "../assets/projects/paramount/gallery4.png";
import gallery5 from "../assets/projects/paramount/gallery5.png";
import gallery6 from "../assets/projects/paramount/gallery6.png";
import gallery8 from "../assets/projects/paramount/gallery8.png";
import gallery9 from "../assets/projects/paramount/gallery9.png";
import gallery10 from "../assets/projects/paramount/gallery10.png";

export const pulseAccess: Project = {
  slug: "pulse-access",
  name: "Pulse Access & RivFit",
  liveUrl: "https://paramountacceptance.com/mobile-app/",
  detailTitle:
    "Paramount Pulse Access & RivFit — Fitness Membership Platform Modernization",
  role: "Lead React Native Developer",
  timeline: "2024",
  description:
    "Independently architected, developed, and delivered the complete modernization of a legacy cross-platform fitness membership application for iOS and Android. Migrated an 8,000+ line JavaScript and Redux application to strict TypeScript, React 19, React Native 0.79, Expo SDK 53, Expo Router, and TanStack React Query while preserving its business functionality and creating a shared multi-brand foundation for Paramount Pulse Access and RivFit.",
  features: [
    "Secure authentication and member registration",
    "Password recovery, changes, and account deletion",
    "Protected routes and persistent sessions",
    "Member accounts, profile images, and registered devices",
    "Fitness schedules and location filtering",
    "Class booking, cancellation, and waitlists",
    "Upcoming dues, past-due balances, and pending payments",
    "Payment-method creation, updates, and deletion",
    "Digital membership barcode access",
    "Attendance and activity history",
    "Member referral information",
    "Push notifications and device registration",
    "Multi-brand Paramount and RivFit delivery",
    "Environment-specific EAS releases",
    "Over-the-air application updates",
  ],
  techStack: [
    "React Native 0.79",
    "React 19",
    "TypeScript 5.8",
    "JavaScript",
    "Expo SDK 53",
    "Expo Router",
    "TanStack React Query",
    "React Context API",
    "React Hook Form",
    "Zod",
    "React Native Paper",
    "Expo SecureStore",
    "Expo Notifications",
    "Expo Updates",
    "Expo Brightness",
    "Expo Device",
    "Expo Image Picker",
    "Expo File System",
    "Expo Linking",
    "Expo Web Browser",
    "React Navigation Drawer",
    "React Navigation Material Top Tabs",
    "React Native Gesture Handler",
    "React Native Reanimated",
    "React Native SVG",
    "React Native Pager View",
    "React Native Tab View",
    "React Native WebView",
    "React Query DevTools",
    "REST APIs",
    "Fetch API",
    "EAS Build",
    "Expo Development Client",
    "Expo Prebuild",
    "Android",
    "iOS",
    "Gradle",
    "Xcode",
    "CocoaPods",
  ],
  images: [
    {
      src: paramountLogo,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: paramount1,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: paramount2,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery0,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery1,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery2,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery3,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery4,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery5,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery6,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery8,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery9,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
    {
      src: gallery10,
      alt: "Futuristic biometric fitness access interface representing Paramount Pulse Access and RivFit",
      caption: "Pulse Access and RivFit modernization concept",
    },
  ],
  cvBulletPoints: [
    "Independently architected, developed, and delivered the complete modernization of a legacy cross-platform fitness membership application for iOS and Android.",
    "Migrated an 8,000+ line application from JavaScript, Redux, Redux Thunk, Formik, and Yup to strict TypeScript, React 19, React Native 0.79, Expo SDK 53, TanStack React Query, React Hook Form, and Zod.",
    "Designed the complete application architecture, including navigation, authentication, API integration, server-state management, validation, reusable UI components, and environment configuration.",
    "Replaced Redux and Redux Thunk with domain-based TanStack React Query hooks for sessions, member accounts, schedules, billing, payments, and barcode access, including caching and invalidation.",
    "Rebuilt navigation with Expo Router using separated route and screen layers, protected public and authenticated groups, nested stacks, a main drawer, bottom tabs, top tabs, and account-management routes.",
    "Improved session security by replacing AsyncStorage with Expo SecureStore and centralizing bearer tokens, membership and region headers, session expiration, logout, and query-cache cleanup.",
    "Created a typed REST layer supporting GET, POST, PUT, PATCH, and DELETE with generic request and response types, centralized error handling, secure payment handling, and environment-specific endpoints.",
    "Modernized login, registration, password recovery, password changes, member information, and payment forms with React Hook Form, Zod schemas, generated TypeScript types, and consistent validation messages.",
    "Implemented the complete member account lifecycle, including login, registration, session-key authentication, password recovery and reset, authenticated password changes, logout, and account deletion.",
    "Delivered digital barcode access with automatic screen-brightness management, class schedules, reservations, cancellations, waitlists, location filtering, billing, payment methods, past-due payments, activity history, referrals, and profile management.",
    "Built member and device-management flows for personal information, membership status, profile-image uploads, registered devices, account status, and contextual contact and help experiences.",
    "Implemented billing states for monthly and upcoming dues, past-due and pending balances, payment-method details, payment creation and updates, payment deletion, and secure payment submission.",
    "Integrated push-notification permissions, token retrieval and device registration, foreground presentation, notification interactions, image uploads, deep linking, and unique-device identification.",
    "Designed a multi-brand architecture producing Paramount Pulse Access and RivFit from one shared codebase with separate styling, assets, identifiers, URL schemes, environments, and release channels.",
    "Configured Android and iOS delivery using EAS Build, Expo Prebuild, Gradle, Xcode, and CocoaPods, including development, preview, internal-distribution, and production profiles.",
    "Managed environment-specific APIs, application versions, notification settings, brand-specific OTA update channels, icons, splash screens, and native platform configuration.",
    "Integrated Expo Updates to check for available OTA releases and reload the application when an update is ready, reducing reliance on full store releases for frontend fixes.",
    "Upgraded major mobile dependencies, replaced obsolete libraries with maintained Expo-compatible alternatives, and added React Query DevTools for inspecting cached data, loading states, mutations, and request failures.",
    "Preserved existing business functionality while establishing a modular architecture of routes, providers, services, hooks, types, layouts, and reusable UI for future features and brands.",
  ],
  caseStudy: {
    subtitle: "Legacy modernization and multi-brand architecture",
    problem:
      "An 8,000+ line single-brand JavaScript application relied on Redux, manual navigation, AsyncStorage sessions, and native release processes, making security, maintenance, feature delivery, and additional brand support increasingly difficult.",
    solution:
      "Re-architected the application around strict TypeScript, Expo Router, domain-based React Query services, secure authentication context, typed REST requests, schema-validated forms, reusable screens, multi-brand configuration, EAS builds, and Expo OTA updates.",
    result:
      "A production-ready shared platform for Paramount Pulse Access and RivFit that preserved the complete member experience while improving session security, maintainability, release consistency, and readiness for future brands.",
  },
};
