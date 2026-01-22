import React, { useState } from 'react'

const ResourceOptimization = () => {
  const [cropType, setCropType] = useState('')
  const [soilMoisture, setSoilMoisture] = useState('')
  const [optimization, setOptimization] = useState(null)

  // Dummy optimization data
  const dummyOptimizations = {
    'wheat-60': {
      irrigation: 'Water every 5-7 days. Next irrigation: Day 3',
      fertilizer: 'Apply 50kg NPK 19:19:19 per acre. Split into 2 applications.',
      waterSaving: 'Use drip irrigation to save 30% water. Mulch soil to retain moisture.',
    },
    'rice-80': {
      irrigation: 'Maintain 5cm water level. Check daily during flowering.',
      fertilizer: 'Apply 60kg Urea + 40kg DAP per acre in 3 splits.',
      waterSaving: 'Use alternate wetting and drying (AWD) method. Save 25% water.',
    },
    'cotton-50': {
      irrigation: 'Water every 10-12 days. Critical stage: Flowering to boll formation.',
      fertilizer: 'Apply 80kg NPK 20:20:20 + 20kg Potash per acre.',
      waterSaving: 'Use furrow irrigation. Install soil moisture sensors.',
    },
  }

  const handleOptimize = () => {
    if (cropType && soilMoisture) {
      const key = `${cropType}-${soilMoisture}`.toLowerCase()
      const opt = dummyOptimizations[key] || {
        irrigation: 'Water every 7-10 days based on soil moisture',
        fertilizer: 'Apply balanced NPK fertilizer as per crop requirement',
        waterSaving: 'Monitor soil moisture regularly. Use efficient irrigation methods.',
      }
      setOptimization(opt)
    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <section
      id="resources"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-agri-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            💧 Resource Optimization
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimize water, fertilizer, and other resources for maximum yield and efficiency
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Crop Type Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crop Type
                </label>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Crop</option>
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                  <option value="maize">Maize</option>
                </select>
              </div>

              {/* Soil Moisture Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil Moisture Level (%)
                </label>
                <input
                  type="number"
                  value={soilMoisture}
                  onChange={(e) => setSoilMoisture(e.target.value)}
                  placeholder="Enter moisture %"
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={handleOptimize}
              className="w-full sm:w-auto bg-agri-green hover:bg-agri-light-green text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Optimization Plan
            </button>
          </div>

          {/* Output Cards */}
          {optimization && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Irrigation Schedule */}
              <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">💧</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Irrigation Schedule
                </h3>
                <p className="text-gray-700">{optimization.irrigation}</p>
              </div>

              {/* Fertilizer Quantity */}
              <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Fertilizer Quantity
                </h3>
                <p className="text-gray-700">{optimization.fertilizer}</p>
              </div>

              {/* Water Saving Tips */}
              <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Water-Saving Tips
                </h3>
                <p className="text-gray-700">{optimization.waterSaving}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ResourceOptimization

