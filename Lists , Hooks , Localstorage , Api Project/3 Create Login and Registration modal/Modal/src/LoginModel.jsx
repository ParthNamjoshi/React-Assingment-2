import React from 'react';

// Functional component for rendering the login modal
function LoginModel() {
    return (
        <div className="main_container"> {/* Main container for the modal */}
            <div className="container"> {/* Bootstrap container for layout */}
                <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                    {/* Modal dialog with centered alignment */}
                    <div className="modal-dialog modal-dialog-centered">
                        {/* Modal content container */}
                        <div className="modal-content">
                            <div className="modal-body">
                                <h5 className="modal-title text-center" id="loginModalLabel">LOGIN TO MY ACCOUNT</h5>
                                
                                {/* Close button for the modal */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                {/* Login form */}
                                <form>
                                    {/* Email input field with place holder */}
                                    <div className="form-group">
                                        <input type="email" className="form-control" required autoComplete="off" placeholder="Email Address" />
                                        <label className="form-control-placeholder"></label>
                                    </div>

                                    {/* Password input field with place holder */}
                                    <div className="form-group">
                                        <input type="password" className="form-control" required autoComplete="off" placeholder="Password" />
                                        <label className="form-control-placeholder"></label>
                                    </div>
                                    
                                    {/* Checkbox for "Remember Me" option */}
                                    <div className="form-group">
                                        <label className="container-checkbox">
                                            Remember Me On This Computer
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark-box"></span>
                                        </label>
                                    </div>
                                    
                                    {/* Login button */}
                                    <div className="btn-check-log">
                                        <button type="submit" className="btn-check-login">LOGIN</button>
                                    </div>
                                    
                                    {/* Link for forgotten password */}
                                    <div className="forgot-pass-fau text-center pt-3">
                                        <a href="#" className="text-secondary"></a>
                                    </div>
                                    
                                    {/* Link to switch to the registration modal */}
                                    <div className="create-new-fau text-center pt-3">
                                        <a href="#" className="text-primary-fau" data-bs-toggle="modal" data-bs-target="#registrationModal" data-bs-dismiss="modal">Create A New Account</a>
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

export default LoginModel;
