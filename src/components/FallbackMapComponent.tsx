import React, { useState } from "react";
import { Map, ZoomIn, ZoomOut } from "lucide-react";

interface FallbackMapProps {
  language: "zh" | "en";
  center: { lat: number; lng: number };
  zoom: number;
}

/**
 * 替代地圖組件 - 顯示靜態地圖圖片
 */
const FallbackMapComponent: React.FC<FallbackMapProps> = ({ language }) => {
  // 地图图片地址
  const mapImageUrl = "/images/map.png";

  // 缩放状态
  const [scale, setScale] = useState(1);

  // 处理缩放
  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-3xl overflow-hidden">
      {/* 地圖頭部信息 */}
      <div className="absolute top-0 left-0 right-0 bg-nature-green bg-opacity-20 text-gray-800 px-4 py-3 z-50">
        <div className="flex justify-between items-center">
          <div className="text-lg text-gray-800 flex items-center">
            <Map className="w-5 h-5 mr-2 text-nature-green" />
            {language === "zh" ? (
              <span lang="zh-TW">阿里山秘境小旅行</span>
            ) : (
              "Alishan Secret Tour Map"
            )}
          </div>

          {/* 缩放控制按钮 */}
          <div className="flex space-x-2">
            <button
              onClick={handleZoomIn}
              className="bg-white p-1 rounded-full shadow-sm hover:bg-gray-100"
              aria-label="放大"
            >
              <ZoomIn className="w-5 h-5 text-nature-green" />
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white p-1 rounded-full shadow-sm hover:bg-gray-100"
              aria-label="缩小"
            >
              <ZoomOut className="w-5 h-5 text-nature-green" />
            </button>
          </div>
        </div>
      </div>

      {/* 静态地图图片，带缩放功能 */}
      <div className="absolute inset-0 mt-12 mb-10 flex items-center justify-center bg-sky-blue bg-opacity-10 overflow-auto">
        <div
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.3s ease",
          }}
          className="transform-origin-center"
        >
          <img
            src={mapImageUrl}
            alt={
              language === "zh"
                ? "阿里山秘境小旅行地圖"
                : "Alishan Secret Tour Map"
            }
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* 地图信息栏 */}
      <div className="absolute bottom-0 left-0 right-0 bg-earth-gray bg-opacity-20 p-3 text-sm text-gray-800">
        <div className="font-title">
          {language === "zh" ? (
            <span lang="zh-TW">阿里山秘境小旅行</span>
          ) : (
            "Alishan Secret Tour Map"
          )}
        </div>
        <div className="text-xs text-gray-600">
          {language === "zh" ? (
            <span lang="zh-TW">包含茶園、森林步道等景點</span>
          ) : (
            "Includes tea gardens, forest trails and attractions"
          )}
        </div>
      </div>
    </div>
  );
};

export default FallbackMapComponent;
