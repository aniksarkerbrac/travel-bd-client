import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <h1 style={{color: '#098342', fontWeight: 'bold', fontSize:'30px',fontFamily:'Irish Grover, cursive'}} class="ms-4">travel-BD</h1>
                    <ul class="navbar-nav ms-auto mb-2 me-4 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Contact Us</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;