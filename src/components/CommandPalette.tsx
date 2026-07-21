import {
  ArrowRight,
  BriefcaseBusiness,
  FileDown,
  Layers3,
  Mail,
  Network,
  Search,
  SquareTerminal,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import resumePath from '../assets/cv/eljo-hoxha-cv.pdf';

type CommandAction = {
  title: string;
  description: string;
  keywords: string;
  icon: LucideIcon;
  run: () => void;
};

const navigateTo = (hash: string) => {
  if (window.location.pathname === '/') {
    window.location.hash = hash;
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  window.location.assign(`/#${hash}`);
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = useMemo<CommandAction[]>(() => [
    {
      title: 'Explore selected projects',
      description: 'View production work across mobile and web',
      keywords: 'projects portfolio case studies work',
      icon: BriefcaseBusiness,
      run: () => navigateTo('projects'),
    },
    {
      title: 'Review engineering skills',
      description: 'Architecture, mobile, data, and delivery capabilities',
      keywords: 'skills stack technologies architecture',
      icon: Layers3,
      run: () => navigateTo('skills'),
    },
    {
      title: 'Read case studies',
      description: 'Problems, decisions, solutions, and outcomes',
      keywords: 'case studies decisions results architecture',
      icon: Workflow,
      run: () => navigateTo('case-studies'),
    },
    {
      title: 'Download CV',
      description: 'Open the latest Eljo Hoxha résumé',
      keywords: 'cv resume download experience',
      icon: FileDown,
      run: () => {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'eljo-hoxha-cv.pdf';
        link.click();
      },
    },
    {
      title: 'Send an email',
      description: 'Start a conversation about a role or product',
      keywords: 'email contact hire opportunity',
      icon: Mail,
      run: () => window.location.assign('mailto:eljohoxha15@gmail.com'),
    },
    {
      title: 'Open LinkedIn',
      description: 'Connect with Eljo professionally',
      keywords: 'linkedin social connect profile',
      icon: Network,
      run: () => window.open('https://linkedin.com/in/eljo-hoxha-70915b279', '_blank', 'noopener,noreferrer'),
    },
  ], []);

  const filteredActions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return actions;
    return actions.filter(({ title, description, keywords }) =>
      `${title} ${description} ${keywords}`.toLowerCase().includes(normalizedQuery),
    );
  }, [actions, query]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((current) => !current);
      } else if (event.key === '/' && !isTyping) {
        event.preventDefault();
        setIsOpen(true);
      } else if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    setActiveIndex(0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const runAction = (action: CommandAction) => {
    setIsOpen(false);
    action.run();
  };

  return (
    <>
      <button
        aria-haspopup="dialog"
        aria-label="Open command palette"
        className="command-trigger"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <SquareTerminal size={17} />
        <span className="command-trigger-label">Navigate</span>
        <kbd>⌘K</kbd>
      </button>

      {isOpen && (
        <div className="command-backdrop" onMouseDown={() => setIsOpen(false)}>
          <section
            aria-label="Portfolio command palette"
            aria-modal="true"
            className="command-dialog"
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="command-search">
              <Search size={19} />
              <input
                aria-label="Search portfolio commands"
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    if (filteredActions.length > 0) {
                      setActiveIndex((current) => Math.min(current + 1, filteredActions.length - 1));
                    }
                  } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    setActiveIndex((current) => Math.max(current - 1, 0));
                  } else if (event.key === 'Enter' && filteredActions[activeIndex]) {
                    event.preventDefault();
                    runAction(filteredActions[activeIndex]);
                  }
                }}
                placeholder="Where would you like to go?"
                ref={inputRef}
                value={query}
              />
              <button aria-label="Close command palette" onClick={() => setIsOpen(false)} type="button">
                <X size={18} />
              </button>
            </div>

            <div className="command-results">
              {filteredActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    className={index === activeIndex ? 'is-active' : ''}
                    key={action.title}
                    onClick={() => runAction(action)}
                    onMouseEnter={() => setActiveIndex(index)}
                    type="button"
                  >
                    <span className="command-icon"><Icon size={18} /></span>
                    <span>
                      <strong>{action.title}</strong>
                      <small>{action.description}</small>
                    </span>
                    <ArrowRight className="command-arrow" size={17} />
                  </button>
                );
              })}
              {filteredActions.length === 0 && (
                <p className="command-empty">No matching command. Try “projects”, “CV”, or “contact”.</p>
              )}
            </div>

            <footer className="command-footer">
              <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
              <span><kbd>↵</kbd> Open</span>
              <span><kbd>esc</kbd> Close</span>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
