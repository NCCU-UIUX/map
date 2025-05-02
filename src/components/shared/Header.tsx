import React, { useState } from 'react';
import { Map, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Header: React.FC = () => {
  const { language, setLanguage } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <Map className="w-8 h-8 text-nature-green" />
            <h1 className="text-xl md:text-2xl font-title">
              {language === "zh" ? (
                <span lang="zh-TW">深坑步道探索</span>
              ) : (
                "Shenkeng Trail Explorer"
              )}
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') ? 'text-nature-green' : 'hover:text-nature-green'}`}
            >
              {language === "zh" ? <span lang="zh-TW">首頁</span> : "Home"}
            </Link>
            <Link 
              to="/map" 
              className={`font-medium transition-colors ${isActive('/map') ? 'text-nature-green' : 'hover:text-nature-green'}`}
            >
              {language === "zh" ? <span lang="zh-TW">互動地圖</span> : "Interactive Map"}
            </Link>
            <Link 
              to="/trails" 
              className={`font-medium transition-colors ${isActive('/trails') ? 'text-nature-green' : 'hover:text-nature-green'}`}
            >
              {language === "zh" ? <span lang="zh-TW">推薦路線</span> : "Recommended Trails"}
            </Link>
            <Link 
              to="/attractions" 
              className={`font-medium transition-colors ${isActive('/attractions') ? 'text-nature-green' : 'hover:text-nature-green'}`}
            >
              {language === "zh" ? <span lang="zh-TW">景點介紹</span> : "Attractions"}
            </Link>
            <Link 
              to="/game-checkin" 
              className={`font-medium transition-colors ${isActive('/game-checkin') ? 'text-nature-green' : 'hover:text-nature-green'}`}
            >
              {language === "zh" ? <span lang="zh-TW">遊戲打卡</span> : "Game Check-In"}
            </Link>
            
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 bg-sky-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              {language === "zh" ? "EN" : "中"}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 bg-sky-blue text-white rounded-md hover:bg-opacity-90 transition-colors mr-3"
            >
              {language === "zh" ? "EN" : "中"}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-nature-green focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 pb-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors px-2 py-1 rounded ${isActive('/') ? 'bg-nature-green/10 text-nature-green' : 'hover:bg-gray-100'}`}
                onClick={closeMobileMenu}
              >
                {language === "zh" ? <span lang="zh-TW">首頁</span> : "Home"}
              </Link>
              <Link 
                to="/map" 
                className={`font-medium transition-colors px-2 py-1 rounded ${isActive('/map') ? 'bg-nature-green/10 text-nature-green' : 'hover:bg-gray-100'}`}
                onClick={closeMobileMenu}
              >
                {language === "zh" ? <span lang="zh-TW">互動地圖</span> : "Interactive Map"}
              </Link>
              <Link 
                to="/trails" 
                className={`font-medium transition-colors px-2 py-1 rounded ${isActive('/trails') ? 'bg-nature-green/10 text-nature-green' : 'hover:bg-gray-100'}`}
                onClick={closeMobileMenu}
              >
                {language === "zh" ? <span lang="zh-TW">推薦路線</span> : "Recommended Trails"}
              </Link>
              <Link 
                to="/attractions" 
                className={`font-medium transition-colors px-2 py-1 rounded ${isActive('/attractions') ? 'bg-nature-green/10 text-nature-green' : 'hover:bg-gray-100'}`}
                onClick={closeMobileMenu}
              >
                {language === "zh" ? <span lang="zh-TW">景點介紹</span> : "Attractions"}
              </Link>
              <Link 
                to="/game-checkin" 
                className={`font-medium transition-colors px-2 py-1 rounded ${isActive('/game-checkin') ? 'bg-nature-green/10 text-nature-green' : 'hover:bg-gray-100'}`}
                onClick={closeMobileMenu}
              >
                {language === "zh" ? <span lang="zh-TW">遊戲打卡</span> : "Game Check-In"}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
