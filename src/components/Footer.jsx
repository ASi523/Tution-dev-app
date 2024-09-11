import React from 'react';
// import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Contact Details */}
                <div className="contact-details">
                    <h4>Contact Us</h4>
                    <p>Phone: +91 9392732341</p>
                    <p>Email: info@sklassics.com</p>
                    <p>Address: 7-1-414/1, Sri Swarupam Apartments, Ameerpet - 500016</p>
                </div>

                {/* Footer Links */}
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Heading 1</h4>
                        <ul>
                            <li>List Item 1</li>
                            <li>List Item 2</li>
                            <li>List Item 3</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Heading 2</h4>
                        <ul>
                            <li>List Item 1</li>
                            <li>List Item 2</li>
                            <li>List Item 3</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Heading 3</h4>
                        <ul>
                            <li>List Item 1</li>
                            <li>List Item 2</li>
                            <li>List Item 3</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bar">
                <p className="copyright">© 2024 Sklassics</p>
                <p className="privacy-policy">Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
