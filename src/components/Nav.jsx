import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

export default function Nav({ setMouseEvent }) {

    const linkEnter = () => setMouseEvent("link")
    const linkExit = () => setMouseEvent("default")

  return (
    <nav>
        <div className="logo section">
            <a 
                href="#"
                onMouseEnter={linkEnter}
                onMouseLeave={linkExit}
            ><IoCarSport /></a>
        </div>
        <div className="nav-links section">
            <a 
                href="#"
                onMouseEnter={linkEnter}
                onMouseLeave={linkExit}
            >About</a>
            <a 
                href="#"
                onMouseEnter={linkEnter}
                onMouseLeave={linkExit}
            >Projects</a>
        </div>
        <div className="social-links section">
            <a 
                href="#"
                onMouseEnter={linkEnter}
                onMouseLeave={linkExit}
            ><FaLinkedin /></a>
            <a 
                href="#"
                onMouseEnter={linkEnter}
                onMouseLeave={linkExit}
            ><FaGithub /></a>
            <a 
                href="#"
                onMouseEnter={linkEnter}
                onMouseLeave={linkExit}
            ><FaInstagramSquare /></a>
        </div>
        <div className="contact-link section">
            <a 
                href="#"
                onMouseEnter={linkEnter}
                onMouseLeave={linkExit}
            >Get in Touch!</a>
        </div>
    </nav>
  )
}
