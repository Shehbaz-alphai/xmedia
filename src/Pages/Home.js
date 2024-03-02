import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "../Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Home = () => {
  SwiperCore.use([Navigation, Pagination]);
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundUrl =
    "https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613627a64e717d76e154a64c_splash screen-3-poster-00001.jpg";
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [translate3d, setTranslate3d] = useState("0,0,0");
  const [transition, setTransition] = useState("transform 500ms ease 0s");
  const numberOfButtons = 4;
  const handleButtonClick = (index) => {
    setActiveIndex(index); 
  };
  // const handleButtonClick = (index) => {
  //   setActiveButtonIndex(index);
  //   if (activeButtonIndex === 0) {
  //     setTranslate3d("0,0,0");
  //   } else if (activeButtonIndex === 1) {
  //     setTranslate3d("-386px,0px,0px");
  //   } else if (activeButtonIndex === 2) {
  //     setTranslate3d("-772px,0px,0px");
  //   } else {
  //     setTranslate3d("-1158px,0px,0px");
  //   }
  // };
  const Slide = ({ title, description, active, handleButtonClick }) => (
    <div
      className={`card-block__slide slick-slide ${
        active ? "slick-current slick-active" : "prev-slides"
      }`}
      data-slick-index="0"
      aria-hidden="false"
      role="tabpanel"
      id="slick-slide00"
      aria-describedby="slick-slide-control00"
      style={{
        width: "356px",
        transform: "translate(0px, 0px)",
        height:'400px'
      }}
    >
      <div className="card-block__slide-inner">
        <h3 className="card-block__slide-title">{title}</h3>
        <div className="card-block__slide-description">{description}</div>
      </div>
    </div>
  );
  const Slider = ({ slides, activeButtonIndex }) => (
    <Swiper
    pagination={{ clickable: true }}
    spaceBetween={100}
    slidesPerView={3}
    initialSlide={activeIndex}
    className="swiper-container"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <Slide title={slide.title} description={slide.description} />
      </SwiperSlide>
    ))}
  </Swiper>
  );
  const slides = [
    {
      title: "Branding",
      description:
        "Create a competitive advantage with a digital branding strategy that differentiates your organization from the competition.",
    },
    {
      title: "Advertising",
      description:
        "Make your digital advertising strategy work for your brand with the right mix of formats, creative design, and messaging to achieve your goals.",
    },
    {
      title: "SEO",
      description:
        "Connect with the right audience at the right time with a holistic SEO approach that will move the needle for your brand.",
    },
    {
      title: "ORM",
      description:
        "Access niche online reputation management services to tell your story and empower your brand online.",
    },
    {
      title: "Content",
      description:
        "Make a lasting impression with clear, compelling messaging that tells your audience what’s at stake and gives them a reason to believe.",
    },
    {
      title: "Design",
      description:
        "Define and connect your brand’s visual and experiential touchpoints to create unforgettable experiences and drive business results.",
    },
    {
      title: "Social Media",
      description:
        "Ensure you’re delivering the right message via the right channels with a social media strategy and playbook crafted just for your brand.",
    },
    {
      title: "Technology",
      description:
        "Achieve business results with technology solutions designed to compel your audiences and enhance their interactions with your brand.",
    },
    {
      title: "Analytics",
      description:
        "Measure results to better identify, understand, and engage your audiences according to your needs and goals.",
    },
  ];
  return (
    <div>
      <div className="section top-section">
        <div className="full-width-container w-container">
          <div className="columns w-row">
            <div className="column-5 w-col w-col-6">
              <div className="mobile-headlines">
                <h1 className="mobile-h1">
                  We scale businesses sustainably and profitably
                </h1>
                <div className="subheadline-mobile">
                  &quot;We help brands and businesses to unlock their
                  potential&quot;
                </div>
              </div>
              <img
                src="/imges/xmediaa-01.png"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 91vw, 100vw"
                srcSet="/imges/xmediaa-01.png"
                alt=""
                className="image-2"
              />
              <div className="side-text-banner">
                <h1 className="heading-2 hide-mobile">
                  We scale businesses sustainably and profitably
                </h1>
                <div className="micro-distance hide-desktop"></div>
                <p className="center-mobile">
                  Our team is dedicated to partnering with your company to
                  develop the optimal strategy and to deliver premier campaigns
                  that drive profitable growth.
                </p>
                <div className="micro-distance"></div>
                <img
                  src="https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642b18faff7b7f975cea5a2c_6142063af923edbc03088332_small-references.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 87vw, (max-width: 767px) 88vw, (max-width: 991px) 44vw, (max-width: 1279px) 36vw, 430px"
                  srcSet="https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642b18faff7b7f975cea5a2c_6142063af923edbc03088332_small-references-p-500.jpg 500w, https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642b18faff7b7f975cea5a2c_6142063af923edbc03088332_small-references-p-800.jpg 800w, https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642b18faff7b7f975cea5a2c_6142063af923edbc03088332_small-references-p-1080.jpg 1080w, https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642b18faff7b7f975cea5a2c_6142063af923edbc03088332_small-references-p-1600.jpg 1600w, https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642b18faff7b7f975cea5a2c_6142063af923edbc03088332_small-references.jpg 1766w"
                  alt=""
                />
                <div className="micro-distance"></div>
                <div className="butons-banner">
                  <div className="micro-distance"></div>
                  <div className="vertical-micro-space"></div>
                  <a
                    data-w-id="f96b54ca-ebb4-60cb-d9e8-4e96300ce8b3"
                    href="#"
                    className="nav-button red w-button"
                  >
                    Let&#x27;s Talk
                  </a>
                </div>
              </div>
            </div>
            <div className="side-col-desktop-visible w-col w-col-6">
              <img
                src="/imges/xmediaa-01.png"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 46vw, 530px"
                srcSet="/imges/xmediaa-01.png"
                alt=""
                className="sidepicture-desktop"
              />
            </div>
          </div>
        </div>
        <div className="small-distance"></div>
      </div>
      <div className="section services">
        <div className="container w-container">
          <div className="small-distance"></div>
          <h3 className="heading">Your Performance is our Mission</h3>
          <div className="collection-list-wrapper-4 w-dyn-list">
            <div role="list" className="collection-list-6 w-dyn-items">
              <div
                id="w-node-_972c0403-42b7-675a-f599-7faf8f220786-8f22077f"
                role="listitem"
                className="collection-item-5 w-dyn-item"
              >
                <a href="" className="card service-card w-inline-block">
                  <div className="columns-2 w-row">
                    <div className="column w-col w-col-6 w-col-stack">
                      <div className="headline-name-card-with-icon">
                        <div className="name-card">
                          Search Engine Advertising
                        </div>
                        <img
                          src="https://assets-global.website-files.com/642846c1f48759793ab13754/642b067cb118d28a3e20cd1c_search-refraction.svg"
                          loading="lazy"
                          alt=""
                          className="image-4"
                        />
                      </div>
                      <div className="micro-distance"></div>
                      <p>We believe in numbers</p>
                      <div className="micro-distance"></div>
                      <div className="left-align"></div>
                    </div>
                    <div
                      style={{
                        backgroundImage:
                          'url("https://assets-global.website-files.com/642846c1f48759793ab13754/642e814fb248cc359b729bac_search-engine-advetising.jpg")',
                      }}
                      className="column-2 w-col w-col-6 w-col-stack"
                    >
                      <div className="image-fit-for-cards"></div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                id="w-node-_972c0403-42b7-675a-f599-7faf8f220786-8f22077f"
                role="listitem"
                className="collection-item-5 w-dyn-item"
              >
                <a href="" className="card service-card w-inline-block">
                  <div className="columns-2 w-row">
                    <div className="column w-col w-col-6 w-col-stack">
                      <div className="headline-name-card-with-icon">
                        <div className="name-card">
                          Google Analytics 4 Setup
                        </div>
                        <img
                          src="https://assets-global.website-files.com/642846c1f48759793ab13754/642b061705ac762b359b157e_pie-chart-01.svg"
                          loading="lazy"
                          alt=""
                          className="image-4"
                        />
                      </div>
                      <div className="micro-distance"></div>
                      <p>
                        Google Analyitcs 4 has superpowers, but is your company
                        already using those superpowers?
                      </p>
                      <div className="micro-distance"></div>
                      <div className="left-align">
                        <div className="read-more-service"></div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage:
                          'url("https://assets-global.website-files.com/642846c1f48759793ab13754/642e815d2afb8666149826a4_anayltics.jpg")',
                      }}
                      className="column-2 w-col w-col-6 w-col-stack"
                    >
                      <div className="image-fit-for-cards"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="collection-list-8 w-dyn-items">
              <div
                id="w-node-_972c0403-42b7-675a-f599-7faf8f22079b-8f22077f"
                role="listitem"
                className="collection-item-5 w-dyn-item"
              >
                <a href="" className="card service-card w-inline-block">
                  <div className="columns-2 w-row">
                    <div className="column-7 w-col w-col-6">
                      <div className="headline-name-card-with-icon">
                        <div className="name-card">
                          Growth Strategy Consulting
                        </div>
                        <img
                          src="https://assets-global.website-files.com/642846c1f48759793ab13754/642b0662c5abc83edb6312ac_compass-03.svg"
                          loading="lazy"
                          alt=""
                          className="image-4"
                        />
                      </div>
                      <div className="micro-distance"></div>
                      <p>
                        Our young team of digital natives not only helps with
                        sales, but also with strategic decisions for many of our
                        clients.
                      </p>
                      <div className="micro-distance"></div>
                      <div className="left-align">
                        <div className="read-more-service">
                          <div className="cta-text">
                            Start working on the Strategy
                          </div>
                          <img
                            src="https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642e885247d6ad405beb7e59_read_more.svg"
                            loading="lazy"
                            alt=""
                            className="read-more-iarrow"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column-8 w-col w-col-6">
                      <img
                        src="https://assets-global.website-files.com/642846c1f48759793ab13754/649304c9158858924f047b28_642e812d874aa7bcefed846c_conssulting.jpg"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 479px) 85vw, (max-width: 767px) 87vw, (max-width: 991px) 44vw, (max-width: 1279px) 41vw, 516.5px"
                        srcSet="https://assets-global.website-files.com/642846c1f48759793ab13754/649304c9158858924f047b28_642e812d874aa7bcefed846c_conssulting-p-500.jpg 500w, https://assets-global.website-files.com/642846c1f48759793ab13754/649304c9158858924f047b28_642e812d874aa7bcefed846c_conssulting-p-800.jpg 800w, https://assets-global.website-files.com/642846c1f48759793ab13754/649304c9158858924f047b28_642e812d874aa7bcefed846c_conssulting-p-1080.jpg 1080w, https://assets-global.website-files.com/642846c1f48759793ab13754/649304c9158858924f047b28_642e812d874aa7bcefed846c_conssulting-p-1600.jpg 1600w, https://assets-global.website-files.com/642846c1f48759793ab13754/649304c9158858924f047b28_642e812d874aa7bcefed846c_conssulting.jpg 1700w"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="collection-list-wrapper-5 w-dyn-list">
            <div role="list" className="collection-list-7 w-dyn-items">
              <div
                id="w-node-_972c0403-42b7-675a-f599-7faf8f2207b0-8f22077f"
                role="listitem"
                className="w-dyn-item"
              >
                <a
                  href=""
                  className="card service-card _4-on-4 w-inline-block"
                  style={{ textDecoration: "none" }}
                >
                  <div className="headline-name-card-with-icon">
                    <div className="name-card">Creatives that Convert</div>
                    <img
                      src="https://assets-global.website-files.com/642846c1f48759793ab13754/642b061705ac762b359b157e_pie-chart-01.svg"
                      loading="lazy"
                      alt=""
                      className="image-4"
                    />
                    <div className="micro-distance"></div>
                  </div>
                  <p className="paragraph-3">
                    We produce, test and optimize your creatives - and repeat!
                  </p>
                  <div className="micro-distance"></div>
                  <div className="left-align">
                    <div className="read-more-service">
                      <div className="cta-text">Get Creatives that convert</div>
                      <img
                        src="https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642e885247d6ad405beb7e59_read_more.svg"
                        loading="lazy"
                        alt=""
                        className="read-more-iarrow"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div
                id="w-node-_972c0403-42b7-675a-f599-7faf8f2207b0-8f22077f"
                role="listitem"
                className="w-dyn-item"
              >
                <a
                  href=""
                  className="card service-card _4-on-4 w-inline-block"
                  style={{ textDecoration: "none" }}
                >
                  <div className="headline-name-card-with-icon">
                    <div className="name-card">Lead Funnel Optimization</div>
                    <img
                      src="https://assets-global.website-files.com/642846c1f48759793ab13754/642b0f36bccfa689ab92566c_filter-funnel-01.svg"
                      loading="lazy"
                      alt=""
                      className="image-4"
                    />
                    <div className="micro-distance"></div>
                  </div>
                  <p className="paragraph-3">
                    We increase numbers with our lead funnel frameworks
                  </p>
                  <div className="micro-distance"></div>
                  <div className="left-align">
                    <div className="read-more-service">
                      <div className="cta-text">
                        Increase your Conversionrate
                      </div>
                      <img
                        src="https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642e885247d6ad405beb7e59_read_more.svg"
                        loading="lazy"
                        alt=""
                        className="read-more-iarrow"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div
                id="w-node-_972c0403-42b7-675a-f599-7faf8f2207b0-8f22077f"
                role="listitem"
                className="w-dyn-item"
              >
                <a
                  href=""
                  className="card service-card _4-on-4 w-inline-block"
                  style={{ textDecoration: "none" }}
                >
                  <div className="headline-name-card-with-icon">
                    <div className="name-card">LinkedIn Advertising</div>
                    <img
                      src="https://assets-global.website-files.com/642846c1f48759793ab13754/642b06d9da9d5fb5296becd0_target-05%20(1).svg"
                      loading="lazy"
                      alt=""
                      className="image-4"
                    />
                    <div className="micro-distance"></div>
                  </div>
                  <p className="paragraph-3">
                    Account-based marketing for the perfect reach and precise
                    targeting
                  </p>
                  <div className="micro-distance"></div>
                  <div className="left-align">
                    <div className="read-more-service">
                      <div className="cta-text">Start Campaigns with Us</div>
                      <img
                        src="https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642e885247d6ad405beb7e59_read_more.svg"
                        loading="lazy"
                        alt=""
                        className="read-more-iarrow"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div
                id="w-node-_972c0403-42b7-675a-f599-7faf8f2207b0-8f22077f"
                role="listitem"
                className="w-dyn-item"
              >
                <a
                  href=""
                  className="card service-card _4-on-4 w-inline-block"
                  style={{ textDecoration: "none" }}
                >
                  <div className="headline-name-card-with-icon">
                    <div className="name-card">Social Media Management</div>
                    <img
                      src="https://assets-global.website-files.com/642846c1f48759793ab13754/64996e10316050d1d90a20fb_social-media.svg"
                      loading="lazy"
                      alt=""
                      className="image-4"
                    />
                    <div className="micro-distance"></div>
                  </div>
                  <p className="paragraph-3">
                    Everything from Creatives to Publishing and Reporting
                  </p>
                  <div className="micro-distance"></div>
                  <div className="left-align">
                    <div className="read-more-service">
                      <div className="cta-text">Social Media Start</div>
                      <img
                        src="https://assets-global.website-files.com/64283df369d01c4dbc0b2a5d/642e885247d6ad405beb7e59_read_more.svg"
                        loading="lazy"
                        alt=""
                        className="read-more-iarrow"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="small-distance"></div>
        </div>
      </div>
      <div className="services-page">
        <div className="site">
          <main className="page__default">
            <section className="card-block" id="block-64b8253e89604">
              <div className="container-1">
                <div className="card-block__nav">
                  <h2 className="section-title">Services</h2>
                  <hr className="section-title-hr" />
                  <ul className="nav-list">
                    {slides.map((slide, index) => (
                      <li key={index} className="nav-list__item">
                        <a
                         data-target={index}
                         className={`${activeIndex === index ? 'active' : ''}`}
                         style={{ cursor: 'pointer' }}
                          onClick={() => handleButtonClick(index)}
                        >
                          {slide.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-block__slider-wrap">
                  <div className="card-block__slider slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: "1250px",
                          // transform: `translate3d(${translate3d})`,
                          // transition: transition,
                        }}
                      >
                        <Slider
                          slides={slides}
                          activeButtonIndex={activeIndex}
                          
                        />
                      </div>
                    </div>

                    {/* <ul className="slick-dots" role="tablist">
                      {Array.from({ length: numberOfButtons }).map(
                        (_, index) => (
                          <li
                            key={index}
                            className={
                              activeButtonIndex === index ? "slick-active" : ""
                            }
                            role="presentation"
                          >
                            <button
                              type="button"
                              role="tab"
                              id={`slick-slide-control${index}`}
                              aria-controls={`slick-slide0${index}`}
                              aria-label={`${index + 1} of ${numberOfButtons}`}
                              className={`${
                                activeButtonIndex === index ? "active " : "  "
                              }`}
                              tabIndex={
                                activeButtonIndex === index ? "0" : "-1"
                              }
                              aria-selected={
                                activeButtonIndex === index ? "true" : "false"
                              }
                              onClick={() => handleButtonClick(index)}
                              style={{ cursor: "pointer" }}
                            >
                              {index + 1}
                            </button>
                          </li>
                        )
                      )}
                    </ul> */}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      {/* <div style={{background:'#000'}}>
      <Container>
      <Row>
        <Col md={4}>
        <div className="">
                  <h2 className="">Services</h2>
                 
                  <ul className="nav-list">
                    <li className="nav-list__item">
                      <a
                        data-target="0"
                        className={`${activeButtonIndex === 0 ? "active" : ""}`}
                        onClick={() => handleButtonClick(0)}
                        style={{ cursor: "pointer" }}
                      >
                        Strategy &amp; Execution
                      </a>
                    </li>
                    <li className="nav-list__item">
                      <a
                        data-target="1"
                        className={`${activeButtonIndex === 1 ? "active" : ""}`}
                        onClick={() => handleButtonClick(1)}
                        style={{ cursor: "pointer" }}
                      >
                        Creative
                      </a>
                    </li>
                    <li className="nav-list__item">
                      <a
                        data-target="2"
                        className={`${activeButtonIndex === 2 ? "active" : ""}`}
                        onClick={() => handleButtonClick(2)}
                        style={{ cursor: "pointer" }}
                      >
                        Media
                      </a>
                    </li>
                    <li className="nav-list__item">
                      <a
                        data-target="3"
                        className={`${activeButtonIndex === 3 ? "active" : ""}`}
                        onClick={() => handleButtonClick(3)}
                        style={{ cursor: "pointer" }}
                      >
                        Analytics &amp; Insights
                      </a>
                    </li>
                  </ul>
                </div>
        </Col>
        <Col md={8}>
        <Card style={{ width: '20rem' }}>
     
      <Card.Body>
        <Card.Title>Analytics &amp; Insights</Card.Title>
        <Card.Text>
        Our approach is data-driven and
                                  results-oriented. We use our patented
                                  advertising technology to track the user’s
                                  full customer journey, so we can easily
                                  understand the impact of multi-channel efforts
                                  and allow for the most effective optimization
                                  of media spend. Our team of experts will help
                                  you analyze the data to identify new
                                  opportunities for growth.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>

      
      </div> */}

      {/* <div className="ck-cookie-w">
        <div className="ck-css-styles w-embed"></div>
        <div fs-cc="banner" className="ck-modal">
          <a
            fs-cc="close"
            href="#"
            className="ck-modal__exit-btn w-inline-block"
          >
            <div className="ck__exitbtn__line is--left"></div>
            <div className="ck__exitbtn__line is--right"></div>
            <div className="ck-sr__only">Close Cookie Popup</div>
          </a>
          <div className="ck-modal__content-w is--small">
            <div className="ck-title is--small">
              We use cookies to improve your browsing experience
            </div>
          </div>
          <div className="ck-modal__btns-w is--small">
            <a fs-cc="allow" href="#" className="ck-button-w w-inline-block">
              <div className="ck-button__txt texet_accept">
                Accept All Cookies
              </div>
            </a>
            <a
              fs-cc="open-preferences"
              href="#"
              className="ck-button-w is--secondary w-inline-block"
            >
              <div className="ck-button__txt">Cookies Settings</div>
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-563"></div>
      <div className="div-block-537">
        <div className="div-block-538">
          <a
            href="https://standforukraine.com/"
            target="_blank"
            className="link-16"
          >
            🇺🇦 Support Ukrainians affected by the war in Ukraine
          </a>
        </div>
      </div> */}
      <div fs-cc="preferences" className="ck-preference-w">
        <div fs-cc="close" className="ck-preference__bg"></div>
        <div className="ck-preference__scroll-w">
          <div className="ck-modal-2">
            <a
              fs-cc="close"
              href="#"
              className="ck-modal__exit-btn w-inline-block"
            >
              <div className="ck__exitbtn__line is--left"></div>
              <div className="ck__exitbtn__line is--right"></div>
              <div className="ck-sr__only">Close Cookie Preference Manager</div>
            </a>
            <div className="ck-modal__content-w">
              <div className="ck-title">Cookie Settings</div>
              <div className="ck-desc">
                By clicking “Accept All Cookies”, you agree to the storing of
                cookies on your device to enhance site navigation, analyze site
                usage and assist in our marketing efforts.{" "}
                <a href="#" className="ck-txt-link">
                  More info
                </a>
              </div>
              <div className="ck-form-w w-form">
                <form
                  id="ck-form"
                  name="wf-form-ck-form"
                  data-name="ck-form"
                  method="get"
                  className="ck-form"
                  data-wf-page-id="652d043f8189094afee170d0"
                  data-wf-element-id="6c070c5b-f2c6-b1cf-92f7-550b86ecb397"
                >
                  <div className="ck-radio-w is--not-allowed w-clearfix">
                    <div className="ck-radio__btn is--checked is--not-allowed"></div>
                    <div className="ck-radio__label is--not-allowed">
                      Strictly Necessary (Always Active)
                    </div>
                    <div className="ck-radio__desc is--not-allowed">
                      Cookies required to enable basic website functionality.
                    </div>
                  </div>
                  <label className="w-checkbox ck-radio-w w-clearfix">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom ck-radio__btn"></div>
                    <input
                      type="checkbox"
                      id="fs__marketing"
                      name="fs__marketing"
                      data-name="Fs Marketing"
                      fs-cc-checkbox="marketing"
                      style={{
                        opacity: "0",
                        position: "absolute",
                        zIndex: "-1",
                      }}
                    />
                    <span
                      htmlFor="fs__marketing"
                      className="ck-radio__label w-form-label"
                    >
                      Marketing
                    </span>
                    <div className="ck-radio__desc">
                      Cookies used to deliver advertising that is more relevant
                      to you and your interests.
                    </div>
                  </label>
                  <label className="w-checkbox ck-radio-w w-clearfix">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom ck-radio__btn"></div>
                    <input
                      type="checkbox"
                      id="fs__personalization"
                      name="fs__personalization"
                      data-name="Fs Personalization"
                      fs-cc-checkbox="personalization"
                      style={{
                        opacity: "0",
                        position: "absolute",
                        zIndex: "-1",
                      }}
                    />
                    <span
                      htmlFor="fs__personalization"
                      className="ck-radio__label w-form-label"
                    >
                      Personalization
                      <br />
                    </span>
                    <div className="ck-radio__desc">
                      Cookies allowing the website to remember choices you make
                      (such as your user name, language, or the region you are
                      in).
                    </div>
                  </label>
                  <label className="w-checkbox ck-radio-w w-clearfix">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom ck-radio__btn"></div>
                    <input
                      type="checkbox"
                      id="fs__analytics"
                      name="fs__analytics"
                      data-name="Fs Analytics"
                      fs-cc-checkbox="analytics"
                      style={{
                        opacity: "0",
                        position: "absolute",
                        zIndex: "-1",
                      }}
                    />
                    <span
                      htmlFor="fs__analytics"
                      className="ck-radio__label w-form-label"
                    >
                      Analytics
                      <br />
                    </span>
                    <div className="ck-radio__desc">
                      Cookies helping understand how this website performs, how
                      visitors interact with the site, and whether there may be
                      technical issues.
                    </div>
                  </label>
                  <div className="ck-modal__btns-w in-pref-manger">
                    <a
                      fs-cc="allow"
                      href="#"
                      className="ck-button-w is--fullwidth w-inline-block"
                    >
                      <div className="ck-button__txt">Accept All Cookies</div>
                    </a>
                    <a
                      fs-cc="submit"
                      href="#"
                      className="ck-button-w is--secondary is--fullwidth w-inline-block"
                    >
                      <div className="ck-button__txt">Save Settings</div>
                    </a>
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home_design_section">
        <div className="content_design_home">
          <div className="design_title_home">
            <div className="div-block-247">
              <div className="text-block-36">
                <strong>What we do best</strong>
              </div>
            </div>
            <div className="title_design_content">
              <h2 className="heading-52">
                <strong>Web Design</strong>
              </h2>
            </div>
            <div className="div-block-248">
              <div className="text-block-37">
                We’re pretty sure everyone wants higher conversion rates and
                better recognition. Don’t worry, we got you covered!
              </div>
            </div>
            <div className="div-block-249">
              <div className="div-block-252">
                <a href="/design-page" className="link-8">
                  Learn more
                </a>
                <link rel="prerender" href="/design-page" />
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6110d66cf87abc2d5380cd8e_arrow_link.svg"
                  loading="lazy"
                  alt=""
                  className="image-61"
                />
              </div>
            </div>
            <div className="image_block">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e458df969c076fc68609_design_image.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 1439px) 800.0000610351562px, (max-width: 1919px) 1000.0000610351562px, 1200px"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e458df969c076fc68609_design_image-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e458df969c076fc68609_design_image-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e458df969c076fc68609_design_image-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e458df969c076fc68609_design_image-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e458df969c076fc68609_design_image-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e458df969c076fc68609_design_image-p-3200.jpeg 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e458df969c076fc68609_design_image.jpg 3406w"
                alt=""
                className="image-58"
              />
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2e13d0791122762104b7_design_image_mobile.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2e13d0791122762104b7_design_image_mobile-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2e13d0791122762104b7_design_image_mobile-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2e13d0791122762104b7_design_image_mobile-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2e13d0791122762104b7_design_image_mobile-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2e13d0791122762104b7_design_image_mobile-p-3200.jpeg 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2e13d0791122762104b7_design_image_mobile.jpg 4832w"
                alt=""
                className="image-57"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home_branding_section">
        <div className="content_branding_home">
          <div className="title_branding_home">
            <h2 className="heading-52">
              <strong>Branding</strong>
            </h2>
          </div>
          <div className="div-block-250">
            <div className="text-block-37">
              Sure, every brand is unique. The question is do your customers
              realize it? We’ll make sure they do.
            </div>
          </div>
          <div className="div-block-251">
            <div className="div-block-252">
              <a href="/branding-page" className="link-8">
                Learn more
              </a>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6110d66cf87abc2d5380cd8e_arrow_link.svg"
                loading="lazy"
                alt=""
                className="image-61"
              />
            </div>
          </div>
          <div className="image_branding_block">
            <img
              src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e6138ba2b0260d936bdb_branding_design.png"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 847.0052490234375px, (max-width: 1439px) 855.0000610351562px, (max-width: 1919px) 1035px, 1313.0035400390625px"
              srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e6138ba2b0260d936bdb_branding_design-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e6138ba2b0260d936bdb_branding_design-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e6138ba2b0260d936bdb_branding_design-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e6138ba2b0260d936bdb_branding_design-p-1600.png 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129e6138ba2b0260d936bdb_branding_design.png 1710w"
              alt=""
              className="image-60"
            />
            <img
              src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2d183a57241de4955172_branding_design_mobile.png"
              loading="lazy"
              sizes="(max-width: 767px) 88vw, 100vw"
              srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2d183a57241de4955172_branding_design_mobile-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2d183a57241de4955172_branding_design_mobile-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2d183a57241de4955172_branding_design_mobile-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612a2d183a57241de4955172_branding_design_mobile.png 1177w"
              alt=""
              className="image-59"
            />
          </div>
        </div>
      </div>
      <div className="home_development_section">
        <div className="content_development_home">
          <div className="title_branding_home">
            <h2 className="heading-52">
              <strong>Development</strong>
            </h2>
          </div>
          <div className="subtitle_development_home">
            <div className="text-block-37">
              Got an awesome idea? You’re halfway there! Now let us make a fully
              functioning product out of it.{" "}
            </div>
          </div>
          <div className="link_development_home">
            <div className="div-block-252">
              <a href="/development-page" className="link-8">
                Learn more
              </a>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6110d66cf87abc2d5380cd8e_arrow_link.svg"
                loading="lazy"
                alt=""
                className="image-61"
              />
            </div>
          </div>
          <div className="image_development_home">
            <div className="div-block-366">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev.jpg"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, (max-width: 1439px) 880.0000610351562px, 1100px"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev-p-3200.jpeg 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f8b68fc9251c8c7f59cc5_dev.jpg 3340w"
                alt=""
                className="image-70"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
