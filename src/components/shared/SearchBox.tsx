import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const SearchBox: React.FC = () => {
  const { language } = useAppContext();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 導航到地圖頁面
    navigate('/map');
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      <form onSubmit={handleSearch} className="flex flex-col items-center">
        <input
          type="text"
          placeholder={language === "zh" ? "搜索步道、景點..." : "Search trails, attractions..."}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-green"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-sun-yellow text-gray-800 rounded-lg hand-drawn-btn hover:bg-opacity-90 transition-colors"
        >
          {language === "zh" ? <span lang="zh-TW">開始探索</span> : "Start Exploring"}
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
