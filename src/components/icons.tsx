import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </StrokeIcon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </StrokeIcon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </StrokeIcon>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </StrokeIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </StrokeIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </StrokeIcon>
  );
}

export function CredlyIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.2 13.5-1.4 6L12 17l5.2 2.5-1.4-6" />
      <path d="m10.2 9 1.3 1.3 2.6-2.6" />
    </StrokeIcon>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.519 2.567 5.786 2.293 7.152 2.231 8.418 2.175 8.798 2.163 12 2.163ZM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

export function SocialGlyph({
  name,
  ...props
}: IconProps & { name: "linkedin" | "credly" | "instagram" | "mail" }) {
  switch (name) {
    case "linkedin":
      return <LinkedinIcon {...props} />;
    case "credly":
      return <CredlyIcon {...props} />;
    case "instagram":
      return <InstagramIcon {...props} />;
    case "mail":
      return <MailIcon {...props} />;
  }
}

export function TrophyIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3" />
      <path d="M12 13v4M8.5 20h7M9.5 20c0-1.5 1-2 2.5-2s2.5.5 2.5 2" />
    </StrokeIcon>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M3.5 7.5A1.5 1.5 0 0 1 5 6h4l2 2.5h8A1.5 1.5 0 0 1 20.5 10v7a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17V7.5Z" />
    </StrokeIcon>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3 12.5h18" />
    </StrokeIcon>
  );
}

export function ToolIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m14.5 6.5 3-3a4.5 4.5 0 0 0-6 6L4 17a2.1 2.1 0 0 0 3 3l7.5-7.5a4.5 4.5 0 0 0 6-6l-3 3-3-1-1-3Z" />
    </StrokeIcon>
  );
}

export function BadgeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.2 13.5-1.4 6L12 17l5.2 2.5-1.4-6" />
    </StrokeIcon>
  );
}

export function CapIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 11.5V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.5M21 10v4" />
    </StrokeIcon>
  );
}

export function ProjectGlyph({
  name,
  ...props
}: IconProps & { name: "vr" | "chat" | "game" | "cube" | "chip" | "band" }) {
  switch (name) {
    case "vr":
      return (
        <StrokeIcon {...props}>
          <rect x="2.5" y="7.5" width="19" height="9" rx="4" />
          <path d="M2.5 11H1M21.5 11H23" />
          <circle cx="8" cy="12" r="2.2" />
          <circle cx="16" cy="12" r="2.2" />
        </StrokeIcon>
      );
    case "chat":
      return (
        <StrokeIcon {...props}>
          <path d="M20 12.5a7.5 7.5 0 0 1-10.9 6.7L4 20.5l1.3-4.4A7.5 7.5 0 1 1 20 12.5Z" />
          <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
        </StrokeIcon>
      );
    case "game":
      return (
        <StrokeIcon {...props}>
          <path d="M7.5 8h9a5 5 0 0 1 4.7 6.7l-.8 2.4a2.7 2.7 0 0 1-4.4 1.2L14 16h-4l-2 2.3a2.7 2.7 0 0 1-4.4-1.2l-.8-2.4A5 5 0 0 1 7.5 8Z" />
          <path d="M8 10.5v3M6.5 12h3M16 11h.01M18 13h.01" />
        </StrokeIcon>
      );
    case "cube":
      return (
        <StrokeIcon {...props}>
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
        </StrokeIcon>
      );
    case "band":
      return (
        <StrokeIcon {...props}>
          <path d="M7.5 6.5C7.5 4.3 9.5 3 12 3s4.5 1.3 4.5 3.5v11c0 2.2-2 3.5-4.5 3.5s-4.5-1.3-4.5-3.5Z" />
          <path d="M7.5 9.5h9M7.5 14.5h9" />
        </StrokeIcon>
      );
    case "chip":
      return (
        <StrokeIcon {...props}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <rect x="10" y="10" width="4" height="4" rx="0.5" />
          <path d="M9.5 3v4M14.5 3v4M9.5 17v4M14.5 17v4M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4" />
        </StrokeIcon>
      );
  }
}
