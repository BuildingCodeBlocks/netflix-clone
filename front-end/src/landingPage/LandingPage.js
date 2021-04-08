import React from 'react';
import '../components/styles/global.scss';

export default class LandingPage extends React.Component {
    render() {
        return (
          <div id="appMountPoint">
            <div class="basicLayout">
              <div class="netflix-sans-font-loaded">
                <div class="our-story-desktop-framework">
                  <div>
                    <div class="lang-selector-test our-story-container" dir="ltr">
                      <div class="our-story-header-wrapper">
                        <div class="our-story-header" data-uia-our-story="our-story-header">
                          <span class="svg-nfLogo our-story-logo nfLogo" data-uia="netflix-header-svg-logo-noclick">
                            <svg viewBox="0 0 111 30" class="svg-icon svg-icon-netflix-logo" focusable="false">
                              <g id="netflix-logo">
                                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 
                                10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path>
                              </g>
                            </svg>
                            <span class="screen-reader-text">Netflix</span>
                          </span>
                          <div class="lang-selection-container" id="lang-switcher">
                            <div data-uia="language-picker+container" class="ui-select-wrapper">
                              <label for="undefined-select" class="ui-label no-display">
                                <span class="ui-label-text"></span>
                              </label>
                              <div class="select-arrow medium prefix globe">
                                <select data-uia="language-picker" class="ui-select medium" id="undefined-select" tabindex="0" placeholder="lang-switcher">
                                  <option selected="" value="/br/" data-language="pt" data-country="BR">Português</option>
                                  <option value="/br-en/" data-language="en" data-country="BR">English</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <a href="https://www.netflix.com/login" class="authLinks redButton" data-uia="header-login-link">Entrar</a>
                        </div>
                      </div>
                      <div class="our-story-cards" data-uia-our-story="our-story-cards">
                        <div class="our-story-card hero-card hero_fuji vlv" data-uia-our-story="hero_fuji" data-uia="our-story-card">
                          <div class="our-story-card-background">
                            <div class="concord-img-wrapper" data-uia="concord-img-wrapper" style={{height: "703px"}}>
                              <img class="concord-img vlv-creative" src="./NetflixFiles_files/BR-pt-20210322-popsignuptwoweeks-
                              perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-
                              4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, 
                              https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-
                              20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, 
                              https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-
                              20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
                              <div class="concord-img-gradient"></div>                              
                            </div>
                          </div>
                          <div class="our-story-card-text">
                            <h1 id="" class="our-story-card-title" data-uia="hero-title">Filmes, séries e muito mais. Sem limites. </h1>
                            <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Assista onde quiser. Cancele quando quiser.</h2>
                            <form class="cta-form email-form" data-uia="email-form" method="GET">
                              <h3 class="email-form-title">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                              <div class="email-form-lockup">
                                <ul class="simpleForm structural ui-grid">
                                  <li data-uia="field-email+wrapper" class="nfFormSpace field-email">
                                    <div data-uia="field-email+container" class="nfInput nfInputResponsive">
                                    <div class="nfInputPlacement">
                                      <label class="input_id" placeholder="email">
                                        <input type="email" data-uia="field-email" name="email" class="nfTextField" id="id_email_hero_fuji" 
                                          value="" tabindex="0" autocomplete="email" maxlength="50" minlength="5" dir="" />
                                          <label for="id_email_hero_fuji" class="placeLabel">Email</label>
                                      </label>
                                    </div>
                                    </div>
                                  </li>
                                </ul>
                                <div class="our-story-cta-container cta-link-wrapper">
                                  <button class="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autocomplete="off" 
                                    tabindex="0" role="link" data-uia="our-story-cta-hero_fuji">
                                    <span id="" class="cta-btn-txt" data-uia="">Vamos lá</span>
                                    <span id="" class="chevron-right-arrow" data-uia="">
                                        <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc>
                                            <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                            <h3 id="" class="our-story-card-disclaimer" data-uia="our-story-card-disclaimer"></h3>
                          </div>
                          <div class="center-pixel" style={{position: "absolute"}}></div>
                        </div>
                        <div class="our-story-card animation-card watchOnTv" data-uia-our-story="watchOnTv" data-uia="our-story-card">
                          <div class="animation-card-container">
                            <div class="our-story-card-text">
                              <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Aproveite na TV.</h1>
                              <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h2>
                            </div>
                            <div class="our-story-card-img-container">
                              <div class="our-story-card-animation-container">
                                <img alt="" class="our-story-card-img" src="./NetflixFiles_files/tv.png" data-uia="our-story-card-img" />
                                <div class="our-story-card-animation">
                                  <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                                  </video>
                                  <div class="our-story-card-animation-text"></div>
                                </div>
                              </div>
                            </div>
                            <div class="center-pixel" style={{position: "absolute"}}></div>
                          </div>
                        </div>
                        <div class="our-story-card animation-card downloadAndWatch flipped" data-uia-our-story="downloadAndWatch" data-uia="our-story-card">
                          <div class="animation-card-container">
                            <div class="our-story-card-text">
                              <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Baixe séries para assistir offline.</h1>
                              <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Salve seus títulos favoritos e sempre tenha algo para assistir.</h2>
                            </div>
                            <div class="our-story-card-img-container">
                              <div class="our-story-card-animation-container">
                                <img alt="" class="our-story-card-img" src="./NetflixFiles_files/mobile-0819.jpg" data-uia="our-story-card-img" />
                                <div class="our-story-card-animation">
                                  <div class="our-story-card-animation-image">
                                    <img alt="" src="./NetflixFiles_files/boxshot.png"/>
                                  </div>
                                  <div class="our-story-card-animation-text">
                                    <div id="" class="text-0" data-uia="">Stranger Things</div>
                                    <div id="" class="text-1" data-uia="">Download em andamento... </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="center-pixel" style={{position:"absolute"}}></div>
                          </div>
                        </div>
                        <div class="our-story-card animation-card watchOnDevice" data-uia-our-story="watchOnDevice" data-uia="our-story-card">
                          <div class="animation-card-container">
                            <div class="our-story-card-text">
                              <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Assista quando quiser.</h1>
                              <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</h2>
                            </div>
                            <div class="our-story-card-img-container">
                              <div class="our-story-card-animation-container">
                                <img alt="" class="our-story-card-img" src="./NetflixFiles_files/device-pile.png" data-uia="our-story-card-img" />
                                <div class="our-story-card-animation">
                                <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                                </video>
                                  <div class="our-story-card-animation-text"></div>
                                </div>
                              </div>
                            </div>
                            <div class="center-pixel" style={{position:"absolute"}}></div>
                          </div>
                        </div>
                        <div class="our-story-card faq-card" data-uia-our-story="faq" data-uia="our-story-card" id="faq">
                          <div class="our-story-card-text">
                            <h1 id="" class="our-story-card-title" data-uia="faq-title">Perguntas frequentes</h1>
                            <ul class="faq-list">
                              <li class="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="what_is_netflix">
                                <button class="faq-question">O que é a Netflix?
                                  <svg id="thin-x" viewBox="0 0 26 26" class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                  </svg>
                                </button>
                                <div class="faq-answer closed">
                                  <span id="" data-uia="">A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, 
                                    filmes e documentários premiados em milhares de aparelhos conectados à internet.
                                    <br/><br/>Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. 
                                    Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                                  </span>
                                </div>
                              </li>
                              <li class="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="cost">
                                <button class="faq-question">Quanto custa a Netflix?
                                  <svg id="thin-x" viewBox="0 0 26 26" class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                  </svg>
                                </button>
                                <div class="faq-answer closed">
                                  <span id="" data-uia="">Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. 
                                    Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras.
                                  </span>
                                </div>
                              </li>
                              <li class="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="where_to_watch">
                                <button class="faq-question">Onde posso assistir?
                                  <svg id="thin-x" viewBox="0 0 26 26" class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                  </svg>
                                </button>
                                  <div class="faq-answer closed">
                                    <span id="" data-uia="">Assista onde quiser, 
                                      o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir 
                                      no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, 
                                      tablets, aparelhos de streaming e videogames.
                                      <br/><br/>
                                      Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, 
                                      Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. 
                                      Leve a Netflix com você para qualquer lugar.
                                    </span>
                                  </div>
                              </li>
                              <li class="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="cancel">
                                <button class="faq-question"> Como faço para cancelar?
                                  <svg id="thin-x" viewBox="0 0 26 26" class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                  </svg>
                                </button>
                                <div class="faq-answer closed">
                                  <span id="" data-uia="">A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com 
                                    apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                                  </span>
                                </div>
                              </li>
                              <li class="faq-list-item" data-uia-our-story="faq-list-item" data-uia-faq="what_to_watch_nft">
                                <button class="faq-question">O que eu posso assistir na Netflix?
                                  <svg id="thin-x" viewBox="0 0 26 26" class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                  </svg>
                                </button>
                                <div class="faq-answer closed">
                                  <span id="" data-uia="">A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. 
                                    Assista o quanto quiser, quando quiser.
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <form class="cta-form email-form" data-uia="email-form" method="GET">
                              <h3 class="email-form-title">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                              <div class="email-form-lockup">
                                <ul class="simpleForm structural ui-grid">
                                  <li data-uia="field-email+wrapper" class="nfFormSpace field-email">
                                    <div data-uia="field-email+container" class="nfInput nfInputResponsive">
                                      <div class="nfInputPlacement">
                                        <label class="input_id" placeholder="email">
                                          <input type="email" data-uia="field-email" name="email" class="nfTextField" id="id_email_faq" 
                                            value="" tabindex="0" autocomplete="email" maxlength="50" minlength="5" dir="" />
                                            <label for="id_email_faq" class="placeLabel">Email</label>
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                </ul>      
                                <div class="our-story-cta-container cta-link-wrapper">
                                  <button class="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autocomplete="off" tabindex="0" role="link" 
                                    data-uia="our-story-cta-faq"><span id="" class="cta-btn-txt" data-uia="">Vamos lá</span>
                                    <span id="" class="chevron-right-arrow" data-uia="">
                                      <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                        <desc>chevron</desc>
                                        <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="center-pixel" style={{position:"absolute"}}></div>
                        </div>
                        <div class="our-story-card card-contents footer-card our-story-card-no-border" style={{position:"relative"}} 
                          data-uia-our-story="footer" data-uia="our-story-card">
                            <div class="site-footer-wrapper centered dark">
                              <div class="footer-divider"></div>
                              <div class="site-footer">
                                <p class="footer-top">Dúvidas? Ligue <a class="footer-top-a" href="tel:0800-761-4631">0800-761-4631</a></p>
                                <ul class="footer-links structural">
                                  <li class="footer-link-item" placeholder="footer_responsive_link_faq_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412" 
                                      placeholder="footer_responsive_link_faq">
                                      <span id="" data-uia="data-uia-footer-label">Perguntas frequentes</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_help_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/" 
                                      placeholder="footer_responsive_link_help">
                                      <span id="" data-uia="data-uia-footer-label">Centro de ajuda</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_account_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://www.netflix.com/youraccount" 
                                      placeholder="footer_responsive_link_account">
                                      <span id="" data-uia="data-uia-footer-label">Conta</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_media_center_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://media.netflix.com/" 
                                      placeholder="footer_responsive_link_media_center">
                                      <span id="" data-uia="data-uia-footer-label">Imprensa</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_relations_item">
                                    <a class="footer-link" data-uia="footer-link" href="http://ir.netflix.com/" 
                                      placeholder="footer_responsive_link_relations">
                                      <span id="" data-uia="data-uia-footer-label">Relações com investidores</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_jobs_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://jobs.netflix.com/jobs" 
                                      placeholder="footer_responsive_link_jobs">
                                      <span id="" data-uia="data-uia-footer-label">Carreiras</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_gift_redeem_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://www.netflix.com/redeem" 
                                      placeholder="footer_responsive_link_gift_redeem">
                                      <span id="" data-uia="data-uia-footer-label">Resgatar cartão pré-pago</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_gift_buy_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://www.netflix.com/gift-cards" 
                                      placeholder="footer_responsive_link_gift_buy">
                                      <span id="" data-uia="data-uia-footer-label">Comprar cartão pré-pago</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_waysToWatch_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://www.netflix.com/watch" 
                                      placeholder="footer_responsive_link_waysToWatch">
                                      <span id="" data-uia="data-uia-footer-label">Formas de assistir</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_terms_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse" 
                                      placeholder="footer_responsive_link_terms">
                                      <span id="" data-uia="data-uia-footer-label">Termos de uso</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy" 
                                      placeholder="footer_responsive_link_privacy_separate_link">
                                      <span id="" data-uia="data-uia-footer-label">Privacidade</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://www.netflix.com/br/#" 
                                      placeholder="footer_responsive_link_cookies_separate_link">
                                      <span id="" data-uia="data-uia-footer-label">Preferências de cookies</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_corporate_information_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/corpinfo" 
                                      placeholder="footer_responsive_link_corporate_information">
                                      <span id="" data-uia="data-uia-footer-label">Informações corporativas</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_contact_us_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/contactus" 
                                      placeholder="footer_responsive_link_contact_us">
                                      <span id="" data-uia="data-uia-footer-label">Entre em contato</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_speed_test_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://fast.com/" 
                                      placeholder="footer_responsive_link_speed_test">
                                      <span id="" data-uia="data-uia-footer-label">Teste de velocidade</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item" placeholder="footer_responsive_link_legal_notices_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/notices" 
                                      placeholder="footer_responsive_link_legal_notices">
                                      <span id="" data-uia="data-uia-footer-label">Avisos legais</span>
                                    </a>
                                  </li>
                                  <li class="footer-link-item originals-link" placeholder="footer_responsive_link_netflix_originals_item">
                                    <a class="footer-link" data-uia="footer-link" href="https://www.netflix.com/br/browse/genre/839338" 
                                      placeholder="footer_responsive_link_netflix_originals">
                                      <span id="" data-uia="data-uia-footer-label">Originais Netflix</span>
                                    </a>
                                  </li>
                                </ul>
                                <div class="lang-selection-container" id="lang-switcher">
                                  <div data-uia="language-picker+container" class="ui-select-wrapper">
                                    <label for="undefined-select" class="ui-label no-display">
                                      <span class="ui-label-text"></span>
                                    </label>
                                    <div class="select-arrow medium prefix globe">
                                      <select data-uia="language-picker" class="ui-select medium" id="undefined-select" tabindex="0" placeholder="lang-switcher">
                                        <option selected="" value="/br/" data-language="pt" data-country="BR">Português</option>
                                        <option value="/br-en/" data-language="en" data-country="BR">English</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <p class="footer-country">Netflix Brasil</p>
                              </div>
                            </div>
                            <div class="center-pixel" style={{position:"absolute"}}></div>
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