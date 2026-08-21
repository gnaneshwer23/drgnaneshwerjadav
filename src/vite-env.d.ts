/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_PROJECT_ID?: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_CONSULT_MINUTES?: string;
  readonly VITE_CONSULT_PRICE?: string;
  readonly VITE_CONSULT_CURRENCY?: string;
  readonly VITE_CALENDAR_URL?: string;
  readonly VITE_STRIPE_CONSULT_URL?: string;
  readonly VITE_GUMROAD_BUILD_BEFORE_YOU_SCALE?: string;
  readonly VITE_GUMROAD_DECIDE_THEN_BUILD?: string;
  readonly VITE_GUMROAD_DELIVER_VALUE?: string;
  readonly VITE_GUMROAD_DHARMA_IN_THE_DARK?: string;
  readonly VITE_GUMROAD_HUMAN_OS?: string;
  readonly VITE_GUMROAD_MEANINGFUL_LIFE?: string;
  readonly VITE_GUMROAD_BIOLOGY_OF_OPPORTUNITY?: string;
  readonly VITE_GUMROAD_COMPLETE_PRODUCT?: string;
  readonly VITE_GUMROAD_FRAMEWORK_DECIDE_THEN_BUILD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
