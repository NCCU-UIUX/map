import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const NotFoundPage: React.FC = () => {
  const { language } = useAppContext();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center p-8">
        <Map className="w-16 h-16 text-nature-green mx-auto mb-4" />
        <h1 className="text-4xl font-title mb-4">
          {language === "zh" ? (
            <span lang="zh-TW">頁面未找到</span>
          ) : (
            "Page Not Found"
          )}
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {language === "zh" ? (
            <span lang="zh-TW">
              很抱歉，您要尋找的頁面似乎已經迷路了。讓我們帶您回到地圖上。
            </span>
          ) : (
            "Sorry, the page you're looking for seems to have wandered off the trail. Let's get you back on the map."
          )}
        </p>
        <Link 
          to="/"
          className="inline-block px-6 py-3 bg-cta-orange text-white rounded-lg hand-drawn-btn hover:bg-opacity-90 transition-colors"
        >
          {language === "zh" ? (
            <span lang="zh-TW">返回首頁</span>
          ) : (
            "Return to Home"
          )}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
