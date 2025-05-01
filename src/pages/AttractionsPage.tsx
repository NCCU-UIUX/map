import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { attractions } from '../data/mapData';

const AttractionsPage: React.FC = () => {
  const { language, setSelectedAttraction } = useAppContext();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter attractions based on selected type
  const filteredAttractions = activeFilter 
    ? attractions.filter(attraction => attraction.type === activeFilter)
    : attractions;

  // Group attractions by type for the filter buttons
  const attractionTypes = Array.from(new Set(attractions.map(attraction => attraction.type)));
  
  const getTypeLabel = (type: string): string => {
    if (language === "zh") {
      switch (type) {
        case "temple": return "寺廟";
        case "trail": return "步道";
        case "mountain": return "山岳";
        case "rest": return "休息區";
        case "stairs": return "階梯";
        case "monastery": return "修道院";
        default: return "";
      }
    } else {
      switch (type) {
        case "temple": return "Temple";
        case "trail": return "Trail";
        case "mountain": return "Mountain";
        case "rest": return "Rest Area";
        case "stairs": return "Stairs";
        case "monastery": return "Monastery";
        default: return "";
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-sky-blue/5">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-title mb-2">
            {language === "zh" ? (
              <span lang="zh-TW">深坑景點介紹</span>
            ) : (
              "Shenkeng Attractions"
            )}
          </h1>
          <p className="text-gray-600">
            {language === "zh" ? (
              <span lang="zh-TW">探索深坑區的特色景點，了解當地的自然風光和文化遺產。</span>
            ) : (
              "Explore Shenkeng's featured attractions and learn about the local natural scenery and cultural heritage."
            )}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === null 
                ? 'bg-cta-orange text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {language === "zh" ? "全部" : "All"}
          </button>
          
          {attractionTypes.map(type => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === type 
                  ? 'bg-cta-orange text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {getTypeLabel(type)}
            </button>
          ))}
        </div>

        {/* Attractions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map(attraction => (
            <div 
              key={attraction.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hand-drawn-card hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedAttraction(attraction)}
            >
              <div className="h-48 bg-gray-200 relative">
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: attraction.type === "temple" || attraction.type === "monastery"
                      ? "linear-gradient(135deg, var(--cta-orange) 0%, var(--sun-yellow) 100%)"
                      : attraction.type === "trail"
                      ? "linear-gradient(135deg, var(--nature-green) 0%, var(--highlight-teal) 100%)"
                      : attraction.type === "mountain"
                      ? "linear-gradient(135deg, var(--earth-gray) 0%, var(--path-purple) 100%)"
                      : attraction.type === "rest"
                      ? "linear-gradient(135deg, var(--sun-yellow) 0%, var(--cta-orange) 100%)"
                      : "linear-gradient(135deg, var(--sky-blue) 0%, var(--highlight-teal) 100%)"
                  }}
                >
                  <div className="text-white transform scale-150">
                    {attraction.icon}
                  </div>
                </div>
                
                {attraction.familyFriendly && (
                  <div className="absolute top-2 right-2 bg-nature-green text-white text-xs px-2 py-1 rounded-full">
                    {language === "zh" ? "親子友善" : "Family-friendly"}
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {language === "zh" ? attraction.name.zh : attraction.name.en}
                </h2>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {getTypeLabel(attraction.type)}
                  </span>
                  
                  {attraction.onTrail > 0 && (
                    <span className="text-xs bg-path-purple/20 text-path-purple px-2 py-1 rounded-full">
                      {language === "zh" 
                        ? `路線 ${attraction.onTrail}` 
                        : `Trail ${attraction.onTrail}`}
                    </span>
                  )}
                </div>
                
                {attraction.introduction && (
                  <p className="mt-3 text-gray-700 line-clamp-3">
                    {language === "zh" 
                      ? attraction.introduction.zh 
                      : attraction.introduction.en}
                  </p>
                )}
                
                <button 
                  className="mt-4 text-cta-orange hover:underline text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAttraction(attraction);
                  }}
                >
                  {language === "zh" ? "查看詳情" : "View Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredAttractions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {language === "zh" 
                ? "沒有符合條件的景點" 
                : "No attractions match your filter"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttractionsPage;
