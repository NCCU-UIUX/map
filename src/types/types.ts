import { ReactNode } from "react";

export interface TrailCoordinate {
  lat: number;
  lng: number;
}

export interface Trail {
  id: number;
  name: { zh: string; en: string };
  url: string;
  color: string;
  familyFriendly: boolean;
  coordinates: TrailCoordinate[];
  difficulty: string;
  distance: string;
  time: string;
  teaGardens?: TeaGarden[];
  story?: { zh: string; en: string };
}

export interface TeaGarden {
  id: number;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  teaTypes: string[];
  location: TrailCoordinate;
  imageUrl?: string;
}

export interface Attraction {
  id: number;
  name: { zh: string; en: string };
  type: string;
  icon: ReactNode;
  position: TrailCoordinate;
  familyFriendly: boolean;
  onTrail: number;
  introduction?: { zh: string; en: string };
}

export type LanguageKey = "zh" | "en";
