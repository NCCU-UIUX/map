import React from 'react';
import { useAppContext } from '../context/AppContext';
import { trails } from '../data/mapData';
import { Mountain, Coffee } from 'lucide-react';

const TrailsPage: React.FC = () => {
  const { language } = useAppContext();

  return (
    <div className="bg-gradient-to-b from-white to-nature-green/5">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-title mb-2">
            {language === "zh" ? (
              <span lang="zh-TW">深坑步道資訊</span>
            ) : (
              "Shenkeng Trail Information"
            )}
          </h1>
          <p className="text-gray-600">
            {language === "zh" ? (
              <span lang="zh-TW">探索深坑區的各種步道路線，找到最適合您的健行體驗。</span>
            ) : (
              "Explore various trail routes in Shenkeng District and find the hiking experience that suits you best."
            )}
          </p>
        </div>

        <div className="space-y-8">
          {trails.map(trail => (
            <div 
              key={trail.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hand-drawn-card"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: trail.color }}
                  >
                    {trail.familyFriendly ? (
                      <Coffee className="text-white w-6 h-6" />
                    ) : (
                      <Mountain className="text-white w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {language === "zh" ? trail.name.zh : trail.name.en}
                    </h2>
                    {trail.familyFriendly && (
                      <span className="inline-block bg-nature-green text-white text-xs px-2 py-1 rounded-full mt-1">
                        {language === "zh" ? "親子友善" : "Family-friendly"}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-sm text-gray-500 mb-1">
                      {language === "zh" ? "難度" : "Difficulty"}
                    </h3>
                    <p className="font-medium">{trail.difficulty}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-sm text-gray-500 mb-1">
                      {language === "zh" ? "距離" : "Distance"}
                    </h3>
                    <p className="font-medium">{trail.distance}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-sm text-gray-500 mb-1">
                      {language === "zh" ? "預估時間" : "Estimated Time"}
                    </h3>
                    <p className="font-medium">{trail.time}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {language === "zh" ? "路線描述" : "Route Description"}
                  </h3>
                  <p className="text-gray-700">
                    {language === "zh" ? (
                      <span lang="zh-TW">
                        {trail.id === 1 ? 
                          "這條親子友善路線連接了向天溪階梯、鎮南宮石媽祖古道和加爾默羅聖母聖衣隱修院，沿途景色優美，坡度平緩，適合全家一同探索。路線大部分為石階和平整的步道，即使帶著孩子也能輕鬆行走。" : 
                          "這條挑戰路線適合有經驗的健行者，連接大崎嶺步道、向天溪階梯、阿柔洋山和猴山岳，沿途有較陡的坡度和崎嶇的地形。路線提供豐富的自然風景和壯觀的山頂視野，但需要良好的體力和健行裝備。"
                        }
                      </span>
                    ) : (
                      trail.id === 1 ? 
                        "This family-friendly route connects Xiangtian Creek Stairs, Zhennan Temple Stone Mazu Trail, and Carmelite Monastery. The route features beautiful scenery with gentle slopes, making it suitable for family exploration. Most of the path consists of stone steps and even trails that are easy to navigate even with children." : 
                        "This challenging route is suitable for experienced hikers, connecting Daqiling Trail, Xiangtian Creek Stairs, Arouyang Mountain, and Monkey Mountain. The trail features steeper slopes and rugged terrain. It offers rich natural scenery and spectacular summit views, but requires good physical fitness and proper hiking equipment."
                    )}
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {language === "zh" ? (
                      <span lang="zh-TW">適合季節: 全年</span>
                    ) : (
                      "Best Season: Year-round"
                    )}
                  </div>
                  
                  <a 
                    href={trail.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cta-orange text-white rounded-lg hand-drawn-btn hover:bg-opacity-90 transition-colors"
                  >
                    {language === "zh" ? (
                      <span lang="zh-TW">在 Google 地圖查看</span>
                    ) : (
                      "View in Google Maps"
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-sky-blue/20 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            {language === "zh" ? (
              <span lang="zh-TW">健行安全提示</span>
            ) : (
              "Hiking Safety Tips"
            )}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              {language === "zh" ? (
                <span lang="zh-TW">出發前查看天氣預報，避免在惡劣天氣下健行。</span>
              ) : (
                "Check the weather forecast before departure and avoid hiking in adverse weather conditions."
              )}
            </li>
            <li>
              {language === "zh" ? (
                <span lang="zh-TW">攜帶足夠的水和食物，以及急救用品。</span>
              ) : (
                "Bring sufficient water, food, and a first aid kit."
              )}
            </li>
            <li>
              {language === "zh" ? (
                <span lang="zh-TW">穿著合適的鞋子和衣物，考慮使用登山杖。</span>
              ) : (
                "Wear appropriate footwear and clothing, and consider using hiking poles."
              )}
            </li>
            <li>
              {language === "zh" ? (
                <span lang="zh-TW">告訴親友您的行程計劃和預計返回時間。</span>
              ) : (
                "Inform friends or family about your itinerary and expected return time."
              )}
            </li>
            <li>
              {language === "zh" ? (
                <span lang="zh-TW">尊重自然環境，不留下垃圾，不打擾野生動物。</span>
              ) : (
                "Respect the natural environment, leave no trash, and do not disturb wildlife."
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrailsPage;
