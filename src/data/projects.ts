import type { Project } from "../types/project";
import { chamberedIn } from "./chamberedIn";
import { kidspod } from "./kidspod";
import { nov8 } from "./nov8";
import { oneHomeSolution } from "./oneHomeSolution";
import { powerOfTwo } from "./powerOfTwo";
import { poro } from "./poro";
import { portal } from "./portal";
import { pulseAccess } from "./pulseAccess";
import { wrent } from "./wrent";

export const projects: Project[] = [
  chamberedIn,
  oneHomeSolution,
  wrent,
  powerOfTwo,
  nov8,
  pulseAccess,
  portal,
  kidspod,
  poro,
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const caseStudyProjects = projects.filter(
  (project) => project.caseStudy,
);
