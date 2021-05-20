import React from 'react';
import '../components/styles/global.scss';

export default class Footer extends React.Component {
    render(){
        return (                    <div className="our-story-card card-contents footer-card our-story-card-no-border" style={{ position: "relative" }}
        data-uia-our-story="footer" data-uia="our-story-card">
        <div className="site-footer-wrapper centered dark">
          <div className="footer-divider"></div>
          <div className="site-footer">
            <p className="footer-top">Dúvidas? Ligue <a className="footer-top-a" href="tel:0800-761-4631">0800-761-4631</a></p>
            <ul className="footer-links structural">
              <li className="footer-link-item" placeholder="footer_responsive_link_faq_item">
                <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412"
                  placeholder="footer_responsive_link_faq">
                  <span id="" data-uia="data-uia-footer-label">Perguntas frequentes</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_help_item">
                <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/"
                  placeholder="footer_responsive_link_help">
                  <span id="" data-uia="data-uia-footer-label">Centro de ajuda</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_account_item">
                <a className="footer-link" data-uia="footer-link" href="https://www.netflix.com/youraccount"
                  placeholder="footer_responsive_link_account">
                  <span id="" data-uia="data-uia-footer-label">Conta</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_media_center_item">
                <a className="footer-link" data-uia="footer-link" href="https://media.netflix.com/"
                  placeholder="footer_responsive_link_media_center">
                  <span id="" data-uia="data-uia-footer-label">Imprensa</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_relations_item">
                <a className="footer-link" data-uia="footer-link" href="http://ir.netflix.com/"
                  placeholder="footer_responsive_link_relations">
                  <span id="" data-uia="data-uia-footer-label">Relações com investidores</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_jobs_item">
                <a className="footer-link" data-uia="footer-link" href="https://jobs.netflix.com/jobs"
                  placeholder="footer_responsive_link_jobs">
                  <span id="" data-uia="data-uia-footer-label">Carreiras</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_gift_redeem_item">
                <a className="footer-link" data-uia="footer-link" href="https://www.netflix.com/redeem"
                  placeholder="footer_responsive_link_gift_redeem">
                  <span id="" data-uia="data-uia-footer-label">Resgatar cartão pré-pago</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_gift_buy_item">
                <a className="footer-link" data-uia="footer-link" href="https://www.netflix.com/gift-cards"
                  placeholder="footer_responsive_link_gift_buy">
                  <span id="" data-uia="data-uia-footer-label">Comprar cartão pré-pago</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_waysToWatch_item">
                <a className="footer-link" data-uia="footer-link" href="https://www.netflix.com/watch"
                  placeholder="footer_responsive_link_waysToWatch">
                  <span id="" data-uia="data-uia-footer-label">Formas de assistir</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_terms_item">
                <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse"
                  placeholder="footer_responsive_link_terms">
                  <span id="" data-uia="data-uia-footer-label">Termos de uso</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item">
                <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy"
                  placeholder="footer_responsive_link_privacy_separate_link">
                  <span id="" data-uia="data-uia-footer-label">Privacidade</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item">
                <a className="footer-link" data-uia="footer-link" href="https://www.netflix.com/br/#"
                  placeholder="footer_responsive_link_cookies_separate_link">
                  <span id="" data-uia="data-uia-footer-label">Preferências de cookies</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_corporate_information_item">
                <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/corpinfo"
                  placeholder="footer_responsive_link_corporate_information">
                  <span id="" data-uia="data-uia-footer-label">Informações corporativas</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_contact_us_item">
                <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/contactus"
                  placeholder="footer_responsive_link_contact_us">
                  <span id="" data-uia="data-uia-footer-label">Entre em contato</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_speed_test_item">
                <a className="footer-link" data-uia="footer-link" href="https://fast.com/"
                  placeholder="footer_responsive_link_speed_test">
                  <span id="" data-uia="data-uia-footer-label">Teste de velocidade</span>
                </a>
              </li>
              <li className="footer-link-item" placeholder="footer_responsive_link_legal_notices_item">
                <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/notices"
                  placeholder="footer_responsive_link_legal_notices">
                  <span id="" data-uia="data-uia-footer-label">Avisos legais</span>
                </a>
              </li>
              <li className="footer-link-item originals-link" placeholder="footer_responsive_link_netflix_originals_item">
                <a className="footer-link" data-uia="footer-link" href="https://www.netflix.com/br/browse/genre/839338"
                  placeholder="footer_responsive_link_netflix_originals">
                  <span id="" data-uia="data-uia-footer-label">Originais Netflix</span>
                </a>
              </li>
            </ul>
            <div className="lang-selection-container" id="lang-switcher">
              <div data-uia="language-picker+container" className="ui-select-wrapper">
                <label htmlFor="undefined-select" className="ui-label no-display">
                  <span className="ui-label-text"></span>
                </label>
                <div className="select-arrow medium prefix globe">
                  <select data-uia="language-picker" className="ui-select medium" id="undefined-select" tabIndex="0" placeholder="lang-switcher">
                    <option defaultValue="" value="/br/" data-language="pt" data-country="BR">Português</option>
                    <option value="/br-en/" data-language="en" data-country="BR">English</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="footer-country">Netflix Brasil</p>
          </div>
        </div>
        <div className="center-pixel" style={{ position: "absolute" }}></div>
      </div>);
    }
}
