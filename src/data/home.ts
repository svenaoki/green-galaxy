export interface Highlight {
  title: string;
  description: string;
}

export const home = {
  hero: {
    greeting: "AI architecture • deep learning • scientific computing",
    role: "Building reliable AI and data science systems.",
    description:
      "I'm Sven Schilke, a Data Science Architect with a PhD in scientific computing and more than a decade of experience turning complex analytical problems into deployed machine learning solutions.",
  },
  summary: {
    heading: "About me",
    paragraphs: [
      "I design machine learning and analytics systems for financial services, industrial operations, consumer research, and geophysical applications.",
      "Across Viseca, ABB, Kantar, Deltares, and Schlumberger, I've taken work from research and proposal through implementation, combining data pipelines, model development, and deployment with clear business and engineering outcomes.",
    ],
    cta: {
      label: "Read more about me",
      href: "/green-galaxy/about",
    },
  },
  highlights: [
    {
      title: "Data Science Architect at Viseca",
      description:
        "Designing AI and analytics architectures for financial services, with emphasis on deployable data science solutions and enterprise fit.",
    },
    {
      title: "Data Science Consultant at ABB",
      description:
        "Led advanced analytics initiatives in ABB's turbocharging division, connecting manufacturing and finance use cases with deployed machine learning models.",
    },
    {
      title: "Lead Data Scientist at Kantar",
      description:
        "Led a data science team delivering statistical learning and forecasting work for global clients including Facebook, Nestlé, and Coca-Cola.",
    },
  ] satisfies Highlight[],
  cta: {
    heading: "Get in touch",
    description: "Interested in AI architecture, applied machine learning, or data-driven product work? Let's connect.",
    label: "Get in touch",
    href: "/green-galaxy/contact",
  },
};
