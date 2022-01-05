import React from 'react'
import planner from '../../img/planner.png'
import travel from '../../img/travel-blog.png'
import password from '../../img/passwordGen.png'

const Portfolio = () => {
    return (
        <div>
            <main id="work" class="container">
        <h2>Work & Projects</h2>
        <p>Visit my GitHub account to view all past projects!</p>

        <p>Meal and Work Out Planner</p>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://haleywitherell.github.io/Health-Wellness/">View Site</a>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/Health-Wellness">View on GitHub</a>

        <div className="container d-flex justify-content-center">
            <div className="comlumn">
                <div id="img1">
                    <img className="img-fluid rounded" src={planner} alt="Work Example 1"/>  
                </div>
            </div>
        </div>

    
        <p>Password Generator</p>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://haleywitherell.github.io/Password-Generator/">View Site</a>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/Password-Generator">View on GitHub</a>

        

        <div className="container d-flex justify-content-center">
            <div className="comlumn">
                <div id="img1">
                    <img className="img-fluid rounded" src={password} alt="Work Example 2"/>  
                </div>
            </div>
        </div>

    
        <p>Travel Reviews Blog</p>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://intense-scrubland-56931.herokuapp.com/login">View Site</a>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/bckasper/Travel-blog">View on GitHub</a>



        <div className="container d-flex justify-content-center">
            <div className="comlumn">
                <div id="img1">
                    <img className="img-fluid rounded" src={travel} alt="Work Example 3"/>  
                </div>
            </div>
        </div>

    </main>
        
    <hr class="solid container"></hr>
        </div>
    )
}

export default Portfolio
