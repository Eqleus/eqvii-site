export const site = {
  entityName: 'EQVII Holdings',
  systemName: 'The Equilibrium System',
  shortPositioning: 'Capital under public-value constraint',
  domain: {
    production: '',
    staging: '',
    canonicalBaseUrl: '',
  },
  social: {
    image: '',
    type: 'website',
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Perimeter', href: '/perimeter/' },
    { label: 'Vehicles', href: '/vehicles/' },
    { label: 'Execution', href: '/execution/' },
    { label: 'PRF Boundary', href: '/prf-boundary/' },
    { label: 'Governance', href: '/governance/' },
    { label: 'Inquiry', href: '/inquiry/' },
  ],
} as const;
