import signIn from "../assets/projects/e-nov8/sign-in.png";
import pricingPlans from "../assets/projects/e-nov8/pricing-plans.png";
import upgradePlan from "../assets/projects/e-nov8/upgrade-plan.png";
import paymentSuccess from "../assets/projects/e-nov8/payment-success.png";
import premiumWelcome from "../assets/projects/e-nov8/premium-welcome.png";
import aiPersonas from "../assets/projects/e-nov8/ai-personas.png";
import adminDashboard from "../assets/projects/e-nov8/admin-dashboard.png";
import adminMembers from "../assets/projects/e-nov8/admin-members.png";
import teamMembers from "../assets/projects/e-nov8/team-members.png";
import editMemberFormDetail from "../assets/projects/e-nov8/edit-member-form-detail.png";
import editMemberModal from "../assets/projects/e-nov8/edit-member-modal.png";
import deleteMemberConfirmation from "../assets/projects/e-nov8/delete-member-confirmation.png";
import updatePasswordValidation from "../assets/projects/e-nov8/update-password-validation.png";
import type { Project } from "../types/project";

export const enov8: Project = {
  slug: "e-nov8",
  name: "E-nov8",
  detailTitle: "E-nov8 — AI SaaS Collaboration Platform",
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
  mainTechStack: [
    "Vue 3",
    "TypeScript",
    "Pinia",
    "Tailwind CSS",
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
      src: aiPersonas,
      alt: "E-nov8 AI persona workspace with searchable specialists and chat actions",
      caption: "AI persona discovery and conversation workspace",
    },
    {
      src: signIn,
      alt: "E-nov8 sign-in screen with email and password fields",
      caption: "Secure account sign-in experience",
    },
    {
      src: pricingPlans,
      alt: "E-nov8 pricing page comparing free, premium, and enterprise plans",
      caption: "Monthly and yearly subscription plan comparison",
    },
    {
      src: upgradePlan,
      alt: "Premium plan upgrade modal with saved payment card selection",
      caption: "Plan upgrade and saved payment method workflow",
    },
    {
      src: paymentSuccess,
      alt: "Successful premium subscription payment confirmation",
      caption: "Subscription payment confirmation and invoice details",
    },
    {
      src: premiumWelcome,
      alt: "Premium welcome modal displayed over the E-nov8 AI persona workspace",
      caption: "Premium onboarding after a successful upgrade",
    },
    {
      src: adminDashboard,
      alt: "E-nov8 super-admin dashboard with account metrics and subscription charts",
      caption: "Super-admin account and subscription analytics",
    },
    {
      src: adminMembers,
      alt: "E-nov8 super-admin members table with plan and subscription status filters",
      caption: "Platform member and subscription administration",
    },
    {
      src: teamMembers,
      alt: "E-nov8 team members table with role, edit, and delete controls",
      caption: "Team member and role management",
    },
    {
      src: editMemberModal,
      alt: "Edit member modal with email address and role fields",
      caption: "Editing a team member and assigning a role",
    },
    {
      src: editMemberFormDetail,
      alt: "Close-up of focused email and role fields in the edit member form",
      caption: "Focused edit-member form state",
    },
    {
      src: deleteMemberConfirmation,
      alt: "Delete member confirmation dialog warning that the action is permanent",
      caption: "Destructive action confirmation for team management",
    },
    {
      src: updatePasswordValidation,
      alt: "Update password form with inline password requirement validation",
      caption: "Account security settings and inline validation",
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
    subtitle:
      "From first Vue experience to product-sized delivery in three weeks",
    problem:
      "A broad SaaS experience spanning authentication, conversational AI, subscriptions, billing, team management, and administration needed to move forward quickly while backend endpoints were still becoming available.",
    solution:
      "Learned Vue fundamentals rapidly, structured the frontend with Vue Router, Pinia, reusable components, layouts, and validated forms, then implemented complete workflows against mock data before progressively connecting them to REST APIs.",
    result:
      "A feature-rich Vue frontend with 27 pages, nine layouts, more than 200 reusable application and UI components, and interconnected user and administrator workflows delivered within the initial three-week window.",
  },
};
