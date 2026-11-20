import type { ProjectImage } from '../types/project';

type ProjectCoverProps = {
  image?: ProjectImage;
  projectName: string;
  className?: string;
};

export default function ProjectCover({ image, projectName, className = '' }: ProjectCoverProps) {
  if (image) {
    return <img className={className} src={image.src} alt={image.alt} />;
  }

  return (
    <div
      className={`project-cover-placeholder ${className}`.trim()}
      role="img"
      aria-label={`${projectName} project cover`}
    >
      <span>{projectName}</span>
    </div>
  );
}
