export interface ExperienceEntry {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  tools?: string[];
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  startDate: string;
  endDate: string;
}

export interface ResumeData {
  name: string;
  currentRole: string;
  location?: string;
  email?: string;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: Record<string, string[]>;
  languages?: string[];
  certifications?: string[];
}

export const resume: ResumeData = {
  name: "Sven Schilke",
  currentRole: "Data Science Architect, PhD",
  location: "Zürich, Switzerland",
  email: "svenschilke@zoho.eu",
  summary:
    "Data Science Architect with 10+ years of experience across financial services, industrial analytics, market research, and scientific computing. Combines AI architecture, deep learning, signal processing, and full-lifecycle machine learning delivery from research and proposal through production deployment.",
  experience: [
    {
      company: "Viseca",
      role: "Data Science (AI & ML) Architect",
      location: "Zürich, Switzerland",
      startDate: "2023-10",
      endDate: "Present",
      achievements: [
        "Lead solution architecture for AI use cases, translating business needs into scalable, production-ready systems.",
        "Design end-to-end AI solutions across data flows, model integration, deployment patterns, governance, and operationalization.",
        "Lead the initiative to migrate internal Python stacks from Anaconda Enterprise to vanilla Kubernetes — from Dockerfiles to Helm Charts and fully automated GitOps.",
        "Lead software architecture designs following clean architecture patterns.",
      ],
      tools: ["AI Architecture", "Machine Learning", "Enterprise Architecture", "Kubernetes", "GitOps"],
    },
    {
      company: "ABB",
      role: "Advanced Analytics Consultant",
      location: "Zürich, Switzerland",
      startDate: "2020-06",
      endDate: "2023-08",
      achievements: [
        "Led ML and AI initiatives for ABB's turbocharging division, delivering projects from problem framing through implementation and adoption.",
        "Partnered with manufacturing, supply chain, engineering, finance, and controlling teams to solve business-critical problems using machine learning, forecasting, and statistical analysis.",
        "Built data pipelines, developed predictive models, and productionized ML & AI solutions to improve operational decision-making and scalability.",
        "Worked across use cases ranging from classical regression models to deep learning approaches, including convolutional and recurrent neural networks.",
      ],
      tools: ["Python", "Deep Learning", "Data Pipelines", "ML Deployment", "Forecasting"],
    },
    {
      company: "Kantar",
      role: "Lead Data Scientist",
      location: "London, United Kingdom",
      startDate: "2018-06",
      endDate: "2020-04",
      achievements: [
        "Delivered advanced analytics and insight-generation projects for high-profile global clients across technology and FMCG sectors.",
        "Supervised line reports and mentored team members while leading analytical workstreams and presenting findings to senior stakeholders.",
        "Applied regression, classification, clustering, and forecasting methods to consumer data to support client growth and commercial decision-making.",
        "Contributed to proposals and presentations for major clients including Facebook, Nestlé, and Coca-Cola.",
      ],
      tools: ["Statistical Learning", "Forecasting", "Consumer Analytics", "Client Advisory"],
    },
    {
      company: "Deltares",
      role: "Research Scientist",
      location: "Utrecht, Netherlands",
      startDate: "2017-07",
      endDate: "2018-06",
      achievements: [
        "Developed signal processing algorithms for fibre optic and seismic data, expanding applications beyond traditional oil and gas use cases.",
        "Advised on innovative technical projects, contributed to proposal development, and led seismic-focused research workstreams.",
        "Combined scientific research with applied analytics to create practical methods for new sensing applications.",
      ],
      tools: ["Signal Processing", "Fiber Optics", "Seismic Methods"],
    },
    {
      company: "Schlumberger",
      role: "PhD Researcher",
      location: "Paris, France; Southampton & Cambridge, United Kingdom",
      startDate: "2013-10",
      endDate: "2017-06",
      achievements: [
        "Developed signal processing algorithms for optical and seismic data in collaboration with multidisciplinary engineering teams.",
        "Automated monitoring of distributed acoustic sensing systems to improve signal-to-noise ratios using statistical learning techniques.",
        "Contributed to research and equipment grant applications and supported cross-functional R&D efforts across international teams.",
      ],
      tools: ["Scientific Computing", "Signal Processing", "Distributed Acoustic Sensing"],
    },
    {
      company: "Schlumberger",
      role: "MSc Researcher",
      location: "Cambridge, United Kingdom",
      startDate: "2013-03",
      endDate: "2013-08",
      achievements: [
        "Developed signal processing algorithms to improve signal-to-noise ratios in seismic datasets.",
        "Built inversion algorithms to localize hypocentres of induced seismic events.",
      ],
      tools: ["Inversion Algorithms", "Seismic Analysis", "Research"],
    },
  ],
  education: [
    {
      institution: "MINES ParisTech",
      qualification: "Doctor of Philosophy (PhD), Scientific Computing",
      startDate: "2013",
      endDate: "2017",
    },
    {
      institution: "ETH Zürich",
      qualification: "Master of Science (MS), Applied Geophysics",
      startDate: "2011",
      endDate: "2013",
    },
    {
      institution: "Technische Universiteit Delft",
      qualification: "Master of Science (MS), Applied Geophysics",
      startDate: "2011",
      endDate: "2013",
    },
    {
      institution: "RWTH Aachen University",
      qualification: "Bachelor of Science (BS), Geosciences",
      startDate: "2008",
      endDate: "2011",
    },
  ],
  skills: {
    "Architecture & ML": ["AI Architecture", "Deep Learning", "Enterprise Architecture", "ML Deployment"],
    "Data Science Methods": ["Advanced Analytics", "Forecasting", "Statistical Learning", "Signal Processing"],
    Engineering: ["Data Pipelines", "Model Development", "Kubernetes", "Scientific Computing"],
  },
  languages: ["German (Native or Bilingual)", "English (Full Professional)", "French (Professional Working)"],
  certifications: ["TOGAF® Certification"],
};
