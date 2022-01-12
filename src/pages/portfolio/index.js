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

    
        <div className="col-12 col-lg-4">
            <div className="card text-center h-100">
                <img src={planner} className="card-img-top" alt="Meal and Workout Planner"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Meal and Workout Planner</h3>
                        <p className="card-text">Need a unique password created on the fly? Use the random password generator app which creates random passwords using capital letters, lowercase letters, numbers and or symbols.</p>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://haleywitherell.github.io/Health-Wellness/" className="btn btn-outline-dark m-2" target="_blank">View Site</a>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/Health-Wellness" className="btn btn-outline-dark m-2" target="_blank">View on GitHub</a>
                    </div>
            </div>
        </div>


        <div className="col-12 col-lg-4">
            <div className="card text-center h-100">
                <img src={password} className="card-img-top" alt="Password Generator"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Password Generator</h3>
                        <p className="card-text">Need a unique password created on the fly? Use the random password generator app which creates random passwords using capital letters, lowercase letters, numbers and or symbols.</p>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://haleywitherell.github.io/Password-Generator/" className="btn btn-outline-dark m-2" target="_blank">View Site</a>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/Password-Generator" className="btn btn-outline-dark m-2" target="_blank">View on GitHub</a>
                    </div>
            </div>
        </div>

        <div className="col-12 col-lg-4">
            <div className="card text-center h-100">
                <img src={travel} className="card-img-top" alt="Travel Blog"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Travel Blog</h3>
                        <p className="card-text">Browse and write your own travel reviews of different cities, trips you've taken, etc. </p>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://intense-scrubland-56931.herokuapp.com/login" className="btn btn-outline-dark m-2" target="_blank">View Site</a>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/bckasper/Travel-blog" className="btn btn-outline-dark m-2" target="_blank">View on GitHub</a>
                    </div>
            </div>
        </div>


        <div className="col-12 col-lg-4">
            <div className="card text-center h-100">
                <img src={books} className="card-img-top" alt="Book Search App"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Book Search App</h3>
                        <p className="card-text">Search for books using this app and build your own library by saving your favorite reads! </p>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://pure-wildwood-80529.herokuapp.com/" className="btn btn-outline-dark m-2" target="_blank">View Site</a>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/searching-books" className="btn btn-outline-dark m-2" target="_blank">View on GitHub</a>
                    </div>
            </div>
        </div>


        
        <div className="col-12 col-lg-4">
            <div className="card text-center h-100">
                <img src={workout} className="card-img-top" alt="Fitness Tracker"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Fitness Tracker</h3>
                        <p className="card-text">Put together and track your daily workouts using this app. Reference olds workouts using the last workout faeture</p>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://workout-tracker-app-12345.herokuapp.com/" className="btn btn-outline-dark m-2" target="_blank">View Site</a>
                        <a className="container d-flex justify-content-center text-dark nav-link" href="https://github.com/haleywitherell/workout-tracker" className="btn btn-outline-dark m-2" target="_blank">View on GitHub</a>
                    </div>
            </div>
        </div>

    </main>
        
    <hr class="solid container"></hr>

    
        </div>
    )
}

export default Portfolio
