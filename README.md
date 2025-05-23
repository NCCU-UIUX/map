# 深坑步道互動式地圖導覽網站 | Shenkeng Trails Interactive Map Website

[中文](#中文說明) | [English](#english)

## 中文說明

這是一個使用 React 的互動式地圖導覽網站，專為深坑地區的步道和景點設計。

### 功能特色

- 顯示深坑地區的景點和步道路線
- 多語言支持（中文/英文）
- 過濾親子友善景點和路線
- 互動式地圖導覽
- 支持嵌入自訂 Google 地圖
- 手繪風格的水彩界面設計

### 安裝步驟

1. 克隆此存儲庫：

```bash
git clone https://github.com/NCCU-UIUX/map.git
cd map
```

2. 安裝依賴：

```bash
npm install
```

3. 啟動開發服務器：

```bash
npm start
```

### Vercel 部署說明

1. 在 GitHub 上 Fork 此存儲庫或推送到您自己的 GitHub 存儲庫

2. 登錄 [Vercel](https://vercel.com/) 並導入您的 GitHub 項目

3. 部署設定：
   - 構建命令：`npm run build`
   - 輸出目錄：`build`
   - 安裝命令：`npm install`

4. 點擊「部署」按鈕

專案將自動部署，並且 Vercel 會為每次提交到主分支設置 CI/CD 流程，自動重新部署。

### 項目結構

- `src/interactive-map-website.tsx` - 主頁組件
- `src/components/FallbackMapComponent.tsx` - 備用地圖組件
- `src/components/EmbeddedGoogleMapComponent.tsx` - 嵌入式 Google 地圖組件
- `public/icons/` - SVG 圖標目錄

## English

This is an interactive map website using React, designed for trails and attractions in the Shenkeng area.

### Features

- Display attractions and trails in Shenkeng area
- Multilingual support (Chinese/English)
- Filter family-friendly attractions and trails
- Interactive map navigation
- Support for embedded custom Google Maps
- Hand-drawn watercolor style interface

### Installation Steps

1. Clone this repository:

```bash
git clone https://github.com/NCCU-UIUX/map.git
cd map
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Vercel Deployment Instructions

1. Fork this repository on GitHub or push to your own GitHub repository

2. Log in to [Vercel](https://vercel.com/) and import your GitHub project

3. Deployment settings:
   - Build command: `npm run build`
   - Output directory: `build`
   - Install command: `npm install`

4. Click the "Deploy" button

The project will be automatically deployed, and Vercel will set up CI/CD for each commit to the main branch, automatically redeploying.

### Project Structure

- `src/interactive-map-website.tsx` - Main page component
- `src/components/FallbackMapComponent.tsx` - Fallback map component
- `src/components/EmbeddedGoogleMapComponent.tsx` - Embedded Google Maps component
- `public/icons/` - SVG icons directory

## 嵌入自訂Google地圖

本專案支持嵌入自訂Google地圖：

1. 在 Google My Maps 創建您的自訂地圖
2. 將您的地圖設為公開可訪問
3. 在 `src/components/EmbeddedGoogleMapComponent.tsx` 中更新 `mapUrl` 變數
4. 使用頁面上的 "Google 地圖" 按鈕切換到嵌入式地圖視圖

### 相容的Google地圖格式

- Google My Maps 自訂地圖
- Google Maps 標記點和路線
- 任何可以通過iframe嵌入的Google地圖URL

## 定制建議

您可以：

1. 更新 `trails` 和 `attractions` 數據以顯示您自己的地點
2. 定制圖標樣式
3. 添加更多過濾選項
4. 實現路線規劃和導航功能
5. 更新嵌入式地圖URL以使用您自己的Google My Maps地圖

## 注意事項

在生產環境中部署前，請確保：

1. 優化地圖加載性能
2. 添加適當的錯誤處理
3. 確保嵌入的Google地圖已公開分享
