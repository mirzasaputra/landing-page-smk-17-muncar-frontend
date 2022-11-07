import { h, Fragment } from 'jsx-dom'
import Component from '@/utils/component'

export default class extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div dangerouslySetInnerHTML={{ __html: `
                    <video 
                    loop
                    muted
                    autoplay
                    playsinline
                    width="100%"
                    src="videos/profil-smk-17-muncar.mp4"
                    />`}}></div>
                    <div className="overlay"></div>
                </div>

                <section class="card-home py-4 py-lg-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="features-one__single">
                                    <div class="features-one__single-icon">
                                        <span class="text-danger fa fa-bullhorn"></span>
                                    </div>
                                    <div class="features-one__single-text">
                                        <h4><a href="#">Pengumuman</a></h4>
                                        <p>Lihat pengumuman.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div class="features-one__single">
                                    <div class="features-one__single-icon">
                                        <span class="text-danger fa fa-newspaper"></span>
                                    </div>
                                    <div class="features-one__single-text">
                                        <h4><a href="#">Berita</a></h4>
                                        <p>Lihat berita.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div class="features-one__single">
                                    <div class="features-one__single-icon">
                                        <span class="text-danger fa fa-book-open"></span>
                                    </div>
                                    <div class="features-one__single-text">
                                        <h4><a href="#">Agenda Sekolah</a></h4>
                                        <p>Lihat agenda sekolah.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="about-one clearfix py-5">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-6 wow slideInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div class="about-one__left">
                                    <ul class="about-one__left-img-box list-unstyled clearfix">
                                        <li class="about-one__left-single">
                                            <div class="about-one__left-img1">
                                                <img src="images/banner1.jpeg" alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-xl-6">
                                <div class="about-one__right wow slideInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div class="section-title">
                                        <span class="section-title__tagline">Berita Terbaru</span>
                                        <h2 class="section-title__title">JUARA III LKS TINGKAT KABUPATEN BANYUWANGI</h2>
                                    </div>
                                    <div class="about-one__right-inner">
                                        <p class="about-one__right-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo possimus impedit aliquam et suscipit voluptate excepturi. Eos delectus harum vero in itaque, temporibus adipisci suscipit...</p>
                                        <div class="about-one__btn">
                                            <a href="about.html" class="thm-btn">Baca Selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </section>

                <section className="clearfix py-5">
                    <div className="container">
                        <h2 className="line-heading mb-4">BERITA LAINNYA</h2>
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="blog-one__single">
                                    <div class="blog-one__single-img">
                                        <img src="images/banner1.jpeg" alt="" />
                                    </div>
                                    <div class="blog-one__single-content">
                                        <div class="blog-one__single-content-overlay-mata-info">
                                            <ul class="list-unstyled">
                                                <li><a href="#"><span class="icon-clock"></span>20 June</a></li>
                                                <li><a href="#"><span class="icon-user"></span>Admin </a></li>
                                                <li><a href="#"><span class="icon-chat"></span> Comments</a></li>
                                            </ul>
                                        </div>
                                        <h2 class="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                                Stand out in Discussions</a></h2>
                                        <p class="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                            copytyping refreshing the whole area.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div class="blog-one__single">
                                    <div class="blog-one__single-img">
                                        <img src="images/banner1.jpeg" alt="" />
                                    </div>
                                    <div class="blog-one__single-content">
                                        <div class="blog-one__single-content-overlay-mata-info">
                                            <ul class="list-unstyled">
                                                <li><a href="#"><span class="icon-clock"></span>20 June</a></li>
                                                <li><a href="#"><span class="icon-user"></span>Admin </a></li>
                                                <li><a href="#"><span class="icon-chat"></span> Comments</a></li>
                                            </ul>
                                        </div>
                                        <h2 class="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                                Stand out in Discussions</a></h2>
                                        <p class="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                            copytyping refreshing the whole area.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div class="blog-one__single">
                                    <div class="blog-one__single-img">
                                        <img src="images/banner1.jpeg" alt="" />
                                    </div>
                                    <div class="blog-one__single-content">
                                        <div class="blog-one__single-content-overlay-mata-info">
                                            <ul class="list-unstyled">
                                                <li><a href="#"><span class="icon-clock"></span>20 June</a></li>
                                                <li><a href="#"><span class="icon-user"></span>Admin </a></li>
                                                <li><a href="#"><span class="icon-chat"></span> Comments</a></li>
                                            </ul>
                                        </div>
                                        <h2 class="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                                Stand out in Discussions</a></h2>
                                        <p class="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                            copytyping refreshing the whole area.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="categories-one__btn text-center">
                            <a href="#" class="thm-btn btn-light">lihat semua berita</a>
                        </div>
                    </div>
                </section>

                <section class="testimonials-one clearfix">
                    <div class="auto-container">
                        <div class="section-title text-center">
                            <span class="section-title__tagline">Testimoni alumni</span>
                            <h2 class="section-title__title">Apa yang mereka katakan?</h2>
                        </div>
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="testimonials-one__wrapper">
                                    <div class="testimonials-one__pattern"><img
                                            src="src/assets/images/pattern/testimonials-one-left-pattern.png" alt="" /></div>
                                    <div class="shape1"><img src="src/assets/images/shapes/thm-shape3.png" alt="" /></div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="testimonials-one__carousel owl-carousel owl-theme owl-dot-type1">
                                                <div class="testimonials-one__single wow fadeInUp" data-wow-delay="0ms"
                                                    data-wow-duration="1500ms">
                                                    <div class="testimonials-one__single-inner">
                                                        <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div class="testimonials-one__single-client-info">
                                                            <div class="testimonials-one__single-client-info-img">
                                                                <img src="src/assets/images/testimonial/testimonials-v1-client-info-img1.png"
                                                                    alt="" />
                                                            </div>
                                                            <div class="testimonials-one__single-client-info-text">
                                                                <h5>Kevin Martin</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="testimonials-one__single wow fadeInUp" data-wow-delay="100ms"
                                                    data-wow-duration="1500ms">
                                                    <div class="testimonials-one__single-inner">
                                                        <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div class="testimonials-one__single-client-info">
                                                            <div class="testimonials-one__single-client-info-img">
                                                                <img src="src/assets/images/testimonial/testimonials-v1-client-info-img2.png"
                                                                    alt="" />
                                                            </div>
                                                            <div class="testimonials-one__single-client-info-text">
                                                                <h5>Christine Eve</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="testimonials-one__single wow fadeInUp" data-wow-delay="200ms"
                                                    data-wow-duration="1500ms">
                                                    <div class="testimonials-one__single-inner">
                                                        <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div class="testimonials-one__single-client-info">
                                                            <div class="testimonials-one__single-client-info-img">
                                                                <img src="src/assets/images/testimonial/testimonials-v1-client-info-img3.png"
                                                                    alt="" />
                                                            </div>
                                                            <div class="testimonials-one__single-client-info-text">
                                                                <h5>David Cooper</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="testimonials-one__single wow fadeInUp" data-wow-delay="0ms"
                                                    data-wow-duration="1500ms">
                                                    <div class="testimonials-one__single-inner">
                                                        <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div class="testimonials-one__single-client-info">
                                                            <div class="testimonials-one__single-client-info-img">
                                                                <img src="src/assets/images/testimonial/testimonials-v1-client-info-img1.png"
                                                                    alt="" />
                                                            </div>
                                                            <div class="testimonials-one__single-client-info-text">
                                                                <h5>Kevin Martin</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="testimonials-one__single wow fadeInUp" data-wow-delay="100ms"
                                                    data-wow-duration="1500ms">
                                                    <div class="testimonials-one__single-inner">
                                                        <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div class="testimonials-one__single-client-info">
                                                            <div class="testimonials-one__single-client-info-img">
                                                                <img src="src/assets/images/testimonial/testimonials-v1-client-info-img2.png"
                                                                    alt="" />
                                                            </div>
                                                            <div class="testimonials-one__single-client-info-text">
                                                                <h5>Christine Eve</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="testimonials-one__single wow fadeInUp" data-wow-delay="200ms"
                                                    data-wow-duration="1500ms">
                                                    <div class="testimonials-one__single-inner">
                                                        <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div class="testimonials-one__single-client-info">
                                                            <div class="testimonials-one__single-client-info-img">
                                                                <img src="src/assets/images/testimonial/testimonials-v1-client-info-img3.png"
                                                                    alt="" />
                                                            </div>
                                                            <div class="testimonials-one__single-client-info-text">
                                                                <h5>David Cooper</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="testimonials-one__single wow fadeInUp" data-wow-delay="0ms"
                                                    data-wow-duration="1500ms">
                                                    <div class="testimonials-one__single-inner">
                                                        <h4 class="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div class="testimonials-one__single-client-info">
                                                            <div class="testimonials-one__single-client-info-img">
                                                                <img src="src/assets/images/testimonial/testimonials-v1-client-info-img1.png"
                                                                    alt="" />
                                                            </div>
                                                            <div class="testimonials-one__single-client-info-text">
                                                                <h5>Kevin Martin</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="clearfix py-5">
                    <div className="container">
                        <h2 className="line-heading mb-5">VIDEO SEKOLAH</h2>
                        <div className="row mb-5">
                            <div className="col-md-4 col-sm-6 col-12">
                                <a href="" className="card-video">
                                    <div className="card-banner">
                                        <img src="images/banner1.jpeg" alt="" width="100%" />
                                    </div>
                                    <div className="card-title">
                                        Juara III LKS Tingkat Kabupaten
                                    </div>
                                    <div className="card-description">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio soluta modi ad ea vel ratione dolorem ipsa mollitia a eligendi?
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 col-12">
                                <a href="" className="card-video">
                                    <div className="card-banner">
                                        <img src="images/banner1.jpeg" alt="" width="100%" />
                                    </div>
                                    <div className="card-title">
                                        Juara III LKS Tingkat Kabupaten
                                    </div>
                                    <div className="card-description">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio soluta modi ad ea vel ratione dolorem ipsa mollitia a eligendi?
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 col-12">
                                <a href="" className="card-video">
                                    <div className="card-banner">
                                        <img src="images/banner1.jpeg" alt="" width="100%" />
                                    </div>
                                    <div className="card-title">
                                        Juara III LKS Tingkat Kabupaten
                                    </div>
                                    <div className="card-description">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio soluta modi ad ea vel ratione dolorem ipsa mollitia a eligendi?
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="categories-one__btn text-center">
                            <a href="#" class="thm-btn btn-light">lihat semua video</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}