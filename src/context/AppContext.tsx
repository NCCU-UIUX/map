import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Attraction } from '../types/types';

type LanguageKey = "zh" | "en";

interface AppContextType {
  language: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  showFamilyFriendly: boolean;
  setShowFamilyFriendly: (show: boolean) => void;
  showTrailsOnly: boolean;
  setShowTrailsOnly: (show: boolean) => void;
  selectedAttraction: Attraction | null;
  setSelectedAttraction: (attraction: Attraction | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageKey>("zh");
  const [showFamilyFriendly, setShowFamilyFriendly] = useState(false);
  const [showTrailsOnly, setShowTrailsOnly] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        showFamilyFriendly,
        setShowFamilyFriendly,
        showTrailsOnly,
        setShowTrailsOnly,
        selectedAttraction,
        setSelectedAttraction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
