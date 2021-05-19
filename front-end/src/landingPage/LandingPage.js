import React from 'react';
import '../components/styles/global.scss';
import Header from './header';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div id="appMountPoint">
        <div className="basicLayout">
          <div className="netflix-sans-font-loaded">
            <div className="our-story-desktop-framework">
              <div>
                <div className="lang-selector-test our-story-container" dir="ltr">
                  <Header />

                  <div className="our-story-cards" data-uia-our-story="our-story-cards">
                    <div className="our-story-card hero-card hero_fuji vlv" data-uia-our-story="hero_fuji" data-uia="our-story-card">
                      <div className="our-story-card-background">
                        <div className="concord-img-wrapper" data-uia="concord-img-wrapper" style={{ height: "703px" }}>
                          <img className="concord-img vlv-creative" src="../images/default_bg.jpg" alt="" />
                          <div className="concord-img-gradient"></div>
                        </div>
                      </div>
                      <div className="our-story-card-text">
                        <h1 id="" className="our-story-card-title" data-uia="hero-title">Filmes, séries e muito mais. Sem limites. </h1>
                        <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Assista onde quiser. Cancele quando quiser.</h2>
                        <form className="cta-form email-form" data-uia="email-form" method="GET">
                          <h3 className="email-form-title">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
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
                    <div className="our-story-card animation-card watchOnTv" data-uia-our-story="watchOnTv" data-uia="our-story-card">
                      <div className="animation-card-container">
                        <div className="our-story-card-text">
                          <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Aproveite na TV.</h1>
                          <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h2>
                        </div>
                        <div className="our-story-card-img-container">
                          <div className="our-story-card-animation-container">
                            <img alt="" className="our-story-card-img" src="./NetflixFiles_files/tv.png" data-uia="our-story-card-img" />
                            <div className="our-story-card-animation">
                              <video className="our-story-card-video" autoPlay="" playsInline="" muted="" loop="">
                                <source src="" type="video/mp4" />
                              </video>
                              <div className="our-story-card-animation-text"></div>
                            </div>
                          </div>
                        </div>
                        <div className="center-pixel" style={{ position: "absolute" }}></div>
                      </div>
                    </div>
                    <div className="our-story-card animation-card downloadAndWatch flipped" data-uia-our-story="downloadAndWatch" data-uia="our-story-card">
                      <div className="animation-card-container">
                        <div className="our-story-card-text">
                          <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Baixe séries para assistir offline.</h1>
                          <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Salve seus títulos favoritos e sempre tenha algo para assistir.</h2>
                        </div>
                        <div className="our-story-card-img-container">
                          <div className="our-story-card-animation-container">
                            <img alt="" className="our-story-card-img" src="./NetflixFiles_files/mobile-0819.jpg" data-uia="our-story-card-img" />
                            <div className="our-story-card-animation">
                              <div className="our-story-card-animation-image">
                                <img alt="" src="./NetflixFiles_files/boxshot.png" />
                              </div>
                              <div className="our-story-card-animation-text">
                                <div id="" className="text-0" data-uia="">Stranger Things</div>
                                <div id="" className="text-1" data-uia="">Download em andamento... </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="center-pixel" style={{ position: "absolute" }}></div>
                      </div>
                    </div>
                    <div className="our-story-card animation-card watchOnDevice" data-uia-our-story="watchOnDevice" data-uia="our-story-card">
                      <div className="animation-card-container">
                        <div className="our-story-card-text">
                          <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Assista quando quiser.</h1>
                          <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</h2>
                        </div>
                        <div className="our-story-card-img-container">
                          <div className="our-story-card-animation-container">
                            <img alt="" className="our-story-card-img" src="./NetflixFiles_files/device-pile.png" data-uia="our-story-card-img" />
                            <div className="our-story-card-animation">
                              <video className="our-story-card-video" autoPlay="" playsInline="" muted="" loop="">
                                <source src="" type="video/mp4" />
                              </video>
                              <div className="our-story-card-animation-text"></div>
                            </div>
                          </div>
                        </div>
                        <div className="center-pixel" style={{ position: "absolute" }}></div>
                      </div>
                    </div>
                    <div className="our-story-card faq-card" data-uia-our-story="faq" data-uia="our-story-card" id="faq">
                      <div className="our-story-card-text">
                        <h1 id="" className="our-story-card-title" data-uia="faq-title">Perguntas frequentes</h1>
                        <ul className="faq-list">
                          <li className="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="what_is_netflix">
                            <button className="faq-question">O que é a Netflix?
                                  <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                              </svg>
                            </button>
                            <div className="faq-answer closed">
                              <span id="" data-uia="">A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries,
                              filmes e documentários premiados em milhares de aparelhos conectados à internet.
                                    <br /><br />Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível.
                                    Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                                  </span>
                            </div>
                          </li>
                          <li className="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="cost">
                            <button className="faq-question">Quanto custa a Netflix?
                                  <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                              </svg>
                            </button>
                            <div className="faq-answer closed">
                              <span id="" data-uia="">Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única.
                              Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras.
                                  </span>
                            </div>
                          </li>
                          <li className="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="where_to_watch">
                            <button className="faq-question">Onde posso assistir?
                                  <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                              </svg>
                            </button>
                            <div className="faq-answer closed">
                              <span id="" data-uia="">Assista onde quiser,
                              o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir
                              no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones,
                              tablets, aparelhos de streaming e videogames.
                                      <br /><br />
                                      Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS,
                                      Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet.
                                      Leve a Netflix com você para qualquer lugar.
                                    </span>
                            </div>
                          </li>
                          <li className="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="cancel">
                            <button className="faq-question"> Como faço para cancelar?
                                  <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                              </svg>
                            </button>
                            <div className="faq-answer closed">
                              <span id="" data-uia="">A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com
                              apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                                  </span>
                            </div>
                          </li>
                          <li className="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="what_to_watch_nft">
                            <button className="faq-question">O que eu posso assistir na Netflix?
                                  <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                              </svg>
                            </button>
                            <div className="faq-answer closed">
                              <span id="" data-uia="">A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais.
                              Assista o quanto quiser, quando quiser.
                                  </span>
                            </div>
                          </li>
                        </ul>
                        <form className="cta-form email-form" data-uia="email-form" method="GET">
                          <h3 className="email-form-title">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                          <div className="email-form-lockup">
                            <ul className="simpleForm structural ui-grid">
                              <li data-uia="field-email+wrapper" className="nfFormSpace field-email">
                                <div data-uia="field-email+container" className="nfInput nfInputResponsive">
                                  <div className="nfInputPlacement">
                                    <label className="input_id" placeholder="email">
                                      <input type="email" data-uia="field-email" name="email" className="nfTextField" id="id_email_faq"
                                        value="" tabIndex="0" autoComplete="email" maxLength="50" minLength="5" dir="" />
                                      <label htmlFor="id_email_faq" className="placeLabel">Email</label>
                                    </label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="our-story-cta-container cta-link-wrapper">
                              <button className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autoComplete="off" tabIndex="0" role="link"
                                data-uia="our-story-cta-faq"><span id="" className="cta-btn-txt" data-uia="">Vamos lá</span>
                                <span id="" className="chevron-right-arrow" data-uia="">
                                  <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                    <desc>chevron</desc>
                                    <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd"></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="center-pixel" style={{ position: "absolute" }}></div>
                    </div>
                    <div className="our-story-card card-contents footer-card our-story-card-no-border" style={{ position: "relative" }}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}