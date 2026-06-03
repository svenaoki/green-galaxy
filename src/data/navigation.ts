export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/green-galaxy" },
  { label: "About", href: "/green-galaxy/about" },
  { label: "Resume", href: "/green-galaxy/resume" },
  { label: "Contact", href: "/green-galaxy/contact" },
];
