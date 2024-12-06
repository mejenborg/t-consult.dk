export interface MenuItem {
  label?: string;
  path?: string;
  element: JSX.Element;
  sections?: PageSection[];
}

export interface PageSection {
  label: string;
  id: string;
}
