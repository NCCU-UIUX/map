import React from 'react';
import { Coffee, Users, Home, Waves, Mountain, Trees } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import MapComponent from '../components/map/MapComponent';
import { trails, attractions } from '../data/mapData';

const MapPage: React.FC = () => {
  const { language, showFamilyFriendly, setShowFamilyFriendly, showTrailsOnly, setShowTrailsOnly, setSelectedAttraction } = useAppContext();

  // Filter attractions based on current filters
  const filteredAttractions = attractions.filter(attraction => {
    if (showFamilyFriendly && !attraction.familyFriendly) {
      return false;
    }
    if (showTrailsOnly && attraction.onTrail === 0) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-title mb-2">
            {language === "zh" ? (
              <span lang="zh-TW">深坑互動地圖</span>
            ) : (
              "Shenkeng Interactive Map"
            )}
          </h1>
          <p className="text-gray-600">
            {language === "zh" ? (
              <span lang="zh-TW">探索深坑區的步道和景點，規劃您的完美行程。</span>
            ) : (
              "Explore Shenkeng's trails and attractions to plan your perfect itinerary."
            )}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Filters and Trail List */}
          <div className="lg:w-1/4">
            <div className="bg-earth-gray/10 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-3">
                {language === "zh" ? <span lang="zh-TW">過濾選項</span> : "Filters"}
              </h2>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showFamilyFriendly}
                    onChange={() => setShowFamilyFriendly(!showFamilyFriendly)}
                    className="form-checkbox h-5 w-5 text-nature-green rounded"
                  />
                  <span>
                    {language === "zh" ? <span lang="zh-TW">僅顯示親子友善</span> : "Family-friendly only"}
                  </span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showTrailsOnly}
                    onChange={() => setShowTrailsOnly(!showTrailsOnly)}
                    className="form-checkbox h-5 w-5 text-nature-green rounded"
                  />
                  <span>
                    {language === "zh" ? <span lang="zh-TW">僅顯示步道上的景點</span> : "On-trail attractions only"}
                  </span>
                </label>
              </div>
            </div>
            
            <div className="bg-earth-gray/10 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">
                {language === "zh" ? <span lang="zh-TW">步道路線</span> : "Trail Routes"}
              </h2>
              
              <div className="space-y-4">
                {trails.map(trail => (
                  <div 
                    key={trail.id}
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => window.open(trail.url, "_blank")}
                  >
                    <div className="flex items-center mb-2">
                      <div 
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: trail.color }}
                      ></div>
                      <h3 className="font-medium">
                        {language === "zh" ? trail.name.zh : trail.name.en}
                      </h3>
                    </div>
                    
                    <div className="text-xs text-gray-500 flex justify-between">
                      <span>{trail.distance}</span>
                      <span>{trail.time}</span>
                      {trail.familyFriendly && (
                        <span className="text-nature-green">
                          {language === "zh" ? "親子友善" : "Family-friendly"}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content - Map */}
          <div className="lg:w-2/4 h-[600px]">
            <MapComponent />
          </div>
          
          {/* Right Sidebar - Attractions */}
          <div className="lg:w-1/4">
            <div className="bg-earth-gray/10 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">
                {language === "zh" ? <span lang="zh-TW">景點列表</span> : "Attractions"}
              </h2>
              
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {filteredAttractions.map(attraction => (
                  <div 
                    key={attraction.id}
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedAttraction(attraction)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-600">
                        {attraction.type === "temple" ? (
                          <Home className="w-5 h-5 text-cta-orange" />
                        ) : attraction.type === "trail" ? (
                          <Trees className="w-5 h-5 text-nature-green" />
                        ) : attraction.type === "mountain" ? (
                          <Mountain className="w-5 h-5 text-earth-gray" />
                        ) : attraction.type === "rest" ? (
                          <Coffee className="w-5 h-5 text-sun-yellow" />
                        ) : attraction.type === "stairs" ? (
                          <Waves className="w-5 h-5 text-sky-blue" />
                        ) : attraction.type === "monastery" ? (
                          <Home className="w-5 h-5 text-cta-orange" />
                        ) : (
                          <Users className="w-5 h-5 text-highlight-teal" />
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-medium">
                          {language === "zh" ? attraction.name.zh : attraction.name.en}
                        </h3>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                          {attraction.familyFriendly && (
                            <span className="bg-nature-green/20 text-nature-green px-1.5 py-0.5 rounded-full mr-2">
                              {language === "zh" ? "親子" : "Family"}
                            </span>
                          )}
                          {attraction.onTrail > 0 && (
                            <span className="bg-path-purple/20 text-path-purple px-1.5 py-0.5 rounded-full">
                              {language === "zh" ? `路線 ${attraction.onTrail}` : `Trail ${attraction.onTrail}`}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
