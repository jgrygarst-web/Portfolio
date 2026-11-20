import type { Content } from "./types";

export const en: Content = {
  nav: [
    { label: "Competitions", href: "#competitions" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Hi, I'm",
    role: "IT student · Ostrava, Czechia",
    bio: "I build web, VR and AI applications, and I draw technical documentation in CAD. Most of what I know comes from building things from scratch.",
    ctaProjects: "Projects",
    ctaContact: "Get in touch",
  },
  highlight: {
    kicker: "AT&T Hackathon Junior 2026 · Brno",
    title: "Two first places in 24 hours",
    text: "With team AYA we built No-prez — a VR app made in Unity for Meta Quest 2 that analyses the speaker's gestures, voice and delivery and gives live feedback in front of a virtual audience. The jury awarded it the overall win and the best idea prize.",
    tags: ["Unity", "Meta Quest 2", "AI analysis", "Node.js"],
  },
  competitions: {
    title: "Competitions",
    lead: "Hackathons and competitions where I presented my projects.",
    projectLabel: "Project",
    items: [
      {
        name: "AT&T Hackathon Junior",
        place: "Brno, Czechia",
        year: "2026",
        project: "No-prez",
        description: "",
        result: "1st place — overall winner and best idea",
      },
      {
        name: "Samsung Innovation Sprint",
        place: "Žilina, Slovakia",
        year: "",
        project: "Modular bracelet",
        description:
          "Presenting the concept of a modular bracelet — wearable electronics where you assemble only the modules you actually want to use.",
        result: "",
      },
    ],
  },
  projects: {
    title: "Projects",
    lead: "A few things I have built.",
    items: [
      {
        title: "No-prez",
        tagline: "A VR coach for public speaking",
        description:
          "A VR app made in Unity for Meta Quest 2 that analyses the speaker's gestures, voice and delivery, gives live feedback in front of a virtual audience and produces a detailed report afterwards. Built in a single day at a hackathon.",
        tags: ["Unity", "Meta Quest 2", "AI analysis", "Node.js"],
        icon: "vr",
      },
      {
        title: "Modular bracelet",
        tagline: "Wearable electronics you put together yourself",
        description:
          "A concept for a bracelet about the size of a hair tie, built from modules — everyone picks what they want to measure. Instead of a smartwatch full of notifications it only offers the data you care about: heart rate, GPS, gestures, sleep phases, UV or contactless payments. Modules connect over BLE and NFC, with solar charging and an open-source base in mind.",
        tags: ["Modular design", "BLE", "NFC", "Wearables", "Open source"],
        icon: "band",
      },
      {
        title: "AI Chatbot & E-commerce",
        tagline: "A custom AI assistant connected to a shop",
        description:
          "A web application that connects a custom AI chatbot with e-commerce features and automated customer communication.",
        tags: ["JavaScript", "AI chatbot", "E-commerce", "REST API"],
        icon: "chat",
      },
      {
        title: "3D graphics and visualisation",
        tagline: "Models, scenes and renders in Blender",
        description:
          "Custom 3D models, scenes and visualisations – from modelling and materials to the final render.",
        tags: ["Blender", "3D modelling", "Rendering"],
        icon: "cube",
      },
      {
        title: "Custom PCs and hardware",
        tagline: "Design, build and diagnostics",
        description:
          "Building desktop computers, from picking components through assembly to tuning cooling and the system.",
        tags: ["Hardware", "Diagnostics", "Cooling"],
        icon: "chip",
      },
    ],
  },
  experience: {
    title: "Experience",
    lead: "Two years of technical drafting and part-time jobs where IT meets real operations.",
    items: [
      {
        organization: "Maxxi-Therm",
        role: "CAD designer / draughtsman",
        meta: "2 years",
        points: [
          "Creating 2D technical documentation in ZWCAD.",
          "Designing air-conditioning, HVAC and building services systems.",
          "Redrawing existing building documentation for building passports.",
        ],
      },
      {
        organization: "Colours of Ostrava / Dolní Vítkovice",
        role: "Event and IT support",
        meta: "part-time",
        points: [
          "Managing VIP accreditations and installing festival branding.",
          "On-site technical and IT support – building and dismantling server racks, managing mobile network routers.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    lead: "Tools and technologies I have actually worked with.",
    items: [
      {
        title: "Programming languages",
        items: ["C", "Java", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
      },
      {
        title: "Web, VR and games",
        items: ["Unity (Meta Quest 2)", "Node.js", "Phaser.js", "REST API", "Git & GitHub"],
      },
      {
        title: "AI and data",
        items: ["AI apps and chatbots", "Voice and image analysis", "Data analysis"],
      },
      {
        title: "Automation and embedded",
        items: ["PLC programming (SCL, Ladder)", "TIA Portal", "Microcontrollers (MCUXpresso IDE)"],
      },
      {
        title: "CAD and 3D",
        items: ["ZWCAD (HVAC, building services)", "Blender", "3D modelling and rendering"],
      },
      {
        title: "Databases and tools",
        items: ["MS Access", "Relational databases", "Network device management"],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    lead: "Public badges from Credly. Every certificate can be verified with the issuer.",
    profile: "Credly profile",
    verify: "Verify",
  },
  education: {
    title: "Education",
    school: "SPŠEI Ostrava",
    fullName: "Secondary Technical School of Electrical Engineering and IT, Ostrava",
    fieldLabel: "Field",
    field: "Information technology",
    focusLabel: "Focus",
    focus: "Programming and software development",
    status: "Studying",
  },
  contact: {
    title: "Contact",
    lead: "A website, a VR prototype, an AI chatbot or technical drawings? The easiest way is email.",
    copy: "Copy",
    copied: "Copied",
    elsewhere: "Elsewhere",
  },
  footer: {
    built: "Built with Next.js",
    backToTop: "Top",
  },
  ui: {
    theme: "Toggle light and dark theme",
    language: "Language",
    skip: "Skip to content",
    nav: "Navigation",
  },
};
