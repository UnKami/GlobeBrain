export enum MarkerType {
  Ambassadors = 'Ambassadors',
  Centers = 'Centers',
  Projects = 'Projects',
  Pledges = 'Pledges',
  Resolutions = 'Resolutions',
}

export interface MarkerData {
  id: string;
  type: MarkerType;
  title: string;
  country: string;
  lat: number;
  lng: number;
  description: string;
  imageUrl?: string;
  link?: string;
}

export interface FilterState {
  [key: string]: boolean;
}
