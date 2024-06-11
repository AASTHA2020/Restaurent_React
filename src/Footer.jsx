import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="icons">
            <h4>GeeksFood</h4>
          </div>
          <div className="about-para">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
          </div>
          <div className="footer-menu">
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>History</li>
              <li>Services</li>
              <li>Project</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="social-icon">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
            </a>
      
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" />
            </a>
         
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
