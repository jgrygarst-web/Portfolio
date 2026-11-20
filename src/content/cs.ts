import type { Content } from "./types";

export const cs: Content = {
  nav: [
    { label: "Soutěže", href: "#competitions" },
    { label: "Projekty", href: "#projects" },
    { label: "Praxe", href: "#experience" },
    { label: "Dovednosti", href: "#skills" },
    { label: "Certifikace", href: "#certifications" },
    { label: "Kontakt", href: "#contact" },
  ],
  hero: {
    greeting: "Ahoj, jsem",
    role: "Student informačních technologií · Ostrava",
    bio: "Stavím webové, VR a AI aplikace a vedle toho kreslím technické výkresy v CADu. Většinu věcí se učím tím, že je zkusím postavit od nuly.",
    ctaProjects: "Projekty",
    ctaContact: "Napsat",
  },
  highlight: {
    kicker: "AT&T Hackathon Junior 2026 · Brno",
    title: "Dvě první místa za 24 hodin",
    text: "S týmem AYA jsme postavili No-prez — VR aplikaci v Unity pro Meta Quest 2, která analyzuje gesta, hlas a projev řečníka a dává mu zpětnou vazbu před virtuálním publikem. Porota ji ocenila jako celkového vítěze i nejlepší nápad.",
    tags: ["Unity", "Meta Quest 2", "AI analýza", "Node.js"],
  },
  competitions: {
    title: "Soutěže",
    lead: "Hackathony a soutěže, na kterých jsem prezentoval svoje projekty.",
    projectLabel: "Projekt",
    items: [
      {
        name: "AT&T Hackathon Junior",
        place: "Brno, Česko",
        year: "2026",
        project: "No-prez",
        description: "",
        result: "1. místo — celkový vítěz a nejlepší nápad",
      },
      {
        name: "Samsung Innovation Sprint",
        place: "Žilina, Slovensko",
        year: "",
        project: "Modulární náramek",
        description:
          "Prezentace konceptu modulárního náramku — nositelné elektroniky, u které si každý skládá jen moduly, které opravdu chce používat.",
        result: "",
      },
    ],
  },
  projects: {
    title: "Projekty",
    lead: "Vybrané věci, které jsem postavil.",
    items: [
      {
        title: "No-prez",
        tagline: "VR kouč pro veřejné vystupování",
        description:
          "VR aplikace v Unity pro Meta Quest 2 analyzuje gesta, hlas a projev řečníka, dává mu okamžitou zpětnou vazbu před virtuálním publikem a po skončení vygeneruje podrobné hodnocení. Vznikla za jediný den na hackathonu.",
        tags: ["Unity", "Meta Quest 2", "AI analýza", "Node.js"],
        icon: "vr",
      },
      {
        title: "Modulární náramek",
        tagline: "Nositelná elektronika, kterou si složíš sám",
        description:
          "Koncept náramku o velikosti gumičky do vlasů, který se skládá z modulů — každý si vybere, co chce měřit. Místo chytrých hodinek plných notifikací nabízí jen data, o která stojí: tep, GPS, gesta, fáze spánku, UV záření nebo bezkontaktní platby. Moduly se propojují přes BLE a NFC, počítá se se solárním nabíjením i open-source základem.",
        tags: ["Modulární design", "BLE", "NFC", "Nositelná elektronika", "Open source"],
        icon: "band",
      },
      {
        title: "AI Chatbot & E-commerce",
        tagline: "AI asistent propojený s e-shopem",
        description:
          "Webová aplikace, která spojuje vlastního AI chatbota s e-shopem a automatizovanou komunikací se zákazníkem.",
        tags: ["JavaScript", "AI chatbot", "E-commerce", "REST API"],
        icon: "chat",
      },
      {
        title: "3D grafika a vizualizace",
        tagline: "Modely, scény a rendery v Blenderu",
        description:
          "Vlastní 3D modely, scény a vizualizace – od modelování a materiálů až po finální render.",
        tags: ["Blender", "3D modelování", "Rendering"],
        icon: "cube",
      },
      {
        title: "PC sestavy a hardware",
        tagline: "Návrh, stavba a diagnostika",
        description:
          "Sestavení stolních počítačů od výběru komponent přes stavbu až po ladění chlazení a systému.",
        tags: ["Hardware", "Diagnostika", "Chlazení"],
        icon: "chip",
      },
    ],
  },
  experience: {
    title: "Praxe",
    lead: "Dva roky technické projekce a brigády, kde se IT potkává s provozem.",
    items: [
      {
        organization: "Maxxi-Therm",
        role: "CAD projektant / kreslič",
        meta: "2 roky",
        points: [
          "Tvorba 2D technické výkresové dokumentace v programu ZWCAD.",
          "Návrhy klimatizačních systémů, vzduchotechniky (HVAC) a technických zařízení budov (TZB).",
          "Zpracování a překreslování stávajícího stavu objektů pro pasportizaci staveb.",
        ],
      },
      {
        organization: "Colours of Ostrava / Dolní Vítkovice",
        role: "Event a IT podpora",
        meta: "brigáda",
        points: [
          "Správa VIP akreditací a instalace festivalového brandingu.",
          "Technická a IT podpora v terénu – stavba a demontáž serverových racků, správa mobilních síťových routerů.",
        ],
      },
    ],
  },
  skills: {
    title: "Dovednosti",
    lead: "Nástroje a technologie, se kterými jsem reálně pracoval.",
    items: [
      {
        title: "Programovací jazyky",
        items: ["C", "Java", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
      },
      {
        title: "Web, VR a hry",
        items: ["Unity (Meta Quest 2)", "Node.js", "Phaser.js", "REST API", "Git & GitHub"],
      },
      {
        title: "AI a data",
        items: ["AI aplikace a chatboti", "Analýza hlasu a obrazu", "Datová analýza"],
      },
      {
        title: "Automatizace a embedded",
        items: ["PLC programování (SCL, Ladder)", "TIA Portal", "Mikrokontroléry (MCUXpresso IDE)"],
      },
      {
        title: "CAD a 3D",
        items: ["ZWCAD (TZB, HVAC, pasporty)", "Blender", "3D modelování a rendering"],
      },
      {
        title: "Databáze a nástroje",
        items: ["MS Access", "Relační databáze", "Správa síťových prvků"],
      },
    ],
  },
  certifications: {
    title: "Certifikace",
    lead: "Veřejné odznaky z Credly. Každý certifikát lze ověřit u vydavatele.",
    profile: "Profil na Credly",
    verify: "Ověřit",
  },
  education: {
    title: "Vzdělání",
    school: "SPŠEI Ostrava",
    fullName: "Střední průmyslová škola elektrotechniky a informatiky Ostrava",
    fieldLabel: "Obor",
    field: "Informační technologie",
    focusLabel: "Zaměření",
    focus: "Programování a vývoj softwaru",
    status: "Studuji",
  },
  contact: {
    title: "Kontakt",
    lead: "Web, VR prototyp, AI chatbot nebo technický výkres? Nejjednodušší je napsat e-mail.",
    copy: "Kopírovat",
    copied: "Zkopírováno",
    elsewhere: "Jinde na internetu",
  },
  footer: {
    built: "Postaveno v Next.js",
    backToTop: "Nahoru",
  },
  ui: {
    theme: "Přepnout světlý a tmavý režim",
    language: "Jazyk",
    skip: "Přeskočit na obsah",
    nav: "Navigace",
  },
};
