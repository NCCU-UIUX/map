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
    teaGardens: [
      {
        id: 1,
        name: {
          zh: "阿柔坑茶園",
          en: "Arouken Tea Garden"
        },
        description: {
          zh: "阿柔坑茶園位於深坑區東南方，海拔約300公尺，擁有絕佳的地理環境和氣候條件，是生產優質包種茶的理想場所。茶園依山勢而建，層層梯田形成獨特景觀。這裡的茶樹品種主要為青心烏龍，經過細心栽培和傳統製茶工藝，產出的茶葉香氣高雅，滋味甘醇，是深坑包種茶的代表之一。",
          en: "Arouken Tea Garden is located in the southeast of Shenkeng District at an altitude of about 300 meters. It has excellent geographical environment and climate conditions, making it an ideal place for producing high-quality Pouchong tea. The tea garden is built along the mountainside, forming unique terraced landscapes. The tea trees here are mainly Qingxin Oolong varieties. Through careful cultivation and traditional tea-making techniques, the tea produced has an elegant aroma and a mellow taste, representing one of Shenkeng's finest Pouchong teas."
        },
        teaTypes: ["包種茶", "烏龍茶"],
        location: { lat: 24.998, lng: 121.622 }
      }
    ],
    story: {
      zh: "深坑茶葉的歷史可追溯至清朝時期，當時福建安溪茶農帶著製茶技術來到台灣，在深坑一帶開始種植茶樹。由於當地氣候溫和多雨，土壤肥沃，非常適合茶樹生長，逐漸發展出獨特的深坑包種茶。在日治時期，深坑茶業達到鼎盛，成為台灣重要的茶葉產區之一。這條親子輕鬆探索路線不僅能欣賞自然風光，還能了解深坑茶文化的發展歷程，感受茶香與人文的完美結合。",
      en: "The history of Shenkeng tea can be traced back to the Qing Dynasty when tea farmers from Anxi, Fujian brought tea-making techniques to Taiwan and began planting tea trees in the Shenkeng area. Due to the mild and rainy climate and fertile soil, the area was very suitable for tea tree growth, gradually developing the unique Shenkeng Pouchong tea. During the Japanese colonial period, Shenkeng's tea industry reached its peak, becoming one of Taiwan's important tea-producing areas. This family-friendly exploration route not only offers natural scenery but also provides insights into the development of Shenkeng's tea culture, allowing visitors to experience the perfect combination of tea fragrance and cultural heritage."
    }
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
    teaGardens: [
      {
        id: 2,
        name: {
          zh: "猴山古茶園",
          en: "Monkey Mountain Ancient Tea Garden"
        },
        description: {
          zh: "猴山古茶園位於深坑區猴山岳附近，海拔約500公尺，是深坑區最古老的茶園之一，有超過百年歷史的古茶樹。這裡的茶樹主要為青心烏龍和金萬錦品種，由於海拔較高，早晨常被雲霧籠罩，造就了獨特的微氣候環境，生產的茶葉香氣深邃，味道獨特，被茶客賞識為「霧中風韻」。",
          en: "Monkey Mountain Ancient Tea Garden is located near Monkey Mountain in Shenkeng District at an altitude of about 500 meters. It is one of the oldest tea gardens in Shenkeng with tea trees over a hundred years old. The tea trees here are mainly Qingxin Oolong and Jin Wanjin varieties. Due to its higher altitude, the area is often shrouded in mist in the early morning, creating a unique microclimate environment. The tea produced here has a deep aroma and distinctive taste, appreciated by tea connoisseurs as 'Whispers in the Mist'."
        },
        teaTypes: ["高山烏龍", "老欉茶"],
        location: { lat: 24.991, lng: 121.630 }
      },
      {
        id: 3,
        name: {
          zh: "天水堂茶園",
          en: "Tianshui Hall Tea Garden"
        },
        description: {
          zh: "天水堂茶園位於阿柔洋山腳下，是一家有機茶園，堅持不使用化學肥料和農藥，遵循自然耕作方式。茶園主人張先生是第三代茶農，續承家族傳統製茶技術，並結合現代科技，發展出獨特的發酵茶。茶園附設品茶室，遊客可預約體驗製茶遊程，親手採茶、揚茶、品茶，感受深坑茶文化的魅力。",
          en: "Tianshui Hall Tea Garden is located at the foot of Arouyang Mountain and is an organic tea garden that insists on not using chemical fertilizers and pesticides, following natural farming methods. The garden owner, Mr. Zhang, is a third-generation tea farmer who continues his family's traditional tea-making techniques while incorporating modern technology to develop unique fermented teas. The tea garden has a tea tasting room where visitors can book tea-making experience tours, pick tea leaves by hand, process tea, and taste tea, experiencing the charm of Shenkeng's tea culture."
        },
        teaTypes: ["有機包種茶", "發酵茶"],
        location: { lat: 24.994, lng: 121.626 },
        imageUrl: "https://example.com/tianshui-tea-garden.jpg"
      }
    ],
    story: {
      zh: "深坑的茶葉文化與登山健行文化緊密相連。早期茶農為了開闢茶園，在山區開闢小徑，這些小徑逐漸發展成為今日的登山步道。此健行挑戰路線稱為「茶香古道」，沿路可見百年茶樹和古老製茶工具遺跡。每年春季，當茶樹開花時，整個山區彼漸彩色花瓣，小白花香氣撲人，吸引著茶香愛好者和健行者前來探訪。走過這條古道，不僅能欣賞壯闊的自然風光，還能感受到深坑茶業的歷史與文化底蘊。",
      en: "Shenkeng's tea culture is closely linked to its mountain hiking culture. In the early days, tea farmers opened up small paths in the mountains to develop tea gardens, which gradually evolved into today's hiking trails. This hiking challenge route is known as the 'Tea Fragrance Ancient Trail', along which you can see century-old tea trees and relics of ancient tea-making tools. Every spring, when the tea trees bloom, the entire mountain area is dotted with colorful flowers, and the fragrance of small white flowers is captivating, attracting tea enthusiasts and hikers. Walking along this ancient trail, you can not only enjoy the magnificent natural scenery but also feel the historical and cultural heritage of Shenkeng's tea industry."
    }
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
