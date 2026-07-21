import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import FutureScene from '../components/FutureScene';
import CommandPalette from '../components/CommandPalette';
import TechTag from '../components/TechTag';
import ThemeToggle from '../components/ThemeToggle';
import { getProjectBySlug } from '../data/projects';
import type { ProjectImage } from '../types/project';

function ProjectImageCarousel({ images, projectName }: { images: ProjectImage[]; projectName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [hasMultipleImages, images.length, isPaused]);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % images.length);

  return (
    <div
      className="project-carousel"
      aria-roledescription="carousel"
      aria-label={`${projectName} image gallery`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="project-carousel-viewport">
        <div className="project-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images.map((image, index) => (
            <figure className="project-carousel-card" key={image.src} aria-hidden={index !== activeIndex}>
              <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>

      {hasMultipleImages && (
        <>
          <button className="carousel-arrow carousel-arrow-left" type="button" onClick={showPrevious} aria-label="Previous image">
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-arrow carousel-arrow-right" type="button" onClick={showNext} aria-label="Next image">
            <ChevronRight size={20} />
          </button>
          <div className="carousel-dots" aria-label="Choose gallery image">
            {images.map((image, index) => (
              <button
                className={index === activeIndex ? 'is-active' : ''}
                type="button"
                key={image.src}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectNotFound() {
  return (
    <main className="project-page min-h-screen">
      <FutureScene />
      <div className="project-page-overlay" />
      <section className="project-not-found relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-5 text-center">
        <p className="section-kicker">404 / Project not found</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">This project is not in the archive.</h1>
        <p className="mt-5 max-w-xl leading-7 text-white/60">The address may have changed, or the project has not been published yet.</p>
        <Link className="primary-button mt-8" to="/" hash="projects">
          <ArrowLeft size={18} /> Back to projects
        </Link>
      </section>
    </main>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams({ from: '/projects/$slug' });
  const project = getProjectBySlug(slug);

  if (!project) return <ProjectNotFound />;

  return (
    <main className="project-page min-h-screen overflow-hidden">
      <FutureScene />
      <div className="project-page-overlay" />
      <div className="relative z-10">
        <header className="project-header">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <Link className="flex items-center gap-3" to="/" aria-label="Eljo Hoxha home">
              <span className="grid h-10 w-10 place-items-center border border-cyan-200/40 bg-cyan-200/10 text-sm font-semibold text-cyan-100">EH</span>
              <span className="hidden text-sm font-medium tracking-[0.22em] text-white/70 sm:block">ELJO HOXHA</span>
            </Link>
            <div className="flex items-center gap-2">
              <CommandPalette />
              <ThemeToggle />
              <Link className="secondary-button" to="/" hash="projects"><ArrowLeft size={17} /> All projects</Link>
            </div>
          </div>
        </header>

        <article className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8">
          <section className="project-hero-grid">
            <div className="flex flex-col justify-center">
              <p className="section-kicker">{project.role}</p>
              <h1 className="mt-5 text-5xl font-semibold leading-[0.95] sm:text-7xl">{project.detailTitle ?? project.name}</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{project.description}</p>
              <dl className="project-meta mt-8">
                <div>
                  <dt>My role</dt>
                  <dd>{project.role}</dd>
                </div>
                {project.timeline && (
                  <div>
                    <dt>Timeline</dt>
                    <dd>{project.timeline}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((technology) => <TechTag className="glow-tag" key={technology} label={technology} />)}
              </div>
              {(project.liveUrl || project.repositoryUrl) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      aria-label={`Visit ${project.name} live app`}
                      className="primary-button"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit live app <ExternalLink size={17} />
                    </a>
                  )}
                  {project.repositoryUrl && <a className="secondary-button" href={project.repositoryUrl} target="_blank" rel="noreferrer">Repository <ExternalLink size={17} /></a>}
                </div>
              )}
            </div>
            <ProjectImageCarousel images={project.images} projectName={project.name} />
          </section>

          <section className="project-detail-section">
            <p className="section-kicker">Key features</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What the product delivers.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <div className="feature-tile" key={feature}><span>0{index + 1}</span>{feature}</div>
              ))}
            </div>
          </section>

          {project.results && (
            <section className="project-detail-section">
              <p className="section-kicker">Results</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">Measurable product impact since launch.</h2>
              <div className="results-grid mt-8">
                {project.results.map((result) => (
                  <article className="result-card" key={result.label}>
                    <strong>{result.value}</strong>
                    <h3>{result.label}</h3>
                    <p>{result.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {project.cvBulletPoints && (
            <section className="project-detail-section">
              <p className="section-kicker">Engineering contributions</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">Production work across the complete mobile product.</h2>
              <ol className="contribution-list mt-8">
                {project.cvBulletPoints.map((bullet, index) => (
                  <li key={bullet}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {project.caseStudy && (
            <section className="project-detail-section">
              <p className="section-kicker">Case study</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{project.caseStudy.subtitle}</h2>
              <div className="case-study-grid mt-8">
                {(['problem', 'solution', 'result'] as const).map((field) => (
                  <div className="case-study-panel" key={field}>
                    <p className="mini-label">{field}</p>
                    <p className="mt-4 text-sm leading-7 text-white/64">{project.caseStudy![field]}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </main>
  );
}
