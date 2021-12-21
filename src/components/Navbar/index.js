import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className=" nav justify-content-center navbar navbar-expand-sm text-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Files/Haley Witherell Resume Portfolio.pdf">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <hr class="solid container"></hr>
        </div>
    )
}

export default Navbar;
