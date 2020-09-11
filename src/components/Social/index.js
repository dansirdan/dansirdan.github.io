import React from 'react';
import { Row } from 'react-materialize';
import './style.css';

const Social = () => {

  return (
    <div className='section container'>
      <Row className='center-align'>
        {/* IMPORTED FROM PREVIOUS PORTFOLIO */}
        {/* TODO:
              - create list of icons
              - pass in theme color
              - map each social
              - blend with materialize
        */}
        <ul className="social-network social-circle justify-content-center">
          <li>
            <a href="https://github.com/dansirdan" className="icoGit" title="Git" target="_blank" rel='noopener noreferrer'>
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/dmonteton" className="icoFacebook" title="Facebook" target="_blank" rel='noopener noreferrer'>
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/DanielMont_Eton" className="icoTwitter" title="Twitter" target="_blank" rel='noopener noreferrer'>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/images/Daniel_Mont-Eton.pdf" className="icoPdf" title="PDF" target="_blank" rel='noopener noreferrer'>
              <i className="fas fa-file-pdf"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daniel-mont-eton-43a81055/" className="icoLinkedin" title="Linkedin"
              target="_blank"
              rel='noopener noreferrer'>
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </Row>
    </div>
  );
};

export default Social;