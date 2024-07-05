// Slider.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { ChevronLeft, ChevronRight } from "react-feather";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import './Slider.css';

const Slider = () => {
  const slides = [
    { id: 1, url: image1, alt: 'Image 1' },
    { id: 2, url: image2, alt: 'Image 2' },
    { id: 3, url: image3, alt: 'Image 3' },
  ];

  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const autoSlide = true;
    const autoSlideInterval = 3000;
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <main className="App">
      <div className="max-w-lg">
        <Navbar />
        <div className="overflow-hidden relative">
          <div 
            className="flex transition-transform ease-out duration-500" 
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides.map((s) => (
              <div key={s.id} className="slider-container">
                <img src={s.url} alt={s.alt} />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button 
              onClick={prev}
              className="arrow-btn"
            >
              <ChevronLeft size={40} />
            </button>
            <button 
              onClick={next}
              className="arrow-btn"
            >
              <ChevronRight size={40} />
            </button>
          </div>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`
                    transition-all w-3 h-3 bg-white rounded-full
                    ${curr === i ? 'p-2' : 'bg-opacity-50'}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Slider;
