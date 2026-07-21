export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectCaseStudy = {
  subtitle: string;
  problem: string;
  solution: string;
  result: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  detailTitle?: string;
  role: string;
  timeline?: string;
  description: string;
  features: string[];
  techStack: string[];
  images: ProjectImage[];
  cvBulletPoints?: string[];
  results?: ProjectMetric[];
  liveUrl?: string;
  repositoryUrl?: string;
  caseStudy?: ProjectCaseStudy;
};
