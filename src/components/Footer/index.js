import React from 'react'
import { SiLinkedin, SiGithub} from 'react-icons/si'


const Footer = () => {
    return (
        <div>
            <footer className="jumbotron gradient nav justify-content-center navbar navbar-expand-sm">
                <p4>Haley Witherell est. 2021 |</p4>
                <div className="navbar-nav">
                    <a href="https://www.linkedin.com/in/haley-witherell-6a177315a/" target="_blank" className='footer-links nav-link text-white icons'><SiLinkedin/></a>
                    <a href="https://github.com/haleywitherell" target="_blank" className='footer-links nav-link text-white icons'><SiGithub/></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
