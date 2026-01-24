
export default function HomeTwo() {
  return (
    <>

    {/* ht-header-area start */}
    <header className="ht-header-area">
        {/* ht-main-header area start */}
        <div className="ht-main-header header-2" id="header-sticky">
            <div className="container">
                <div className="ht-menu-wrapper">
                    <div className="ht-menu-left">
                        <div className="ht-menu-logo">
                            <a href="index-2.html"><img src="images/logo/logo.svg" alt="logo"/></a>
                        </div>
                    </div>
                    <div className="ht-menu-right">
                        <div className="ht-menu-main d-none d-lg-block">
                            <nav className="ht-mobile-menu-active">
                                <ul>
                                    <li className="has-dropdown">
                                        <a href="#">home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Main Home</a></li>
                                            <li><a href="index-2.html">Corporate Business</a></li>
                                            <li><a href="index-3.html">Insurance</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="services.html">Our Services</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                            <li><a href="team.html">Our Team</a></li>
                                            <li><a href="team-details.html">Team Details</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown"><a href="#">portfolio</a>
                                        <ul className="sub-menu">
                                            <li><a href="project.html">Our Projects</a></li>
                                            <li><a href="project-details.html">project details</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">blog</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-list.html">Blog List</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="search d-none d-lg-block search-toggle"><i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <a href="contact.html" className="ht-btn d-none d-lg-block">get in touch</a>
                        <button className="ht-menu-btn d-lg-none offcanvas-toggle">
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* ht-header-area end */}

    {/* Search Overlay */}
    <div className="ht-header-search-bar d-flex align-items-center justify-content-center">
        <button className="ht-search-close">x</button>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="ht-search-bar">
                        <h3 className="ht-search-title text-center mb-20">
                            What are you looking for?
                        </h3>
                        <div className="ht-form-box ht-search-form-box">
                            <form action="#">
                                <input type="text" placeholder="Your Keywords..."/>
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* offcanvas for navigation */}
    <div className="ht-offcanvas">
        <div className="ht-offcanvas-wrapper">
            <div className="ht-offcanvas-header mb-50">
                <a href="index.html" className="ht-offcanvas-logo"><img src="images/logo/logo.svg" alt="logo"/></a>
                <button className="ht-offcanvas-toggle-close">
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <div className="ht-offcanvas-menu d-xl-none mb-50">
                <nav></nav>
            </div>
            <div className="ht-offcanvas-content d-none d-xl-block mb-50">
                <h2 className="ht-offcanvas-content__title">Hello There!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="ht-offcanvas-info mb-50">
                <h3 className="ht-offcanvas__title">Information</h3>
                <span><a href="#">+ 4 20 7700 1007</a></span>
                <span><a href="#">hello@prozen.com</a></span>
                <span><a href="#">Avenue de Roma 158b, Lisboa</a></span>
            </div>
            <div className="ht-offcanvas-social mb-50">
                <h3 className="ht-offcanvas__title">Follow Us</h3>

                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>

    {/* offcanvas overlay */}
    <div className="ht-offcanvas-overlay"></div>

    {/* ht-hero-2-area-start */}
    <section className="ht-hero-area hero-2">
        <div className="shape-two float-bob-x"><img src="images/shape/11.svg" alt="shape"/></div>
        <div className="container">
            <div className="hero-wrapper">
                <div className="row gy-5 align-items-lg-center ">
                    <div className="col-lg-5">
                        <div className="ht-hero-content style-2">
                            <h1 className="wow fadeIn" data-wow-delay=".2s">
                                Innovative solutions for growth
                            </h1>
                            <p className="desc wow fadeInUp" data-wow-delay=".4s">Agilos helps you to convert your data into
                                rategic asset emand get top-notch
                                your business insights.</p>
                            <a href="contact.html" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".6s">Let's Get in
                                Touch</a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img two wow fadeInUp" data-wow-delay=".2s">
                            <img src="images/hero/2.jpg" alt="img"/>
                            <div className="sm-img float-bob-y">
                                <img src="images/hero/4.jpg" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ht-hero-2-area-end */}

    {/* ht-stats-2-area-start */}
    <section className="ht-stats-area-2 section-padding fix">
        <div className="shape">
            <div className="up">
                <img src="images/shape/5.svg" alt="shape"/>
            </div>
            <div className="down">
                <img src="images/shape/6.svg" alt="shape"/>
            </div>
        </div>
        <div className="container">
            <div className="ht-stats-wrapper-2 wow fadeInUp" data-wow-delay=".2s">
                <div className="ht-stats-items-2">
                    <h2 className="number"><span className="count">26</span>+</h2>
                    <h4>Years of Experience</h4>
                    <p>Founded on the principles of integrity, professionalism, & excellence we build lasting
                        relationships with.</p>
                </div>
                <div className="ht-stats-items-2">
                    <h2 className="number"><span className="count">347</span>+</h2>
                    <h4>Successful Projects</h4>
                    <p>Founded on the principles of integrity, professionalism, & excellence we build lasting
                        relationships with.</p>
                </div>
                <div className="ht-stats-items-2">
                    <h2 className="number"><span className="count">139</span>+</h2>
                    <h4>Satisfied Customers</h4>
                    <p>Founded on the principles of integrity, professionalism, & excellence we build lasting
                        relationships with.</p>
                </div>
            </div>
        </div>
    </section>
    {/* ht-stats-2-area-end */}

    {/* ht-services-area-start */}
    <section className="ht-services-area pt-130 fix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Our Services</span>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">We offer a wide of <br/> design services</h2>
                    </div>
                </div>
            </div>
            <div className="ht-services-wrapper-two">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ht-services-thumbs wow fadeInUp" data-wow-delay=".6s">
                            <img src="images/service/1.jpg" alt="img"/>
                            <div className="content">
                                <h3>Elevate Your Marketing Strategy</h3>
                                <a href="services.html" className="ht-btn style-4">view all services</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ht-services-item">
                            <div className="single-item wow fadeInUp" data-wow-delay=".2s">
                                <h3>Business Planning Solutions</h3>
                                <p>The first thing to remember about success is that it is a process nothing more,
                                    nothing less. There is really no magic to it and it's.</p>
                                <a href="service-details.html"><i className="fa-solid fa-arrow-right"></i></a>
                                <img src="images/service/2.jpg" alt="sm-img"/>
                            </div>
                            <div className="single-item wow fadeInUp" data-wow-delay=".4s">
                                <h3>Performance analysis</h3>
                                <p>The first thing to remember about success is that it is a process nothing more,
                                    nothing less. There is really no magic to it and it's.</p>
                                <a href="service-details.html"><i className="fa-solid fa-arrow-right"></i></a>
                                <img src="images/service/2.jpg" alt="sm-img"/>
                            </div>
                            <div className="single-item wow fadeInUp" data-wow-delay=".6s">
                                <h3>Tax file audit Strategies</h3>
                                <p>The first thing to remember about success is that it is a process nothing more,
                                    nothing less. There is really no magic to it and it's.</p>
                                <a href="service-details.html"><i className="fa-solid fa-arrow-right"></i></a>
                                <img src="images/service/2.jpg" alt="sm-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Business Slider Section */}
        <div className="brand-slider">
            <div className="swiper ht-brand-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="brand-item">
                            <h2>FREE CONSULTATION</h2>
                            <img src="images/icon/9.svg" alt="icon"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-item">
                            <h2>BUSINESS CONSULTANT</h2>
                            <img src="images/icon/9.svg" alt="icon"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-item">
                            <h2>BUSINESS GROWING</h2>
                            <img src="images/icon/9.svg" alt="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ht-services-area-end */}

    {/* ht-about-2-area-start */}
    <section className="ht-about-area section-padding fix">
        <div className="container">
            <div className="ht-about-wrapper">
                <div className="row align-items-lg-center g-5">
                    <div className="col-lg-6 col-sm-12">
                        <div className="ht-about-img ht-about-img-2 wow fadeInUp" data-wow-delay=".2s">
                            <img src="images/about/2.jpg" alt="img"/>
                            <div className="client-review float-bob-y">
                                <h2><span className="count">10</span>K+</h2>
                                <p>Client review</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="ht-about-content style-2">
                            <div className="section-title">
                                <span className="subtitle wow fadeInUp" data-wow-delay=".2s">About company</span>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">Experienced and passionate about
                                    success</h2>
                                <p>With over 25 years of experience, we have crafted thousands have Strategic discovery
                                    process that understand.</p>
                            </div>
                            <div className="client-reviews">
                                <div className="review-item wow fadeInUp" data-wow-delay=".6s">
                                    <h2><span className="count">1140</span>+</h2>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="review-item wow fadeInUp" data-wow-delay=".8s">
                                    <h2><span className="count">480</span>+</h2>
                                    <p>Finished Projects</p>
                                </div>
                            </div>
                            <a href="about.html" className="ht-btn style-3 wow fadeInUp" data-wow-delay="1s">Let's Get in
                                Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ht-about-2-area-end */}

    {/* ht project 2 area start */}
    <section className="ht-project-area-2 section-padding fix">
        <div className="container">
            <div className="section-title-area align-items-lg-end">
                <div className="section-title mb-0">
                    <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Selected Works</span>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">Our complete <br/> project list</h2>
                </div>
                <a href="services.html" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".6s">View All services</a>
            </div>
            <div className="ht-project-wrapper">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-item">
                            <div className="thumb">
                                <a href="project-details.html"><img src="images/project/5.jpg" alt="thumb"/></a>
                            </div>
                            <div className="content">
                                <a href="project-details.html">
                                    <h4>Business consultancy</h4>
                                </a>
                                <span>UI/UX Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-item">
                            <div className="thumb">
                                <a href="project-details.html"><img src="images/project/6.jpg" alt="thumb"/></a>
                            </div>
                            <div className="content">
                                <a href="project-details.html">
                                    <h4>Crafting Digital Experiences</h4>
                                </a>
                                <span>Web Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-item">
                            <div className="thumb">
                                <a href="project-details.html"><img src="images/project/7.jpg" alt="thumb"/></a>
                            </div>
                            <div className="content">
                                <a href="project-details.html">
                                    <h4>Innovation in Every Swipe</h4>
                                </a>
                                <span>Development</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="single-item">
                            <div className="thumb">
                                <a href="project-details.html"><img src="images/project/8.jpg" alt="thumb"/></a>
                            </div>
                            <div className="content">
                                <a href="project-details.html">
                                    <h4>Turning Clicks Into Conversions</h4>
                                </a>
                                <span>Digital Marketing</span>
                            </div>
                        </div>
                    </div>
                    <a href="project.html" className="project-btn mx-auto wow fadeInUp" data-wow-delay="1s">View All <br/>
                        Works</a>
                </div>
            </div>
        </div>
    </section>
    {/* ht project 2 area end */}

    {/* ht choose area start */}
    <section className="ht-choose-area section-padding">
        <div className="container">
            <div className="ht-choose-wrapper">
                <div className="row gy-5">
                    <div className="col-xl-7 col-lg-6">
                        <div className="ht-choose-left">
                            <div className="content">
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Benefits of better credit score and
                                    restoration</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">We specialize in helping individuals and
                                    families regain control of their financial
                                    future by repairing and improving their credit scores team of experts is dedicated
                                    to analyzing your credit report.</p>
                                <a href="contact.html" className="ht-btn style-4 wow fadeInUp" data-wow-delay=".6s">get
                                    started now</a>
                            </div>
                            <div className="thumb wow fadeInUp" data-wow-delay=".8s">
                                <img src="images/choose/1.jpg" alt="thumb"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="ht-choose-right">
                            <div className="single-item wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <img src="images/icon/cashback.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h3>Money-Back Guarantee</h3>
                                    <p>Our approach ensures that every project undertake is strategically crafted.</p>
                                </div>
                            </div>
                            <div className="single-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="icon">
                                    <img src="images/icon/resignation.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h3>Cancellation Policy</h3>
                                    <p>Our approach ensures that every project undertake is strategically crafted.</p>
                                </div>
                            </div>
                            <div className="single-item wow fadeInUp" data-wow-delay=".9s">
                                <div className="icon">
                                    <img src="images/icon/secure-shield.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h3>High-end security</h3>
                                    <p>Our approach ensures that every project undertake is strategically crafted.</p>
                                </div>
                            </div>
                            <div className="single-item wow fadeInUp" data-wow-delay="1.2s">
                                <div className="icon">
                                    <img src="images/icon/money-bag.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h3>Personalized Strategy</h3>
                                    <p>Our approach ensures that every project undertake is strategically crafted.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ht choose area end */}

    {/* ht-team-2-area-start */}
    <section className="ht-team-area section-padding fix">
        <div className="container">
            <div className="ht-team-wrapper">
                <div className="row gy-5">
                    <div className="col-lg-4">
                        <div className="ht-team-content-2">
                            <div className="section-title">
                                <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Our Team Members</span>
                                <h2 className="title fadeInUp" data-wow-delay=".2s">Meet our team member</h2>
                                <p>With over 10 years of experience in business management, John leads our team with
                                    strategic vision and a passion for innovation.</p>
                            </div>
                            <a href="team.html" className="ht-btn fadeInUp" data-wow-delay=".4s">All Team Members</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ht-team-items-wrapper">
                            <div className="row g-4">

                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="single-item">
                                        <div className="thumb">
                                            <a href="team-details.html"><img src="images/team/5.jpg" alt="img"/></a>
                                            <div className="social-wrapper">
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <a href="team-details.html">
                                                <h4>Linda F. Collins</h4>
                                            </a>
                                            <p>SR Marketer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="single-item">
                                        <div className="thumb">
                                            <a href="team-details.html"><img src="images/team/6.jpg" alt="img"/></a>
                                            <div className="social-wrapper">
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <a href="team-details.html">
                                                <h4>Sandra D. Rainey</h4>
                                            </a>
                                            <p>Executive officer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="single-item">
                                        <div className="thumb">
                                            <a href="team-details.html"><img src="images/team/7.jpg" alt="img"/></a>
                                            <div className="social-wrapper">
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <a href="team-details.html">
                                                <h4>Brooklyn simmons</h4>
                                            </a>
                                            <p>CEO & Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="single-item">
                                        <div className="thumb">
                                            <a href="team-details.html"><img src="images/team/8.jpg" alt="img"/></a>
                                            <div className="social-wrapper">
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <a href="team-details.html">
                                                <h4>Donna L. Aguilar</h4>
                                            </a>
                                            <p>Finance advisor</p>
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
    {/* ht-team-2-area-end */}

    {/* ht testimonials 2 area start */}
    <section className="ht-testimonials-area-2 section-padding">
        <div className="container">
            <div className="section-title-area align-items-lg-end mb-30">
                <div className="section-title mb-0">
                    <span className="subtitle wow fadeInUp" data-wow-delay=".2s">TESTIMONIALS</span>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">Client feedback</h2>
                </div>
                <div className="ht-testi-btn mt-0 wow fadeInUp" data-wow-delay=".6s">
                    <button className="ht-testi-prev ht-testi-prev-2"><i className="fa-solid fa-chevron-left"></i></button>
                    <button className="ht-testi-next ht-testi-next-2"><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div className="ht-testimonials-wrapper-2">
                <div className="swiper ht-testi-slider-2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="ht-testimonials-item ht-testimonials-item-2">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="desc desc-2">"Working with Campaign was a game-changer for our business. Their
                                    expertise and strategies helped us reach new heights we never thought possible
                                    heights
                                    we never"
                                </p>
                                <div className="ht-testimonials-author ht-testimonials-author-2">
                                    <div className="avatar">
                                        <img src="images/testimonials/2.png" alt="img"/>
                                    </div>
                                    <div className="author-info">
                                        <h5 className="name">Ronald richards</h5>
                                        <p className="role">Finance Advisor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ht-testimonials-item ht-testimonials-item-2">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="desc desc-2">"Working with Campaign was a game-changer for our business. Their
                                    expertise and strategies helped us reach new heights we never thought possible
                                    heights we never"
                                </p>
                                <div className="ht-testimonials-author ht-testimonials-author-2">
                                    <div className="avatar">
                                        <img src="images/testimonials/3.png" alt="img"/>
                                    </div>
                                    <div className="author-info">
                                        <h5 className="name">Charlize Theron</h5>
                                        <p className="role">Ceo & Owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ht-testimonials-item ht-testimonials-item-2">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="desc desc-2">"Working with Campaign was a game-changer for our business. Their
                                    expertise and strategies helped us reach new heights we never thought possible
                                    heights
                                    we never"
                                </p>
                                <div className="ht-testimonials-author ht-testimonials-author-2">
                                    <div className="avatar">
                                        <img src="images/testimonials/4.png" alt="img"/>
                                    </div>
                                    <div className="author-info">
                                        <h5 className="name">Marvin mcKinney</h5>
                                        <p className="role">Product Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ht testimonials 2 area end */}

    {/* ht blog area start */}
    <section className="ht-blog-area section-padding fix">
        <div className="container">
            <div className="section-title text-center">
                <span className="subtitle wow fadeInUp" data-wow-delay=".2s">recent posts</span>
                <h2 className="title wow fadeInUp" data-wow-delay=".4s">Explore our latest <br/> blog insights</h2>
            </div>
            <div className="ht-blog-wrapper">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="ht-blog-item mt-20">
                            <div className="ht-blog-thumb">
                                <a href="blog-details.html"><img src="images/blog/4.jpg" alt="img"/></a>
                            </div>
                            <div className="ht-blog-content">
                                <ul className="ht-blog-meta ht-blog-meta-2">
                                    <li className="ct">Business solution</li>
                                    <li className="dt">June 16, 2024</li>
                                </ul>
                                <a href="blog-details.html">
                                    <h3 className="title">Profitable business makes to you
                                        happy and growth</h3>
                                </a>
                                <a href="blog-details.html" className="ht-link ht-link-2">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".6s">
                        <div className="ht-blog-item mt-20">
                            <div className="ht-blog-thumb">
                                <a href="blog-details.html"><img src="images/blog/5.jpg" alt="img"/></a>
                            </div>
                            <div className="ht-blog-content">
                                <ul className="ht-blog-meta ht-blog-meta-2">
                                    <li className="ct">Marketing solution</li>
                                    <li className="dt">27 May, 2024</li>
                                </ul>
                                <a href="blog-details.html">
                                    <h3 className="title">Securing Funding for Your
                                        Startup: Expert Tips</h3>
                                </a>
                                <a href="blog-details.html" className="ht-link ht-link-2">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                        <div className="ht-blog-item mt-20">
                            <div className="ht-blog-thumb">
                                <a href="blog-details.html"><img src="images/blog/6.jpg" alt="img"/></a>
                            </div>
                            <div className="ht-blog-content">
                                <ul className="ht-blog-meta ht-blog-meta-2">
                                    <li className="ct">Business solution</li>
                                    <li className="dt">June 16, 2024</li>
                                </ul>
                                <a href="blog-details.html">
                                    <h3 className="title">Strong Corporate Financial
                                        Model: Best Practices</h3>
                                </a>
                                <a href="blog-details.html" className="ht-link ht-link-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ht blog area end */}

    {/* ht-footer-area-2-start */}
    <footer className="ht-footer-area fix">
        <div className="container">
            <div className="ht-footer-wrapper section-padding">
                <div className="row gy-5">
                    <div className="col-xl-4">
                        <div className="ht-footer-info wow fadeInUp" data-wow-delay=".3s">
                            <a href="index.html"><img src="images/logo/logo-white-2.svg" alt="logo"/></a>
                            <p className="desc">A state of plants, usually at night, when their <br/> leaflets approach each
                                other
                                and the flowers <br/> close and droop, or are covered.
                            </p>
                            <ul className="footer-social">
                                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-7">
                        <div className="ht-footer-widgets">
                            <div className="widget-item wow fadeInUp" data-wow-delay=".6s">
                                <h5 className="head">Quick Links</h5>
                                <ul className="link-list">
                                    <li><a href="#">Company Profile</a></li>
                                    <li><a href="#">Help Center </a></li>
                                    <li><a href="project.html">Projects</a></li>
                                    <li><a href="blog.html">News & Blog</a></li>
                                </ul>
                            </div>
                            <div className="widget-item wow fadeInUp" data-wow-delay=".9s">
                                <h5 className="head">Our Services</h5>
                                <ul className="link-list">
                                    <li><a href="#">Ui Design</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Digital Marketing</a></li>
                                </ul>
                            </div>
                            <div className="widget-subscriber wow fadeInUp" data-wow-delay="1.2s">
                                <form action="#">
                                    <h5>Subscribe for updates and exclusive offers!</h5>
                                    <input type="text" placeholder="Your Email"/>
                                    <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ht-footer-copyright ht-footer-copyright-2 wow fadeInUp" data-wow-delay="1.5s">
                <p>©2025<span>Hurraytheme</span>. All rights reserved.</p>
                <ul className="copyright-links">
                    <li><a href="about.html">About</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="contact.html">Support</a></li>
                </ul>
            </div>
        </div>
    </footer>
    {/* ht-footer-area-2-end */}

</>
  )
}
