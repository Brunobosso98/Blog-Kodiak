/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ADMIN_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
