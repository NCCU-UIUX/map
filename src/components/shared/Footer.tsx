import React from 'react';
import { useAppContext } from '../../context/AppContext';

const Footer: React.FC = () => {
  const { language } = useAppContext();

  return (
    <footer className="bg-earth-gray bg-opacity-20 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-title mb-2">
              {language === "zh" ? <span lang="zh-TW">深坑步道探索</span> : "Shenkeng Trail Explorer"}
            </h2>
            <p className="text-sm text-gray-600">
              {language === "zh" ? (
                <span lang="zh-TW">© 2025 深坑步道探索. 保留所有權利.</span>
              ) : (
                "© 2025 Shenkeng Trail Explorer. All rights reserved."
              )}
            </p>
          </div>
          
          <div className="text-sm text-gray-600 max-w-md">
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
  );
};

export default Footer;
