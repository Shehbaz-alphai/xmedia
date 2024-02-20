import React, { useEffect, useState } from "react";

const Contactus = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    // For example, you can set the formStatus based on success or failure
    setFormStatus("success"); // or setFormStatus('error');
  };
  useEffect(() => {
    const containerId = "zf_div_fmOqhA66MoVY-XJ2QMvIm2psc_oB2-bbGBn-4gYdAbw";
    const iframeId = "zf_iframe_fmOqhA66MoVY-XJ2QMvIm2psc_oB2-bbGBn-4gYdAbw";

    const loadZohoForm = () => {
      try {
        const container = document.getElementById(containerId);
        const iframe = document.createElement("iframe");

        iframe.id = iframeId;
        iframe.src =
          "https://forms.zohopublic.eu/outcrowd/form/LETSTALK/formperma/fmOqhA66MoVY-XJ2QMvIm2psc_oB2-bbGBn-4gYdAbw?zf_rszfm=1";
        iframe.style.border = "none";
        iframe.style.height = "578px";
        iframe.style.width = "90%";
        iframe.style.transition = "all 0.5s ease";

        container.appendChild(iframe);

        window.addEventListener("message", (event) => {
          const eventData = event.data;

          if (eventData && eventData.constructor === String) {
            const iframeData = eventData.split(" | ");

            if (iframeData.length === 2) {
              const iframePerma = iframeData[0];
              const iframeHeight = `${parseInt(iframeData[1], 10) + 15}px`;

              const existingIframe = document.getElementById(iframeId);

              if (
                existingIframe &&
                existingIframe.src.indexOf("formperma") > 0 &&
                existingIframe.src.indexOf(iframePerma) > 0
              ) {
                const prevIframeHeight = existingIframe.style.height;

                if (prevIframeHeight !== iframeHeight) {
                  existingIframe.style.height = iframeHeight;
                }
              }
            }
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    loadZohoForm();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", loadZohoForm);
    };
  }, []);

  return (
    <div>

    
    <div class="form">
      <div className="form_contact">
        <div className="container">
          <div className="div-block-231">
            <h1 className="heading-48">
              <strong>Let's talk!</strong>
            </h1>
            <div className="div-block-277">
              <div className="text-block-41">
                Got a project in mind? Fill in the form or send us a{" "}
                <a href="mailto:hello@outcrowd.io" className="link-9">
                  <span>direct email.</span>
                </a>
              </div>
            </div>
          </div>
          <div className="form_contact_us">
            <div className="form-block w-form">
              <div id="zf_div_fmOqhA66MoVY-XJ2QMvIm2psc_oB2-bbGBn-4gYdAbw"></div>
            </div>
            <div className="html-embed-6 w-embed w-script">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                data-wf-page-id="652d043f8189094afee170e9"
                data-wf-element-id="d01ee1a6-e9e3-3145-509c-8a2397140fd7"
                onSubmit={handleSubmit}
              >
                <input
                  className="text-field w-input"
                  maxLength="256"
                  name="name"
                  data-name="Name"
                  placeholder="Your name"
                  type="text"
                  id="name"
                />
                <input
                  className="text-field-2 w-input"
                  maxLength="256"
                  name="email"
                  data-name="Email"
                  placeholder="Your email"
                  type="email"
                  id="email"
                  required=""
                />
                <div className="div-block-279">
                  <select
                    id="Budget"
                    name="Budget"
                    data-name="Budget"
                    required=""
                    className="select-field-2 w-select"
                  >
                    <option value="Budget not defined">
                      Budget not defined
                    </option>
                    <option value="2-5k">2-5k</option>
                    <option value="5-10k">5-10k</option>
                    <option value="10-20k">10-20k</option>
                    <option value="20-30k">20-30k</option>
                  </select>
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61386f983b8ef4e62ec3dd87_arrow.svg"
                    loading="lazy"
                    width="13"
                    alt=""
                    className="image-95"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  maxLength="5000"
                  id="Message"
                  name="Message"
                  data-name="Message"
                  className="textarea w-input"
                ></textarea>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="submit-button w-button"
                  value="Send"
                />

                {formStatus === "success" && (
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <div className="section-41">
      <div className="container">
        <div className="div-block-233">
          <div>
            <h2 className="heading-49">We're here</h2>
          </div>
          <div className="div-block-234">
            {/* Head Office */}
            <div className="div-block-235">
              <div className="div-block-477">
                <h3 className="heading-61">
                  <strong>Head office</strong>
                </h3>
              </div>
              <div className="div-block-668">
                <div className="text-block-42">16192 Coastal Highway,</div>
                <div className="text-block-42">Lewes, Delaware 19958</div>
                <div className="text-block-42">USA</div>
                <div className="text-block-42">
                  Phone:{' '}
                  <a
                    target="_blank"
                    href="tel:13025202395"
                    className="text-block-42"
                  >
                    +1 (302) 5202395
                  </a>
                </div>
              </div>
            </div>
            {/* Office */}
            <div className="div-block-235">
              <div className="div-block-477">
                <h3 className="heading-61">
                  <strong>Office</strong>
                </h3>
              </div>
              <div className="div-block-668">
                <div className="text-block-42">29V, Yaroslaviv Val Street,</div>
                <div className="text-block-42">Kyiv, 02000</div>
                <div className="text-block-42">Ukraine</div>
                <div className="text-block-42">
                  Phone:{' '}
                  <a href="tel:+380(63)3457183" className="text-block-42">
                    +380 (63) 345 71 83
                  </a>
                </div>
              </div>
            </div>
            {/* Partners */}
            <div className="div-block-235">
              <div className="div-block-281">
                <h3 className="heading-61">
                  <strong>Partners</strong>
                </h3>
              </div>
              <div className="div-block-668">
                <div className="text-block-42">New York - Andrew Mazok</div>
                <div className="text-block-42">Phone: +1 347 393 40 90</div>
              </div>
            </div>
            {/* Social */}
            <div className="div-block-235">
              <div className="div-block-282">
                <h3 className="heading-61">
                  <strong>Social </strong>
                </h3>
                <div className="div-block-280">
                  <a
                    href="https://dribbble.com/outcrowd"
                    target="_blank"
                    className="link-11"
                  >
                    Dribbble,
                  </a>
                  <a
                    href="https://www.instagram.com/outcrowdstudio/"
                    target="_blank"
                    className="link-10"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/outcrowdstudio"
                    target="_blank"
                    className="link-10 facebook"
                  >
                    Facebook,
                  </a>
                  <a
                    href="https://www.linkedin.com/company/outcrowd-network/"
                    target="_blank"
                    className="link-10 facebook linkedin"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/outcrowdstudio"
                    target="_blank"
                    className="link-10 facebook twitter"
                  >
                    Twitter,
                  </a>
                  <a
                    href="https://medium.com/outcrowd"
                    target="_blank"
                    className="link-10 facebook twitter medium"
                  >
                    Medium
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="section-47"></div>
    </div>
  );
};

export default Contactus;
