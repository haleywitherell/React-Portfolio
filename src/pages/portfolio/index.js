import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <main id="work" class="container">
        <h2>Work</h2>
        <p>Visit my GitHub account to view all past projects!</p>


        <p>Meal and Work Out Planner</p>
        <a class="container d-flex justify-content-center" href="https://haleywitherell.github.io/Health-Wellness/">Deployed Link</a>
        <a class="container d-flex justify-content-center" href="https://github.com/haleywitherell/Health-Wellness">GitHub URL</a>


        <div class="container d-flex justify-content-center">
            <div class="comlumn">
                <div id="img1">
                    <img class="img-fluid rounded" src="./Images/Weekly Planner.gif" alt="Work Example 1"/>  
                </div>
            </div>
        </div>

    
        <p>Password Generator</p>
        <a class="container d-flex justify-content-center" href="https://haleywitherell.github.io/Password-Generator/">Deployed Link</a>
        <a class="container d-flex justify-content-center" href="https://github.com/haleywitherell/Password-Generator">GitHub URL</a>

        

        <div class="container d-flex justify-content-center">
            <div class="comlumn">
                <div id="img1">
                    <img class="img-fluid rounded" src="./Images/Password Generator.gif" alt="Work Example 2"/>  
                </div>
            </div>
        </div>

    
        <p>Travel Reviews Blog</p>
        <a class="container d-flex justify-content-center" href="https://intense-scrubland-56931.herokuapp.com/login">Deployed Link</a>
        <a class="container d-flex justify-content-center" href="https://github.com/bckasper/Travel-blog">GitHub URL</a>



        <div class="container d-flex justify-content-center">
            <div class="comlumn">
                <div id="img1">
                    <img class="img-fluid rounded" src="./Images/Travel Reviews.gif" alt="Work Example 3"/>  
                </div>
            </div>
        </div>

    </main>
        
    <hr class="solid container"></hr>
        </div>
    )
}

export default Portfolio
