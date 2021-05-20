import React from 'react';
import '../components/styles/global.scss';

export default class Login extends React.Component {
    render(){
        return ( <div className="our-story-card hero-card hero_fuji vlv" data-uia-our-story="hero_fuji" data-uia="our-story-card">
        <div className="our-story-card-background">
            <div className="concord-img-wrapper" data-uia="concord-img-wrapper" style={{ height: "703px" }}>
            <img className="concord-img vlv-creative" src="../images/default_bg.jpg" alt="" />
            <div className="concord-img-gradient"></div>
            </div>
        </div>
        <div className="our-story-card-text">
            <form className="cta-form email-form" data-uia="email-form" method="GET">
            <div className="email-form-lockup">
                <ul className="simpleForm structural ui-grid">
                <li data-uia="field-email+wrapper" className="nfFormSpace field-email">
                    <div data-uia="field-email+container" className="nfInput nfInputResponsive">
                    <div className="nfInputPlacement">
                        <label className="input_id" placeholder="email">
                        <input type="email" data-uia="field-email" name="email" className="nfTextField" id="id_email_hero_fuji"
                            value="" tabIndex="0" autoComplete="email" maxLength="50" minLength="5" dir="" />
                        <label htmlFor="id_email_hero_fuji" className="placeLabel">Email</label>
                        </label>
                    </div>
                    </div>
                </li>
                </ul>
                <div className="our-story-cta-container cta-link-wrapper">
                <button className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autoComplete="off"
                    tabIndex="0" role="link" data-uia="our-story-cta-hero_fuji">
                    <span id="" className="cta-btn-txt" data-uia="">Vamos lá</span>
                    <span id="" className="chevron-right-arrow" data-uia="">
                    <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc>
                        <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd"></path>
                    </svg>
                    </span>
                </button>
                </div>
            </div>
            </form>
            <h3 id="" className="our-story-card-disclaimer" data-uia="our-story-card-disclaimer"></h3>
        </div>
        <div className="center-pixel" style={{ position: "absolute" }}></div>
        </div>
            );
    }
}
