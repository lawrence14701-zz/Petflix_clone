import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="social-links">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lawrencenicastro/"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://angel.co/u/lawrence-nicastro"
            className="social-link"
          >
            <i className="fab fa-angellist"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/lawrence14701"
            className="social-link"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            className="social-link"
            target="_blank"
            href="mailto:lawrence.nicastro1@gmail.com"
          >
            <i className="fab fas fa-envelope"></i>
          </a>
        </div>
        <h2 className="footer-header">Description</h2>
        <p className="basic-info">
          A clone of the iconic web app Netflix, where users can stream pet
          videos. Feature of this webapp are: search bar, movie carousel, custom video controls, myList 
        </p>
        <h2 className="footer-header">Technologies</h2>
        <div className="footer-links">
          <li className="footer-link-wrapper">React.JS</li>
          <li className="footer-link-wrapper">Redux</li>
          <li className="footer-link-wrapper">Ruby On Rails</li>
          <li className="footer-link-wrapper">CSS3</li>
          <li className="footer-link-wrapper">HTML5</li>
          <li className="footer-link-wrapper">PostgreSQL</li>
        </div>

        <div target="_blank" className="personal-site">
          <a href="https://www.lawrencenicastro.me/">
            Designed By Lawrence Nicastro
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
