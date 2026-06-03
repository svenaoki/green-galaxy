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
  email: "svenaoki@gmail.com",
  summary:
    "Data Science Architect with 10+ years of experience across financial services, industrial analytics, market research, and scientific computing. Combines AI architecture, deep learning, signal processing, and full-lifecycle machine learning delivery from research and proposal through production deployment.",
  experience: [
    {
      company: "Viseca",
      role: "Data Science Architect",
      location: "Zürich, Switzerland",
      startDate: "2023-10",
      endDate: "Present",
      achievements: [
        "Lead data science architecture initiatives in a regulated financial services environment.",
        "Design AI and analytics solutions that align machine learning capabilities with enterprise architecture requirements.",
      ],
      tools: ["AI Architecture", "Machine Learning", "Enterprise Architecture", "Financial Services"],
    },
    {
      company: "ABB",
      role: "Data Science Consultant",
      location: "Zürich, Switzerland",
      startDate: "2020-06",
      endDate: "2023-08",
      achievements: [
        "Led advanced analytics initiatives in ABB's turbocharging division from proposal through implementation.",
        "Delivered manufacturing and finance use cases using methods ranging from linear regression to deep learning.",
        "Built data pipelines, developed models, and deployed machine learning solutions into operational settings.",
      ],
      tools: ["Python", "Deep Learning", "Data Pipelines", "ML Deployment"],
    },
    {
      company: "Kantar",
      role: "Lead Data Scientist",
      location: "London, United Kingdom",
      startDate: "2018-06",
      endDate: "2020-04",
      achievements: [
        "Led a data science team delivering insights for clients including Facebook, Google, Nestlé, and Coca-Cola.",
        "Applied regression, classification, clustering, and forecasting to proprietary consumer data.",
        "Translated statistical learning outputs into recommendations supporting client growth and decision-making.",
      ],
      tools: ["Statistical Learning", "Forecasting", "Consumer Analytics"],
    },
    {
      company: "Deltares",
      role: "Research Scientist",
      location: "Utrecht, Netherlands",
      startDate: "2017-06",
      endDate: "2018-05",
      achievements: [
        "Led research on fiber-optic and seismic methods and contributed technical proposals for new project opportunities.",
        "Developed signal processing algorithms to extend fiber-optic sensing applications beyond oil and gas.",
      ],
      tools: ["Signal Processing", "Fiber Optics", "Seismic Methods"],
    },
    {
      company: "Schlumberger",
      role: "PhD Research Associate",
      location: "Cambridge, United Kingdom",
      startDate: "2013-09",
      endDate: "2017-06",
      achievements: [
        "Performed numerical simulation of seismic data.",
        "Developed signal processing algorithms for optical and seismic data workflows.",
        "Automated DAS monitoring workflows to improve signal-to-noise acquisition quality.",
      ],
      tools: ["Scientific Computing", "Numerical Simulation", "Signal Processing"],
    },
    {
      company: "Schlumberger",
      role: "Master Thesis Project",
      location: "Cambridge, United Kingdom",
      startDate: "2013-03",
      endDate: "2013-08",
      achievements: [
        "Developed signal processing algorithms to improve signal-to-noise ratios.",
        "Built inversion algorithms to localize hypocentres of induced seismic earthquakes.",
        "Published related research through EarthDoc.",
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
