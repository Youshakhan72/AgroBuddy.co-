import React, { useState } from 'react'

const CropRecommendation = () => {
  const [soilType, setSoilType] = useState('')
  const [season, setSeason] = useState('')
  const [location, setLocation] = useState('')
  const [recommendation, setRecommendation] = useState(null)

  // Dummy data for recommendations
  const dummyRecommendations = {
    'clay-kharif-maharashtra': {
      crop: 'Cotton',
      yield: '450-500 kg/acre',
      fertilizer: 'NPK 19:19:19 - 50kg/acre, Urea - 100kg/acre',
    },
    'sandy-rabi-punjab': {
      crop: 'Wheat',
      yield: '1800-2000 kg/acre',
      fertilizer: 'NPK 12:32:16 - 60kg/acre, DAP - 80kg/acre',
    },
    'loamy-zaid-gujarat': {
      crop: 'Watermelon',
      yield: '8000-10000 kg/acre',
      fertilizer: 'NPK 20:20:20 - 40kg/acre, Organic compost - 2 tons/acre',
    },
  }

  const handleGetRecommendation = () => {
    if (soilType && season && location) {
      const key = `${soilType}-${season}-${location}`.toLowerCase()
      const rec = dummyRecommendations[key] || {
        crop: 'Rice',
        yield: '2000-2500 kg/acre',
        fertilizer: 'NPK 19:19:19 - 50kg/acre, Urea - 120kg/acre',
      }
      setRecommendation(rec)
    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <section
      id="crop"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-agri-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            🌾 Crop Recommendation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get AI-powered crop recommendations based on your soil type, season, and location
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-agri-bg rounded-lg p-6 sm:p-8 shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Soil Type Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil Type
                </label>
                <select
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Soil Type</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="red">Red Soil</option>
                  <option value="black">Black Soil</option>
                </select>
              </div>

              {/* Season Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Season
                </label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Season</option>
                  <option value="kharif">Kharif</option>
                  <option value="rabi">Rabi</option>
                  <option value="zaid">Zaid</option>
                </select>
              </div>

              {/* Location Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Location</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="punjab">Punjab</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGetRecommendation}
              className="w-full sm:w-auto bg-agri-green hover:bg-agri-light-green text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Crop Recommendation
            </button>
          </div>

          {/* Output Card */}
          {recommendation && (
            <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-agri-green mb-4">
                Recommended Crop
              </h3>
              <div className="space-y-4">
                <div className="bg-agri-bg p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Crop Name</p>
                  <p className="text-xl font-semibold text-agri-green">
                    {recommendation.crop}
                  </p>
                </div>
                <div className="bg-agri-bg p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Expected Yield</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {recommendation.yield}
                  </p>
                </div>
                <div className="bg-agri-bg p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Fertilizer Advice</p>
                  <p className="text-lg text-gray-800">{recommendation.fertilizer}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CropRecommendation

