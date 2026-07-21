import {
  ArrowDownToLine,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  CalendarClock,
  Code2,
  Cpu,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Network,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import FutureScene from '../components/FutureScene';
import TechTag from '../components/TechTag';
import { caseStudyProjects, projects } from '../data/projects';
import resumePath from '../assets/cv/eljo-hoxha-cv.pdf';

const techBadges = ['React Native', 'Expo', 'TypeScript', 'React', 'GraphQL', 'TanStack Query'];

const stats = [
  ['5+', 'Years building products'],
  ['8', 'Major roles and platforms'],
  ['Web + Mobile', 'Cross-platform focus'],
];

const highlights = [
  {
    icon: Smartphone,
    title: 'Cross-platform delivery',
    text: 'Production mobile and web apps for SaaS, marketplaces, fitness, audio, and community platforms.',
  },
  {
    icon: Layers3,
    title: 'Architecture and systems',
    text: 'Reusable components, scalable frontend structure, Expo workflows, white-label foundations, and typed APIs.',
  },
  {
    icon: Rocket,
    title: 'Release-ready execution',
    text: 'Clean implementation habits, product-minded collaboration, EAS releases, Firebase integration, and maintainable delivery.',
  },
];

const skills = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    items: ['React', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Tamagui', 'Design systems'],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Cross-Platform',
    items: ['React Native', 'Expo', 'Expo Router', 'React Native Web', 'iOS & Android integrations', 'EAS Build & Update'],
  },
  {
    icon: BrainCircuit,
    title: 'Architecture & Leadership',
    items: ['Mobile app architecture', 'Technical decision-making', 'End-to-end ownership', 'Monorepos', 'White-label platforms', 'Reusable component systems'],
  },
  {
    icon: ShieldCheck,
    title: 'Data, Integrations & Delivery',
    items: ['TanStack Query', 'Zustand', 'Apollo GraphQL', 'REST APIs', 'Stripe & Stripe Connect', 'Firebase, Socket.IO & deep linking'],
  },
];

const timeline = [
  ['2026', 'ChamberedIn', 'Senior React Native Developer — Events Lead'],
  ['2025-2026', 'One Home Solution', 'Senior Frontend Developer'],
  ['2025', 'Power of Two', 'Senior Frontend Engineer'],
  ['2024-2025', 'N-OV8', 'Frontend Engineer'],
  ['2024', 'Pulse Access', 'Senior React Native Engineer'],
  ['2024', 'Motomtech Platform', 'Frontend Developer'],
  ['2023-2024', 'KidsPod', 'React Native Developer'],
  ['2022-2023', 'Food Delivery Platform', 'React / React Native Developer'],

];

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 12) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY + 6) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY - 6) {
        setIsHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <FutureScene />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(101,244,255,0.22),transparent_30%),radial-gradient(circle_at_76%_18%,rgba(255,107,203,0.17),transparent_28%),linear-gradient(90deg,rgba(5,7,13,0.98)_0%,rgba(5,7,13,0.78)_48%,rgba(5,7,13,0.36)_100%)]" />

      <div className="relative z-10">
        <header
          className={`fixed inset-x-0 top-0 z-30 border-b border-white/8 bg-[#05070d]/70 backdrop-blur-2xl transition-transform duration-300 ease-out will-change-transform ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <a className="flex items-center gap-3" href="#top" aria-label="Eljo Hoxha home">
              <span className="grid h-10 w-10 place-items-center border border-cyan-200/40 bg-cyan-200/10 text-sm font-semibold text-cyan-100 shadow-[0_0_32px_rgba(101,244,255,0.32)]">
                EH
              </span>
              <span className="hidden text-sm font-medium tracking-[0.22em] text-white/70 sm:block">ELJO HOXHA</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
              <a href="#about">About</a>
              <a href="#highlights">Highlights</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#case-studies">Case Studies</a>
              <a href="#timeline">Timeline</a>
              <a href="#contact">Contact</a>
            </nav>
            <a className="icon-link" href="mailto:eljohoxha15@gmail.com" aria-label="Email Eljo">
              <Mail size={18} />
            </a>
          </div>
        </header>

        <section id="top" className="mx-auto grid min-h-screen w-full max-w-7xl items-center px-5 pb-14 pt-28 sm:px-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/14 bg-white/[0.06] px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100 shadow-[0_0_42px_rgba(101,244,255,0.12)]">
              <Sparkles size={15} />
              ineer
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Eljo Hoxha
            </h1>
            <p className="mt-5 text-2xl font-medium text-cyan-100 sm:text-3xl">Senior Frontend Developer</p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200/78 sm:text-lg">
              I build scalable web and mobile applications with React, React Native, TypeScript, and Expo.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {techBadges.map((badge) => (
                <TechTag className="glow-tag" key={badge} label={badge} />
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button" href="#projects">
                View Projects
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-button" href={resumePath} download>
                Download Resume
                <ArrowDownToLine size={18} />
              </a>
              <a className="secondary-button" href="#contact">
                Contact Me
                <Mail size={18} />
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border border-white/12 bg-black/20 backdrop-blur-md">
              {stats.map(([value, label]) => (
                <div className="border-r border-white/10 px-4 py-5 last:border-r-0" key={label}>
                  <div className="text-xl font-semibold text-cyan-100 sm:text-2xl">{value}</div>
                  <div className="mt-1 text-xs leading-5 text-white/52">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden h-full lg:block" />
        </section>

        <section id="about" className="page-section">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="section-kicker">About</p>
              <h2 className="section-title">Scalable interfaces for serious products.</h2>
            </div>
            <div className="copy-panel text-base leading-8 text-white/68 sm:text-lg">
              <p>
                I am a Senior Frontend Developer with 5+ years of experience building scalable web and mobile applications for SaaS platforms, marketplaces, fitness apps, audio streaming products, and community platforms.
              </p>
              <p className="mt-5">
                I specialize in React, React Native, Expo, TypeScript, frontend architecture, reusable component systems, and cross-platform product development. I enjoy turning complex product requirements into clean, maintainable, production-ready applications.
              </p>
            </div>
          </div>
        </section>

        <section id="highlights" className="page-section">
          <p className="section-kicker">Experience highlights</p>
          <h2 className="section-title max-w-3xl">Senior-level product delivery across web and mobile.</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="skill-panel" key={title}>
                <div className="mb-7 grid h-11 w-11 place-items-center border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
                  <Icon size={21} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="page-section">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title max-w-3xl">A focused stack for scalable frontend systems.</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skills.map(({ icon: Icon, title, items }) => (
              <article className="skill-panel" key={title}>
                <div className="mb-7 grid h-11 w-11 place-items-center border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
                  <Icon size={21} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <TechTag key={item} label={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="page-section">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Featured projects</p>
              <h2 className="section-title">Real product work with senior-level ownership.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/58">
              Each project card focuses on role, features, stack, and the product problem it helped solve.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article className="project-card detailed-card" key={project.name}>
                <Link
                  className="project-cover-link"
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  aria-label={`View ${project.name} project`}
                >
                  <img className="project-cover" src={project.images[0].src} alt={project.images[0].alt} />
                </Link>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">{project.role}</span>
                  <span className="text-sm text-white/38">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{project.description}</p>
                <div className="mt-6">
                  <p className="mini-label">Key features</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span className="tag" key={feature}>{feature}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="mini-label">Tech stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <TechTag className="muted-tag" key={item} label={item} />
                    ))}
                  </div>
                </div>
                <div className="project-actions">
                  <Link className="project-link" to="/projects/$slug" params={{ slug: project.slug }}>
                    View project
                    <ArrowUpRight size={16} />
                  </Link>
                  {project.liveUrl && (
                    <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live site <ExternalLink size={16} />
                    </a>
                  )}
                  {project.repositoryUrl && (
                    <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                      Repository <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="case-studies" className="page-section">
          <p className="section-kicker">Case studies</p>
          <h2 className="section-title max-w-3xl">Deep work that shows architecture, decision-making, and results.</h2>
          <div className="mt-9 grid gap-4">
            {caseStudyProjects.map((project) => {
              const study = project.caseStudy!;
              return (
                <article className="case-card" key={project.slug}>
                  <div className="case-heading">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">{study.subtitle}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{project.name}</h3>
                    </div>
                    <Cpu className="text-cyan-100/70" size={28} />
                  </div>
                  <div className="mt-7 grid gap-4 lg:grid-cols-3">
                    <div>
                      <p className="mini-label">Problem</p>
                      <p className="mt-3 text-sm leading-7 text-white/62">{study.problem}</p>
                    </div>
                    <div>
                      <p className="mini-label">Solution</p>
                      <p className="mt-3 text-sm leading-7 text-white/62">{study.solution}</p>
                    </div>
                    <div>
                      <p className="mini-label">Result</p>
                      <p className="mt-3 text-sm leading-7 text-white/62">{study.result}</p>
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <TechTag className="glow-tag" key={item} label={item} />
                    ))}
                  </div>
                  <Link className="project-link" to="/projects/$slug" params={{ slug: project.slug }}>
                    Read full case study <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section id="timeline" className="page-section">
          <p className="section-kicker">Work timeline</p>
          <h2 className="section-title max-w-3xl">Frontend product work.</h2>
          <div className="timeline mt-10">
            {timeline.map(([year, company, role]) => (
              <article className="timeline-item" key={`${year}-${company}`}>
                <div className="timeline-dot">
                  <CalendarClock size={18} />
                </div>
                <div className="timeline-card">
                  <p className="text-sm font-semibold text-cyan-100">{year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{company}</h3>
                  <p className="mt-2 text-sm text-white/58">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:pb-24">
          <div className="contact-band">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Let us build something scalable.
              </h2>
              <div className="mt-8 grid gap-3 text-sm text-white/68 sm:grid-cols-2">
                <a className="contact-line" href="mailto:eljohoxha15@gmail.com"><Mail size={17} /> eljohoxha15@gmail.com</a>
                <a className="contact-line" href="tel:+355692234848"><Phone size={17} /> +355 69 223 4848</a>
                <span className="contact-line"><MapPin size={17} /> Tirana, Albania</span>
                <a className="contact-line" href="https://linkedin.com/in/eljo-hoxha-70915b279"><Network size={17} /> linkedin.com/in/eljo-hoxha-70915b279</a>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="primary-button" href="mailto:eljohoxha15@gmail.com">
                <Mail size={18} />
                Email Me
              </a>
              <a className="secondary-button" href="https://linkedin.com/in/eljo-hoxha-70915b279">
                <Network size={18} />
                LinkedIn
              </a>
              <a className="secondary-button" href={resumePath} download>
                <ArrowDownToLine size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
