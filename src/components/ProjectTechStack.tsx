import { ChevronDown } from 'lucide-react';
import type { Project } from '../types/project';
import TechTag from './TechTag';

type ProjectTechStackProps = {
  project: Project;
  className?: string;
  tagClassName?: string;
};

export default function ProjectTechStack({
  project,
  className = '',
  tagClassName = '',
}: ProjectTechStackProps) {
  const additionalTechnologies = project.techStack.filter(
    (technology) => !project.mainTechStack.includes(technology),
  );

  return (
    <div className={`project-stack ${className}`.trim()}>
      <div className="project-stack-tags">
        {project.mainTechStack.map((technology) => (
          <TechTag className={tagClassName} key={technology} label={technology} />
        ))}
      </div>
      {additionalTechnologies.length > 0 && (
        <details className="project-stack-details" key={project.slug}>
          <summary className="project-stack-toggle">
            <span className="project-stack-show-more">
              Show more ({additionalTechnologies.length})
            </span>
            <span className="project-stack-show-less">Show less</span>
            <span className="sr-only"> technologies for {project.name}</span>
            <ChevronDown className="project-stack-chevron" size={16} aria-hidden="true" />
          </summary>
          <div className="project-stack-tags project-stack-more">
            {additionalTechnologies.map((technology) => (
              <TechTag className={tagClassName} key={technology} label={technology} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
