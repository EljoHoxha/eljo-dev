import {
  siAndroid,
  siApollographql,
  siApple,
  siAxios,
  siExpo,
  siFirebase,
  siGithubactions,
  siGooglemaps,
  siGraphql,
  siHtml5,
  siJest,
  siNodedotjs,
  siPinia,
  siRadixui,
  siReact,
  siReacthookform,
  siReactquery,
  siReactrouter,
  siSocketdotio,
  siStripe,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVite,
  siVitest,
  siVuedotjs,
  siYarn,
  siZod,
  type SimpleIcon,
} from 'simple-icons';

type LogoRule = {
  matches: (label: string) => boolean;
  icon: SimpleIcon;
};

const includes = (term: string) => (label: string) => label.includes(term);

const logoRules: LogoRule[] = [
  { matches: includes('react hook form'), icon: siReacthookform },
  { matches: (label) => label.includes('tanstack query') || label.includes('react query'), icon: siReactquery },
  { matches: (label) => label.includes('expo router') || label.includes('tanstack router') || label.includes('react navigation'), icon: siReactrouter },
  { matches: includes('react native'), icon: siReact },
  { matches: (label) => label === 'react' || label.startsWith('react '), icon: siReact },
  { matches: (label) => label.includes('expo') || label.includes('eas build') || label.includes('eas update'), icon: siExpo },
  { matches: includes('typescript'), icon: siTypescript },
  { matches: includes('apollo'), icon: siApollographql },
  { matches: includes('graphql'), icon: siGraphql },
  { matches: includes('vue'), icon: siVuedotjs },
  { matches: includes('tailwind'), icon: siTailwindcss },
  { matches: includes('stripe'), icon: siStripe },
  { matches: includes('firebase'), icon: siFirebase },
  { matches: includes('socket.io'), icon: siSocketdotio },
  { matches: includes('vite'), icon: siVite },
  { matches: includes('vitest'), icon: siVitest },
  { matches: includes('jest'), icon: siJest },
  { matches: includes('zod'), icon: siZod },
  { matches: includes('pinia'), icon: siPinia },
  { matches: includes('axios'), icon: siAxios },
  { matches: includes('github actions'), icon: siGithubactions },
  { matches: includes('yarn'), icon: siYarn },
  { matches: (label) => label === 'ios' || label.includes('apple'), icon: siApple },
  { matches: includes('android'), icon: siAndroid },
  { matches: includes('google maps'), icon: siGooglemaps },
  { matches: includes('radix'), icon: siRadixui },
  { matches: includes('three.js'), icon: siThreedotjs },
  { matches: includes('node.js'), icon: siNodedotjs },
  { matches: includes('html'), icon: siHtml5 },
];

const getLogo = (label: string) => {
  const normalizedLabel = label.toLowerCase();
  return logoRules.find(({ matches }) => matches(normalizedLabel))?.icon;
};

const getLogoColor = (icon: SimpleIcon) => {
  const darkBrandColors = new Set(['000000', '000020', '1C2024']);
  return darkBrandColors.has(icon.hex.toUpperCase()) ? '#f8fafc' : `#${icon.hex}`;
};

type TechTagProps = {
  label: string;
  className?: string;
};

export default function TechTag({ label, className = '' }: TechTagProps) {
  const logo = getLogo(label);

  return (
    <span className={`tag tech-tag ${className}`.trim()}>
      {logo && (
        <svg
          aria-hidden="true"
          className="tech-logo"
          style={{ color: getLogoColor(logo) }}
          viewBox="0 0 24 24"
        >
          <path d={logo.path} fill="currentColor" />
        </svg>
      )}
      <span>{label}</span>
    </span>
  );
}
