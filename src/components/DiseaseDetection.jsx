import React, { useState } from 'react'

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [detectionResult, setDetectionResult] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // Dummy disease data
  const dummyDiseases = [
    {
      name: 'Leaf Blight',
      cause: 'Bacterial infection (Xanthomonas)',
      treatment: 'Apply Copper-based fungicide. Remove infected leaves. Maintain proper spacing.',
    },
    {
      name: 'Powdery Mildew',
      cause: 'Fungal infection (Erysiphe)',
      treatment: 'Apply Sulfur-based fungicide. Improve air circulation. Reduce humidity.',
    },
    {
      name: 'Rust Disease',
      cause: 'Fungal infection (Puccinia)',
      treatment: 'Apply Mancozeb fungicide. Remove infected plants. Use resistant varieties.',
    },
  ]

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDetect = () => {
    if (selectedImage) {
      setIsProcessing(true)
      // Simulate API call
      setTimeout(() => {
        const randomDisease =
          dummyDiseases[Math.floor(Math.random() * dummyDiseases.length)]
        setDetectionResult(randomDisease)
        setIsProcessing(false)
      }, 2000)
    } else {
      alert('Please upload an image first')
    }
  }

  return (
    <section
      id="disease"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            🔬 Crop Disease Detection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload an image of your crop to detect diseases and get treatment recommendations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-agri-bg rounded-lg p-6 sm:p-8 shadow-md mb-6">
            {/* Image Upload Box */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Crop Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-agri-green transition-colors">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img
                      src={selectedImage}
                      alt="Uploaded crop"
                      className="max-h-64 mx-auto rounded-lg"
                    />
                    <button
                      onClick={() => {
                        setSelectedImage(null)
                        setDetectionResult(null)
                      }}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-5xl mb-4">📷</div>
                    <p className="text-gray-600 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    <label className="inline-block bg-agri-green hover:bg-agri-light-green text-white font-semibold py-2 px-6 rounded-lg cursor-pointer transition-colors">
                      Choose File
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleDetect}
              disabled={!selectedImage || isProcessing}
              className="w-full sm:w-auto bg-agri-green hover:bg-agri-light-green disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              {isProcessing ? 'Detecting...' : '🔍 Detect Disease'}
            </button>
          </div>

          {/* Result Card */}
          {detectionResult && (
            <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-agri-green mb-4">
                Detection Result
              </h3>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Disease Name</p>
                  <p className="text-xl font-bold text-red-700">
                    {detectionResult.name}
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Cause</p>
                  <p className="text-lg text-gray-800">{detectionResult.cause}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Treatment Suggestion</p>
                  <p className="text-lg text-gray-800">
                    {detectionResult.treatment}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default DiseaseDetection

