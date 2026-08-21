const STORAGE_KEY = "drjadav-consult-progress";

export type ConsultProgress = "idle" | "slot" | "paid";

export function readConsultProgress(): ConsultProgress {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY);
    if (value === "slot" || value === "paid") return value;
  } catch {
    /* private mode / blocked storage */
  }
  return "idle";
}

export function writeConsultProgress(progress: ConsultProgress) {
  try {
    sessionStorage.setItem(STORAGE_KEY, progress);
  } catch {
    /* private mode / blocked storage */
  }
}
