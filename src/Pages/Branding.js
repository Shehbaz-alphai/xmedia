import React,{useState} from "react";

const Branding = () => {
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
  return (
    <div>
      <div className="second_menu">
        <div className="div-block">
          <div>
            <a href="#nav_id_hero" className="link">
              Overview
            </a>
            <a href="#branding_element" className="link-2">
              Elements of branding
            </a>
            <a href="#Advantages_branding" className="link-3">
              Advantages
            </a>
            <a href="#cases_branding" className="link-3">
              Cases
            </a>
          </div>
          <div className="div-block-691">
            <a href="/contact-us" className="button_buy w-button">
              Contact
            </a>
            <div className="call opacity">
              <div className="w-embed">
                {/* Calendly link widget begin */}
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
                {/* Calendly link widget end */}
              </div>
              <div className="html-embed-9 w-embed w-script">
                <script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  type="text/javascript"
                  async
                ></script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_branding">
        <div className="hero_branding_block">
          <div className="hero_title_branding">
            <h1 className="heading-16">
              <strong className="bold-text-12">Branding</strong>
            </h1>
            <div className="div-block-72">
              <div className="text-block-17">The essence of your business</div>
            </div>
          </div>
        </div>
        <div
          data-w-id="72db75b7-1271-5607-8abd-0af6787a5667"
          className="logo_block"
        >
          <div className="logo_sticky">
            <div className="animation_blur_logo-2" style={{transform:'translate3d(-22px,0px,0px)',scale3d:'(0.901312, 0.901312,1)'}}>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png"
                loading="lazy"
                data-w-id="72db75b7-1271-5607-8abd-0af6787a566a"
                sizes="(max-width: 479px) 0px, (max-width: 1439px) 100vw, 1060.998291015625px"
                alt=""
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png 1061w"
                className="image-150"
              />
            </div>
            <div className="div-block-130">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6126310c29d9d1bc48ab12bd_tablet.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="branding_elements-2">
              <div className="left_branding">
                <div className="right_first_block">
                  <div className="div-block-131">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6126312a2df89607b4fced5d_Cup_Black.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-132">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612631476b15a18dc5d57bbb_visit_card_2.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-133">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6126317522cfd838d91d7fbf_PayCard.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="right_second_block-2">
                  <div className="div-block-134">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6126319030c5661417ba4b18_pencil.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-135">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612631a14ad65d76f489250a_erise.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="right_branding">
                  <div className="right_brand_block-2">
                    <div className="div-block-131">
                      <img
                        src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6125fb1f4807389551078293_mobile_brand.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="div-block-137">
                      <img
                        src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612633f76b15a11b68d585c1_beidge.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="right_brand_second_block">
                    <div className="div-block-138">
                      <img
                        src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61260164d7c625e345d4592d_watch.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-371">
              <div className="div-block-372">
                <div className="_1_block">
                  <div className="div-block-386">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a744201b1ad252a7b6c91f_Cup.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, (max-width: 1439px) 100vw, 313.9930725097656px"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a744201b1ad252a7b6c91f_Cup-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a744201b1ad252a7b6c91f_Cup.png 748w"
                      alt=""
                    />
                  </div>
                  <div className="div-block-387">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7447bd7bdc880a90a9922_visit_card.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, (max-width: 1439px) 100vw, 313.9930725097656px"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7447bd7bdc880a90a9922_visit_card-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7447bd7bdc880a90a9922_visit_card.png 748w"
                      alt=""
                    />
                  </div>
                  <div className="div-block-388">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7451abacbbf508a29f54a_banking_card.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, (max-width: 1439px) 100vw, 313.9930725097656px"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7451abacbbf508a29f54a_banking_card-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7451abacbbf508a29f54a_banking_card.png 748w"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_2_block">
                  <div className="div-block-392">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7466a3523e4bcb2e291b7_pen.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-389">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7471be6ad9935a6ce6895_erise.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  data-w-id="ea2e1b6f-1740-a6af-1a71-d507ac550298"
                  className="_3_block"
                >
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a747c714a52d7b3dc14ba0_desktop.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, (max-width: 1439px) 100vw, 510.998291015625px"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a747c714a52d7b3dc14ba0_desktop-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a747c714a52d7b3dc14ba0_desktop-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a747c714a52d7b3dc14ba0_desktop-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a747c714a52d7b3dc14ba0_desktop.png 1218w"
                    alt=""
                  />
                </div>
                <div className="_4_block">
                  <div className="div-block-390">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74835bbd5ad1d99d44dda_mobile.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, (max-width: 1439px) 100vw, 270.998291015625px"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74835bbd5ad1d99d44dda_mobile-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74835bbd5ad1d99d44dda_mobile.png 646w"
                      alt=""
                    />
                  </div>
                  <div className="div-block-391">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7485ab129027344cd41ad_speaker.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, (max-width: 1439px) 100vw, 270.998291015625px"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7485ab129027344cd41ad_speaker-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7485ab129027344cd41ad_speaker.png 646w"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_5_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a7486de6a98411c3b65b3a_watch.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-127">
            <div className="text_scroll_up">
              <h2 className="heading-43">We make it</h2>
              <div className="div-block-211">
                <h2 className="heading-42">Outstanding</h2>
                <h2 className="heading-44">Outstanding</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          data-w-id="f3ae9c36-384c-85f6-4584-1e4be832a47c"
          className="logo_block logo_black_1440"
        >
          <div className="logo_sticky logo_sticky_144">
            <div className="animation_blur_logo-2 animation_blur_1440">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png"
                loading="lazy"
                sizes="(max-width: 479px) 0px, (max-width: 1279px) 100vw, (max-width: 1439px) 1060.998291015625px, 100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png 1061w"
                alt=""
              />
            </div>
            <div className="div-block-130 block_130_1440">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop.png"
                loading="lazy"
                sizes="(max-width: 479px) 0px, (max-width: 1279px) 100vw, (max-width: 1439px) 1100px, 100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-1600.png 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-2000.png 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-2600.png 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-3200.png 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop.png 3556w"
                alt=""
              />
            </div>
            <div className="branding_elements-2 brand_elements_1440">
              <div>
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 0px, 100vw"
                  srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-3200.jpeg 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements.jpg 3560w"
                  alt=""
                />
              </div>
            </div>
            <div className="div-block-371 block_371_1440">
              <div className="div-block-372">
                <div className="_1_block">
                  <div className="div-block-386">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1).png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, 100vw"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1)-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1)-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1).png 1011w"
                      alt=""
                    />
                  </div>
                  <div className="div-block-387">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11448a7d6b3f1af4bc1c_visit_card.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-388">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11565c77de3745a1ee38_PayCard%20Copy%202.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_2_block">
                  <div className="div-block-392">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1183c214e0cf03286e4c_pen.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-389">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1197e88456f76a504a30_Group%2015%20Copy%202.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_3_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet.jpg 2000w"
                    alt=""
                  />
                </div>
                <div className="_4_block">
                  <div className="div-block-390">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1202f8269439f0747edc_mobile.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-391">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e122fb5eef45f05de9d4c_bei.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_5_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock.jpg 736w"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-127 block_127_1440">
            <div className="text_scroll_up text_scroll_up_1440">
              <h2 className="heading-43">We make it</h2>
              <div className="div-block-211">
                <h2 className="heading-42">Outstanding</h2>
                <h2
                  data-w-id="f3ae9c36-384c-85f6-4584-1e4be832a4b7"
                  className="heading-44"
                >
                  Outstanding
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="5b9c6e1f-ee47-cfe8-fcac-6abf79047bda"
          className="logo_block logo_black_1280"
        >
          <div className="logo_sticky logo_sticky_1280">
            {/* <div className="animation_blur_logo-2 animation_blur_1280">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png"
                loading="lazy"
                sizes="100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png 1061w"
                alt=""
                className="image-151"
              />
            </div> */}
            <div className="div-block-130 block_130_1280">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop.png"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, (max-width: 1279px) 980.0000610351562px, 100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-1600.png 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-2000.png 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-2600.png 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-3200.png 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop.png 3556w"
                alt=""
              />
            </div>
            <div className="branding_elements-2 brand_elements_1440">
              <div>
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 0px, 100vw"
                  srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-3200.jpeg 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements.jpg 3560w"
                  alt=""
                />
              </div>
            </div>
            <div className="div-block-371 block_371_1440">
              <div className="div-block-372">
                <div className="_1_block">
                  <div className="div-block-386">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1).png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, 100vw"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1)-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1)-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1).png 1011w"
                      alt=""
                    />
                  </div>
                  <div className="div-block-387">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11448a7d6b3f1af4bc1c_visit_card.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-388">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11565c77de3745a1ee38_PayCard%20Copy%202.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_2_block">
                  <div className="div-block-392">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1183c214e0cf03286e4c_pen.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-389">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1197e88456f76a504a30_Group%2015%20Copy%202.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_3_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet.jpg 2000w"
                    alt=""
                  />
                </div>
                <div className="_4_block">
                  <div className="div-block-390">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1202f8269439f0747edc_mobile.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-391">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e122fb5eef45f05de9d4c_bei.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_5_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock.jpg 736w"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-127 block_127_1280">
            <div className="text_scroll_up text_scroll_1280">
              <h2 className="heading-43"> Let's make it</h2>
              <div className="div-block-211">
                <h2
                  data-w-id="5b9c6e1f-ee47-cfe8-fcac-6abf79047bff"
                  className="heading-42"
                >
                  Outstanding
                </h2>
                <h2
                  data-w-id="5b9c6e1f-ee47-cfe8-fcac-6abf79047c01"
                  className="heading-44"
                >
                  Outstanding
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="2117ab96-c42d-f5a8-85c1-2250cc8e10c1"
          className="logo_block logo_black_mobile"
        >
          <div className="logo_sticky logo_sticky_mobile">
            {/* <div
              data-w-id="2117ab96-c42d-f5a8-85c1-2250cc8e10c5"
              className="animation_blur_logo-2 animation_blur_mobile"
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png"
                loading="lazy"
                sizes="(max-width: 479px) 0px, 100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png 1061w"
                alt=""
              />
            </div> */}
            <div className="div-block-130 block_130_mobile">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop.png"
                loading="lazy"
                sizes="(max-width: 479px) 0px, 100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-1600.png 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-2000.png 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-2600.png 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-3200.png 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop.png 3556w"
                alt=""
              />
            </div>
            <div className="branding_elements-2 brand_elements_1440">
              <div>
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 0px, 100vw"
                  srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-3200.jpeg 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements.jpg 3560w"
                  alt=""
                />
              </div>
            </div>
            <div className="div-block-371 block_371_1440">
              <div className="div-block-372">
                <div className="_1_block">
                  <div className="div-block-386">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1).png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, 100vw"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1)-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1)-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1).png 1011w"
                      alt=""
                    />
                  </div>
                  <div className="div-block-387">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11448a7d6b3f1af4bc1c_visit_card.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-388">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11565c77de3745a1ee38_PayCard%20Copy%202.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_2_block">
                  <div className="div-block-392">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1183c214e0cf03286e4c_pen.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-389">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1197e88456f76a504a30_Group%2015%20Copy%202.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_3_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet.jpg 2000w"
                    alt=""
                  />
                </div>
                <div className="_4_block">
                  <div className="div-block-390">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1202f8269439f0747edc_mobile.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-391">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e122fb5eef45f05de9d4c_bei.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_5_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock.jpg 736w"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-127 block_127_mobile">
            <div className="text_scroll_up text_scroll_1280">
              <h2 className="heading-43">We make it</h2>
              <div className="div-block-211">
                <h2
                  data-w-id="2117ab96-c42d-f5a8-85c1-2250cc8e10e6"
                  className="heading-42"
                >
                  Outstanding
                </h2>
                <h2
                  data-w-id="2117ab96-c42d-f5a8-85c1-2250cc8e10e8"
                  className="heading-44"
                >
                  Outstanding
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="6c774f68-a787-e7cb-0a42-7b18705dca55"
          className="logo_block logo_black_mobile logo_black_mini"
        >
          {/* <div className="logo_sticky logo_sticky_mobile logo_sticky_mini">
            <div
              data-w-id="6c774f68-a787-e7cb-0a42-7b18705dca57"
              className="animation_blur_logo-2 animation_blur_mobile animation_blur_mini"
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png"
                loading="lazy"
                sizes="(max-width: 479px) NaNvw, 100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a71c7ea8673044eabcd3bd_Group%2030%20Copy.png 1061w"
                alt=""
              />
            </div>
            <div className="div-block-130 block_130_mobile block_130_mini">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop.png"
                loading="lazy"
                sizes="(max-width: 479px) NaNvw, 100vw"
                srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-1600.png 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-2000.png 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-2600.png 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop-p-3200.png 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d31efd716ff888211c3_desktop.png 3556w"
                alt=""
              />
            </div>
            <div className="branding_elements-2 brand_elements_1440">
              <div>
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 0px, 100vw"
                  srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements-p-3200.jpeg 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61320ef04eee41477b13c29f_brand_tablet_elements.jpg 3560w"
                  alt=""
                />
              </div>
            </div>
            <div className="div-block-371 block_371_1440">
              <div className="div-block-372">
                <div className="_1_block">
                  <div className="div-block-386">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1).png"
                      loading="lazy"
                      sizes="(max-width: 479px) 0px, 100vw"
                      srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1)-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1)-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612f2bc9474c2121c1fff769_Cup_Black%20(1).png 1011w"
                      alt=""
                    />
                  </div>
                  <div className="div-block-387">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11448a7d6b3f1af4bc1c_visit_card.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-388">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11565c77de3745a1ee38_PayCard%20Copy%202.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_2_block">
                  <div className="div-block-392">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1183c214e0cf03286e4c_pen.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-389">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1197e88456f76a504a30_Group%2015%20Copy%202.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_3_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e11ee5c77de345aa1ef0d_tablet.jpg 2000w"
                    alt=""
                  />
                </div>
                <div className="_4_block">
                  <div className="div-block-390">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1202f8269439f0747edc_mobile.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="div-block-391">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e122fb5eef45f05de9d4c_bei.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="_5_block">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 0px, 100vw"
                    srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612e1c95298d49623c6786e3_clock.jpg 736w"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className="div-block-127 block_127_mobile block_127_mini">
            <div className="text_scroll_up text_scroll_1280">
              <h2 className="heading-43">We make it</h2>
              <div className="div-block-211">
                <h2 className="heading-42">Outstanding</h2>
                <h2
                  data-w-id="6c774f68-a787-e7cb-0a42-7b18705dca7c"
                  className="heading-44"
                >
                  Outstanding
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="element_mobile_logo">
          <div className="title_brand_elements">
            <h3 className="heading-22 heading_22_768">
              <strong className="bold-text-65">in every little </strong>
              <span className="text-span-30">
                <strong>detail</strong>
              </span>
            </h3>
          </div>
          <div className="div-block-393">
            <img
              src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d943491b85b4042ce0f_gadjets.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, (max-width: 1439px) 980.0000610351562px, 100vw"
              srcSet="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d943491b85b4042ce0f_gadjets-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d943491b85b4042ce0f_gadjets-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d943491b85b4042ce0f_gadjets-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d943491b85b4042ce0f_gadjets-p-1600.png 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62a74d943491b85b4042ce0f_gadjets.png 1778w"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
