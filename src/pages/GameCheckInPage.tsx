import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Award, CheckCircle, Medal, Star, Trophy } from "lucide-react";
import { useAppContext } from "../context/AppContext";

interface CheckInPoint {
  id: string;
  name: string;
  nameEn: string;
  isCheckedIn: boolean;
  points: number;
}

interface Badge {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  icon: React.ReactNode;
  requiredPoints: number;
  unlocked: boolean;
}

const GameCheckInPage: React.FC = () => {
  const { language } = useAppContext();
  const [checkInPoints, setCheckInPoints] = useState<CheckInPoint[]>([
    {
      id: "point1",
      name: "向天溪階梯",
      nameEn: "Xiangtian Creek Stairs",
      isCheckedIn: false,
      points: 10
    },
    {
      id: "point2",
      name: "鎮南宮石媽祖古道",
      nameEn: "Zhennan Temple Stone Mazu Trail",
      isCheckedIn: false,
      points: 15
    },
    {
      id: "point3",
      name: "深坑老街",
      nameEn: "Shenkeng Old Street",
      isCheckedIn: false,
      points: 20
    },
    {
      id: "point4",
      name: "炮子崙古道",
      nameEn: "Paozilun Trail",
      isCheckedIn: false,
      points: 25
    }
  ]);
  
  const [badges, setBadges] = useState<Badge[]>([
    {
      id: "badge1",
      name: {
        zh: "新手探索者",
        en: "Novice Explorer"
      },
      description: {
        zh: "完成第一個打卡點",
        en: "Complete your first check-in point"
      },
      icon: <Medal className="w-12 h-12 text-sun-yellow" />,
      requiredPoints: 10,
      unlocked: false
    },
    {
      id: "badge2",
      name: {
        zh: "深坑旅行家",
        en: "Shenkeng Traveler"
      },
      description: {
        zh: "累計獲得 25 點積分",
        en: "Accumulate 25 points"
      },
      icon: <Star className="w-12 h-12 text-path-purple" />,
      requiredPoints: 25,
      unlocked: false
    },
    {
      id: "badge3",
      name: {
        zh: "深坑大師",
        en: "Shenkeng Master"
      },
      description: {
        zh: "完成所有打卡點",
        en: "Complete all check-in points"
      },
      icon: <Trophy className="w-12 h-12 text-cta-orange" />,
      requiredPoints: 70,
      unlocked: false
    }
  ]);

  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showBadge, setShowBadge] = useState<boolean>(false);
  const [currentPoint, setCurrentPoint] = useState<CheckInPoint | null>(null);
  const [earnedBadge, setEarnedBadge] = useState<Badge | null>(null);

  // 檢查是否有新的勳章解鎖
  useEffect(() => {
    if (totalPoints > 0) {
      const updatedBadges = badges.map(badge => {
        if (!badge.unlocked && totalPoints >= badge.requiredPoints) {
          return { ...badge, unlocked: true };
        }
        return badge;
      });
      
      // 檢查是否有新解鎖的勳章
      const newBadge = updatedBadges.find(badge => 
        badge.unlocked && !badges.find(b => b.id === badge.id)?.unlocked
      );
      
      if (newBadge) {
        setEarnedBadge(newBadge);
        setBadges(updatedBadges);
        
        // 先顯示打卡成功，然後顯示勳章
        setTimeout(() => {
          setShowSuccess(false);
          setShowBadge(true);
        }, 1500);
      }
    }
  }, [totalPoints, badges]);
  
  // 檢查是否所有打卡點都已完成
  useEffect(() => {
    const allCheckedIn = checkInPoints.every(point => point.isCheckedIn);
    if (allCheckedIn) {
      // 解鎖最終勳章
      const masterBadge = badges.find(badge => badge.id === "badge3");
      if (masterBadge && !masterBadge.unlocked) {
        const updatedBadges = badges.map(badge => {
          if (badge.id === "badge3") {
            return { ...badge, unlocked: true };
          }
          return badge;
        });
        
        setEarnedBadge(masterBadge);
        setBadges(updatedBadges);
        
        // 先顯示打卡成功，然後顯示勳章
        setTimeout(() => {
          setShowSuccess(false);
          setShowBadge(true);
        }, 1500);
      }
    }
  }, [checkInPoints, badges]);

  const handleCheckIn = (point: CheckInPoint) => {
    if (!point.isCheckedIn) {
      // 模擬定位檢查 (實際應用中應該使用地理位置 API)
      const updatedPoints = checkInPoints.map(p => {
        if (p.id === point.id) {
          return { ...p, isCheckedIn: true };
        }
        return p;
      });
      
      setCheckInPoints(updatedPoints);
      setTotalPoints(prev => prev + point.points);
      setCurrentPoint(point);
      setShowSuccess(true);
      
      // 如果沒有獲得勳章，3秒後自動關閉成功提示
      // 如果獲得勳章，會在 useEffect 中處理關閉邏輯
      setTimeout(() => {
        if (!showBadge) {
          setShowSuccess(false);
        }
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-nature-green/10 min-h-screen">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-title mb-2">
            {language === "zh" ? (
              <span lang="zh-TW">遊戲打卡</span>
            ) : (
              "Game Check-In"
            )}
          </h1>
          <p className="text-base sm:text-lg mb-4 text-gray-700 max-w-3xl mx-auto">
            {language === "zh" ? (
              <span lang="zh-TW">探索深坑步道，收集打卡點，獲得特別獎勵！</span>
            ) : (
              "Explore Shenkeng trails, collect check-in points, and earn special rewards!"
            )}
          </p>
          <div className="mt-4 p-4 bg-sun-yellow/20 rounded-lg inline-block hand-drawn-card">
            <p className="text-lg font-semibold">
              {language === "zh" ? (
                <span lang="zh-TW">目前積分: <span className="text-cta-orange">{totalPoints}</span> 點</span>
              ) : (
                <span>Current Points: <span className="text-cta-orange">{totalPoints}</span></span>
              )}
            </p>
          </div>
        </div>

      {showSuccess && currentPoint && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl text-center w-full max-w-md hand-drawn-card">
            <div className="text-nature-green text-4xl sm:text-5xl mb-3 sm:mb-4">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 font-title">
              {language === "zh" ? (
                <span lang="zh-TW">打卡成功！</span>
              ) : (
                "Check-in Successful!"
              )}
            </h3>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">
              {language === "zh" ? (
                <span lang="zh-TW">您已成功在「{currentPoint.name}」打卡</span>
              ) : (
                <span>You've successfully checked in at "{currentPoint.nameEn}"</span>
              )}
            </p>
            <p className="text-base sm:text-lg font-semibold mb-4">
              {language === "zh" ? (
                <span lang="zh-TW">獲得 <span className="text-cta-orange">{currentPoint.points}</span> 點積分</span>
              ) : (
                <span>Earned <span className="text-cta-orange">{currentPoint.points}</span> points</span>
              )}
            </p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="bg-cta-orange text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition hand-drawn-btn text-sm sm:text-base"
            >
              {language === "zh" ? "確定" : "OK"}
            </button>
          </div>
        </div>
      )}
      
      {showBadge && earnedBadge && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl text-center w-full max-w-md hand-drawn-card">
            <div className="animate-bounce mb-2">
              {earnedBadge.icon}
            </div>
            <div className="bg-sun-yellow/20 py-1 sm:py-2 px-3 sm:px-4 rounded-full inline-block mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-bold text-gray-700">
                {language === "zh" ? "新勝章解鎖！" : "New Badge Unlocked!"}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 font-title">
              {language === "zh" ? earnedBadge.name.zh : earnedBadge.name.en}
            </h3>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-600">
              {language === "zh" ? earnedBadge.description.zh : earnedBadge.description.en}
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-4">
              {badges.map((badge, index) => (
                <div 
                  key={badge.id} 
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${badge.unlocked ? 'bg-nature-green' : 'bg-gray-200'}`}
                >
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowBadge(false)}
              className="bg-cta-orange text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-opacity-90 transition hand-drawn-btn text-sm sm:text-base"
            >
              {language === "zh" ? "太棒了！" : "Awesome!"}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {checkInPoints.map((point) => (
          <div 
            key={point.id} 
            className={`bg-white p-4 sm:p-6 rounded-lg shadow-md hand-drawn-card hover:shadow-lg transition-shadow ${point.isCheckedIn ? 'border-2 border-nature-green' : ''}`}
          >
            <div className="flex flex-wrap items-center mb-4">
              <div 
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3 ${point.isCheckedIn ? 'bg-nature-green' : 'bg-earth-gray'}`}
              >
                <MapPin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0 mr-2">
                <h3 className="text-lg sm:text-xl font-semibold truncate">{language === "zh" ? point.name : point.nameEn}</h3>
              </div>
              <div className="bg-sun-yellow/80 text-gray-800 font-bold px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                {point.points} {language === "zh" ? "點" : "pts"}
              </div>
            </div>
            
            <button
              onClick={() => handleCheckIn(point)}
              disabled={point.isCheckedIn}
              className={`w-full py-2 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base ${
                point.isCheckedIn 
                  ? 'bg-nature-green/20 text-nature-green cursor-not-allowed flex items-center justify-center' 
                  : 'bg-cta-orange text-white hover:bg-opacity-90 hand-drawn-btn'
              }`}
            >
              {point.isCheckedIn ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" /> {language === "zh" ? "已打卡" : "Checked In"}
                </>
              ) : (language === "zh" ? "打卡" : "Check In")}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 bg-sky-blue/20 p-4 sm:p-6 rounded-lg hand-drawn-card">
        <div className="flex items-center mb-3 sm:mb-4">
          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-sky-blue mr-2 flex-shrink-0" />
          <h3 className="text-lg sm:text-xl font-title">
            {language === "zh" ? (
              <span lang="zh-TW">打卡說明</span>
            ) : (
              "Check-in Instructions"
            )}
          </h3>
        </div>
        {language === "zh" ? (
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>到達景點後，點擊對應的「打卡」按鈕即可獲得積分</li>
            <li>每個景點只能打卡一次</li>
            <li>積分可用於兌換深坑特色紀念品</li>
            <li>完成所有打卡點可獲得特別獎勵</li>
          </ul>
        ) : (
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Click the "Check In" button when you arrive at an attraction to earn points</li>
            <li>Each attraction can only be checked in once</li>
            <li>Points can be exchanged for Shenkeng specialty souvenirs</li>
            <li>Complete all check-in points to receive a special reward</li>
          </ul>
        )}
      </div>

      {/* 勳章展示區 */}
      <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md hand-drawn-card">
        <div className="flex items-center mb-3 sm:mb-4">
          <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-cta-orange mr-2 flex-shrink-0" />
          <h3 className="text-lg sm:text-xl font-title">
            {language === "zh" ? "我的勝章" : "My Badges"}
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {badges.map(badge => (
            <div 
              key={badge.id} 
              className={`p-4 rounded-lg text-center ${badge.unlocked ? 'bg-sun-yellow/20' : 'bg-gray-100 opacity-70'}`}
            >
              <div className="mb-2">
                {badge.unlocked ? badge.icon : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 mx-auto flex items-center justify-center">
                    <Award className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
              <h4 className="font-semibold mb-1">
                {language === "zh" ? badge.name.zh : badge.name.en}
              </h4>
              <p className="text-xs text-gray-600">
                {language === "zh" ? badge.description.zh : badge.description.en}
              </p>
              {!badge.unlocked && (
                <div className="mt-2 text-xs text-gray-500">
                  {language === "zh" ? "尚未解鎖" : "Not unlocked yet"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link 
          to="/map" 
          className="inline-block px-5 py-2 border-2 border-nature-green text-nature-green rounded-lg hover:bg-nature-green hover:text-white transition-colors"
        >
          {language === "zh" ? "返回地圖" : "Back to Map"}
        </Link>
      </div>
    </div>
    </div>
  );
};

export default GameCheckInPage;

// Add this CSS to your global styles or component if not already present
/* 
.hand-drawn-card {
  border-radius: 0.5rem;
  position: relative;
  box-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
}

.hand-drawn-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 2px solid #333;
  border-radius: 0.7rem;
  z-index: -1;
}

.hand-drawn-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hand-drawn-btn:hover {
  transform: translateY(-2px);
}
*/
