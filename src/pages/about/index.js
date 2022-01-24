import React from 'react'
import aboutme from '../../img/aboutme.png'

const About = () => {
    return (
        <div className="container" id="about">
            <h2>About Me</h2>
            <div className="align-items-center">
                <div> 
                    <img src={aboutme} className="img-fluid" width="250px" alt="Introduction photo of myself"></img>
                </div>
                <br></br>
                <div>   
                    <p1>Hey i'm Haley! I am an aspiring web developer who recently earned a certificate in full stack web development from the Ohio State University. I am currently Cincinnati based but am open to opportunities anywhere.</p1>
                <br></br>
                <br></br>
                    <p1>I have experience in web devlopment, marketing, advertising, PR, account management, communications and design.</p1>
                </div>   
                <hr class="solid container"></hr>
            </div>
        </div>
    )
}

export default About
