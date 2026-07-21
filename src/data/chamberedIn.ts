import chamberedInCover from "../assets/projects/chamberedin/chamberedin-cover.webp";
import profileDashboard from "../assets/projects/chamberedin/chamberedin-profile-dashboard.webp";
import mobileEventsCalendar from "../assets/projects/chamberedin/mobile-events-calendar.png";
import fullCalendarView from "../assets/projects/chamberedin/full-calendar-view.png";
import eventFilters from "../assets/projects/chamberedin/event-filters.png";
import createEventDetails from "../assets/projects/chamberedin/create-event-details.png";
import createEventScheduleTime from "../assets/projects/chamberedin/create-event-schedule-time.png";
import createEventRecurring from "../assets/projects/chamberedin/create-event-recurring.png";
import recurringFrequency from "../assets/projects/chamberedin/recurring-frequency.png";
import eventTimeZone from "../assets/projects/chamberedin/event-time-zone.png";
import eventLocationIntegrations from "../assets/projects/chamberedin/event-location-integrations.png";
import ticketCurrency from "../assets/projects/chamberedin/ticket-currency.png";
import pricingRefundPolicy from "../assets/projects/chamberedin/pricing-refund-policy.png";
import refundPercentage from "../assets/projects/chamberedin/refund-percentage.png";
import detailsValidation from "../assets/projects/chamberedin/details-validation.png";
import scheduleValidation from "../assets/projects/chamberedin/schedule-validation.png";
import locationValidation from "../assets/projects/chamberedin/location-validation.png";
import manageSubscriptionActions from "../assets/projects/chamberedin/manage-subscription-actions.png";
import manageSubscriptionSheet from "../assets/projects/chamberedin/manage-subscription-sheet.png";
import subscriptionDetails from "../assets/projects/chamberedin/subscription-details.png";
import cancelSubscriptionConfirmation from "../assets/projects/chamberedin/cancel-subscription-confirmation.png";
import subscriptionCancelled from "../assets/projects/chamberedin/subscription-cancelled.png";

import type { Project } from "../types/project";

export const chamberedIn: Project = {
  slug: "chamberedin",
  name: "ChamberedIn",
  liveUrl: "https://chamberedin.com/",
  detailTitle: "ChamberedIn — Professional Networking & Community Platform",
  role: "Senior React Native Developer — Events Lead",
  timeline: "2026",
  description:
    "Served as the sole Senior React Native engineer responsible for ChamberedIn's events domain, independently owning its architecture, technical direction, and implementation across iOS and Android. Made the end-to-end engineering decisions for event creation, scheduling, payments, subscriptions, attendee experiences, and administrative management.",
  features: [
    "Modular event creation and editing",
    "Timed, all-day, and recurring events",
    "Time-zone-aware scheduling",
    "Online, in-person, and hybrid events",
    "Google and Microsoft calendar flows",
    "Stripe tickets and subscriptions",
    "Cancellation and refund workflows",
    "Attendee and subscription management",
    "Host session management",
    "Revenue reporting and CSV export",
    "Calendar, agenda, and grouped views",
    "Role-based event administration",
  ],
  techStack: [
    "React Native 0.79",
    "React 19",
    "TypeScript 5.8",
    "Expo SDK 53",
    "Expo Router",
    "Apollo Client 4",
    "GraphQL",
    "GraphQL Codegen",
    "Zustand",
    "MMKV",
    "React Hook Form",
    "Zod",
    "Stripe",
    "Tamagui",
    "Firebase",
    "Expo Notifications",
    "Reanimated",
    "FlashList",
    "Vitest",
    "EAS Build",
    "EAS Update",
    "iOS",
    "Android",
  ],
  images: [
    {
      src: chamberedInCover,
      alt: "ChamberedIn desktop platform showing community channels, posts, events, and messaging",
      caption: "ChamberedIn professional networking and community platform",
    },
    {
      src: profileDashboard,
      alt: "ChamberedIn desktop profile dashboard with channels, events, activity, and onboarding tasks",
      caption: "Member profile, organization activity, onboarding, channels, and upcoming events",
    },
    {
      src: mobileEventsCalendar,
      alt: "ChamberedIn mobile events calendar with invitations and event cards",
      caption: "Events discovery with calendar navigation, RSVP filters, and recurring event details",
    },
    {
      src: fullCalendarView,
      alt: "Expanded monthly events calendar in ChamberedIn",
      caption: "Expandable monthly calendar with event indicators and grouped event cards",
    },
    {
      src: eventFilters,
      alt: "ChamberedIn event filters for type, price, frequency, and date range",
      caption: "Hosting filters for event type, pricing, recurrence, and date range",
    },
    {
      src: createEventDetails,
      alt: "Create Event details form with image, name, and description fields",
      caption: "Modular event creation: details and cover image",
    },
    {
      src: createEventScheduleTime,
      alt: "Create Event schedule form with recurring event settings and time picker",
      caption: "Timed and recurring event scheduling",
    },
    {
      src: createEventRecurring,
      alt: "Monthly recurring event rules with end conditions",
      caption: "Monthly recurrence rules and occurrence limits",
    },
    {
      src: recurringFrequency,
      alt: "Recurring event frequency selector",
      caption: "Daily, weekly, monthly, and yearly recurrence options",
    },
    {
      src: eventTimeZone,
      alt: "Event time zone selector with UTC offsets",
      caption: "Time-zone-aware event scheduling",
    },
    {
      src: eventLocationIntegrations,
      alt: "Online event location form with Google Calendar and Microsoft Teams integrations",
      caption: "Online, in-person, and hybrid locations with connected calendar services",
    },
    {
      src: ticketCurrency,
      alt: "Paid event currency selector",
      caption: "Multi-currency ticket pricing",
    },
    {
      src: pricingRefundPolicy,
      alt: "Paid event pricing and custom refund policy form",
      caption: "Ticket pricing with flexible, moderate, strict, and custom refund policies",
    },
    {
      src: refundPercentage,
      alt: "Custom refund percentage selector",
      caption: "Custom refund rules and percentage selection",
    },
    {
      src: subscriptionDetails,
      alt: "Active event subscription details with sessions and payment information",
      caption: "Per-session subscription details, payments, and included sessions",
    },
    {
      src: manageSubscriptionActions,
      alt: "Manage Event actions for viewing or cancelling a subscription",
      caption: "Attendee subscription management actions",
    },
    {
      src: manageSubscriptionSheet,
      alt: "Expanded event subscription management sheet",
      caption: "Subscription management from the event calendar",
    },
    {
      src: cancelSubscriptionConfirmation,
      alt: "Cancel subscription confirmation with refund policy notice",
      caption: "Cancellation confirmation with refund eligibility details",
    },
    {
      src: subscriptionCancelled,
      alt: "Subscription cancelled confirmation with refund calculation",
      caption: "Subscription cancellation result and refund calculation",
    },
    {
      src: detailsValidation,
      alt: "Create Event details validation errors",
      caption: "Inline validation for required event details",
    },
    {
      src: scheduleValidation,
      alt: "Create Event schedule validation errors",
      caption: "Inline validation for required start and end times",
    },
    {
      src: locationValidation,
      alt: "Create Event online location validation error",
      caption: "Conditional validation for online meeting links",
    },
  ],
  cvBulletPoints: [
    "Owned the complete ChamberedIn events domain as the sole Senior React Native engineer, making all architecture, technical design, implementation, and delivery decisions across iOS and Android.",
    "Re-architected a monolithic three-step event creation workflow into a modular five-section experience—Details, Schedule, Location, Pricing, and Settings—using React Hook Form, Zod validation, and React Navigation.",
    "Built reusable creation and editing workflows with shared form state, image uploads, conditional validation, GraphQL input transformation, and role-based functionality for members, moderators, administrators, and event hosts.",
    "Implemented timed, all-day, recurring, and time-zone-aware event scheduling with interval, weekday, monthly, occurrence-limit, and end-date rules.",
    "Integrated Google Calendar and Microsoft connected-app flows alongside external meeting links and in-person or hybrid venue support.",
    "Delivered Stripe-based one-time ticketing and recurring per-session subscriptions, including saved payment methods, refund policies, cancellation flows, and payout eligibility checks.",
    "Built host and administrator tools for attendee management, recurring sessions, registrations, revenue reporting, transaction filtering, pagination, and CSV export.",
    "Created responsive calendar, agenda, and grouped-list views with date-range, status, and RSVP filters, pull-to-refresh, pagination, and light/dark theme support.",
    "Improved performance and data consistency through Apollo cache updates, targeted refetching, memoized calendar transformations, FlashList pagination, and generated GraphQL types.",
  ],
  results: [
    {
      value: "40%",
      label: "Reduction in internal communication delays",
      detail: "Through centralized team channels and real-time notifications.",
    },
    {
      value: "35%",
      label: "Increase in employee engagement",
      detail: "Based on usage metrics within the first three months.",
    },
    {
      value: "60%",
      label: "Reduction in manual event coordination time",
      detail: "Through automated scheduling and in-app RSVP flows.",
    },
    {
      value: "30%",
      label: "Faster feature rollout cycles",
      detail: "Enabled by the agile development and iteration model.",
    },
  ],
  caseStudy: {
    subtitle: "Independently leading the complete mobile events lifecycle",
    problem:
      "As the sole engineer responsible for events, I needed to transform a monolithic workflow into a reliable system serving members, moderators, administrators, hosts, and attendees while coordinating complex schedules, locations, payments, subscriptions, and recurring sessions.",
    solution:
      "I independently defined the technical architecture and rebuilt the experience as a shared, validated, role-aware workflow connected to typed GraphQL operations, calendar integrations, Stripe payments, attendee tooling, and administrative reporting.",
    result:
      "Delivered a comprehensive cross-platform event system spanning creation, discovery, ticketing, subscriptions, refunds, session operations, attendee experiences, and revenue management, with full ownership from technical decisions through release.",
  },
};
