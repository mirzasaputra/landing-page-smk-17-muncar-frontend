import { h, Fragment } from 'jsx-dom'
import Component from '@/utils/component'

export default class extends Component {
    render() {
        return (
            <div>
                <div class="preloader">
                    <img class="preloader__image" width="80" src="images/favicon.png" alt="" />
                </div>

                <div class="page-wrapper">

                    <header class="main-header main-header--two clearfix bg-dark">

                        <div class="main-header--two__top clearfix header-bg">
                            <div class="container">
                                <div class="main-header--two__top-inner clearfix">
                                    <div class="main-header--two__top-left">
                                        <ul class="main-header--two__top-contact-info list-unstyled">
                                            <li class="main-header--two__top-contact-info-single">
                                                <div class="icon">
                                                    <span class="icon-chat"></span>
                                                </div>
                                                <div class="text">
                                                    <p><a href="tel:123456789">92 888 000 2222</a></p>
                                                </div>
                                            </li>

                                            <li class="main-header--two__top-contact-info-single">
                                                <div class="icon">
                                                    <span class="icon-message-1"></span>
                                                </div>
                                                <div class="text">
                                                    <p><a href="mailto:info@templatepath.com">needhelp@company.com</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="main-header--two__top-right clearfix">
                                        <div class="main-header--two__top-right-social-link">
                                            <ul class="list-unstyled">
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="main-header-two__bottom bg-dark">
                            <div class="container">
                                <div class="main-header-two__bottom-inner clearfix">
                                    <nav class="main-menu main-menu--1">
                                        <div class="main-menu__inner">
                                            <div class="left">
                                                <div class="logo-box1">
                                                    <a href="index.html">
                                                        <img src="images/logo.png" alt="" height="30" />
                                                    </a>
                                                </div>
                                            </div>
                                            <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>

                                            <div class="middle">
                                                <ul class="main-menu__list">
                                                    <li><a href="contact.html">Home</a></li>
                                                    <li class="dropdown current">
                                                        <a href="index.html">Profil</a>
                                                        <ul>
                                                            <li><a href="index.html">Tentang Kami</a></li>
                                                            <li><a href="index-2.html">Visi dan Misi</a></li>
                                                            <li><router-link link="/organizational-structure">Struktur Organisasi</router-link></li>
                                                            {/* <li><a href="index-2.html">Struktur Organisasi</a></li> */}
                                                            <li><a href="index-2.html">Lokasi</a></li>
                                                            <li><a href="index-2.html">Street View</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown current">
                                                        <a href="index.html">Akademik</a>
                                                        <ul>
                                                            <li><a href="index.html">Teknik Kendaraan Ringan</a></li>
                                                            <li><a href="index-2.html">Teknik Pengelasan</a></li>
                                                            <li><a href="index-2.html">Rekayasa Perangkat Lunak</a></li>
                                                            <li><a href="index-2.html">Akomodasi Perhotelan</a></li>
                                                            <li><a href="index-2.html">Tata Niaga</a></li>
                                                            <li><a href="index-2.html">Akuntansi</a></li>
                                                            <li><a href="index-2.html">Kalender Akademik Sekolah</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="about.html">Berita</a></li>
                                                    <li><a href="about.html">Pengumuman</a></li>
                                                    <li><a href="about.html">Agenda</a></li>
                                                    <li><a href="about.html">Video</a></li>
                                                </ul>
                                            </div>

                                            <div class="right">
                                                <div class="main-menu__right">
                                                    <div class="main-menu__right-cart-search">
                                                        <div class="main-menu__right-search-box">
                                                            <a href="#" class="thm-btn search-toggler">Hubungi Kami</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>

                                </div>
                            </div>
                        </div>

                    </header>

                    <router-view></router-view>
                    
                    <footer class="footer-one">
                        <div class="footer-one__bg" style="background-image: url(images/footer.jpg);">
                        </div>
                        <div class="footer-one__top">
                            <div class="container">
                                <div class="row">
                                    
                                    <div class="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                        <div class="footer-widget__column footer-widget__about">
                                            <div class="footer-widget__about-logo">
                                                <a href="index.html"><img src="images/favicon.png" width="130" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    
                                    <div class="col-xl-3 col-lg-4 col-md-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                        <div class="footer-widget__column footer-widget__courses">
                                            <h3 class="footer-widget__title">Alamat</h3>
                                            <p className="text-muted">
                                                SMK 17 AGUSTUS 1945 MUNCAR JL. RAYA BLAMBANGAN NO. 37 MUNCAR, KAB. BANYUWANGI PROV. JATIM
                                            </p>
                                        </div>
                                    </div>
                                    

                                    
                                    <div class="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
                                        <div class="footer-widget__column footer-widget__contact">
                                            <h3 class="footer-widget__title">Contact</h3>
                                            <p class="text">88 broklyn street, New York USA</p>
                                            <p><a href="mailto:info@templatepath.com">needhelp@company.com</a></p>
                                            <p class="phone"><a href="tel:123456789">92 888 666 0000</a></p>
                                        </div>
                                    </div>
                                    

                                    
                                    <div class="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.9s">
                                        <div class="footer-widget__column footer-widget__social-links">
                                            <ul class="footer-widget__social-links-list list-unstyled clearfix">
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>

                        
                        <div class="footer-one__bottom">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="footer-one__bottom-inner">
                                            <div class="footer-one__bottom-text text-center">
                                                <p>&copy; Copyright 2021 by Layerdrops.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </footer>
                    









                </div>



                <div class="mobile-nav__wrapper">
                    <div class="mobile-nav__overlay mobile-nav__toggler"></div>
                    
                    <div class="mobile-nav__content">
                        <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

                        <div class="logo-box">
                            <a href="index.html" aria-label="logo image"><img src="images/logo.png"
                                    width="155" alt="" /></a>
                        </div>
                        
                        <div class="mobile-nav__container"></div>
                        

                        <ul class="mobile-nav__contact list-unstyled">
                            <li>
                                <i class="icon-phone-call"></i>
                                <a href="mailto:needhelp@packageName__.com">needhelp@zilom.com</a>
                            </li>
                            <li>
                                <i class="icon-letter"></i>
                                <a href="tel:666-888-0000">666 888 0000</a>
                            </li>
                        </ul>
                        <div class="mobile-nav__top">
                            <div class="mobile-nav__social">
                                <a href="#" class="fab fa-twitter"></a>
                                <a href="#" class="fab fa-facebook-square"></a>
                                <a href="#" class="fab fa-pinterest-p"></a>
                                <a href="#" class="fab fa-instagram"></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                



                <div class="search-popup">
                    <div class="search-popup__overlay search-toggler"></div>
                    
                    <div class="search-popup__content">
                        <form action="#">
                            <label for="search" class="sr-only">search here</label>
                            <input type="text" id="search" placeholder="Search Here..." />
                            <button type="submit" aria-label="search submit" class="thm-btn2">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}