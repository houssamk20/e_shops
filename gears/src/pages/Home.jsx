import { useSelector } from 'react-redux'
import { selectAllProducts } from '../features/products/productsSlice'
import ProductCard from '../components/products/ProductCard'
import FeatureItem from '../components/ui/FeatureItem'
import { useState, useEffect, useRef } from 'react'

const heroSlides = [
  {
    img: '../img/pro-wireless-rem.png',
    title: 'Professional Gaming Gear',
    desc: 'Equip yourself with the best tools used by esports champions',
    bg: null,
  },
  {
    img: '../img/t1.jpg',
    title: 'Official T1 Collection',
    desc: 'Shop exclusive gear from the legendary T1 team',
    bg: '../img/t1.jpg',
  },
]

const Home = () => {
  const products = useSelector(selectAllProducts)
  const featuredProducts = products.slice(0, 8) // Show more for slider

  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)
  const [productIndex, setProductIndex] = useState(0)
  const productSliderRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length)
        setFade(true)
      }, 400) // fade out before changing
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setFade(true)
    }, 400)
  }

  const nextSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
      setFade(true)
    }, 400)
  }

  // Product slider logic
  const productsPerView = 5
  const dotCount = 3 // Always show 3 dots

  // Make sure the slider loops and only uses 3 dots
  const nextProducts = () => {
    setProductIndex((prev) => (prev < dotCount - 1 ? prev + 1 : 0))
  }
  const prevProducts = () => {
    setProductIndex((prev) => (prev > 0 ? prev - 1 : dotCount - 1))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Carousel Section */}
      <section
        className={`relative rounded-lg p-8 mb-12 flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-700`}
        style={{
          minHeight: '380px',
          height: '380px',
          backgroundImage: heroSlides[current].bg
            ? `url(${heroSlides[current].bg})`
            : 'none',
          backgroundSize: heroSlides[current].bg ? 'cover' : undefined,
          backgroundPosition: heroSlides[current].bg ? 'center center' : undefined,
          backgroundRepeat: heroSlides[current].bg ? 'no-repeat' : undefined,
          backgroundColor: heroSlides[current].bg ? 'black' : 'black',
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={
            heroSlides[current].bg
              ? { background: 'rgba(0,0,0,0.0)' }
              : {}
          }
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-0 rounded-full p-2 z-20 hover:bg-gray-700"
          aria-label="Previous Slide"
        >
        </button>
        <div className={`w-full md:w-1/2 mb-8 md:mb-0 z-10 text-white transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl font-heading font-bold mb-4">{heroSlides[current].title}</h1>
          <p className="text-xl mb-6">{heroSlides[current].desc}</p>
          <button className="bg-accent text-dark px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
            Shop Now
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0 z-10 flex justify-center items-center w-full md:w-auto transition-opacity duration-700">
          {current === 0 && (
            <img
              src={heroSlides[current].img}
              alt=""
              className={`w-[120px] h-[120px] object-contain rounded-lg shadow-lg mx-auto ${fade ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
            />
          )}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-60 rounded-full p-2 z-20 hover:bg-gray-700"
          aria-label="Next Slide"
        >
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFade(false)
                setTimeout(() => {
                  setCurrent(idx)
                  setFade(true)
                }, 400)
              }}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-accent' : 'bg-gray-500'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="mb-12 relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-heading">Featured Products</h2>
          <div className="flex gap-2">
            <button
              onClick={prevProducts}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 shadow hover:bg-accent hover:text-dark transition disabled:opacity-50"
              aria-label="Previous Products"
              disabled={productIndex === 0}
            >
              <span className="text-2xl font-bold">&#8592;</span>
            </button>
            <button
              onClick={nextProducts}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 shadow hover:bg-accent hover:text-dark transition disabled:opacity-50"
              aria-label="Next Products"
              disabled={productIndex === dotCount - 1}
            >
              <span className="text-2xl font-bold">&#8594;</span>
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={productSliderRef}>
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${productIndex * (100 / productsPerView)}%)`,
                width: `${(featuredProducts.length / productsPerView) * 100}%`,
              }}
            >
              {featuredProducts.map(product => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 flex justify-center items-center"
                  style={{
                    minWidth: '250px',
                    maxWidth: '100%',
                    aspectRatio: '1 / 1',
                    height: 'auto',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Dots for product slider */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: dotCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setProductIndex(idx)}
              className={`w-3 h-3 rounded-full ${productIndex === idx ? 'bg-accent' : 'bg-gray-400'}`}
              aria-label={`Go to product slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-heading mb-6">Why Choose GamingGear</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureItem 
            title="Pro Tested" 
            description="All our gear is tested and approved by professional gamers"
            icon="🏆"
          />
          <FeatureItem 
            title="Fast Shipping" 
            description="Get your gear quickly with our express delivery options"
            icon="🚚"
          />
          <FeatureItem 
            title="Warranty" 
            description="All products come with a minimum 2-year warranty"
            icon="🔧"
          />
        </div>
      </section>
    </div>
  )
}

export default Home