import React from 'react'

const Contact = () => {
    return (
        <div  id="contact" class="conatainer">
            <h2>Contact Me</h2>
            <p>Wanna work together? Let's get in touch!</p>
            <form className="container">
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label">Name:</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control" id="colFormLabel" placeholder="Please enter your name"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email:</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="colFormLabel" placeholder="Please enter your email"/>
                    </div>
                </div>


                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Message:</label>
                    <div class="col-sm-10">
                    <textarea type="email" class="form-control" id="colFormLabel" placeholder="Type your message here"></textarea>
                    </div>
                </div>
                    <button type="button" class="btn btn-outline-dark">Submit</button>
            </form>
           
        </div>
    )
}

export default Contact
