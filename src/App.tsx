import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import TrailsPage from "./pages/TrailsPage";
import AttractionsPage from "./pages/AttractionsPage";
import GameCheckInPage from "./pages/GameCheckInPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <AppProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/trails" element={<TrailsPage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/game-checkin" element={<GameCheckInPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </AppProvider>
  );
}

export default App;
