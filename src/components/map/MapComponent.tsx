import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import EmbeddedGoogleMapComponent from "../EmbeddedGoogleMapComponent";
import FallbackMapComponent from "../FallbackMapComponent";
import { mapCenter, mapZoom } from "../../data/mapData";

const MapComponent: React.FC = () => {
  const { language } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [useEmbeddedMap, setUseEmbeddedMap] = useState(true);

  useEffect(() => {
    // Check Google Maps API availability
    checkGoogleMapsApi();
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Check if Google Maps API is available
  const checkGoogleMapsApi = () => {
    if (typeof window.google === 'undefined') {
      setUseEmbeddedMap(true);
    }
  };

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center bg-nature-green bg-opacity-10">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-nature-green border-r-transparent mb-4"></div>
            <p className="font-title text-2xl text-gray-800">
              {language === "zh" ? <span lang="zh-TW">載入地圖中...</span> : "Loading Map..."}
            </p>
          </div>
        </div>
      ) : useEmbeddedMap ? (
        <EmbeddedGoogleMapComponent language={language} />
      ) : (
        <FallbackMapComponent 
          center={mapCenter} 
          zoom={mapZoom} 
          language={language} 
        />
      )}
    </div>
  );
};

export default MapComponent;
