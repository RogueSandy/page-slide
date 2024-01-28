import React from 'react'
import Article from './Article'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const articles = [
  {
    "src": "article-porsche.jpg",
    "title": " Porsche 992 GT3 RS",
    "discription": "The Porsche 992 GT3 RS is a lightweight, aerodynamically optimized track machine with a powerful naturally aspirated engine, precision-tuned suspension, and a driver-focused cockpit designed for ultimate performance.",
  },
  {
    "src": "article-gtr.jpg",
    "title": " Nissan GTR Nismo",
    "discription": "The Nissan GT-R Nismo is a high-performance powerhouse featuring advanced aerodynamics, a twin-turbocharged V6 engine, track-tuned suspension, and a driver-centric cockpit, embodying speed and precision on the road and track.",
  },
  {
    "src": "article-stingray.jpg",
    "title": "Chevrolet Corvette C8",
    "discription": "The Chevrolet Corvette C8 is an American sports car icon with a mid-engine layout, potent V8 power, sharp handling, sleek design, and cutting-edge technology, delivering a thrilling driving experience on and off the track.",
  },
]

export default function Main({ setMouseEvent }) {

  return (
    <main>
      <Swiper 
        loop={true}
        className="mySwiper"
      >
      {
        articles.map(({src, title, discription }, index) => {
          return <SwiperSlide key={index}>
              <Article index={index} src={src} title={title} discription={discription} setMouseEvent={setMouseEvent} />
            </SwiperSlide>
        })
      }
      </Swiper>
    </main>
  )
}
