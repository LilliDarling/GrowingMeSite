import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <button class="dropdownButton">
                <img src="images/Dropdownblk1.png" alt="dropdownButton">
            </button>
            <ul class="dropdownMenu">
                <li><a href="1">Home</a></li>
                <li><a href="2">About</a></li>
                <li><a href="3">Articles</a></li>
                <li><a href="4">Podcasts</a></li>
                <li><a href="5">Store</a></li>
                <li><a href="6">Contact</a></li>
            </ul>
         </nav>
    );
};

export default Navbar;
