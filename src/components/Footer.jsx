import React from 'react'

const Footer = () => {
  return (
    <footer className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-agri-green via-agri-light-green to-agri-dark" />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-5xl mb-6 inline-block">🌾</span>
          <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AgroBuddy
          </h3>
        </div>
        <p className="text-white/90 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
          Built for Hackathon – AI for Agriculture & Rural Support
        </p>
        <div className="border-t border-white/20 pt-8">
          <p className="text-lg text-white/80 mb-3">
            Team: [Your Team Name] | Contact: [Your Contact Info]
          </p>
          <p className="text-base text-white/60">
            © 2024 AgroBuddy Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

