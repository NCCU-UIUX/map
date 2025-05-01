import React from 'react';
import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Header: React.FC = () => {
  const { language, setLanguage } = useAppContext();

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Map className="w-8 h-8 text-nature-green" />
            <h1 className="text-2xl font-title">
              {language === "zh" ? (
                <span lang="zh-TW">深坑步道探索</span>
              ) : (
                "Shenkeng Trail Explorer"
              )}
            </h1>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="font-medium hover:text-nature-green transition-colors"
            >
              {language === "zh" ? <span lang="zh-TW">首頁</span> : "Home"}
            </Link>
            <Link 
              to="/map" 
              className="font-medium hover:text-nature-green transition-colors"
            >
              {language === "zh" ? <span lang="zh-TW">互動地圖</span> : "Interactive Map"}
            </Link>
            <Link 
              to="/trails" 
              className="font-medium hover:text-nature-green transition-colors"
            >
              {language === "zh" ? <span lang="zh-TW">步道資訊</span> : "Trail Info"}
            </Link>
            <Link 
              to="/attractions" 
              className="font-medium hover:text-nature-green transition-colors"
            >
              {language === "zh" ? <span lang="zh-TW">景點介紹</span> : "Attractions"}
            </Link>
            
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 bg-sky-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              {language === "zh" ? "EN" : "中"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
