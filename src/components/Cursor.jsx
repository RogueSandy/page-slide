import React, { useEffect, useState } from 'react'
import './cursor.css'
import { motion } from 'framer-motion'
import Nav from './Nav'
import Main from './Main'

export default function Cursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [mouseEvent, setMouseEvent] = useState("default")

    useEffect(() => {
        const mouseMove = e => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        default: {
            x: mousePos.x - 9,
            y: mousePos.y - 9,
            transition: {
                duration: 0.1
            },
            mixBlendMode: "difference"
        },
        link: {
            height: 50,
            width: 50,
            x: mousePos.x - 25,
            y: mousePos.y - 25,
            mixBlendMode: "difference"
        }
    }

  return (
    <div>
        <motion.div 
            className="cursor-dot"
            variants={variants}
            animate={mouseEvent}
        >
        </motion.div>

        <Nav setMouseEvent={setMouseEvent} />
        <Main setMouseEvent={setMouseEvent} />
        <div className="cursor-outline"></div>
    </div>
  )
}
