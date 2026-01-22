import React from 'react'

const WeatherAlerts = () => {
  // Dummy weather data
  const weatherData = {
    temperature: '32°C',
    rainfall: '15mm',
    humidity: '65%',
    alert: 'Rain',
    alertMessage: 'Heavy rainfall expected in next 48 hours. Avoid field work.',
    bestSowingTime: 'Next 5-7 days',
  }

  const getAlertColor = (alert) => {
    switch (alert.toLowerCase()) {
      case 'rain':
        return 'bg-blue-100 border-blue-500 text-blue-800'
      case 'heatwave':
        return 'bg-red-100 border-red-500 text-red-800'
      case 'drought':
        return 'bg-orange-100 border-orange-500 text-orange-800'
      default:
        return 'bg-yellow-100 border-yellow-500 text-yellow-800'
    }
  }

  return (
    <section
      id="weather"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-agri-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            🌤️ Weather & Climate Alerts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time weather updates and climate alerts for your farming decisions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Weather Summary Card */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Current Weather Conditions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-agri-bg rounded-lg">
                <div className="text-3xl mb-2">🌡️</div>
                <p className="text-sm text-gray-600 mb-1">Temperature</p>
                <p className="text-xl font-bold text-agri-green">
                  {weatherData.temperature}
                </p>
              </div>
              <div className="text-center p-4 bg-agri-bg rounded-lg">
                <div className="text-3xl mb-2">🌧️</div>
                <p className="text-sm text-gray-600 mb-1">Rainfall</p>
                <p className="text-xl font-bold text-agri-green">
                  {weatherData.rainfall}
                </p>
              </div>
              <div className="text-center p-4 bg-agri-bg rounded-lg">
                <div className="text-3xl mb-2">💧</div>
                <p className="text-sm text-gray-600 mb-1">Humidity</p>
                <p className="text-xl font-bold text-agri-green">
                  {weatherData.humidity}
                </p>
              </div>
              <div className="text-center p-4 bg-agri-bg rounded-lg">
                <div className="text-3xl mb-2">🌬️</div>
                <p className="text-sm text-gray-600 mb-1">Wind Speed</p>
                <p className="text-xl font-bold text-agri-green">12 km/h</p>
              </div>
            </div>
          </div>

          {/* Alert Banner */}
          <div
            className={`border-2 rounded-lg p-4 mb-6 ${getAlertColor(
              weatherData.alert
            )}`}
          >
            <div className="flex items-start">
              <div className="text-2xl mr-3">⚠️</div>
              <div>
                <h4 className="font-bold text-lg mb-1">
                  {weatherData.alert} Alert
                </h4>
                <p className="text-sm">{weatherData.alertMessage}</p>
              </div>
            </div>
          </div>

          {/* Best Sowing Time */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Best time for sowing</p>
                <p className="text-2xl font-bold text-agri-green">
                  {weatherData.bestSowingTime}
                </p>
              </div>
              <div className="text-4xl">🌱</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherAlerts

