import React, { useState, useEffect } from "react";
import {
  Map,
  Flag,
  Coffee,
  Users,
  MapPin,
  Home,
  Sun,
  Waves,
  Mountain,
  Trees,
} from "lucide-react";
import FallbackMapComponent from "./components/FallbackMapComponent";
import EmbeddedGoogleMapComponent from "./components/EmbeddedGoogleMapComponent";

// 定义类型以修复TypeScript错误
interface TrailCoordinate {
  lat: number;
  lng: number;
}

interface Trail {
  id: number;
  name: { zh: string; en: string };
  url: string;
  color: string;
  familyFriendly: boolean;
  coordinates: TrailCoordinate[];
  difficulty: string;
  distance: string;
  time: string;
}

interface Attraction {
  id: number;
  name: { zh: string; en: string };
  type: string;
  icon: React.ReactNode;
  position: TrailCoordinate;
  familyFriendly: boolean;
  onTrail: number;
}

type LanguageKey = "zh" | "en";

// 主要應用程式組件
export default function InteractiveMap() {
  // 狀態管理
  const [language, setLanguage] = useState<LanguageKey>("zh"); // 'zh' 中文, 'en' 英文
  const [showFamilyFriendly, setShowFamilyFriendly] = useState(false);
  const [showTrailsOnly, setShowTrailsOnly] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useEmbeddedMap, setUseEmbeddedMap] = useState(true); // 更改為默認顯示嵌入式地圖

  useEffect(() => {
    // 模拟加载
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // 地图中心 - 設置為深坑區中心的位置
  const mapCenter = { lat: 25.0014, lng: 121.6242 };
  const mapZoom = 14; // 深坑區視圖

  // 路線資料 - 實際路線數據
  const trails: Trail[] = [
    {
      id: 1,
      name: {
        zh: "親子輕鬆探索路線",
        en: "Family-friendly Exploration Route",
      },
      url: "https://www.google.com/maps/dir/向天溪階梯/鎮南宮石媽祖古道/加爾默羅聖母聖衣隱修院",
      color: "var(--nature-green)", // 使用CSS变量
      familyFriendly: true,
      difficulty: "简单",
      distance: "3.8公里",
      time: "1小时30分钟",
      coordinates: [
        { lat: 25.0, lng: 121.618 }, // 向天溪階梯
        { lat: 24.997, lng: 121.621 }, // 鎮南宮石媽祖古道
        { lat: 24.995, lng: 121.625 }, // 加爾默羅聖母聖衣隱修院
      ],
    },
    {
      id: 2,
      name: {
        zh: "健行挑戰路線",
        en: "Hiking Challenge Route",
      },
      url: "https://www.google.com/maps/dir/大崎嶺步道/向天溪階梯/阿柔洋山/猴山岳",
      color: "var(--path-purple)", // 使用CSS变量
      familyFriendly: false,
      difficulty: "中等",
      distance: "9公里",
      time: "2小时37分钟",
      coordinates: [
        { lat: 25.005, lng: 121.615 }, // 大崎嶺步道
        { lat: 25.0, lng: 121.618 }, // 向天溪階梯
        { lat: 24.993, lng: 121.628 }, // 阿柔洋山
        { lat: 24.99, lng: 121.632 }, // 猴山岳
      ],
    },
  ];

  // 景點資料 - 實際景點數據
  const attractions: Attraction[] = [
    {
      id: 1,
      name: {
        zh: "向天溪階梯",
        en: "Xiangtian Creek Stairs",
      },
      type: "stairs",
      icon: <Waves className="text-sky-blue" />,
      position: { lat: 25.0, lng: 121.618 },
      familyFriendly: true,
      onTrail: 1,
    },
    {
      id: 2,
      name: {
        zh: "鎮南宮石媽祖古道",
        en: "Zhennan Temple Stone Mazu Trail",
      },
      type: "temple",
      icon: <Home className="text-earth-gray" />,
      position: { lat: 24.997, lng: 121.621 },
      familyFriendly: true,
      onTrail: 1,
    },
    {
      id: 3,
      name: {
        zh: "加爾默羅聖母聖衣隱修院",
        en: "Carmelite Monastery",
      },
      type: "monastery",
      icon: <Home className="text-earth-gray" />,
      position: { lat: 24.995, lng: 121.625 },
      familyFriendly: true,
      onTrail: 1,
    },
    {
      id: 4,
      name: {
        zh: "大崎嶺步道",
        en: "Daqiling Trail",
      },
      type: "trail",
      icon: <Trees className="text-nature-green" />,
      position: { lat: 25.005, lng: 121.615 },
      familyFriendly: false,
      onTrail: 2,
    },
    {
      id: 5,
      name: {
        zh: "阿柔洋山",
        en: "Arouyang Mountain",
      },
      type: "mountain",
      icon: <Mountain className="text-earth-gray" />,
      position: { lat: 24.993, lng: 121.628 },
      familyFriendly: false,
      onTrail: 2,
    },
    {
      id: 6,
      name: {
        zh: "猴山岳",
        en: "Houshan Mountain",
      },
      type: "mountain",
      icon: <Mountain className="text-earth-gray" />,
      position: { lat: 24.99, lng: 121.632 },
      familyFriendly: false,
      onTrail: 2,
    },
    {
      id: 7,
      name: {
        zh: "深坑老街休息區",
        en: "Shenkeng Old Street Rest Area",
      },
      type: "rest",
      icon: <Coffee className="text-cta-orange" />,
      position: { lat: 25.002, lng: 121.62 },
      familyFriendly: true,
      onTrail: 1,
    },
  ];

  // 顯示提示框
  const handleAttractionHover = (id: number) => {
    setActiveTooltip(id);
  };

  // 隱藏提示框
  const handleAttractionLeave = () => {
    setActiveTooltip(null);
  };

  // 語言切換
  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  // 翻譯文本
  const t = {
    title: {
      zh: "深坑步道探險",
      en: "Shenkeng Trails Explorer",
    },
    subtitle: {
      zh: "自然徒步旅行導覽",
      en: "Natural Hiking Guide",
    },
    showFamilyFriendly: { zh: "顯示親子友善點", en: "Show Family-Friendly" },
    showTrailsOnly: { zh: "只看路線", en: "Routes Only" },
    language: { zh: "切換至英文", en: "Switch to Chinese" },
    trails: { zh: "路線", en: "Routes" },
    attractions: { zh: "景點", en: "Attractions" },
    openGoogleMaps: { zh: "在Google地圖開啟", en: "Open in Google Maps" },
    loading: { zh: "載入中...", en: "Loading..." },
    apiNotice: {
      zh: "注意：請在.env文件中設置有效的Google Maps API密鑰",
      en: "Note: Please set a valid Google Maps API key in the .env file",
    },
    exploreNow: { zh: "立即探索", en: "Explore Now" },
    difficulty: { zh: "難度", en: "Difficulty" },
    distance: { zh: "距離", en: "Distance" },
    time: { zh: "預估時間", en: "Est. Time" },
    facilities: { zh: "服務設施", en: "Facilities" },
    restroom: { zh: "廁所", en: "Restroom" },
    parking: { zh: "停車場", en: "Parking" },
    foodOptions: { zh: "餐飲選擇", en: "Food Options" },
    resetView: { zh: "重置視圖", en: "Reset View" },
  };

  // 检查Google Maps API是否可用
  const checkGoogleMapsApi = () => {
    if (window.google && window.google.maps) {
      setUseEmbeddedMap(false);
    }
  };

  useEffect(() => {
    // 检查API可用性
    checkGoogleMapsApi();

    // 也添加事件监听器以在加载后检查
    window.addEventListener("google-maps-loaded", checkGoogleMapsApi);

    return () => {
      window.removeEventListener("google-maps-loaded", checkGoogleMapsApi);
    };
  }, []);

  // 生成随机水彩形状位置
  const watercolorShapes = [
    {
      top: "5%",
      left: "10%",
      width: "300px",
      height: "300px",
      className: "watercolor-shape green",
    },
    {
      top: "60%",
      left: "80%",
      width: "250px",
      height: "250px",
      className: "watercolor-shape blue",
    },
    {
      top: "30%",
      left: "5%",
      width: "200px",
      height: "200px",
      className: "watercolor-shape yellow",
    },
  ];

  return (
    <div className="min-h-screen bg-white watercolor-bg flex flex-col">
      {/* 水彩背景元素 */}
      {watercolorShapes.map((shape, i) => (
        <div
          key={i}
          className={shape.className}
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.width,
            height: shape.height,
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        />
      ))}

      {/* 手繪插圖元素 */}
      <div
        className="mountain-illustration"
        style={{ top: "15%", right: "5%" }}
      ></div>
      <div
        className="mountain-illustration"
        style={{ top: "70%", left: "8%", transform: "scale(0.8)" }}
      ></div>
      <div
        className="plant-illustration"
        style={{ top: "25%", left: "3%" }}
      ></div>
      <div
        className="plant-illustration"
        style={{ bottom: "15%", right: "4%" }}
      ></div>
      <div
        className="water-illustration"
        style={{ bottom: "30%", left: "15%" }}
      ></div>
      <div
        className="water-illustration"
        style={{ top: "35%", right: "20%" }}
      ></div>

      {/* 页面顶部标题区 */}
      <header className="container mx-auto px-6 md:px-8 py-8 md:py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-title font-bold text-gray-800 hand-drawn fade-in">
              {language === "zh" ? (
                <span lang="zh-TW">{t.title[language]}</span>
              ) : (
                t.title[language]
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-2 font-body fade-in">
              {language === "zh" ? (
                <span lang="zh-TW">{t.subtitle[language]}</span>
              ) : (
                t.subtitle[language]
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={toggleLanguage}
              className="hand-drawn-btn water text-gray-800 px-4 py-2"
              style={{
                borderRadius: "15px 12px 14px 13px / 12px 14px 13px 15px",
              }}
            >
              {language === "zh" ? "EN" : <span lang="zh-TW">中</span>}
            </button>

            <a
              href="#trail-list"
              className="hand-drawn-btn cta text-gray-800 px-4 py-2"
              style={{
                borderRadius: "14px 13px 15px 12px / 13px 15px 12px 14px",
              }}
            >
              {language === "zh" ? (
                <span lang="zh-TW">{t.exploreNow[language]}</span>
              ) : (
                t.exploreNow[language]
              )}
            </a>
          </div>
        </div>
      </header>

      {/* 主体内容区 */}
      <main className="flex-grow container mx-auto px-6 md:px-8 py-6 relative z-10">
        {/* 地图显示区域 */}
        <div
          className="map-container h-[60vh] mb-8 fade-in relative overflow-hidden rounded-3xl shadow-lg hand-drawn"
          style={{
            animationDelay: "0.1s",
            borderRadius: "26px 22px 24px 20px / 22px 24px 20px 26px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center h-full bg-sky-blue bg-opacity-20">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-current border-r-transparent text-cta-orange mb-4"></div>
                <p className="font-title text-xl">
                  {language === "zh" ? (
                    <span lang="zh-TW">{t.loading[language]}</span>
                  ) : (
                    t.loading[language]
                  )}
                </p>
              </div>
            </div>
          ) : useEmbeddedMap ? (
            <EmbeddedGoogleMapComponent language={language} />
          ) : (
            <FallbackMapComponent
              language={language}
              center={mapCenter}
              zoom={mapZoom}
            />
          )}
        </div>

        {/* 地圖切換按鈕 */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex rounded-md shadow-sm hand-drawn"
            role="group"
            style={{
              borderRadius: "18px 15px 20px 16px / 15px 18px 15px 20px",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => setUseEmbeddedMap(false)}
              className={`hand-drawn-btn ${
                !useEmbeddedMap ? "nature text-white" : "bg-white"
              } px-5 py-2.5 mr-3`}
              style={{
                borderRadius: "16px 12px 15px 10px / 12px 15px 10px 16px",
              }}
            >
              <Map className="inline-block mr-2 h-5 w-5" />
              {language === "zh" ? (
                <span lang="zh-TW">互動地圖</span>
              ) : (
                "Interactive Map"
              )}
            </button>
            <button
              type="button"
              onClick={() => setUseEmbeddedMap(true)}
              className={`hand-drawn-btn ${
                useEmbeddedMap ? "nature text-white font-medium" : "bg-white"
              } px-5 py-2.5`}
              style={{
                borderRadius: "16px 12px 15px 10px / 12px 15px 10px 16px",
              }}
            >
              <Map className="inline-block mr-2 h-5 w-5" />
              {language === "zh" ? (
                <span lang="zh-TW">Google 地圖</span>
              ) : (
                "Google Maps"
              )}
            </button>
          </div>
        </div>

        {/* 过滤器和选项 */}
        {!useEmbeddedMap && (
          <div
            className="flex flex-wrap gap-4 mb-10 justify-center sm:justify-start fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <button
              onClick={() => setShowFamilyFriendly(!showFamilyFriendly)}
              className={`hand-drawn-btn ${
                showFamilyFriendly ? "nature text-white" : "bg-white"
              } px-4 py-2`}
              style={{
                borderRadius: "15px 12px 16px 10px / 12px 16px 10px 15px",
              }}
            >
              <Users className="inline-block mr-2 h-5 w-5" />
              {language === "zh" ? (
                <span lang="zh-TW">{t.showFamilyFriendly[language]}</span>
              ) : (
                t.showFamilyFriendly[language]
              )}
            </button>

            <button
              onClick={() => setShowTrailsOnly(!showTrailsOnly)}
              className={`hand-drawn-btn ${
                showTrailsOnly ? "nature text-white" : "bg-white"
              } px-4 py-2`}
              style={{
                borderRadius: "14px 13px 15px 12px / 13px 15px 12px 14px",
              }}
            >
              <Map className="inline-block mr-2 h-5 w-5" />
              {language === "zh" ? (
                <span lang="zh-TW">{t.showTrailsOnly[language]}</span>
              ) : (
                t.showTrailsOnly[language]
              )}
            </button>
          </div>
        )}

        {/* 路线列表 */}
        <section
          id="trail-list"
          className="mb-16 fade-in max-w-5xl mx-auto"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-3xl font-title font-bold mb-8 text-gray-800 text-center sm:text-left relative">
            {language === "zh" ? (
              <span lang="zh-TW">{t.trails[language]}</span>
            ) : (
              t.trails[language]
            )}
            <div className="absolute w-24 h-3 bg-sun-yellow opacity-30 bottom-1 left-0 z-[-1] hand-drawn"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trails
              .filter((trail) => !showFamilyFriendly || trail.familyFriendly)
              .map((trail) => (
                <div
                  key={trail.id}
                  className="hand-drawn-card p-6 hover-effect paper-texture relative overflow-hidden"
                  style={{
                    borderColor: trail.color,
                    borderRadius: "20px 20px 20px 12px / 14px 24px 18px 20px",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 opacity-70"
                    style={{ background: trail.color }}
                  ></div>
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-5">
                      <h3 className="text-xl font-title font-bold">
                        {language === "zh" ? (
                          <span lang="zh-TW">{trail.name[language]}</span>
                        ) : (
                          trail.name[language]
                        )}
                      </h3>
                      <span
                        className={`trail-badge ${
                          trail.familyFriendly ? "family" : "hiking"
                        }`}
                      >
                        {trail.familyFriendly ? (
                          <>
                            <Users className="h-4 w-4 mr-1" />
                            {language === "zh" ? (
                              <span lang="zh-TW">親子友善</span>
                            ) : (
                              "Family"
                            )}
                          </>
                        ) : (
                          <>
                            <Mountain className="h-4 w-4 mr-1" />
                            {language === "zh" ? (
                              <span lang="zh-TW">挑戰路線</span>
                            ) : (
                              "Challenging"
                            )}
                          </>
                        )}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-5">
                      <div className="text-center p-2 rounded-xl bg-white bg-opacity-60">
                        <div className="text-sm text-gray-500">
                          {language === "zh" ? (
                            <span lang="zh-TW">{t.difficulty[language]}</span>
                          ) : (
                            t.difficulty[language]
                          )}
                        </div>
                        <div className="font-semibold">
                          {language === "zh" && (
                            <span lang="zh-TW">{trail.difficulty}</span>
                          )}
                          {language !== "zh" && trail.difficulty}
                        </div>
                      </div>
                      <div className="text-center p-2 rounded-xl bg-white bg-opacity-60">
                        <div className="text-sm text-gray-500">
                          {language === "zh" ? (
                            <span lang="zh-TW">{t.distance[language]}</span>
                          ) : (
                            t.distance[language]
                          )}
                        </div>
                        <div className="font-semibold">
                          {language === "zh" && (
                            <span lang="zh-TW">{trail.distance}</span>
                          )}
                          {language !== "zh" && trail.distance}
                        </div>
                      </div>
                      <div className="text-center p-2 rounded-xl bg-white bg-opacity-60">
                        <div className="text-sm text-gray-500">
                          {language === "zh" ? (
                            <span lang="zh-TW">{t.time[language]}</span>
                          ) : (
                            t.time[language]
                          )}
                        </div>
                        <div className="font-semibold">
                          {language === "zh" && (
                            <span lang="zh-TW">{trail.time}</span>
                          )}
                          {language !== "zh" && trail.time}
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={trail.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hand-drawn-btn inline-block w-full text-center"
                        style={{ backgroundColor: trail.color }}
                      >
                        {language === "zh" ? (
                          <span lang="zh-TW">{t.openGoogleMaps[language]}</span>
                        ) : (
                          t.openGoogleMaps[language]
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* 景点列表 */}
        <section
          className="mb-16 fade-in max-w-5xl mx-auto"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-3xl font-title font-bold mb-8 text-gray-800 text-center sm:text-left relative">
            {language === "zh" ? (
              <span lang="zh-TW">{t.attractions[language]}</span>
            ) : (
              t.attractions[language]
            )}
            <div className="absolute w-24 h-3 bg-cta-orange opacity-30 bottom-1 left-0 z-[-1] hand-drawn"></div>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {attractions
              .filter(
                (attraction) =>
                  (!showFamilyFriendly || attraction.familyFriendly) &&
                  (!showTrailsOnly || true)
              )
              .map((attraction) => (
                <div
                  key={attraction.id}
                  className="hand-drawn-card p-4 flex items-center hover-effect paper-texture"
                  style={{
                    borderRadius: "16px 14px 18px 14px / 14px 18px 14px 16px",
                  }}
                  onMouseEnter={() => handleAttractionHover(attraction.id)}
                  onMouseLeave={handleAttractionLeave}
                >
                  <div className="hand-drawn-icon mr-4 overflow-visible">
                    {attraction.icon}
                  </div>
                  <div>
                    <h3 className="font-title font-bold">
                      {language === "zh" ? (
                        <span lang="zh-TW">{attraction.name[language]}</span>
                      ) : (
                        attraction.name[language]
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {attraction.type === "temple" ? (
                        language === "zh" ? (
                          <span lang="zh-TW">寺廟</span>
                        ) : (
                          "Temple"
                        )
                      ) : attraction.type === "trail" ? (
                        language === "zh" ? (
                          <span lang="zh-TW">步道</span>
                        ) : (
                          "Trail"
                        )
                      ) : attraction.type === "mountain" ? (
                        language === "zh" ? (
                          <span lang="zh-TW">山岳</span>
                        ) : (
                          "Mountain"
                        )
                      ) : attraction.type === "rest" ? (
                        language === "zh" ? (
                          <span lang="zh-TW">休息區</span>
                        ) : (
                          "Rest Area"
                        )
                      ) : attraction.type === "stairs" ? (
                        language === "zh" ? (
                          <span lang="zh-TW">階梯</span>
                        ) : (
                          "Stairs"
                        )
                      ) : attraction.type === "monastery" ? (
                        language === "zh" ? (
                          <span lang="zh-TW">修道院</span>
                        ) : (
                          "Monastery"
                        )
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* 服务设施区 */}
        <section
          className="mb-16 fade-in max-w-5xl mx-auto"
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="text-3xl font-title font-bold mb-8 text-gray-800 text-center sm:text-left relative">
            {language === "zh" ? (
              <span lang="zh-TW">{t.facilities[language]}</span>
            ) : (
              t.facilities[language]
            )}
            <div className="absolute w-24 h-3 bg-sky-blue opacity-30 bottom-1 left-0 z-[-1] hand-drawn"></div>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              className="hand-drawn-card p-5 flex items-center hover-effect paper-texture"
              style={{
                borderRadius: "18px 15px 16px 14px / 16px 18px 14px 16px",
              }}
            >
              <div className="hand-drawn-icon mr-4 overflow-visible">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-blue"
                >
                  <path d="M12 2v20M2 6h20M2 12h20M2 18h20"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-title font-bold">
                  {language === "zh" ? (
                    <span lang="zh-TW">{t.restroom[language]}</span>
                  ) : (
                    t.restroom[language]
                  )}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === "zh" ? (
                    <span lang="zh-TW">位於休息區附近</span>
                  ) : (
                    "Located near rest areas"
                  )}
                </p>
              </div>
            </div>

            <div
              className="hand-drawn-card p-5 flex items-center hover-effect paper-texture"
              style={{
                borderRadius: "15px 18px 15px 17px / 16px 14px 18px 15px",
              }}
            >
              <div className="hand-drawn-icon mr-4 overflow-visible">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-earth-gray"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1"></rect>
                  <path d="M10 9v6M14 9v6M8 5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-title font-bold">
                  {language === "zh" ? (
                    <span lang="zh-TW">{t.parking[language]}</span>
                  ) : (
                    t.parking[language]
                  )}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === "zh" ? (
                    <span lang="zh-TW">多處停車場</span>
                  ) : (
                    "Multiple parking areas"
                  )}
                </p>
              </div>
            </div>

            <div
              className="hand-drawn-card p-5 flex items-center hover-effect paper-texture"
              style={{
                borderRadius: "16px 18px 14px 17px / 18px 15px 17px 14px",
              }}
            >
              <div className="hand-drawn-icon mr-4 overflow-visible">
                <Coffee className="text-cta-orange" />
              </div>
              <div>
                <h3 className="font-title font-bold">
                  {language === "zh" ? (
                    <span lang="zh-TW">{t.foodOptions[language]}</span>
                  ) : (
                    t.foodOptions[language]
                  )}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === "zh" ? (
                    <span lang="zh-TW">深坑老街小吃</span>
                  ) : (
                    "Shenkeng Old Street Food"
                  )}
                </p>
              </div>
            </div>

            <div
              className="hand-drawn-card p-5 flex items-center hover-effect paper-texture"
              style={{
                borderRadius: "17px 15px 18px 14px / 15px 17px 14px 18px",
              }}
            >
              <div className="hand-drawn-icon mr-4 overflow-visible">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-nature-green"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-title font-bold">
                  {language === "zh" ? (
                    <span lang="zh-TW">紙本地圖</span>
                  ) : (
                    "Paper Maps"
                  )}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === "zh" ? (
                    <span lang="zh-TW">遊客中心可領取</span>
                  ) : (
                    "Available at visitor center"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 頁尾 */}
      <footer className="relative z-10 overflow-hidden">
        <div
          className="absolute w-full h-full top-0 left-0 opacity-10 watercolor-bg"
          style={{
            background: `linear-gradient(to bottom, var(--nature-green) 0%, rgba(168, 207, 143, 0.6) 100%)`,
          }}
        ></div>

        {/* 水彩暈染裝飾 */}
        <div
          className="absolute w-64 h-64 bg-nature-green rounded-full opacity-15 -left-20 -bottom-40 hand-drawn"
          style={{ filter: "blur(40px)" }}
        ></div>
        <div
          className="absolute w-48 h-48 bg-leaf-green rounded-full opacity-15 left-1/3 -bottom-20 hand-drawn"
          style={{ filter: "blur(35px)" }}
        ></div>
        <div
          className="absolute w-56 h-56 bg-sun-yellow rounded-full opacity-10 right-1/4 -bottom-32 hand-drawn"
          style={{ filter: "blur(30px)" }}
        ></div>
        <div
          className="absolute w-40 h-40 bg-nature-green rounded-full opacity-15 -right-10 -bottom-10 hand-drawn"
          style={{ filter: "blur(25px)" }}
        ></div>

        {/* 手繪植物插圖 */}
        <div className="plant-illustration absolute left-10 bottom-10 opacity-40 hand-drawn"></div>
        <div
          className="plant-illustration absolute right-10 bottom-5 opacity-40 hand-drawn"
          style={{ transform: "scaleX(-1)" }}
        ></div>

        <div className="container mx-auto px-6 md:px-8 py-10 text-center relative">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-800 font-body text-base mb-4">
              &copy; 2025{" "}
              {language === "zh" ? (
                <span lang="zh-TW">深坑步道探險</span>
              ) : (
                "Shenkeng Trails Explorer"
              )}
            </p>

            <div className="flex justify-center items-center space-x-4 mb-6">
              <button
                onClick={toggleLanguage}
                className="text-sm text-gray-800 hand-drawn-btn nature px-4 py-1.5"
              >
                {language === "zh" ? (
                  <span lang="zh-TW">{t.language[language]}</span>
                ) : (
                  t.language[language]
                )}
              </button>
              <a
                href="#"
                className="text-sm text-gray-800 hand-drawn-btn nature px-4 py-1.5"
              >
                {language === "zh" ? (
                  <span lang="zh-TW">關於我們</span>
                ) : (
                  "About Us"
                )}
              </a>
              <a
                href="#"
                className="text-sm text-gray-800 hand-drawn-btn nature px-4 py-1.5"
              >
                {language === "zh" ? (
                  <span lang="zh-TW">聯絡資訊</span>
                ) : (
                  "Contact"
                )}
              </a>
            </div>

            <div
              className="text-sm text-gray-700 max-w-lg mx-auto p-4 bg-white bg-opacity-50 rounded-2xl hand-drawn"
              style={{
                borderRadius: "18px 15px 20px 16px / 15px 18px 15px 20px",
              }}
            >
              {language === "zh" ? (
                <span lang="zh-TW">
                  此地圖僅為資訊性參考，實際路況可能有所不同。請遵循現場指示及注意安全。探索深坑步道時，請愛護環境並帶走您的垃圾。
                </span>
              ) : (
                "This map is for informational purposes only. Actual conditions may vary. Please follow on-site instructions and prioritize safety. When exploring Shenkeng trails, please respect the environment and take your trash with you."
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
