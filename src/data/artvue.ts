import artvueWeb from "../assets/projects/artvue/artvue_web.webp";
import artvueMobile from "../assets/projects/artvue/artvue_mobile.webp";
import artvueTv from "../assets/projects/artvue/artvue_tv.webp";
import type { Project } from "../types/project";

export const artvue: Project = {
  slug: "artvue",
  name: "ArtVue",
  role: "Full-Stack Engineer",
  description:
    "ArtVue streams art to TV screens, phones and the web, so people can turn any screen into a gallery. I led Exclusive Collections end to end. With it, artists sell monthly subscriptions to private collections of their work. My part covered the backend, Stripe payments, the web app, and the mobile, TV and Roku apps.",

  features: [
    "Artists sell monthly subscriptions to private collections, with payouts through Stripe Connect",
    "Locked artworks appear as blurred placeholders until someone subscribes, on every platform",
    "The 70/30 revenue split is taken after Stripe's fee, and each artist's share is held 31 days before transfer",
    "Refunds, disputes and the self-cancel refund window are handled automatically",
    "Artist dashboard for publishing, pricing, retiring and relaunching collections and tracking payouts",
    "Admin tools for moderation, takedowns and approving who can sell, plus automated sale emails",
  ],

  mainTechStack: [
    "Next.js",
    "React Native",
    "Node.js",
    "Stripe Connect",
  ],

  techStack: [
    "Next.js",
    "React Native",
    "Node.js",
    "Stripe Connect",
    "TypeScript",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Expo",
    "react-native-tvos",
    "BrightScript / SceneGraph (Roku)",
    "Express",
    "MongoDB / Mongoose",
    "Better Auth",
    "Stripe Checkout & Billing",
    "AWS (S3, Lambda, CloudFront)",
    "Vitest",
    "Jest",
  ],

  images: [
    {
      src: artvueWeb,
      alt: "ArtVue website homepage showing artwork displayed on a living-room TV",
      caption: "ArtVue web experience",
    },
    {
      src: artvueMobile,
      alt: "ArtVue mobile Discover screen with artwork search, category filters, and a grid of artworks",
      caption: "Mobile artwork discovery",
    },
    {
      src: artvueTv,
      alt: "ArtVue TV app displaying Starry Night with artwork details, navigation, and slideshow controls",
      caption: "TV artwork display and playback controls",
    },
  ],

  detailTitle: "ArtVue — Paid Artist Collections Across Web, Mobile, TV and Roku",
  timeline: "2026",
  liveUrl: "https://www.artvue.io",

  cvBulletPoints: [
    "Led Exclusive Collections, a paid artist-subscription feature, end to end across five codebases: API, web, iOS/Android, Apple/Android/Fire TV and Roku. I delivered it in six reviewed milestones.",
    "Built the marketplace payments on Stripe Connect (Checkout, Express onboarding, webhooks). Money flows as separate charges and transfers, and a payment ledger splits each payment 70/30 after Stripe's fee.",
    "Built a payout schedule that holds each artist's share for 31 days and then releases it with transfers linked to the original charge. I found in testing that Stripe's account-level payout delay doesn't hold transferred funds.",
    "Wrote the backend in Node.js, Express and MongoDB: access rules for exclusive content, a webhook-driven subscription sync, artist and admin APIs, and HMAC-signed calls between the website and the API.",
    "Built the web experience in Next.js 15 and TypeScript: collection pages with blurred locked previews, the subscribe and Stripe customer portal flows, artist and admin tools, and transactional emails.",
    "Enforced paid-content access on the server, so locked media never reaches users who aren't subscribed, with matching placeholders in the React Native, tvOS and Roku clients.",
    "Wrote about 385 automated tests across the API, website and apps, and ran manual tests on devices and in the Stripe sandbox.",
  ],

  results: [
    {
      value: "5",
      label: "Platforms delivered",
      detail: "One feature shipped across the API, web, mobile, TV (tvOS, Android TV, Fire TV) and Roku codebases.",
    },
    {
      value: "~385",
      label: "Automated tests added",
      detail: "Unit and integration tests across the API (Vitest + in-memory MongoDB), the website, and the mobile and TV apps.",
    },
    {
      value: "6",
      label: "Milestones",
      detail: "Data model, payments, artist tools, buyer experience, client apps and admin tools, each reviewed before the next began.",
    },
  ],

  caseStudy: {
    subtitle: "Letting artists sell subscriptions on a streaming platform",
    problem:
      "ArtVue only made money from a platform-wide Premium plan, so artists had no way to earn from their own audience. The product needed a marketplace inside it: artists sell private collections, buyers pay monthly, and ArtVue keeps a cut. The hard requirements were paying artists fairly after fees, handling refunds and disputes safely, and keeping paid content locked on every device, Roku included.",
    solution:
      "I designed the feature across the whole stack. On the backend, a new access model controls who can see exclusive content, and a webhook-driven sync keeps subscriptions matched to Stripe. Payments use Stripe Connect with separate charges and transfers. A ledger records each payment's net split and holds the artist's share for 31 days, so refunds and disputes are usually settled before any money moves. On the clients, the website, React Native app, TV app and Roku channel all show locked pieces as blurred placeholders, and the server never sends their media. Artists and admins get tools to publish, retire, moderate and track payouts.",
    result:
      "Artists can now earn recurring income from their own work on ArtVue. The billing rules the team agreed on (refund windows, payout holds, dispute handling) are enforced by tested code instead of manual work, and the same locked-content experience runs on every platform ArtVue supports.",
  },
};
