import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Mountain, Coffee } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { trails } from '../data/mapData';
import mapImage from '../assets/images/map.png';

const HomePage: React.FC = () => {
  const { language } = useAppContext();

  return (
    <div className="bg-gradient-to-b from-white to-nature-green/10">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-title mb-4">
              {language === "zh" ? (
                <span lang="zh-TW">探索深坑步道之美</span>
              ) : (
                "Explore Shenkeng Trails"
              )}
            </h1>
            <p className="text-lg mb-6 text-gray-700 max-w-3xl mx-auto">
              {language === "zh" ? (
                <span lang="zh-TW">
                  深坑區擁有豐富的自然景觀和歷史文化，通過我們的互動地圖，輕鬆規劃您的深坑步道之旅。
                </span>
              ) : (
                "Shenkeng District offers rich natural landscapes and historical culture. Plan your Shenkeng trail journey easily with our interactive map."
              )}
            </p>
            
            <Link 
              to="/map" 
              className="inline-block px-6 py-3 bg-cta-orange text-white rounded-lg hand-drawn-btn hover:bg-opacity-90 transition-colors"
            >
              {language === "zh" ? (
                <span lang="zh-TW">開始探索</span>
              ) : (
                "Start Exploring"
              )}
            </Link>
          </div>
          
          <div className="mt-12">
            <div className="relative hand-drawn-card p-2 bg-white max-w-4xl mx-auto">
              <img 
                src={mapImage} 
                alt={language === "zh" ? "深坑步道地圖" : "Shenkeng Trail Map"}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trails Section */}
      <section className="py-12 px-4 bg-earth-gray/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-title mb-8 text-center">
            {language === "zh" ? (
              <span lang="zh-TW">精選步道路線</span>
            ) : (
              "Featured Trail Routes"
            )}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trails.map(trail => (
              <div 
                key={trail.id}
                className="bg-white p-6 rounded-lg shadow-md hand-drawn-card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: trail.color }}
                  >
                    {trail.familyFriendly ? (
                      <Coffee className="text-white w-5 h-5" />
                    ) : (
                      <Mountain className="text-white w-5 h-5" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === "zh" ? trail.name.zh : trail.name.en}
                  </h3>
                </div>
                
                <div className="mb-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="block text-gray-500 text-xs">
                      {language === "zh" ? "難度" : "Difficulty"}
                    </span>
                    <span className="font-medium">
                      {trail.difficulty}
                    </span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="block text-gray-500 text-xs">
                      {language === "zh" ? "距離" : "Distance"}
                    </span>
                    <span className="font-medium">
                      {trail.distance}
                    </span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="block text-gray-500 text-xs">
                      {language === "zh" ? "時間" : "Time"}
                    </span>
                    <span className="font-medium">
                      {trail.time}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  {trail.familyFriendly && (
                    <span className="text-xs bg-nature-green text-white px-2 py-1 rounded-full">
                      {language === "zh" ? "親子友善" : "Family-friendly"}
                    </span>
                  )}
                  
                  <Link 
                    to={`/trails/${trail.id}`}
                    className="text-cta-orange hover:underline text-sm font-medium"
                  >
                    {language === "zh" ? "查看詳情" : "View Details"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/trails"
              className="inline-block px-5 py-2 border-2 border-nature-green text-nature-green rounded-lg hover:bg-nature-green hover:text-white transition-colors"
            >
              {language === "zh" ? "查看所有步道" : "View All Trails"}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-sky-blue/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Map className="w-16 h-16 text-sky-blue mx-auto mb-4" />
          <h2 className="text-3xl font-title mb-4">
            {language === "zh" ? (
              <span lang="zh-TW">準備好開始您的深坑探險了嗎？</span>
            ) : (
              "Ready to start your Shenkeng adventure?"
            )}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {language === "zh" ? (
              <span lang="zh-TW">
                使用我們的互動地圖探索深坑區的步道和景點，規劃您的完美行程。
              </span>
            ) : (
              "Use our interactive map to explore Shenkeng's trails and attractions, and plan your perfect itinerary."
            )}
          </p>
          <Link 
            to="/map"
            className="inline-block px-6 py-3 bg-cta-orange text-white rounded-lg hand-drawn-btn hover:bg-opacity-90 transition-colors"
          >
            {language === "zh" ? "前往互動地圖" : "Go to Interactive Map"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
