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
