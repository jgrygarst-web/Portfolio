import { cs } from "./cs";
import { en } from "./en";
import type { Content, Locale } from "./types";

export type SocialIcon = "linkedin" | "credly" | "instagram" | "mail";

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: SocialIcon;
};

/** Data, která se v obou jazycích nemění. */
export const site = {
  name: "Jakub Grygar",
  email: "jakoubekyt@gmail.com",
  url: "https://grygar.me",
  socials: [
    {
      label: "LinkedIn",
      handle: "jakub-grygar",
      href: "https://www.linkedin.com/in/jakub-grygar-b912a9438",
      icon: "linkedin",
    },
    {
      label: "Credly",
      handle: "jakub-grygar",
      href: "https://www.credly.com/users/jakub-grygar/badges",
      icon: "credly",
    },
    {
      label: "Instagram",
      handle: "k.grygi",
      href: "https://www.instagram.com/k.grygi",
      icon: "instagram",
    },
    {
      label: "E-mail",
      handle: "jakoubekyt@gmail.com",
      href: "mailto:jakoubekyt@gmail.com",
      icon: "mail",
    },
  ] satisfies SocialLink[],
};

export const content: Record<Locale, Content> = { cs, en };

export type { Content, Locale };
