import React from 'react';
import { X } from 'lucide-react';
import { Attraction } from '../../types/types';
import { useAppContext } from '../../context/AppContext';

interface AttractionModalProps {
  attraction: Attraction;
  onClose: () => void;
}

const AttractionModal: React.FC<AttractionModalProps> = ({ attraction, onClose }) => {
  const { language } = useAppContext();

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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto paper-texture hand-drawn-card"
        style={{
          borderRadius: "20px 18px 22px 16px / 16px 20px 18px 22px",
        }}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-title font-bold">
              {language === "zh" ? (
                <span lang="zh-TW">{attraction.name.zh}</span>
              ) : (
                attraction.name.en
              )}
            </h2>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="hand-drawn-icon mr-3 overflow-visible">
              {attraction.icon}
            </div>
            <span className="text-gray-600">
              {getTypeLabel(attraction.type)}
            </span>
          </div>

          {attraction.introduction && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                {language === "zh" ? <span lang="zh-TW">介紹</span> : "Introduction"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === "zh" ? (
                  <span lang="zh-TW">{attraction.introduction.zh}</span>
                ) : (
                  attraction.introduction.en
                )}
              </p>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button 
              onClick={onClose}
              className="hand-drawn-btn px-4 py-2 bg-cta-orange text-white"
            >
              {language === "zh" ? <span lang="zh-TW">關閉</span> : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionModal;
