export type Locale = "cs" | "en";

export type NavItem = { label: string; href: string };

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: "vr" | "chat" | "game" | "cube" | "chip" | "band";
};

export type Job = {
  organization: string;
  role: string;
  meta: string;
  points: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Competition = {
  name: string;
  place: string;
  year: string;
  project: string;
  description: string;
  result: string;
};

export type Content = {
  nav: NavItem[];
  hero: {
    greeting: string;
    role: string;
    bio: string;
    ctaProjects: string;
    ctaContact: string;
  };
  highlight: {
    kicker: string;
    title: string;
    text: string;
    tags: string[];
  };
  competitions: {
    title: string;
    lead: string;
    projectLabel: string;
    items: Competition[];
  };
  projects: {
    title: string;
    lead: string;
    items: Project[];
  };
  experience: {
    title: string;
    lead: string;
    items: Job[];
  };
  skills: {
    title: string;
    lead: string;
    items: SkillGroup[];
  };
  certifications: {
    title: string;
    lead: string;
    profile: string;
    verify: string;
  };
  education: {
    title: string;
    school: string;
    fullName: string;
    fieldLabel: string;
    field: string;
    focusLabel: string;
    focus: string;
    status: string;
  };
  contact: {
    title: string;
    lead: string;
    copy: string;
    copied: string;
    elsewhere: string;
  };
  footer: {
    built: string;
    backToTop: string;
  };
  ui: {
    theme: string;
    language: string;
    skip: string;
    nav: string;
  };
};
