/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORM_ACTION?: string;
  readonly PUBLIC_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
