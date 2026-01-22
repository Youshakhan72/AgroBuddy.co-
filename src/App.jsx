import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CropRecommendationPage from './pages/CropRecommendationPage'
import WeatherAlertsPage from './pages/WeatherAlertsPage'
import MarketPricesPage from './pages/MarketPricesPage'
import ResourceOptimizationPage from './pages/ResourceOptimizationPage'
import DiseaseDetectionPage from './pages/DiseaseDetectionPage'
import AIChatbotPage from './pages/AIChatbotPage'
import GovernmentSchemesPage from './pages/GovernmentSchemesPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crop-recommendation" element={<CropRecommendationPage />} />
          <Route path="/weather-alerts" element={<WeatherAlertsPage />} />
          <Route path="/market-prices" element={<MarketPricesPage />} />
          <Route path="/resource-optimization" element={<ResourceOptimizationPage />} />
          <Route path="/disease-detection" element={<DiseaseDetectionPage />} />
          <Route path="/ai-chatbot" element={<AIChatbotPage />} />
          <Route path="/government-schemes" element={<GovernmentSchemesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

