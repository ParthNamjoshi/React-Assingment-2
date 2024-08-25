import React from 'react'; 

// Functional component for rendering the registration modal
function RegModel() {
    return (
        <div className="main_container"> {/* Main container for the modal */}
            <div className="container"> {/* Bootstrap container for layout */}
                <div className="modal fade" id="registrationModal" tabIndex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
                    {/* Modal dialog with centered alignment */}
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                {/* Close button for the modal */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                
                                {/* Modal title, centered text */}
                                <h5 className="modal-title text-center" id="registrationModalLabel">CREATE AN ACCOUNT</h5>
                                
                                {/* Registration form */}
                                <form>
                                    {/* User Name input field */}
                                    <div className="form-group">
                                        <input type="text" className="form-control" required autoComplete="off" placeholder='User Name' />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* Email Address input field */}
                                    <div className="form-group">
                                        <input type="email" className="form-control" required autoComplete="off" placeholder='Email address' />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* Profession input field with a select dropdown */}
                                    <div className="form-group">
                                        <label className="select-form-control-placeholder">Profession</label>
                                        <select className="form-control">
                                            <option>Select profession</option>
                                            <option>Students</option>
                                            <option>Research Scholar</option>
                                            <option>Professor</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                    
                                    {/* Phone Number input field */}
                                    <div className="form-group">
                                        <input type="tel" className="form-control" required autoComplete="off" placeholder='Phone Number' />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* Organization input field */}
                                    <div className="form-group">
                                        <input type="text" className="form-control" required autoComplete="off" placeholder='Organization' />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* Designation input field */}
                                    <div className="form-group">
                                        <input type="text" className="form-control" required autoComplete="off" placeholder='Designation' />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* City input field */}
                                    <div className="form-group">
                                        <input type="text" className="form-control" required autoComplete="off" placeholder='City' />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* Password input field */}
                                    <div className="form-group">
                                        <input type="password" className="form-control" required autoComplete="off" placeholder='Password' />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* Confirm Password input field */}
                                    <div className="form-group">
                                        <input type="password" className="form-control" required autoComplete="off" placeholder='Confirm Password' />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* Terms and Conditions link */}
                                    <div className="form-group forgot-pass-fau text-center">
                                        <a href="#" className="text-secondary">
                                            By Clicking "SIGN UP" you accept our<br />
                                            <span className="text-primary-fau">Terms and Conditions</span>
                                        </a>
                                    </div>
                                    
                                    {/* Signup button */}
                                    <div className="btn-check-log">
                                        <button type="submit" className="btn-check-login">SIGN UP</button>
                                    </div>
                                    
                                    {/* Link to switch to the login modal */}
                                    <div className="create-new-fau text-center pt-3">
                                        <a href="#" className="text-primary-fau" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-dismiss="modal">Already Have An Account</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegModel;
