import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "",
    description: "",
    author: "Your Name",
    // logo: "/logo.svg",
    ogImage: "/og-image.png",
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "About", subtitle: "Me", href: "/" },
    { name: "Education", subtitle: "Learn", href: "/education" },
    { name: "Experience", subtitle: "Work", href: "/experience" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Writing", subtitle: "Blog", href: "/posts" },
  ],

  // --- Social Links ---
  social: [
    {
      name: "GitHub",
      href: "https://github.com/Aryaman-13",
      icon: "mdi:github",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/aryaman-khandelwal/",
      icon: "mdi:linkedin",
    },
    { name: "Email", href: "mailto:aryaman13jan@gmail.com", icon: "mdi:email" },
    {
      name: "Medium",
      href: "https://medium.com/@aryaman13jan",
      icon: "mdi:medium",
    },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 Hello, I'm Aryaman Khandelwal",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    // description:'A minimal personal website theme built with <span class="font-medium text-foreground underline decoration-primary/30">Astro</span> and <span class="font-medium text-foreground underline decoration-primary/30">Tailwind CSS</span>.',
    cards: [
      {
        icon: "mdi:explore",
        label: "Status",
        value: "Building something cool",
      },
      { icon: "mdi:location", label: "Location", value: "Delhi, India" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025 Breeze",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: artalkEnabled,
    provider: "artalk" as const,
    artalk: {
      server: artalkServer,
    },
  },

  // --- Feature Toggles ---
  features: {
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Projects",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    educationTitle: "Education",
    educationDescription: "Academic background and self-directed learning.",
    educationTimelineTitle: "Timeline",
    educationCoursesTitle: "Courses & Certifications",
    experienceTitle: "Experience",
    experienceDescription: "Where I've worked and what I've been part of.",
    experienceWorkTitle: "Work",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
