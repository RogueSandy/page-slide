import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useSwiper } from 'swiper/react';

export default function Article({src, title, discription, index, setMouseEvent }) {
  const swiper = useSwiper()

  const linkEnter = () => setMouseEvent("link")
  const linkExit = () => setMouseEvent("default")

  return (
    <article data-index={index}>
        <div className="article-section image-section">
            <img src={src} alt={src}/>
        </div>
        <div className="article-section discription-section">
            {discription}
        </div>
        <div className="article-section heading-section">
          <h1>
            <span>{title}</span>
            <span>Show <br /> Projects</span>
          </h1>
          <div className="plus-icon">
            <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.09944e-06 49.1736L37.7671 49.1736C40.4167 49.2185 42.8866 50.3412 44.6829 52.2722L44.7278 52.3171C46.6588 54.1134 47.7815 56.6282 47.8264 59.2329L47.8264 97H49.1736L49.1736 59.2329C49.2185 56.5833 50.3412 54.1134 52.2722 52.3171L52.3171 52.2722C54.1134 50.3412 56.6283 49.2185 59.2329 49.1736L97 49.1736V47.8264L59.2329 47.8264C56.5833 47.7815 54.1134 46.6588 52.3171 44.7278L52.2722 44.6829C50.3412 42.8866 49.2185 40.3718 49.1736 37.7671L49.1736 3.09944e-06H47.8264L47.8264 37.7671C47.7815 40.4167 46.6588 42.8866 44.7278 44.6829L44.6829 44.7278C42.8866 46.6588 40.3718 47.7815 37.7671 47.8264L3.09944e-06 47.8264V49.1736ZM48.5 44.4583C50.7454 44.4583 52.5417 46.2546 52.5417 48.5C52.5417 50.7454 50.7454 52.5417 48.5 52.5417C46.2546 52.5417 44.4583 50.7454 44.4583 48.5C44.4583 46.2546 46.2546 44.4583 48.5 44.4583Z" fill="#E1E1E1"/>
            </svg>
          </div>

        </div>
        <div className="article-section navigation-section">
            <button 
              className="btn leftBtn" 
              onClick={() => swiper.slidePrev()}
              onMouseEnter={linkEnter}
              onMouseLeave={linkExit}
            > <div className="lefticon"><FaArrowLeft /></div>
            </button>
            <button 
              className="btn RightBtn" 
              onClick={() => swiper.slideNext()}
              onMouseEnter={linkEnter}
              onMouseLeave={linkExit}
            > <div className="righticon"><FaArrowRight /></div></button>
        </div>
    </article>
  )
}
