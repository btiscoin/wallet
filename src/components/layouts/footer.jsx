import React from 'react';

const Footer = ({ onLogout }) => {
    return (
        
        /* BEGIN Page Footer */
        <footer className="page-footer" role="contentinfo">
          <div className="d-flex align-items-center flex-1 text-muted">
            <span className="hidden-md-down fw-700">2021 © BTIS.IO &nbsp;<a href="https://www.gotbootstrap.com" className="text-primary fw-500" title="gotbootstrap.com" target="_blank">btis.io</a></span>
          </div>
          <div>
            <ul className="list-table m-0">
              <li><a href="intel_introduction.html" className="text-secondary fw-700">About</a></li>
              <li className="pl-3"><a href="info_app_licensing.html" className="text-secondary fw-700">License</a></li>
              <li className="pl-3"><a href="info_app_docs.html" className="text-secondary fw-700">Documentation</a></li>
              <li className="pl-3 fs-xl"><a href="https://wrapbootstrap.com/user/MyOrange" className="text-secondary" target="_blank"><i className="fal fa-question-circle" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </footer>
        /* END Page Footer */
    );
};

export default Footer;
