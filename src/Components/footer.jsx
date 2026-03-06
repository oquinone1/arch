import React from 'react';

import '../Styling/footer.css';

const FooterComponent = () => {
    return (
    <div className='mobile-container'>
        <ul className="mobile-footer-buttons">
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>

        <div id="mobile-see-portfolio">
            See Our Portfolio
        </div>
    </div>
    )
}

export default FooterComponent;