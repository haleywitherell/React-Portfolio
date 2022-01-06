import React from 'react'
import planner from '../../img/planner.png'
import travel from '../../img/travel-blog.png'
import password from '../../img/passwordGen.png'
import workout from '../../img/workout-tracker.png'
import books from '../../img/books.png'

const Portfolio = () => {
    return (
        <div>
            <main id="work" class="container">
        <h2>Work & Projects</h2>
        <p>Visit my GitHub account to view all past projects!</p>

        <p2>Meal and Work Out Planner</p2>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://haleywitherell.github.io/Health-Wellness/" target="_blank">View Site</a>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/Health-Wellness" target="_blank">View on GitHub</a>

        <div className="container d-flex justify-content-center">
            <div className="comlumn">
                <div id="img1">
                    <img className="img-fluid rounded" src={planner} alt="Example of a weekly meal and workout planner"/>  
                </div>
            </div>
        </div>

    
        <p2>Password Generator</p2>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://haleywitherell.github.io/Password-Generator/" target="_blank">View Site</a>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/Password-Generator" target="_blank">View on GitHub</a>

        

        <div className="container d-flex justify-content-center">
            <div className="comlumn">
                <div id="img1">
                    <img className="img-fluid rounded" src={password} alt="Example of a password generator app"/>  
                </div>
            </div>
        </div>

    
        <p2>Travel Reviews Blog</p2>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://intense-scrubland-56931.herokuapp.com/login" target="_blank">View Site</a>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/bckasper/Travel-blog" target="_blank">View on GitHub</a>



        <div className="container d-flex justify-content-center">
            <div className="comlumn">
                <div id="img1">
                    <img className="img-fluid rounded" src={travel} alt="Example of a travel blog"/>  
                </div>
            </div>
        </div>

        <p2>Workout Tracker</p2>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://workout-tracker-app-12345.herokuapp.com/" target="_blank">View Site</a>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/workout-tracker" target="_blank">View on GitHub</a>



        <div className="container d-flex justify-content-center">
            <div className="comlumn">
                <div id="img1">
                    <img className="img-fluid rounded" src={workout} alt="Example of a workout tracker"/>  
                </div>
            </div>
        </div>

        <p2>Book Search App</p2>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://pure-wildwood-80529.herokuapp.com/" target="_blank">View Site</a>
        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/searching-books" target="_blank">View on GitHub</a>



        <div className="container d-flex justify-content-center">
            <div className="comlumn">
                <div id="img1">
                    <img className="img-fluid rounded" src={books} alt="Example of a workout tracker"/>  
                </div>
            </div>
        </div>
    </main>
        
    <hr class="solid container"></hr>

    
        </div>
    )
}

export default Portfolio
