import React from 'react';
import { Link } from 'react-router-dom';
const LeftAside = ({ onLogout }) => {

    return (
        < aside className="page-sidebar" >
            <div className="page-logo">
                <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                    <img src="assets/img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo" />
                    <span className="page-logo-text mr-1">BTIS Wallet</span>
                    <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2" />
                    <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300" />
                </a>
            </div>
            {/* BEGIN PRIMARY NAVIGATION */}
            <nav id="js-primary-nav" className="primary-nav" role="navigation">
                {/* 
                          TIP: The menu items are not auto translated. You must have a residing lang file associated with the menu saved inside dist/media/data with reference to each 'data-i18n' attribute.
                          */}
                <ul id="js-nav-menu" className="nav-menu">
                <li className="active">
                        <Link to="mywallet">
                            <i className="fal fa-globe" />
                            <span className="nav-link-text" data-i18n="nav.blankpage">내 지갑</span>
                        </Link>
                    </li>
                    <li>
                        <a href="blank.html" title="Blank Project" data-filter-tags="blank page">
                            <i className="fal fa-globe" />
                            <span className="nav-link-text" data-i18n="nav.blankpage">보내기</span>
                        </a>
                    </li>
                    <li>
                        <a href="blank.html" title="Blank Project" data-filter-tags="blank page">
                            <i className="fal fa-globe" />
                            <span className="nav-link-text" data-i18n="nav.blankpage">받기</span>
                        </a>
                    </li>
                    <li>
                        <a href="blank.html" title="Blank Project" data-filter-tags="blank page">
                            <i className="fal fa-globe" />
                            <span className="nav-link-text" data-i18n="nav.blankpage">거래목록</span>
                        </a>
                    </li>
                    <li>
                        <a href="blank.html" title="Blank Project" data-filter-tags="blank page">
                            <i className="fal fa-globe" />
                            <span className="nav-link-text" data-i18n="nav.blankpage">공유하기</span>
                        </a>
                    </li>
                    <li>
                        <a href="blank.html" title="Blank Project" data-filter-tags="blank page">
                            <i className="fal fa-globe" />
                            <span className="nav-link-text" data-i18n="nav.blankpage">개인정보</span>
                        </a>
                    </li>
                    <li>
                        <a href="blank.html" title="Blank Project" data-filter-tags="blank page">
                            <i className="fal fa-globe" />
                            <span className="nav-link-text" data-i18n="nav.blankpage">로그아웃</span>
                        </a>
                    </li>
                </ul>
                <div className="filter-message js-filter-message bg-success-600" />
            </nav>
            {/* END PRIMARY NAVIGATION */}
            {/* NAV FOOTER */}
            <div className="nav-footer shadow-top">
                <a data-action="toggle" data-class="nav-function-minify" className="hidden-md-down">
                    <i className="ni ni-chevron-right" />
                    <i className="ni ni-chevron-right" />
                </a>
                <ul className="list-table m-auto nav-footer-buttons">
                    <li>
                        <a data-toggle="tooltip" data-placement="top" title="Chat logs">
                            <i className="fal fa-comments" />
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tooltip" data-placement="top" title="Support Chat">
                            <i className="fal fa-life-ring" />
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tooltip" data-placement="top" title="Make a call">
                            <i className="fal fa-phone" />
                        </a>
                    </li>
                </ul>
            </div> {/* END NAV FOOTER */}
        </aside >
    );
}
export default LeftAside;
