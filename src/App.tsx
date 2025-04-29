import React, { useEffect } from "react";
import "./App.css";
import InteractiveMap from "./interactive-map-website";

function App() {
  // 檢查環境變量是否正確加載
  useEffect(() => {
    // 直接打印API密钥，方便调试
    console.log("API 密鑰環境變量:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    // 如果 API 密鑰不存在，提供一些調試信息
    if (!process.env.REACT_APP_GOOGLE_MAPS_API_KEY) {
      console.warn("未找到 REACT_APP_GOOGLE_MAPS_API_KEY 環境變量。請確保：");
      console.warn("1. 您有一個名為 .env 的文件在項目根目錄");
      console.warn("2. 該文件包含 REACT_APP_GOOGLE_MAPS_API_KEY=您的密鑰");
      console.warn("3. 您已經重新啟動開發服務器以讀取新的環境變量");
    }
  }, []);

  return (
    <div className="App">
      <InteractiveMap />
    </div>
  );
}

export default App;
