export interface AboutLink {
  label: string
  href: string
  icon?: string
}

export interface AboutBuildInfo {
  branch?: string
  commit?: string
  builtOn?: string
  version?: string
}

/** One step in the "Getting started" quick-start list shown inside AboutContent. */
export interface AboutQuickStartStep {
  /** UnoCSS icon class, e.g. `i-solar:settings-outline`. */
  icon?: string
  /** Short heading for the step. */
  title: string
  /** One or two sentence explanation of what the user does in this step. */
  body: string
}
