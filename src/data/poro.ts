import poroCover from "../assets/projects/poro/poro-cover.webp";
import poroGallery1 from "../assets/projects/poro/poro-gallery1.webp";
import poroGallery2 from "../assets/projects/poro/poro-gallery2.webp";
import poroGallery4 from "../assets/projects/poro/poro-gallery4.webp";
import poroGallery5 from "../assets/projects/poro/poro-gallery5.webp";
import poroGallery6 from "../assets/projects/poro/poro-gallery6.webp";
import poroGallery7 from "../assets/projects/poro/poro-gallery7.webp";
import poroGallery8 from "../assets/projects/poro/poro-gallery8.webp";
import poroGallery9 from "../assets/projects/poro/poro-gallery9.webp";
import type { Project } from "../types/project";

export const poro: Project = {
  slug: "poro",
  name: "Poro",
  detailTitle: "Poro — Local Food Delivery Platform",
  role: "Frontend Web & Mobile Developer",
  description:
    "Developed frontend experiences for a multi-role food delivery ecosystem connecting customers, local restaurants, and delivery drivers. The platform combines a cross-platform React Native application for customer and driver journeys with a responsive React dashboard for restaurant operations, bringing ordering, live delivery updates, menu management, and performance insights into one system.",
  features: [
    "Customer and driver mobile experiences",
    "Nearby restaurant discovery",
    "Menu browsing and meal customization",
    "Ordering and checkout journeys",
    "Real-time delivery tracking",
    "Live driver delivery updates",
    "Delivery route support",
    "Responsive restaurant dashboard",
    "Menu and availability management",
    "Order-flow monitoring",
    "Restaurant performance insights",
    "Operations administration",
    "Multi-role user journeys",
  ],
  techStack: [
    "React",
    "React Native",
    "Responsive Web",
    "iOS",
    "Android",
    "Node.js",
    "AWS",
    "REST APIs",
    "Real-time Tracking",
  ],
  images: [
    {
      src: poroCover,
      alt: "Poro mobile food delivery screens showing restaurant discovery and details",
      caption: "Poro customer mobile experience",
    },
    {
      src: poroGallery1,
      alt: "Poro restaurant menu, pizza customization, and checkout screens",
      caption: "Menu browsing, meal customization, and checkout",
    },
    {
      src: poroGallery2,
      alt: "Poro onboarding, phone verification, and restaurant browsing screens",
      caption: "Customer onboarding and restaurant discovery",
    },
    {
      src: poroGallery4,
      alt: "Poro customer home screen with food categories, restaurants, and order status",
      caption: "Restaurant discovery and active-order tracking",
    },
    {
      src: poroGallery5,
      alt: "Poro restaurant details screen with menu categories and meal options",
      caption: "Restaurant details and menu browsing",
    },
    {
      src: poroGallery6,
      alt: "Poro customer orders screen with current and previous orders",
      caption: "Current and historical customer orders",
    },
    {
      src: poroGallery7,
      alt: "Poro welcome screen with phone-number registration",
      caption: "Mobile customer registration",
    },
    {
      src: poroGallery8,
      alt: "Poro driver order details screen with map, order progress, and delivery confirmation",
      caption: "Driver delivery details and fulfillment workflow",
    },
    {
      src: poroGallery9,
      alt: "Poro driver orders screen listing current and previous deliveries",
      caption: "Driver order history",
    },
  ],
  cvBulletPoints: [
    "Developed customer and delivery-driver experiences for a cross-platform React Native food delivery application serving distinct user journeys from discovery through fulfillment.",
    "Built responsive React interfaces for restaurant partners to manage menus, monitor incoming orders, review order flow, and access performance insights.",
    "Implemented customer workflows for nearby restaurant discovery, menu browsing, meal customization, order placement, and real-time delivery tracking.",
    "Delivered driver-facing workflows with active-order updates, delivery status visibility, and route-oriented experiences for efficient fulfillment.",
    "Translated mapped customer, restaurant, and driver journeys into reusable, role-aware frontend screens within a unified delivery ecosystem.",
    "Collaborated in a small cross-functional team to take the product from concept to a full-featured MVP in 60 days, followed by ongoing maintenance and enhancement.",
    "Contributed to a platform reported to provide full restaurant control over menus and orders, threefold greater delivery transparency through real-time tracking, and a tenfold scalability improvement.",
  ],
  liveUrl: "https://www.motomtech.com/use-case/poro/",
  caseStudy: {
    subtitle: "One delivery ecosystem for customers, restaurants, and drivers",
    problem:
      "Poro needed to unite three different roles in one cohesive platform. Generic food-ordering tools could not provide the required real-time logistics, dynamic restaurant operations, tailored interfaces, or room for rapid growth.",
    solution:
      "Mapped each role's journey and delivered a React Native application for customers and drivers alongside a responsive React dashboard for restaurant partners, supported by a Node.js backend and AWS infrastructure.",
    result:
      "The full-featured MVP launched in 60 days. Motomtech's published case study reports complete restaurant autonomy, three times greater delivery transparency through real-time tracking, and a tenfold scalability boost.",
  },
};
