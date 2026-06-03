export function getFormAction(): string {
  if (import.meta.env.PUBLIC_FORM_ACTION) {
    return import.meta.env.PUBLIC_FORM_ACTION;
  }

  if (import.meta.env.PUBLIC_FORMSPREE_ID) {
    return `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_ID}`;
  }

  return "#";
}

export function getFormMethod(): "POST" {
  return "POST";
}
