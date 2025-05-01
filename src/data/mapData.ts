import { Trail, Attraction } from "../types/types";
import { Waves, Home, Mountain, Coffee, Users, Trees } from "lucide-react";
import React from "react";

// 地图中心 - 設置為深坑區中心的位置
export const mapCenter = { lat: 25.0014, lng: 121.6242 };
export const mapZoom = 14; // 深坑區視圖

// 路線資料 - 實際路線數據
export const trails: Trail[] = [
  {
    id: 1,
    name: {
      zh: "親子輕鬆探索路線",
      en: "Family-friendly Exploration Route",
    },
    url: "https://www.google.com/maps/dir/向天溪階梯/鎮南宮石媽祖古道/加爾默羅聖母聖衣隱修院",
    color: "var(--nature-green)", // 使用CSS变量
    familyFriendly: true,
    difficulty: "簡單",
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
export const attractions: Attraction[] = [
  {
    id: 1,
    name: {
      zh: "向天溪階梯",
      en: "Xiangtian Creek Stairs",
    },
    type: "stairs",
    icon: React.createElement(Waves, { className: "text-sky-blue" }),
    position: { lat: 25.0, lng: 121.618 },
    familyFriendly: true,
    onTrail: 1,
    introduction: {
      zh: "向天溪階梯隱身於青翠山林間，溪水沿層層石階流瀉，形成如畫般的階梯水景。溪畔綠意盎然，並設有涼亭供遊客休憩，環境幽靜清新。漫步於潺潺水聲中，遠離城市喧囂，感受大自然的寧靜與療癒氣息，是放鬆身心的理想去處。",
      en: "Xiangtian Creek Stairs are nestled within lush green forests, where water cascades down stone steps creating a picturesque terraced waterscape. The creek banks are verdant and feature pavilions for visitors to rest, offering a serene and refreshing environment. Walking amidst the gentle sounds of flowing water, away from urban noise, allows one to experience the tranquility and healing atmosphere of nature, making it an ideal place to relax and rejuvenate."
    }
  },
  {
    id: 2,
    name: {
      zh: "鎮南宮石媽祖古道",
      en: "Zhennan Temple Stone Mazu Trail",
    },
    type: "temple",
    icon: React.createElement(Home, { className: "text-cta-orange" }),
    position: { lat: 24.997, lng: 121.621 },
    familyFriendly: true,
    onTrail: 1,
    introduction: {
      zh: "鎮南宮石媽祖古道是一條歷史悠久的朝聖路線，沿途鋪設石板，兩旁古樹參天，綠蔭蔽日。古道連接深坑老街與鎮南宮，沿途可欣賞傳統建築與自然風光。這條古道不僅是信徒朝聖的路徑，也是深坑重要的文化遺產，見證了當地居民的信仰與歷史。步行其間，彷彿穿越時空，感受先人的足跡與智慧。",
      en: "The Zhennan Temple Stone Mazu Trail is an ancient pilgrimage route paved with stone slabs, flanked by towering old trees that provide ample shade. The trail connects Shenkeng Old Street with Zhennan Temple, offering views of traditional architecture and natural scenery along the way. This ancient path is not only a pilgrimage route for devotees but also an important cultural heritage of Shenkeng, bearing witness to the faith and history of local residents. Walking along it feels like traveling through time, allowing one to sense the footsteps and wisdom of ancestors."
    }
  },
  {
    id: 3,
    name: {
      zh: "阿柔洋山",
      en: "Arouyang Mountain",
    },
    type: "mountain",
    icon: React.createElement(Mountain, { className: "text-earth-gray" }),
    position: { lat: 24.993, lng: 121.628 },
    familyFriendly: false,
    onTrail: 2,
    introduction: {
      zh: "",
      en: ""
    }
  },
  {
    id: 4,
    name: {
      zh: "猴山岳",
      en: "Monkey Mountain",
    },
    type: "mountain",
    icon: React.createElement(Mountain, { className: "text-earth-gray" }),
    position: { lat: 24.99, lng: 121.632 },
    familyFriendly: false,
    onTrail: 2,
    introduction: {
      zh: "",
      en: ""
    }
  },
  {
    id: 5,
    name: {
      zh: "大崎嶺步道",
      en: "Daqiling Trail",
    },
    type: "trail",
    icon: React.createElement(Trees, { className: "text-nature-green" }),
    position: { lat: 25.005, lng: 121.615 },
    familyFriendly: false,
    onTrail: 2,
    introduction: {
      zh: "",
      en: ""
    }
  },
  {
    id: 6,
    name: {
      zh: "加爾默羅聖母聖衣隱修院",
      en: "Carmelite Monastery",
    },
    type: "monastery",
    icon: React.createElement(Home, { className: "text-cta-orange" }),
    position: { lat: 24.995, lng: 121.625 },
    familyFriendly: true,
    onTrail: 1,
    introduction: {
      zh: "",
      en: ""
    }
  },
  {
    id: 7,
    name: {
      zh: "深坑老街",
      en: "Shenkeng Old Street",
    },
    type: "rest",
    icon: React.createElement(Coffee, { className: "text-sun-yellow" }),
    position: { lat: 25.0023, lng: 121.6152 },
    familyFriendly: true,
    onTrail: 0,
    introduction: {
      zh: "",
      en: ""
    }
  },
  {
    id: 8,
    name: {
      zh: "深坑遊客中心",
      en: "Shenkeng Visitor Center",
    },
    type: "rest",
    icon: React.createElement(Users, { className: "text-highlight-teal" }),
    position: { lat: 25.0025, lng: 121.6162 },
    familyFriendly: true,
    onTrail: 0,
    introduction: {
      zh: "",
      en: ""
    }
  },
];
