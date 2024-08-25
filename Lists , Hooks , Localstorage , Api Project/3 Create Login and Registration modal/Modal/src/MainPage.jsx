import React from 'react';

// Functional component for rendering the main page with modal triggers
function MainPage() {
    return (
        <div className="main_container">
            <div className="container">
                <h2>Modal Login Form</h2>

                {/* Button to open the login modal */}
                <button
                    type="button"
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#loginModal" 
                >
                    Open Login Modal
                </button>

                <br /> {/* Line break for spacing */}
                <br /> {/* Additional line break for spacing */}

                <h2>Modal Registration Form</h2>

                {/* Button to open the registration modal */}
                <button
                    type="button"
                    className="btn btn-primary" 
                    data-bs-toggle="modal"
                    data-bs-target="#registrationModal"
                >
                    Open Registration Modal
                </button>
            </div>
        </div>
    );
}

export default MainPage;
