export interface GlossaryContent {
  title: string;
  slug: string;
  lastUpdated: string;
  sections: GlossarySection[];
  navigationIndex?: NavigationIndex[];
}

export interface GlossarySection {
  heading: string;
  content: string | string[] | GlossarySubsection[];
}

export interface GlossarySubsection {
  subheading?: string;
  content: string | string[];
}

export interface NavigationIndex {
  letter: string;
  terms: string[];
}

export interface GlossaryData {
  [key: string]: GlossaryContent;
}
