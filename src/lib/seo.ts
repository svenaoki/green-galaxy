import { site } from "../data/site";

export function buildPageTitle(title?: string): string {
  return title ? `${title} — ${site.name}` : site.name;
}
