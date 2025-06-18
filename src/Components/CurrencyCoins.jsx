import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import coin1 from '../assets/coin1.png'
import coin2 from '../assets/coin2.png'
import coin3 from '../assets/coin3.png'
import coin4 from '../assets/coin4.png'
import coin5 from '../assets/coin5.png'
import coin6 from '../assets/coin6.png'
import coin7 from '../assets/coin7.png'
import coin8 from '../assets/coin8.png'
import coin9 from '../assets/coin9.png'

export default function CurrencyCoins() {
  const [currentIndex, setCurrentIndex] = useState(0)
<<<<<<< HEAD
  const [itemsPerPage, setItemsPerPage] = useState(3)
=======
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  // Your coin data with actual images
>>>>>>> 6c54cdae47aa08f8cc458253617e22eab927ee23
  const coins = [
    { name: 'AUD', image: coin1 },
    { name: 'INR', image: coin2 },
    { name: 'NGN', image: coin3 },
    { name: 'Euro', image: coin4 },
    { name: 'PKR', image: coin5 },
    { name: 'USD', image: coin6 },
    { name: 'ETH', image: coin7 },
    { name: 'CAD', image: coin8 },
    { name: 'BTC', image: coin9 }
  ]

  useEffect(() => {
<<<<<<< HEAD
    const updateItemsPerPage = () => {
      const width = window.innerWidth
      if (width < 375) setItemsPerPage(2)
        else if (width < 425) setItemsPerPage(3)
      else if (width < 768) setItemsPerPage(4)
      else if (width < 1024) setItemsPerPage(7)
      // else if (width < 1536) setItemsPerPage(5)
      else setItemsPerPage(9)
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  const totalSlides = Math.ceil(coins.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    )
  }

  const startIndex = currentIndex * itemsPerPage
  const visibleCoins =
    coins.length <= itemsPerPage
      ? coins
      : coins.slice(startIndex, startIndex + itemsPerPage).length === itemsPerPage
        ? coins.slice(startIndex, startIndex + itemsPerPage)
        : [...coins.slice(startIndex), ...coins.slice(0, (startIndex + itemsPerPage) % coins.length)]

  const showNavigation = coins.length > itemsPerPage

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 relative">
      <div className={`flex justify-center gap-6 transition-all duration-500`}>
        {visibleCoins.map((coin, index) => (
          <div key={index} className="flex flex-col items-center p-2 rounded-xl hover:scale-105 transition-transform">
            <p className="text-sm font-semibold text-gray-300">{coin.name}</p>
            <div className="w-16 h-16 bg-white p-1 rounded-full mt-2">
              <img src={coin.image} alt={coin.name} className="w-full h-full object-contain" />
=======
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % coins.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + coins.length) % coins.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (isSmallScreen) {
    // Slider for small screens
    return (
      <div className="w-full max-w-md mx-auto p-4">
        
        <div className="relative  rounded-xl shadow-lg overflow-hidden">
          {/* Slider Container */}
          <div className="relative h-64 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">
                {coins[currentIndex].name}
              </h3>
              <div className="w-16 h-16 bg-white p-1 rounded-full">
                <img 
                  src={coins[currentIndex].image} 
                  alt={coins[currentIndex].name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2  rounded-full border border-white p-2 shadow-md transition-all duration-200"
          >
            <ChevronLeft size={20} className="text-gray-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full border border-white p-2 shadow-md transition-all duration-200"
          >
            <ChevronRight size={20} className="text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 pb-4">
            {coins.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Grid layout for larger screens
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      
      <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-6 mt-10">
        {coins.map((coin, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-sm font-semibold mb-3 text-gray-300 text-center min-h-[2rem] flex items-center">
              {coin.name}
            </h3>
            <div className="w-16 h-16 bg-white p-1 rounded-full">
              <img 
                src={coin.image} 
                alt={coin.name}
                className="w-full h-full object-contain"
              />
>>>>>>> 6c54cdae47aa08f8cc458253617e22eab927ee23
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD

      {showNavigation && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  )
}
=======
    </div>
  )
}
>>>>>>> 6c54cdae47aa08f8cc458253617e22eab927ee23
