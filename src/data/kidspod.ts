import kidsPodCover from "../assets/projects/kidspod/kidspod.png";
import gallery1 from "../assets/projects/kidspod/gallery1.png";
import gallery2 from "../assets/projects/kidspod/gallery2.png";
import gallery3 from "../assets/projects/kidspod/gallery3.png";
import gallery4 from "../assets/projects/kidspod/gallery4.png";
import gallery5 from "../assets/projects/kidspod/gallery5.png";
import gallery6 from "../assets/projects/kidspod/gallery6.png";
import gallery7 from "../assets/projects/kidspod/gallery7.png";
import type { Project } from "../types/project";

export const kidspod: Project = {
  slug: "kidspod",
  name: "KidsPod",
  detailTitle: "Kidspod Mobile Client - Kids Podcast & Media Streaming App",
  description:
    "Developed and maintained a cross-platform mobile application for kids-focused podcast and media content. The app supports podcast discovery, audio playback, offline listening, child profiles, parental controls, subscriptions, Google/Apple authentication, deep linking, drawing/read-along activities, analytics, and production CI/CD workflows for iOS and Android.",
  role: "React Native Mobile Developer",
  timeline: "2023–2024",
  features: [
    "Podcast discovery",
    "Audio playback",
    "Offline listening",
    "Child profiles",
    "Parental controls",
    "Subscriptions",
    "Google and Apple authentication",
    "Deep linking",
    "Draw Along and Read Along",
    "Analytics and CI/CD",
  ],
  techStack: [
    "React Native",
    "TypeScript",
    "React Navigation",
    "Zustand",
    "TanStack React Query",
    "Axios",
    "Firebase Auth",
    "Firebase Analytics",
    "Firebase Crashlytics",
    "Google Sign-In",
    "Apple Sign-In",
    "React Native Track Player",
    "React Native IAP",
    "React Native FS",
    "AsyncStorage",
    "Shopify Skia",
    "Jest",
    "ESLint",
    "AppCenter",
    "Android",
    "iOS",
  ],
  images: [
    {
      src: kidsPodCover,
      alt: "Colorful futuristic headphones and sound waves representing KidsPod",
      caption: "KidsPod audio platform concept",
    },
    {
      src: gallery1,
      alt: "KidsPod mobile app home screen with podcast recommendations",
    },
    {
      src: gallery2,
      alt: "KidsPod mobile app podcast series page with episode list",
    },
    {
      src: gallery3,
      alt: "KidsPod mobile app episode playback screen with audio controls",
    },
    {
      src: gallery4,
      alt: "KidsPod mobile app child profile selection screen",
    },
    {
      src: gallery5,
      alt: "KidsPod mobile app parental control settings screen",
    },
    {
      src: gallery6,
      alt: "KidsPod mobile app Draw Along activity screen",
    },
    {
      src: gallery7,
      alt: "KidsPod mobile app Read Along activity screen",
    },
  ],
  cvBulletPoints: [
    "Built and maintained a production React Native mobile app for iOS and Android using TypeScript, React Navigation, reusable UI components, and native platform integrations.",
    "Implemented authentication flows including email/password login, Google Sign-In with Firebase Auth, Apple Sign-In, password reset, and backend session synchronization.",
    "Integrated Google Sign-In using @react-native-google-signin/google-signin and Firebase Auth credentials, passing verified social identity data to the backend API.",
    "Developed podcast discovery features including home recommendations, categories, search, podcast series pages, episode details, playlists, favorites, downloads, and library management.",
    "Built a full audio playback system using react-native-track-player, including queue handling, lock-screen controls, playback progress persistence, repeat mode, seek controls, and resume playback.",
    "Implemented offline episode downloads with react-native-fs, including download progress tracking, cancellation, local file storage, network-aware download rules, and local playback integration.",
    "Added custom deep linking with React Native Linking and native iOS/Android URL scheme configuration for password reset and direct podcast/episode navigation.",
    "Built child profile functionality including profile creation, avatar selection, profile switching, and profile-specific playback/download state.",
    "Developed parental control and premium access flows with conditional behavior based on active subscription status.",
    "Integrated in-app subscriptions using react-native-iap, supporting monthly/yearly plans, purchase listeners, Android purchase acknowledgement, transaction finalization, and backend validation.",
    "Created interactive kids features such as Draw Along and Read Along experiences using Shopify Skia, file storage, Camera Roll permissions, undo/redo drawing history, and image export.",
    "Managed API communication using Axios, JSON:API serialization/deserialization, token-based authentication, typed API helpers, and automatic logout on unauthorized responses.",
    "Used TanStack React Query with AsyncStorage persistence to improve data caching, startup behavior, and offline resilience.",
    "Integrated Firebase Analytics and Crashlytics for screen tracking, purchase tracking, event logging, and production error monitoring.",
    "Maintained native iOS and Android configuration including Firebase setup, app permissions, URL schemes, background audio support, app icons, fonts, and build settings.",
    "Supported CI/CD release workflows through AppCenter, environment-specific .env files, Firebase config switching, semantic versioning, and automated iOS/Android build scripts.",
    "Improved code quality with TypeScript typings, Jest component tests, ESLint rules, Husky pre-commit hooks, and modular feature-based architecture.",
  ],
};
