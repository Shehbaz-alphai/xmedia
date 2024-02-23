import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/groovyWalk1.json";
import Clients from "./Clients";
import OutcrowdStory from "./OutcrowdStory";
import Example from "./Example";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // You can adjust the threshold as needed
    const threshold = 200;

    if (scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "seek",
        frames: [0, 38],
      },
    ],
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: groovyWalkAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div>
      <div className="second_menu">
        <div className="div-block">
          <div>
            <a href="#nav_id_hero" className="link">
              Overview
            </a>
            <a href="#mission_about" className="link-2">
              Mission
            </a>
            <a href="#values_about" className="link-3">
              Our values
            </a>
            <a href="#clients_about" className="link-3">
              Our clients
            </a>
            <a href="#best_team" className="link-3">
              Our team
            </a>
          </div>
          <div className="div-block-691">
            <a href="/contact-us" className="button_buy w-button">
              Contact
            </a>
            <div className="call opacity">
              <div className="w-embed">
                <link
                  href="https://assets.calendly.com/assets/external/widget.css"
                  rel="stylesheet"
                />
                <a
                  className="link-2 set"
                  href=""
                  onClick={() => {
                    window.Calendly.initPopupWidget({
                      url: "https://calendly.com/outcrowd-digital-agency/introduction",
                    });
                    return false;
                  }}
                >
                  Book a call
                </a>
              </div>
              <div className="html-embed-9 w-embed w-script">
                <script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  type="text/javascript"
                  async=""
                ></script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero_about"
        data-w-id="0ee63aff-85b1-82c5-8490-9d880f5f37bd"
      >
        <div className="div-block-217">
          <div className="div-block-219">
            <div className="container">
              <div className="div-block-283">
                <h1 className="h1_about">
                  <strong>Outcrowd is really all about </strong>
                </h1>
              </div>
            </div>
            <div className="logo_image">
              {/* <Lottie
                animationData={groovyWalkAnimation}  interactivity={interactivity}
               
              /> */}
              <Example/>
            </div>
            <div className="div-block-218">
              <div className="text-block-35">
                <strong className="bold-text-66">
                  Love. Design &amp; Branding are our primary languages, but
                  there’s more.{" "}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="image_team"
        data-w-id="d1ef7e4f-33c8-8087-d1f9-22c678ad0f7a"
      >
        <div className="div-block-284">
          <img
            src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613ef1f18ed3b3d40c920190_IMG_6746-2.jpg"
            loading="lazy"
            width="1298"
            sizes="(max-width: 1439px) 100vw, 1297.994873046875px"
            alt=""
            srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613ef1f18ed3b3d40c920190_IMG_6746-2-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613ef1f18ed3b3d40c920190_IMG_6746-2-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613ef1f18ed3b3d40c920190_IMG_6746-2-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613ef1f18ed3b3d40c920190_IMG_6746-2-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613ef1f18ed3b3d40c920190_IMG_6746-2.jpg 2400w"
            className="image-65"
          />
        </div>
      </div>
      <div id="mission_about" className="about_description">
        <div className="div-block-285">
          <h2 className="heading-62">
            <strong>
              We want to bring business and the digital world together
            </strong>
          </h2>
        </div>
        <div className="container">
          <div className="w-layout-grid grid-6">
            <div className="div-block-287">
              <div className="div-block-286">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b542ea9bffb09b4a1bbb9_arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="text-block-11">
                In fact, this is how Outcrowd began. We were just a bunch of
                talented Ukrainians united by a common vision: creating a
                synergy of business and the digital world.
                <br />
                <br />
                We were tired of stale design solutions. We felt strongly that
                design was more than pretty pictures: it was a powerful tool
                that could really transform business.
                <br />
              </div>
            </div>
            <div className="div-block-288">
              <div className="div-block-286">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b542ea9bffb09b4a1bbb9_arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="text-block-11">
                Ambitious much? Sure! But once we knew what we wanted, there was
                no turning back. All we needed was some hard work.
                <br />
                <br />
                We believe that we’ve managed to achieve what we set out to do.
                Today, we’re proud to bring together people who share our
                passion for change.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        id="values_about"
        data-w-id="815bc5a1-cd73-64fd-8834-8a39d4e8f08e"
        className="our_values"
      >
        <div className="div-block-289">
          <div className="mobile_values_section">
            <div className="header_val">
              <h3 className="heading-71">
                <strong>Create your own center of attention lorem</strong>
              </h3>
            </div>
            <div className="val_1_mobile">
              <div className="div-block-322">
                <div className="div-block-323">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6adcb8b13e6a979fd1c5_val_1.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-324">
                  <h4 className="heading-72">
                    <strong>Outcrowd is Efficiency</strong>
                  </h4>
                </div>
              </div>
            </div>
            <div className="val_1_mobile">
                    <div className="div-block-322">
                        <div className="div-block-323 rocket"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6b3f0aa2385c8c55906a_val_2.png" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-324">
                        <h4 className="heading-72"><strong>Outcrowd is Team</strong></h4>
                    </div>
                </div>
                <div className="val_1_mobile">
                    <div className="div-block-322">
                        <div className="div-block-323"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6b8ab80a4a83ba87215d_val_3.png" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-324">
                        <h4 className="heading-72"><strong>Outcrowd is Growth</strong></h4>
                    </div>
                </div>
                <div className="val_1_mobile">
                    <div className="div-block-322">
                        <div className="div-block-323"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6bc16e73907c5fa4ad37_val_4.png" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-324">
                        <h4 className="heading-72"><strong>Outcrowd is Fun</strong></h4>
                    </div>
                </div>
                <div className="val_1_mobile">
                    <div className="div-block-322">
                        <div className="div-block-323"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6be98c197092b885aa9c_val_5.png" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-324">
                        <h4 className="heading-72"><strong>Outcrowd is Freedom</strong></h4>
                    </div>
                </div>
          </div>
          <div className="div-block-325">
            <div className="div-block-291">
              <h3 className="heading-63">
                <strong className="bold-text-64">
                  The values that define us
                </strong>
              </h3>
            </div>
            <div className="div-block-292">
              <div className="left_val">
                <div className="div-block-293">
                  <h4 className="heading-64">
                    <strong>Outcrowd is</strong>
                  </h4>
                  <div className="div-block-299">
                    <h4
                      data-w-id="e84925e9-5e2a-3477-1ad8-da4f439b8773"
                      className="heading-65"
                    >
                      <strong>Efficiency</strong>
                    </h4>
                    <h4 className="heading-65 team">
                      <strong>Team</strong>
                    </h4>
                    <h4 className="heading-65 growth">
                      <strong>Growth</strong>
                    </h4>
                    <h4 className="heading-65 fun">
                      <strong>Fun</strong>
                    </h4>
                    <h4 className="heading-65 freedom">
                      <strong>Freedom</strong>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="right_val">
                <div className="div-block-294">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6adcb8b13e6a979fd1c5_val_1.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-295">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6b3f0aa2385c8c55906a_val_2.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-296">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6b8ab80a4a83ba87215d_val_3.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-297">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6bc16e73907c5fa4ad37_val_4.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-298">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b6be98c197092b885aa9c_val_5.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
  <Clients/>
  {/* <OutcrowdStory/> */}
  <div className="photo_gallery">
      <div className="text_gallery">
        <div className="text-block-44">
          <strong className="bold-text-63">Our office is a place for bright minds. It has all the comforts of home. Dogs included.</strong>
        </div>
      </div>
      <div className="w-layout-grid grid-11">
        <div id="w-node-_40b33f5f-c223-07c1-b6f0-69058589ea24-fee170da" className="div-block-308"></div>
        <div className="div-block-309"></div>
        <div className="div-block-310"></div>
        <div id="w-node-_2a7b7614-6d17-2fc0-5899-9ec46d74724c-fee170da" className="div-block-311"></div>
      </div>
      <div className="w-layout-grid grid-12">
      <div className="div-block-326">
      <div className="div-block-312"></div>
      <div className="div-block-313">
        <div className="text-block-45">
          <span className="text-span-31">
            <strong className="bold-text-56">Outcrowd</strong>
          </span>
          <strong className="bold-text-56"> is becoming a hub for those who think outside of the box.</strong>
        </div>
      </div>
    </div>
        <div className="div-block-314"></div>
      </div>
    </div>
    <div id="best_team" className="best_team">
      <div className="loop_block_outer ">
        <div className="loop_block_inner ">
          {/* Repeat the following block for each member */}
          <div className="member_1">
            <img
              src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f559ac27b835682b55985_Artboard-Copy-13.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 200.00001525878906px, 300px"
              srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f559ac27b835682b55985_Artboard-Copy-13.jpg"
              alt=""
              className="image-92"
            />
            <h5 className="heading-13">Erik Messaki</h5>
            <div className="text-block-15">Head of marketing</div>
          </div>
          <div className="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55b8f85b0b6790d4bf27_Artboard-Copy-14.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55b8f85b0b6790d4bf27_Artboard-Copy-14-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55b8f85b0b6790d4bf27_Artboard-Copy-14-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55b8f85b0b6790d4bf27_Artboard-Copy-14.jpg 1000w"
                        alt="" className="image-91" />
                    <h5 className="heading-13"><strong class="bold-text-15">Natalia Alimaskina</strong></h5>
                    <div className="text-block-15">Co-founder, Financial Director</div>
                </div>
                <div className="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55c9dcf5e7efda5e3569_Artboard-Copy.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55c9dcf5e7efda5e3569_Artboard-Copy-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55c9dcf5e7efda5e3569_Artboard-Copy-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55c9dcf5e7efda5e3569_Artboard-Copy.jpg 1000w"
                        alt="" className="image-90" />
                    <h5 className="heading-13"><strong class="bold-text-15">Alexandra Mironova</strong></h5>
                    <div className="text-block-15">Head of Project Management</div>
                </div>
                <div className="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55e0949d30169a9b50e9_Artboard-Copy-4.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55e0949d30169a9b50e9_Artboard-Copy-4-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55e0949d30169a9b50e9_Artboard-Copy-4-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55e0949d30169a9b50e9_Artboard-Copy-4.jpg 1000w"
                        alt="" class="image-89" />
                    <h5 class="heading-13"><strong class="bold-text-15">Dmitriy Zikrach</strong></h5>
                    <div class="text-block-15">Head of Human Resources</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55f111e14f1f28f88eda_Artboard-Copy-16.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55f111e14f1f28f88eda_Artboard-Copy-16-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55f111e14f1f28f88eda_Artboard-Copy-16-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55f111e14f1f28f88eda_Artboard-Copy-16.jpg 1000w"
                        alt="" class="image-88" />
                    <h5 class="heading-13"><strong class="bold-text-15">Denis Kabichenko</strong></h5>
                    <div class="text-block-15">Head of Development</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55ff472a83442fd9e17d_Artboard-Copy-10.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55ff472a83442fd9e17d_Artboard-Copy-10-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55ff472a83442fd9e17d_Artboard-Copy-10-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55ff472a83442fd9e17d_Artboard-Copy-10.jpg 1000w"
                        alt="" class="image-87" />
                    <h5 class="heading-13"><strong class="bold-text-15">Lera Olefirova</strong></h5>
                    <div class="text-block-15">SMM Manager</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5612dcf5e70b675e3669_Artboard-Copy-3.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5612dcf5e70b675e3669_Artboard-Copy-3-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5612dcf5e70b675e3669_Artboard-Copy-3-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5612dcf5e70b675e3669_Artboard-Copy-3.jpg 1000w"
                        alt="" class="image-86" />
                    <h5 class="heading-13"><strong class="bold-text-15">Artem Gordadze</strong></h5>
                    <div class="text-block-15">Business Consultant</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56210514c3814af62635_Artboard-Copy-5.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56210514c3814af62635_Artboard-Copy-5-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56210514c3814af62635_Artboard-Copy-5-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56210514c3814af62635_Artboard-Copy-5.jpg 1000w"
                        alt="" class="image-85" />
                    <h5 class="heading-13"><strong class="bold-text-15">Alpha</strong></h5>
                    <div class="text-block-15">Happiness Manager</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5631fa13b18efea8616d_Artboard-Copy-6.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5631fa13b18efea8616d_Artboard-Copy-6-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5631fa13b18efea8616d_Artboard-Copy-6-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5631fa13b18efea8616d_Artboard-Copy-6.jpg 1000w"
                        alt="" class="image-84" />
                    <h5 class="heading-13"><strong class="bold-text-15">Oleksandr Khudekovskyi</strong></h5>
                    <div class="text-block-15">Marketing Specialist</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f559ac27b835682b55985_Artboard-Copy-13.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f559ac27b835682b55985_Artboard-Copy-13-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f559ac27b835682b55985_Artboard-Copy-13-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f559ac27b835682b55985_Artboard-Copy-13.jpg 1000w"
                        alt="" class="image-83" />
                    <h5 class="heading-13"><strong class="bold-text-15">Erik Messaki</strong></h5>
                    <div class="text-block-15">Head of marketing</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55b8f85b0b6790d4bf27_Artboard-Copy-14.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55b8f85b0b6790d4bf27_Artboard-Copy-14-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55b8f85b0b6790d4bf27_Artboard-Copy-14-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55b8f85b0b6790d4bf27_Artboard-Copy-14.jpg 1000w"
                        alt="" class="image-82" />
                    <h5 class="heading-13"><strong class="bold-text-15">Natalia Alimaskina</strong></h5>
                    <div class="text-block-15">Co-founder, Financial Director</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55c9dcf5e7efda5e3569_Artboard-Copy.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55c9dcf5e7efda5e3569_Artboard-Copy-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55c9dcf5e7efda5e3569_Artboard-Copy-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55c9dcf5e7efda5e3569_Artboard-Copy.jpg 1000w"
                        alt="" class="image-81" />
                    <h5 class="heading-13"><strong class="bold-text-15">Alexandra Mironova</strong></h5>
                    <div class="text-block-15">Head of Project Management</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55e0949d30169a9b50e9_Artboard-Copy-4.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55e0949d30169a9b50e9_Artboard-Copy-4-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55e0949d30169a9b50e9_Artboard-Copy-4-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f55e0949d30169a9b50e9_Artboard-Copy-4.jpg 1000w"
                        alt="" class="image-89" />
                    <h5 class="heading-13"><strong class="bold-text-15">Dmitriy Zikrach</strong></h5>
                    <div class="text-block-15">Head of Human Resources</div>
                </div>
        </div>
      </div>
      <div className="loop_block_outer loop_out_2 loop_view_2">
        <div className="loop_block_inner loop_block_inner_2 track-horizontal">
          
          <div className="member_1">
            <img
              src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56a6c27b832a13b55a6f_Artboard-Copy-12.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 200.00001525878906px, 300px"
              srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56a6c27b832a13b55a6f_Artboard-Copy-12.jpg"
              alt=""
              className="image-92"
            />
            <h5 className="heading-13"><strong className="bold-text-15">Pavel Ilnitski</strong></h5>
            <div className="text-block-15">Motion Designer</div>
          </div>
          <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56b40514c3697ff62c6c_Artboard-Copy-11.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56b40514c3697ff62c6c_Artboard-Copy-11-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56b40514c3697ff62c6c_Artboard-Copy-11-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56b40514c3697ff62c6c_Artboard-Copy-11.jpg 1000w"
                        alt="" class="image-91" />
                    <h5 class="heading-13"><strong class="bold-text-15">William Grace</strong></h5>
                    <div class="text-block-15">Art Director</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56c1f38930646edff8cd_Artboard-Copy-7.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56c1f38930646edff8cd_Artboard-Copy-7-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56c1f38930646edff8cd_Artboard-Copy-7-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56c1f38930646edff8cd_Artboard-Copy-7.jpg 1000w"
                        alt="" class="image-90" />
                    <h5 class="heading-13"><strong class="bold-text-15">Vladislava Povelitsa</strong></h5>
                    <div class="text-block-15">UI/UX Designer</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56d082eafbf0dbbfbc3c_Artboard-Copy-17.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56d082eafbf0dbbfbc3c_Artboard-Copy-17-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56d082eafbf0dbbfbc3c_Artboard-Copy-17-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56d082eafbf0dbbfbc3c_Artboard-Copy-17.jpg 1000w"
                        alt="" class="image-89" />
                    <h5 class="heading-13"><strong class="bold-text-15">Vladislav Volkodav</strong></h5>
                    <div class="text-block-15">UI/UX Designer</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56df89106a791674123f_Artboard-Copy-15.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56df89106a791674123f_Artboard-Copy-15-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56df89106a791674123f_Artboard-Copy-15-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56df89106a791674123f_Artboard-Copy-15.jpg 1000w"
                        alt="" class="image-88" />
                    <h5 class="heading-13"><strong class="bold-text-15">Arthur Shendrik</strong></h5>
                    <div class="text-block-15">3D Designer</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56e90b78f38ce500c9ee_Artboard-Copy-2.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56e90b78f38ce500c9ee_Artboard-Copy-2-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56e90b78f38ce500c9ee_Artboard-Copy-2-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56e90b78f38ce500c9ee_Artboard-Copy-2.jpg 1000w"
                        alt="" class="image-87" />
                    <h5 class="heading-13"><strong class="bold-text-15">Dmitriy Riabovol</strong></h5>
                    <div class="text-block-15">Biz Dev Manager</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f570211696681aa2d8c46_Artboard.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f570211696681aa2d8c46_Artboard-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f570211696681aa2d8c46_Artboard-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f570211696681aa2d8c46_Artboard.jpg 1000w"
                        alt="" class="image-86" />
                    <h5 class="heading-13"><strong class="bold-text-15">Irina Zinchenko<br/></strong></h5>
                    <div class="text-block-15">Project Manager</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5714412b0418e26f52b2_Artboard-Copy-9.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5714412b0418e26f52b2_Artboard-Copy-9-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5714412b0418e26f52b2_Artboard-Copy-9-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5714412b0418e26f52b2_Artboard-Copy-9.jpg 1000w"
                        alt="" class="image-85" />
                    <h5 class="heading-13"><strong class="bold-text-15">Vlad Fedorov</strong></h5>
                    <div class="text-block-15">Biz Dev Manager</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56c1f38930646edff8cd_Artboard-Copy-7.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56c1f38930646edff8cd_Artboard-Copy-7-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56c1f38930646edff8cd_Artboard-Copy-7-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56c1f38930646edff8cd_Artboard-Copy-7.jpg 1000w"
                        alt="" class="image-90" />
                    <h5 class="heading-13"><strong class="bold-text-15">Vladislava Povelitsa</strong></h5>
                    <div class="text-block-15">UI/UX Designer</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56d082eafbf0dbbfbc3c_Artboard-Copy-17.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56d082eafbf0dbbfbc3c_Artboard-Copy-17-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56d082eafbf0dbbfbc3c_Artboard-Copy-17-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56d082eafbf0dbbfbc3c_Artboard-Copy-17.jpg 1000w"
                        alt="" class="image-89" />
                    <h5 class="heading-13"><strong class="bold-text-15">Vladislav Volkodav</strong></h5>
                    <div class="text-block-15">UI/UX Designer</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56df89106a791674123f_Artboard-Copy-15.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56df89106a791674123f_Artboard-Copy-15-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56df89106a791674123f_Artboard-Copy-15-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56df89106a791674123f_Artboard-Copy-15.jpg 1000w"
                        alt="" class="image-88" />
                    <h5 class="heading-13"><strong class="bold-text-15">Arthur Shendrik</strong></h5>
                    <div class="text-block-15">3D Designer</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56e90b78f38ce500c9ee_Artboard-Copy-2.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56e90b78f38ce500c9ee_Artboard-Copy-2-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56e90b78f38ce500c9ee_Artboard-Copy-2-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f56e90b78f38ce500c9ee_Artboard-Copy-2.jpg 1000w"
                        alt="" class="image-87" />
                    <h5 class="heading-13"><strong class="bold-text-15">Dmitriy Riabovol</strong></h5>
                    <div class="text-block-15">Biz Dev Manager</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f570211696681aa2d8c46_Artboard.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f570211696681aa2d8c46_Artboard-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f570211696681aa2d8c46_Artboard-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f570211696681aa2d8c46_Artboard.jpg 1000w"
                        alt="" class="image-86" />
                    <h5 class="heading-13"><strong class="bold-text-15">Irina Zinchenko<br/></strong></h5>
                    <div class="text-block-15">Project Manager</div>
                </div>
                <div class="member_1"><img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5714412b0418e26f52b2_Artboard-Copy-9.jpg" loading="lazy" sizes="(max-width: 479px) 200.00001525878906px, 300px" srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5714412b0418e26f52b2_Artboard-Copy-9-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5714412b0418e26f52b2_Artboard-Copy-9-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f5714412b0418e26f52b2_Artboard-Copy-9.jpg 1000w"
                        alt="" class="image-85" />
                    <h5 class="heading-13"><strong class="bold-text-15">Vlad Fedorov</strong></h5>
                    <div class="text-block-15">Biz Dev Manager</div>
                </div>
        </div>
      </div>

    </div>
    <div>
      <div data-w-id="7be3e532-3bf5-6485-fd5f-2f00c4855a95" className="illustration_section">
        <div className="container">
          <div className="title_ill">
            <h3 className="heading-14"><strong>Together we make a difference </strong></h3>
          </div>
        </div>
        <div className="ill_block">
          <div className="div-block-320"></div>
        </div>
      </div>
      <div className="buy_product">
        <div className="container">
          <div className="title_buy">
            <h3 className="heading-70"><strong>Let’s grow together</strong></h3>
            <div className="div-block-316">
              <div className="text-block-46">Outcrowd is about permanent growth. This applies to your business, our team, and everyone’s happiness.</div>
            </div>
          </div>
          <div className="w-layout-grid grid-10">
            <div className="div-block-317">
              <h4 className="h6_black work_with_us"><strong className="bold-text-52">Work with us</strong></h4>
              <div className="text-block-16">We are here to help you achieve your business goals and create an outstanding product.</div>
              <a href="/contact-us" className="button_contact w-button">Learn more</a>
            </div>
            <div className="div-block-318">
              <h3 className="h6_black work_with_us"><strong className="bold-text-53">Collaborate</strong></h3>
              <div className="text-block-16">Together, we can do much more. A trustworthy partnership is the best way to reach the next level.</div>
              <a href="/partnership" className="button_contact w-button">Learn more</a>
            </div>
            <div className="div-block-319">
              <h3 className="h6_black work_with_us"><strong className="bold-text-54">Join our team </strong></h3>
              <div className="text-block-16">Do you want to reveal your full creative potential? Do you believe in bringing beauty to the digital world? So do we!</div>
              <a href="/careers" className="button_contact w-button">Learn more</a>
            </div>
          </div>
          <div className="button_contact_block">
            <a href="/contact-us" className="link-block-2 w-inline-block">
              <div className="text-block-47">Contact</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;


