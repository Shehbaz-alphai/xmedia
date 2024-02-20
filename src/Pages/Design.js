import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from '../assets/groovyWalk.json';
import Footer from "../Components/Footer";
const Design = () => {
  const divStyle = {
    WebkitTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
    MozTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
    msTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
    transform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
  };
  return (
    <div>
      <div className="second_menu">
        <div className="div-block">
          <div>
            <a href="#nav_id_hero" className="link">
              Overview
            </a>
            <a href="#cases_id" className="link-2">
              Cases
            </a>
            <a href="#Advantages_design" className="link-2">
              Advantages
            </a>
          </div>
          <div className="div-block-691">
            <a href="/contact-us" className="button_buy w-button">
              Contact
            </a>
            {/* <div className="call opacity">
              <div className="w-embed">
                <link
                  href="https://assets.calendly.com/assets/external/widget.css"
                  rel="stylesheet"
                />
                <a
                  className="link-2 set"
                  href=""
                  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/outcrowd-digital-agency/introduction'});return false;"
                >
                  Book a call
                </a>
              </div>
              <div className="html-embed-9 w-embed w-script">
                <script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  type="text/javascript"
                  async
                ></script>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="hero_section hide">
        <div className="container">
          <div className="hero_title hero_design_page_title">
            <div className="div-block-260">
              <h1 className="h1_hero">
                Design <span>for people</span>
              </h1>
            </div>
            <div className="div-block-24">
              <div className="text-block-3">
                Our creative design solutions are for people, not for machines.
                Yet made by people and machines.
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_block">
          <div className="first-line">
            <div
              data-w-id="193d5996-3ba2-2992-6bc0-e668ff1488e1"
              className="div-block-108" data-scroll  data-scroll-speed='4'
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c10dbc685a10b004089c_dashboard_4.png"
                loading="lazy"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c10dbc685a10b004089c_dashboard_4-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c10dbc685a10b004089c_dashboard_4.png 758w"
                sizes="100vw"
                alt=""
                className="image_dashboard"
              />
            </div>
            <div className="div-block-109" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c18921844081ee64d424_dashboard_5.png"
                loading="lazy"
                sizes="100vw"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c18921844081ee64d424_dashboard_5-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c18921844081ee64d424_dashboard_5.png 878w"
                alt=""
              />
            </div>
            <div className="div-block-103" data-scroll  data-scroll-speed='4'> 
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bc36bf9eee81ddd2e590_mob_1.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="div-block-104" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bcc8be2dae176a59d809_dashboard_1.png"
                loading="lazy"
                sizes="100vw"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bcc8be2dae176a59d809_dashboard_1-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bcc8be2dae176a59d809_dashboard_1-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bcc8be2dae176a59d809_dashboard_1.png 1436w"
                alt=""
                className="image-48"
              />
              <div className="div-block-107" data-scroll  data-scroll-speed='4'>
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2.png"
                  loading="lazy"
                  sizes="100vw"
                  srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2.png 1400w"
                  alt=""
                />
              </div>
            </div>
            <div className="div-block-105" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bdf21c9e2762ee0d3caa_dashboard_2.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="div-block-106" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2be8b7abeec712de5d622_dashboard_3.png"
                loading="lazy"
                alt=""
              />
              <div className="div-block-91" data-scroll  data-scroll-speed='4'>
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff9fe23f9a81a0ac2fac_watch_calendar.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            data-w-id="b70e3804-0de2-cbfc-799d-e223ec6a4af5"
            className="second_line"
          >
            <div
              data-w-id="acb73fe5-eb49-4200-f664-91b84503a046"
              className="div-block-110" data-scroll  data-scroll-speed='4'
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c3e6bc4e1d2f5a6ef2da_dashboard_6.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="div-block-111" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c4c342eda338e2ad7ede_dashboard_7.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div
              data-w-id="61b02930-d059-9943-e634-08b68ca377f3"
              className="div-block-112" data-scroll  data-scroll-speed='4'
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c584313ff9ef15da8c60_mob_2.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div
              data-w-id="11e70967-f533-f4dd-0c24-12edd7982466"
              className="div-block-113" data-scroll  data-scroll-speed='4'
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c5e9b47132961a820e9c_dashboard_8.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          data-w-id="aacdf8ea-267b-a6a5-a519-9b8502e601e0"
          className="wrapper_block wrapper_1440"
        >
          <div className="first-line first_line_1440">
            <div className="div-block-108 _1_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c10dbc685a10b004089c_dashboard_4.png"
                loading="lazy"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c10dbc685a10b004089c_dashboard_4-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c10dbc685a10b004089c_dashboard_4.png 758w"
                sizes="100vw"
                alt=""
                className="image_dashboard"
              />
            </div>
            <div className="div-block-109 _2_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c18921844081ee64d424_dashboard_5.png"
                loading="lazy"
                sizes="100vw"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c18921844081ee64d424_dashboard_5-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c18921844081ee64d424_dashboard_5.png 878w"
                alt=""
              />
            </div>
            <div className="div-block-103 _3_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bc36bf9eee81ddd2e590_mob_1.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="div-block-104 _4_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bcc8be2dae176a59d809_dashboard_1.png"
                loading="lazy"
                sizes="100vw"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bcc8be2dae176a59d809_dashboard_1-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bcc8be2dae176a59d809_dashboard_1-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bcc8be2dae176a59d809_dashboard_1.png 1436w"
                alt=""
                className="image-48"
              />
              <div className="div-block-107 _5_image_1440" data-scroll  data-scroll-speed='4'>
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2.png"
                  loading="lazy"
                  sizes="100vw"
                  srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff3b3a00c3011d900c81_watch_2.png 1400w"
                  alt=""
                />
              </div>
            </div>
            <div className="div-block-105 _6_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2bdf21c9e2762ee0d3caa_dashboard_2.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="div-block-106 _7_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2be8b7abeec712de5d622_dashboard_3.png"
                loading="lazy"
                data-w-id="aacdf8ea-267b-a6a5-a519-9b8502e601ef"
                alt=""
              />
              <div className="div-block-91 _8_image_1440" data-scroll  data-scroll-speed='4'>
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6127ff9fe23f9a81a0ac2fac_watch_calendar.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            data-w-id="aacdf8ea-267b-a6a5-a519-9b8502e601f2"
            className="second_line secondline_1440"
          >
            <div className="div-block-110 _9_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c3e6bc4e1d2f5a6ef2da_dashboard_6.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="div-block-111 _10_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c4c342eda338e2ad7ede_dashboard_7.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="div-block-112 _11_image_1440" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c584313ff9ef15da8c60_mob_2.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="div-block-113 _12_image" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f2c5e9b47132961a820e9c_dashboard_8.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="small_responsive_design_hero" data-scroll  data-scroll-speed='4'>
          <img
            src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f061a95a26a05cdaac246_mob_des.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f061a95a26a05cdaac246_mob_des-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f061a95a26a05cdaac246_mob_des-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f061a95a26a05cdaac246_mob_des-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f061a95a26a05cdaac246_mob_des-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/613f061a95a26a05cdaac246_mob_des.jpg 2560w"
            alt=""
            className="device_image"
          />
        </div>
        <div className="div-block-403" data-scroll  data-scroll-speed='4'>
          <img
            src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61387908ab1e413697ac59c7_small_image_responsive_3.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61387908ab1e413697ac59c7_small_image_responsive_3-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61387908ab1e413697ac59c7_small_image_responsive_3-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61387908ab1e413697ac59c7_small_image_responsive_3-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61387908ab1e413697ac59c7_small_image_responsive_3-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61387908ab1e413697ac59c7_small_image_responsive_3-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61387908ab1e413697ac59c7_small_image_responsive_3-p-3200.jpeg 3200w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61387908ab1e413697ac59c7_small_image_responsive_3.jpg 5606w"
            alt=""
            className="image-96"
          />
        </div>
      </div> */}
      <div className="hero_section_2">
        <div className="container">
          <div className="hero_title hero_design_page_title">
            <div className="div-block-260">
              <h1 className="h1_hero">
                Design <span>for people</span>
              </h1>
            </div>
            <div className="div-block-24">
              <div className="text-block-3">
                Our creative design solutions are for people, not for machines.
                Yet made by people and machines.
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="928d2735-f399-2f7d-762e-2f626ff94396"
          className="devices_sc"
        >
          <div className="devices_frame">
            <div className="device_block_1" >
              <img 
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437a973d27d277b55301e01_Tablet_01_1.png"
                loading="lazy"
                sizes="(max-width: 479px) 60vw, (max-width: 767px) 390.0000305175781px, (max-width: 991px) 52vw, (max-width: 1279px) 515.998291015625px, (max-width: 1439px) 647.9948120117188px, (max-width: 1919px) 851.99658203125px, 863.9931030273438px"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437a973d27d277b55301e01_Tablet_01_1-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437a973d27d277b55301e01_Tablet_01_1-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437a973d27d277b55301e01_Tablet_01_1.png 941w"
                alt=""
                className="device_image"
              />
            </div>
            <div className="device_block_2" data-scroll  data-scroll-speed='4'>
              <img  
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437a94aa15c9a02344692c1_Tablet_02.png"
                loading="lazy"
                sizes="(max-width: 479px) 46vw, (max-width: 767px) 298.9930725097656px, (max-width: 991px) 40vw, (max-width: 1279px) 395.5989685058594px, (max-width: 1439px) 496.7969055175781px, (max-width: 1919px) 653.1944580078125px, 662.3958740234375px"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437a94aa15c9a02344692c1_Tablet_02-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437a94aa15c9a02344692c1_Tablet_02-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437a94aa15c9a02344692c1_Tablet_02.png 991w"
                alt=""
                className="device_image"
              />
            </div>
            <div className="device_block_3" data-scroll  data-scroll-speed='4'>
              <img 
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437acb73c70c9dc46b2b9e4_Tablet_03.png"
                loading="lazy"
                sizes="(max-width: 479px) 38vw, (max-width: 767px) 246.9965362548828px, (max-width: 991px) 33vw, (max-width: 1279px) 326.7969055175781px, (max-width: 1439px) 410.3993225097656px, (max-width: 1919px) 539.592041015625px, 547.1962280273438px"
                // srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437acb73c70c9dc46b2b9e4_Tablet_03-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437acb73c70c9dc46b2b9e4_Tablet_03.png 663w"
                alt=""
                className="device_image"
              />
            </div>
            <div className="device_block_4" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437c8506cf4fe7794f4f5b1_Tablet_05.png"
                loading="lazy"
                sizes="(max-width: 479px) 30vw, (max-width: 767px) 195.00001525878906px, (max-width: 991px) 26vw, (max-width: 1279px) 257.99481201171875px, (max-width: 1439px) 323.9930725097656px, (max-width: 1919px) 425.998291015625px, 431.9965515136719px"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437c8506cf4fe7794f4f5b1_Tablet_05-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437c8506cf4fe7794f4f5b1_Tablet_05.png 642w"
                alt=""
                className="device_image"
              />
            </div>
            <div className="device_block_5" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437ca84b7920104cebbd42e_Tablet_04.png"
                loading="lazy"
                sizes="(max-width: 479px) 43vw, (max-width: 767px) 279.4965515136719px, (max-width: 991px) 37vw, (max-width: 1279px) 369.79168701171875px, (max-width: 1439px) 464.39239501953125px, (max-width: 1919px) 610.5989990234375px, 619.1927490234375px"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437ca84b7920104cebbd42e_Tablet_04-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437ca84b7920104cebbd42e_Tablet_04-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437ca84b7920104cebbd42e_Tablet_04.png 990w"
                alt=""
                className="device_image"
              />
            </div>
            <div className="device_block_6" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437cf18ac291da30bd9ef74_Phone_01.png"
                loading="lazy"
                alt=""
                className="device_image"
              />
            </div>
            <div className="device_block_7" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d1ce92e9686b86188c4a_Watch_01.png"
                loading="lazy"
                alt=""
                className="device_image"
              />
            </div>
            <div className="device_block_8" data-scroll  data-scroll-speed='4'> 
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d1ce35119a7f1526e073_Watch_02.png"
                loading="lazy"
                alt=""
                className="device_image"
              />
            </div>
            <div className="device_block_down_1" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d4333fbb4710a8eee1fc_Tablet_06.png"
                loading="lazy"
                sizes="(max-width: 479px) 47vw, (max-width: 767px) 305.49481201171875px, (max-width: 991px) 41vw, (max-width: 1279px) 404.1927185058594px, (max-width: 1439px) 507.59552001953125px, (max-width: 1919px) 667.3958740234375px, 676.7969360351562px"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d4333fbb4710a8eee1fc_Tablet_06-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d4333fbb4710a8eee1fc_Tablet_06-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d4333fbb4710a8eee1fc_Tablet_06.png 1020w"
                alt=""
                className="device_image af"
              />
            </div>
            <div className="device_block_down_2" data-scroll    data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d6aa35119a631c272b5e_Tablet_07.png"
                loading="lazy"
                sizes="(max-width: 479px) 47vw, (max-width: 767px) 305.49481201171875px, (max-width: 991px) 41vw, (max-width: 1279px) 404.1927185058594px, (max-width: 1439px) 507.59552001953125px, (max-width: 1919px) 667.3958740234375px, 676.7969360351562px"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d6aa35119a631c272b5e_Tablet_07-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d6aa35119a631c272b5e_Tablet_07-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d6aa35119a631c272b5e_Tablet_07.png 982w"
                alt=""
                className="device_image af" 
              />
            </div>
            <div className="device_block_down_3" data-scroll  data-scroll-speed='4' >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d74a55dcf669da5cfcc0_Phone_02.png"
                loading="lazy"
                alt=""
                className="device_image af"
              />
            </div>
            <div className="device_block_down_4" data-scroll  data-scroll-speed='4'>
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d7d893e6d423c4fc8f2b_Tablet_08.png"
                loading="lazy"
                sizes="(max-width: 479px) 47vw, (max-width: 767px) 305.49481201171875px, (max-width: 991px) 41vw, (max-width: 1279px) 404.1927185058594px, (max-width: 1439px) 507.59552001953125px, (max-width: 1919px) 667.3958740234375px, 676.7969360351562px"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d7d893e6d423c4fc8f2b_Tablet_08-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d7d893e6d423c4fc8f2b_Tablet_08-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6437d7d893e6d423c4fc8f2b_Tablet_08.png 964w"
                alt=""
                className="device_image af"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div
        data-w-id="407df700-de64-c316-a218-675e525645fa"
        className="section-20"
      >
        <div className="div-block-203">
          <div className="div-block-369"></div>
          <div className="div-block-204">
            <div className="div-block-205">
              <h1
                data-w-id="55d87ffe-5d3b-7672-2556-b0d12a23ff8e"
                className="heading-41"
              >
                <strong>
                  Build for Outcrowd 
                  <br />
                </strong>
                <span className="text-span-19">
                  <strong>And love design</strong>
                </span>
              </h1>
              <h1
                data-w-id="f97d21e3-ba2d-a264-7869-f960d6b54a53"
                className="heading-41"
              >
                <strong>
                  Build for Outcrowd 
                  <br />
                </strong>
                <span className="text-span-19">
                  <strong>And love design</strong>
                </span>
              </h1>
              <h1
                data-w-id="24236861-f93b-a388-be51-409ba81c69a1"
                className="heading-41"
              >
                <strong>
                  Build for Outcrowd 
                  <br />
                </strong>
                <span className="text-span-19">
                  <strong>And love design</strong>
                </span>
              </h1>
              <h1
                data-w-id="6edf9a35-08cb-de27-97d1-d2213aa46126"
                className="heading-41"
              >
                <strong>
                  Build for Outcrowd 
                  <br />
                </strong>
                <span className="text-span-19">
                  <strong>And love design</strong>
                </span>
              </h1>
            </div>
          </div>
          <div className="div-block-206" data-scroll    data-scroll-speed='4'>
            <img
              src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e6b0ba9e40b5bb4e6b6e42_ill%20(1).png"
              loading="lazy"
              sizes="100vw"
              srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e6b0ba9e40b5bb4e6b6e42_ill%20(1)-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e6b0ba9e40b5bb4e6b6e42_ill%20(1)-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e6b0ba9e40b5bb4e6b6e42_ill%20(1)-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e6b0ba9e40b5bb4e6b6e42_ill%20(1).png 3360w"
              alt=""
              className="image-155"
            />
          </div>
          <div className="div-block-99"></div>
          <div className="div-block-207">
            <h1
              data-w-id="fc0a2f72-3e1c-d220-bcd2-623b64f88ea7"
              className="heading-54"
            >
              <strong className="bold-text-17">Design for business</strong>
            </h1>
            <div className="div-block-28 new_animation_text design_paragraph">
              <div className="text-block-4">
                No business has ever succeeded with poor design solutions. To
                us, design is the nucleus that holds business together. We’re
                always willing to help you build it.
              </div>
            </div>
          </div>
          <div className="div-block-29">
            <h1 className="h1_second_text">
              <strong className="bold-text-11">
                Ideal business and design synergy
              </strong>
            </h1>
            <h1 className="heading-56">Outcrowd create unique set</h1>
          </div>
          <div className="lottie_bl" >
            <div
              data-is-ix2-target="1"
              className="lottie-animation-6"
              data-w-id="a997727d-ed68-44d4-2944-6796a2663ae6"
              data-animation-type="lottie"
              data-src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61165dc2db793e3aeb56fcf0_data.json"
              data-loop="0"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-default-duration="2.8"
              data-duration="0"
            ></div>
          </div>
        </div>
        <div
          data-w-id="184d3329-5bbb-e749-60c4-f757f57058dd"
          className="div-block-210"
        >
          <div className="div-block-261">
            <h1 className="heading-41 heading_desogn_1">
              Creative design attracts people.
            </h1>
            <h1 className="heading-41 heading_design_2">
              Smart UX makes them stay.
            </h1>
            <h1 className="heading-41 heading_design_3">
              At Outcrowd we deliver both.
            </h1>
            <h1 className="heading-41 heading_design_4">
              For you, for people, for business.
              <br />
            </h1>
          </div>
        </div>
      </div> */}
      <Lottie animationData={groovyWalkAnimation}    />;
      <div
        data-w-id="20301cc7-6ab1-592d-bff1-220c79476e9e"
        className="black_block_pixels"
      >
        <div className="container">
          <div className="icons_block">
            <div className="json_pixel">
              <h1 className="heading-18 heading_19">
                <strong className="bold-text-27">What’s our secret?</strong>
              </h1>
              <h1 className="heading-18 heading_blur">
                <strong>What’s our secret?</strong>
              </h1>
            </div>
            <div className="w-layout-grid grid-3">
              <div
                id="w-node-_668afa3d-1317-f822-b000-e0c9bd3d9346-fee170eb"
                className="div-block-254"
              >
                <div className="div-block-358">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61287c0c3eea8bc40cea762f_1_Future-secured%20design.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h1 className="h6">
                  <strong className="bold-text-28">Timeless design</strong>
                </h1>
                <div className="text-block-5">
                  Run your digital product for years without worries about being
                  outdated. Our design is ahead of time.
                </div>
              </div>
              <div
                id="w-node-_668afa3d-1317-f822-b000-e0c9bd3d934d-fee170eb"
                className="div-block-255"
              >
                <div className="div-block-359">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61287c1cf67ece664a1e517a_2_Business-oriented%20solutions%20.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h1 className="h6">
                  <strong className="bold-text-40">
                    Business-oriented solutions
                  </strong>
                </h1>
                <div className="text-block-5">
                  We help our clients succeed concentrating our efforts on
                  business goals and striving to achieve them no matter what.
                </div>
              </div>
              <div
                id="w-node-_668afa3d-1317-f822-b000-e0c9bd3d9354-fee170eb"
                className="div-block-256"
              >
                <div className="div-block-360">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129f774866ecb05db1dbd04_3_black_ic.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h1 className="h6">
                  <strong className="bold-text-39">Deep research</strong>
                </h1>
                <div className="text-block-5">
                  We do our own research into your business area and market.
                  Once we know all there is to know, we can give you exactly
                  what your business needs.
                </div>
              </div>
              <div
                id="w-node-_668afa3d-1317-f822-b000-e0c9bd3d935b-fee170eb"
                className="div-block-257"
              >
                <div className="div-block-361">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61287c36fee31c68b07cba3e_4_Reliable%20partner.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h1 className="h6">
                  <strong className="bold-text-36">Reliable partner</strong>
                </h1>
                <div className="text-block-5">
                  Our relationship with you is 100% transparent and built on
                  trust. We believe friendliness is key to any successful
                  long-term partnership.
                </div>
              </div>
              <div
                id="w-node-_668afa3d-1317-f822-b000-e0c9bd3d9362-fee170eb"
                className="div-block-258"
              >
                <div className="div-block-362">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61287c459f849d79845bf79e_5_Breaking%20design%20patterns.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h1 className="h6">
                  <strong className="bold-text-37">
                    Out-of-the-box design
                  </strong>
                </h1>
                <div className="text-block-5">
                  What we offer are custom-built solutions. We love
                  experimenting and breaking rules! No boring old templates
                  here.
                </div>
              </div>
              <div
                id="w-node-_668afa3d-1317-f822-b000-e0c9bd3d9369-fee170eb"
                className="div-block-259"
              >
                <div className="div-block-363">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61287c52fddd408ede7caea3_6_Value%20increase.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h1 className="h6">
                  <strong className="bold-text-38">Increasing value</strong>
                </h1>
                <div className="text-block-5">
                  Do you want to increase the value of your product? How about
                  more customer loyalty and engagement? We know you do, so we
                  create design strategies to do just that!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="06159347-8ced-a7a3-7200-8c427b1db9d1"
        className="section-36"
      >
        <div className="div-block-184">
          <div className="devices_block">
            <div className="div-block-185">
              <div className="title_devices_design">
                <h1 className="heading-50">Design for Any Device</h1>
              </div>
              <div className="devices">
                <div className="div-block-273">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61165e0f8aa2d4992372fb54_tablet.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 647.2222290039062px, (max-width: 991px) 86vw, 800.0000610351562px"
                    srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61165e0f8aa2d4992372fb54_tablet-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61165e0f8aa2d4992372fb54_tablet-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61165e0f8aa2d4992372fb54_tablet-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61165e0f8aa2d4992372fb54_tablet.png 1756w"
                    alt=""
                    className="image-21"
                  />
                  <div className="div-block-370">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612c8ae60ca5aeea41827b8f_one-pic.png"
                      loading="lazy"
                      sizes="100vw"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612c8ae60ca5aeea41827b8f_one-pic-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612c8ae60ca5aeea41827b8f_one-pic-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612c8ae60ca5aeea41827b8f_one-pic-p-1080.png 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612c8ae60ca5aeea41827b8f_one-pic-p-1600.png 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612c8ae60ca5aeea41827b8f_one-pic-p-2000.png 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/612c8ae60ca5aeea41827b8f_one-pic.png 2097w"
                      alt=""
                      className="image-72"
                    />
                  </div>
                </div>
                <div className="div-block-274" data-scroll  data-scroll-speed='2'>
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61165e226534b393590cfca1_phone.png"
                    loading="lazy"
                    alt=""
                    className="image-22"
                  />
                </div>
                <div className="div-block-275" data-scroll  data-scroll-speed='-2'>
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61165e4f1569db192c137a17_ckock.png"
                    loading="lazy"
                    alt=""
                    className="image-23"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="8a4c4501-1838-7678-d27e-30bd4b1310cb"
        className="flower_section"
      >
        <div className="div-block-186">
          <div className="div-block-187">
            <div className="oval_1" >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61161520828f086e7200a158_oval_6.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="oval2" >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611614f0086c3e24378be50e_oval_3.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="oval3" >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611614c51f14201af9505152_oval_1.svg"
                loading="lazy"
                alt=""
                className="image-63"
              />
            </div>
            <div className="oval4">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611614e00e5bc7020b91d538_oval_2.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="oval5" >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61161516f1a7be416fe4811b_oval_5.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="oval6" >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611614feda18aabd76e10b85_oval_4.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div id="process_design" className="div-block-188">
            <h1 className="heading-37">Working Processes</h1>
            <div className="div-block-270">
              <div
                data-w-id="aa7b86f5-9b99-5bfa-1996-fe5b4c8f4c86"
                className="immersion"
              >
                <h1 className="heading-60" data-scroll data-scroll-speed='2'> 
                  <strong className="bold-text-41">Immersion</strong>
                </h1>
                <div className="div-block-271">
                  <div className="text-block-40">
                    Going deep into client’s business to understand its core
                    sense, goals and challenges to build partnership.
                  </div>
                </div>
                <div id="process_id_working" className="process_id"></div>
              </div>
              <div
                data-w-id="f3216017-5437-9941-2ae2-5ae2f2562934"
                className="immersion ideation"
              >
                <h1 className="heading_ideation">
                  <strong className="bold-text-41 bold_ideation">
                    Ideation
                  </strong>
                </h1>
                <div className="div-block-271">
                  <div className="text-block-40">
                    Creating first concepts of a future product and shaping up
                    the direction.
                  </div>
                </div>
              </div>
              <div
                data-w-id="14666d86-2d6f-40ae-89fe-867c2906ae2b"
                className="immersion ideation wireframing"
              >
                <h1 className="heading_ideation">
                  <strong className="bold-text-41 bold_ideation bold_wireframing">
                    Wireframing
                  </strong>
                </h1>
                <div className="div-block-271">
                  <div className="text-block-40">
                    Building the foundation, structure and core elements of a
                    digital product.
                  </div>
                </div>
              </div>
              <div
                data-w-id="bb762b71-defc-cfc5-9b4d-c6e354eeab61"
                className="immersion ideation wireframing visual-design"
              >
                <h1 className="heading_visual">
                  <strong className="bold-text-41 bold_ideation bold_wireframing bold_visual">
                    Visual Design
                  </strong>
                </h1>
                <div className="div-block-271">
                  <div className="text-block-40">
                    Adding colors, illustrations and shapes to create visual
                    language that resonates with customers.
                  </div>
                </div>
              </div>
              <div className="immersion ideation wireframing handoff-support">
                <h1 className="heading_handoff">
                  <strong className="bold-text-41 bold_ideation bold_wireframing bold">
                    Handoff &amp; Support 
                  </strong>
                </h1>
                <div className="div-block-271">
                  <div className="text-block-40">
                    Sending all finalised deliverables and providing further
                    support.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            data-w-id="ce0a4902-0a35-6a43-edd5-b8f9fc062f3c"
            className="div-block-272"
          ></div>
          <div
            data-w-id="67ebfe84-49a3-d143-a95c-6faa7d366ec2"
            className="div-block-272 bg_ideation"
          ></div>
          <div
            data-w-id="2e8cefe2-effa-119a-11d6-96dcb6dbabc7"
            className="div-block-272 bg_wireframing"
          ></div>
          <div
            data-w-id="7ddc08c8-1774-029d-bee8-2c43c5144dc2"
            className="div-block-272 bg_visual"
          ></div>
          <div
            data-w-id="c5fcf9fd-726f-7d05-df43-2e0d1834d8af"
            className="div-block-272 bg_handoff"
          ></div> */}
        </div>
      </div>
      <div
        data-w-id="56118c11-8066-3b6f-d92c-e6ef0ee830b6"
        className="flower_section flower_1440"
      >
        <div className="div-block-186 block_flower_1440">
          <div className="div-block-187 flower_animation_1440">
            <div className="oval_1">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61161520828f086e7200a158_oval_6.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="oval2">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611614f0086c3e24378be50e_oval_3.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="oval3">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611614c51f14201af9505152_oval_1.svg"
                loading="lazy"
                alt=""
                className="image-63"
              />
            </div>
            <div className="oval4">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611614e00e5bc7020b91d538_oval_2.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="oval5">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61161516f1a7be416fe4811b_oval_5.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="oval6">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611614feda18aabd76e10b85_oval_4.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div
            id="process_design"
            className="div-block-188 content_flower_1440"
          >
            <h1 className="heading-37 heading_flower_1440">
              <br /> Working Process
            </h1>
            <div className="div-block-270 animation_popup_1440">
              <div className="immersion immersion_1440">
                <div>
                  <h1 className="heading-60">
                    <strong className="bold-text-41">Immersion</strong>
                  </h1>
                  <div className="div-block-271">
                    <div className="text-block-40">
                      Going deep into client’s business to understand its core
                      sense, goals and challenges to build partnership.
                    </div>
                  </div>
                </div>
                <div id="process_id_working" className="process_id"></div>
              </div>
              <div className="immersion ideation ideation_1440">
                <div >
                  <h1 className="heading_ideation">
                    <strong className="bold-text-41 bold_ideation">
                      Ideation
                    </strong>
                  </h1>
                  <div className="div-block-271">
                    <div className="text-block-40">
                      Creating first concepts of a future product and shaping up
                      the direction.
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="heading_ideation">
                    <strong className="bold-text-41 bold_ideation">
                      Ideation
                    </strong>
                  </h1>
                  <div className="div-block-271">
                    <div className="text-block-40">
                      Creating first concepts of a future product and shaping up
                      the direction.
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="heading_ideation">
                    <strong className="bold-text-41 bold_ideation">
                      Ideation
                    </strong>
                  </h1>
                  <div className="div-block-271">
                    <div className="text-block-40">
                      Creating first concepts of a future product and shaping up
                      the direction.
                    </div>
                  </div>
                </div>
              </div>
              <div className="immersion ideation wireframing wireframes_1440">
                <div>
                  <h1 className="heading_ideation">
                    <strong className="bold-text-41 bold_ideation bold_wireframing">
                      Wireframing
                    </strong>
                  </h1>
                  <div className="div-block-271">
                    <div className="text-block-40">
                      Building the foundation, structure and core elements of a
                      digital product.
                    </div>
                  </div>
                </div>
              </div>
              <div className="immersion ideation wireframing visual-design visual_1440">
                <div>
                  <h1 className="heading_visual">
                    <strong className="bold-text-41 bold_ideation bold_wireframing bold_visual">
                      Visual Design
                    </strong>
                  </h1>
                  <div className="div-block-271">
                    <div className="text-block-40">
                      Adding colors, illustrations and shapes to create visual
                      language that resonates with customers.
                    </div>
                  </div>
                </div>
              </div>
              <div className="immersion ideation wireframing handoff-support handoff_1440">
                <div>
                  <h1 className="heading_handoff">
                    <strong className="bold-text-41 bold_ideation bold_wireframing bold">
                      Handoff &amp; Support 
                    </strong>
                  </h1>
                  <div className="div-block-271">
                    <div id="process_working" className="text-block-40">
                      Sending all finalised deliverables and providing further
                      support.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-272"></div>
          <div className="div-block-272 bg_ideation"></div>
          <div className="div-block-272 bg_wireframing"></div>
          <div className="div-block-272 bg_visual"></div>
          <div className="div-block-272 bg_handoff"></div>
        </div>
      </div>
      <div
        data-w-id="74481a97-a893-acb7-8e9c-58bb6358749e"
        className="mobile_animation_scroll"
      >
        <div className="div-block-189">
          <div className="div-block-190">
            <div className="left_content_design">
              <div className="div-block-194">
                <div
                  data-w-id="80eb03e8-47d4-9857-c9a0-f0ab8de61db8"
                  className="content_design_1"
                >
                  <h1 className="heading-38 head_40">
                    <strong className="bold-text-26">Immersion</strong>
                  </h1>
                  <div className="div-block-193">
                    <div className="text-block-30">
                      Going deep into client&#x27;s business to understand its
                      core sense, goals andchallenges to build partnership.
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="0a20d8b3-6376-4d11-c558-7efa224eeb0c"
                  className="content_design_1"
                >
                  <h1 className="heading-38 head_40 head_41">
                    <strong>Ideation</strong>
                  </h1>
                  <div className="div-block-193">
                    <div className="text-block-30">
                      Creating first concepts of a future product and shaping up
                      the direction.
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d"
                  className="content_design_1"
                >
                  <h1 className="heading-38 head_40 head_42">
                    <strong className="bold-text-25">Wireframing</strong>
                  </h1>
                  <div className="div-block-193">
                    <div className="text-block-30">
                      Building the foundation, structure and core elements of a
                      digital product.
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="28c7b586-549c-d332-8404-a5917c248b02"
                  className="content_design_1"
                >
                  <h1 className="heading-38 head_40 head_43">
                    <strong className="bold-text-25">Visual design</strong>
                  </h1>
                  <div className="div-block-193">
                    <div className="text-block-30">
                      Adding colors, illustrations and shapes to create visual
                      language andresonate with customers
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="bcee003a-fb98-238d-c7bc-9c48df1b2a6b"
                  className="content_design_1"
                >
                  <h1 className="heading-38 head_40 head_44">
                    <strong className="bold-text-25">
                      Handoff &amp; Support
                    </strong>
                  </h1>
                  <div className="div-block-193">
                    <div className="text-block-30">
                      Sending all finalized deliverables and providing further
                      support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_mobile_design">
              <div className="div-block-191">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f966fe74ffa7f0a6318f65_Apple%20iPhone%2012%20Pro%20Silver.png"
                  loading="lazy"
                  alt=""
                  className="image-62"
                />
              </div>
              <div className="div-block-192">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60fe828ce941fc685d961394_Apple%20iPhone%2012%20Pro%20Silver_2.png"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_section_image">
          <div className="first_mobile_content">
            <div className="div-block-253">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60fe828ce941fc685d961394_Apple%20iPhone%2012%20Pro%20Silver_2.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="title_mob_design">
              <h1 className="heading-53">
                <strong>Immersion</strong>
              </h1>
            </div>
            <div className="subtitle_mob_responsive">
              <div className="text-block-39">
                Going deep into client&#x27;s business to understand its core
                sense, goals andchallenges to build partnership.
              </div>
            </div>
          </div>
          <div className="first_mobile_content second_mob_design_responsive">
            <div className="div-block-253">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f966fe74ffa7f0a6318f65_Apple%20iPhone%2012%20Pro%20Silver.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="title_mob_design">
              <h1 className="heading-53">
                <strong>Ideation</strong>
              </h1>
            </div>
            <div className="subtitle_mob_responsive">
              <div className="text-block-39">
                Creating first concepts of a future product and shaping up the
                direction.
              </div>
            </div>
          </div>
          <div className="first_mobile_content second_mob_design_responsive">
            <div className="div-block-253">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60fe828ce941fc685d961394_Apple%20iPhone%2012%20Pro%20Silver_2.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="title_mob_design">
              <h1 className="heading-53">
                <strong>Wireframing</strong>
              </h1>
            </div>
            <div className="subtitle_mob_responsive">
              <div className="text-block-39">
                Building the foundation, structure and core elements of a
                digital product.
              </div>
            </div>
          </div>
          <div className="first_mobile_content second_mob_design_responsive">
            <div className="div-block-253">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60f966fe74ffa7f0a6318f65_Apple%20iPhone%2012%20Pro%20Silver.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="title_mob_design">
              <h1 className="heading-53">
                <strong>Visual design</strong>
              </h1>
            </div>
            <div className="subtitle_mob_responsive">
              <div className="text-block-39">
                Adding colors, illustrations and shapes to create visual
                language andresonate with customers.
              </div>
            </div>
          </div>
          <div className="first_mobile_content second_mob_design_responsive">
            <div className="div-block-253">
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60fe828ce941fc685d961394_Apple%20iPhone%2012%20Pro%20Silver_2.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="title_mob_design">
              <h1 className="heading-53">
                <strong>Handoff &amp; Support</strong>
              </h1>
            </div>
            <div className="subtitle_mob_responsive">
              <div className="text-block-39">
                Sending all finalized deliverables and providing further
                support.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="4822b924-f66b-7a86-6b17-f0ee2c7c4184"
        className="works-and-cases"
      >
        <div className="div-block-244">
          <div className="container">
            <div className="div-block-32">
              <h1 className="heading-9 h1_cases">Selected projects </h1>
            </div>
          </div>
        </div>
        <div className="div-block-200">
          <div className="gallery_new">
            <div className="gallery_row">
              <div className="marquee-horizontal marquee_design_page">
                <div className="marquee-horizontal-css w-embed"></div>
                <div className="track-horizontal">
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60ed83ee7b52d9341096433c_Group%202.png"
                      loading="lazy"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60ed83ee7b52d9341096433c_Group%202.png"
                      loading="lazy"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60ed83ee7b52d9341096433c_Group%202.png"
                      loading="lazy"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f9c58fac2dbefbe0f569_img_4.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60ed83ee7b52d9341096433c_Group%202.png"
                      loading="lazy"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f5c534b9b5b637682e13_im_2.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f6298fac2dcea6e0e7f3_img_3.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                </div>
              </div>
              <div className="marquee-horizontal-2 marque_design_page">
                <div className="marquee-horizontal-alt-css w-embed"></div>
                <div className="track-horizontal-alt">
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f8710a9494799b893b33_img_8.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7962443231afc8183ea_img_6.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fab089ba55605388f205_img_5.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114f7ba3c97ab6e52e3a826_img_7.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                </div>
              </div>
              <div className="marquee-horizontal marquee_design_page">
                <div className="marquee-horizontal-css w-embed"></div>
                <div className="track-horizontal">
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fbae14032af08ee7886f_11.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb7212c8d70c07fe7117_img_9.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb8897d7ce3255abf56d_img_10.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fb9cfa744a76b27a5f1c_Img_11.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                </div>
              </div>
              <div className="marquee-horizontal-2 marque_design_page">
                <div className="marquee-horizontal-alt-css w-embed"></div>
                <div className="track-horizontal-alt">
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff2a12c8d7bc2dfe834d_img_15.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fec6af542c7443790993_img_12.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114fedc89ba5576be890a20_img_13.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6114ff0638d131c4d6374abd_img_14.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                </div>
              </div>
              <div className="marquee-horizontal marquee_design_page">
                <div className="marquee-horizontal-css w-embed"></div>
                <div className="track-horizontal">
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500b5b615baea0aab5d60_img_23.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/61150078c2ac98fc2e465b2a_img_20.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6115008df1c289a4026f0eea_img_21.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <div className="div-block-64">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 200.00001525878906px, (max-width: 767px) 52vw, (max-width: 991px) 39vw, 360.0000305175781px"
                      srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22-p-500.png 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22-p-800.png 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611500a1b615baf5afab5af8_img_22.png 1080w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cases_design">
        <div id="cases_id" className="div-block-245">
          <div className="container">
            <div className="div-block-32 cases">
              <h1 className="heading-9 h1_cases">
                <strong>Some cases we are proud of </strong>
              </h1>
              <div className="text-block-6">
                Check out these cases to see how we work and what we achieve. A
                picture speaks a thousand words!
              </div>
            </div>
          </div>
        </div>
        <div className="cases_block cases_design_bl">
          <div className="div-block-35 toyota_banner nexus_banner">
            <a
              href="https://www.behance.net/gallery/112751903/Nexus-Web-Site-Mobile-App"
              target="_blank"
              className="div-block-569 toyota_link nexus_kink_banner w-inline-block"
            ></a>
            <div className="text-description">
              <div>
                <div className="div-block-565">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/624aa2e9fff7d475f4e4319a_Logo_Nexus.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-36">
                  <div className="text-block-7 text_banner_toyota">
                    Imagine a digital business card - it’s not in the future.
                    Nexus is real and made to simplify lives by gathering all
                    social media and other links in one app. We’ve been there to
                    make a website, mobile app and promotion materials.
                  </div>
                </div>
                <div className="div-block-405">
                  <a
                    href="https://www.behance.net/gallery/112751903/Nexus-Web-Site-Mobile-App"
                    target="_blank"
                    className="link-4 link_nexus"
                  >
                    Learn more
                  </a>
                  <div className="div-block-570">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62441a135643863bbc99af5f_arrow_2.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-35 toyota_banner my_ai_banner">
            <a
              href="https://www.behance.net/gallery/125258605/SLIT-NFT-market"
              target="_blank"
              className="div-block-569 toyota_link nexus_kink_banner w-inline-block"
            ></a>
            <div className="text-description">
              <div>
                <div className="div-block-565">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6251300bfc7cae298da4d305_logo_slit.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-36">
                  <div className="text-block-7 text_banner_toyota my_ai_text_banner">
                    We were lucky to work with Slit - a startup aiming to create
                    a blockchain art gallery. Our creatives went through several
                    stages of ideation and concepting before we found an
                    adorable way to represent this business.{" "}
                  </div>
                </div>
                <div className="div-block-405">
                  <a
                    href="https://www.behance.net/gallery/125258605/SLIT-NFT-market"
                    target="_blank"
                    className="link-4"
                  >
                    Learn more
                  </a>
                  <div className="div-block-570">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6110d66cf87abc2d5380cd8e_arrow_link.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-35 toyota_banner my_ai_banner podcorn_banner">
            <a
              href="https://podcorn.com/"
              target="_blank"
              className="div-block-569 toyota_link nexus_kink_banner w-inline-block"
            ></a>
            <div className="text-description">
              <div>
                <div className="div-block-565">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/624aa7d50a6ac21347258652_Podcorn_logo.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-36">
                  <div className="text-block-7 text_banner_toyota">
                    A brilliant and smooth experience with Podcorn - a
                    marketplace that connects podcasters to brands for native
                    sponsorships that has been recently acquired by Entercom.
                    From ideation to motion design, all in-house.
                  </div>
                </div>
                <div className="div-block-405">
                  <a
                    href="https://podcorn.com/"
                    target="_blank"
                    className="link-4 link_nexus"
                  >
                    Learn more
                  </a>
                  <div className="div-block-570">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62441a135643863bbc99af5f_arrow_2.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-35 toyota_banner my_ai_banner bonsai_banner">
            <a
              href="https://www.hellobonsai.com/"
              target="_blank"
              className="div-block-569 toyota_link nexus_kink_banner w-inline-block"
            ></a>
            <div className="text-description">
              <div>
                <div className="div-block-565">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/624aa8ed127e85ae2906f75c_logo_bonsai.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-36">
                  <div className="text-block-7 text_banner_toyota">
                    For an ambitious Bonsai, a SaaS product created to automate
                    freelance work, we&#x27;ve tailored a minimalist and trendy
                    website that accelerates freelancers&#x27; work with
                    accounting, client management, and more.
                  </div>
                </div>
                <div className="div-block-405">
                  <a
                    href="https://www.hellobonsai.com/"
                    target="_blank"
                    className="link-4 link_nexus"
                  >
                    Learn more
                  </a>
                  <div className="div-block-570">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/62441a135643863bbc99af5f_arrow_2.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-35 toyota_banner my_ai_banner netgain_banner">
            <a
              href="https://netgain.tech/"
              target="_blank"
              className="div-block-569 toyota_link nexus_kink_banner w-inline-block"
            ></a>
            <div className="text-description">
              <div>
                <div className="div-block-565">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/624aac77e596d71cfc1447a0_Netgain_svg.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="div-block-36">
                  <div className="text-block-7 text_banner_toyota text_banner_netgain">
                    Netgain trusted us to rebrand their whole huge website from
                    scratch. The company helps accountants automate their
                    processes and workflows in NetSuite so they can do their
                    work more efficiently. The reviews on the new website have
                    been outstanding.
                  </div>
                </div>
                <div className="div-block-405">
                  <a
                    href="https://netgain.tech/"
                    target="_blank"
                    className="link-4"
                  >
                    Learn more
                  </a>
                  <div className="div-block-570">
                    <img
                      src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6110d66cf87abc2d5380cd8e_arrow_link.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cases_mobile_branding">
          <div className="podcorn_case">
            <a
              href="https://podcorn.com/"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139febdb32e3a44c8914c1f_podcorn.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 831.1111450195312px, (max-width: 1279px) 85vw, 100vw"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139febdb32e3a44c8914c1f_podcorn-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139febdb32e3a44c8914c1f_podcorn-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139febdb32e3a44c8914c1f_podcorn-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139febdb32e3a44c8914c1f_podcorn-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139febdb32e3a44c8914c1f_podcorn-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139febdb32e3a44c8914c1f_podcorn.jpg 3069w"
                alt=""
              />
            </a>
            <div className="div-block-404">
              <div className="left_content_case_brand">
                <h1 className="heading_design_case">
                  Podcorn <span className="text_case_grey">UI/UX redesign</span>
                </h1>
              </div>
              <div className="right_button_content">
                <a
                  href="https://podcorn.com/"
                  target="_blank"
                  className="button-7 w-button"
                >
                  View case
                </a>
              </div>
            </div>
          </div>
          <div className="bonsai_case">
            <a
              href="https://www.hellobonsai.com/"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff42051e8513c9ae6bd8_bonsai.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 831.1111450195312px, (max-width: 1279px) 85vw, 100vw"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff42051e8513c9ae6bd8_bonsai-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff42051e8513c9ae6bd8_bonsai-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff42051e8513c9ae6bd8_bonsai-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff42051e8513c9ae6bd8_bonsai-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff42051e8513c9ae6bd8_bonsai-p-2600.jpeg 2600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff42051e8513c9ae6bd8_bonsai.jpg 3069w"
                alt=""
              />
            </a>
            <div className="div-block-404">
              <div className="left_content_case_brand">
                <h1 className="heading_design_case">
                  Bonsai{" "}
                  <span className="text_case_grey">
                    Website design
                    <br />
                  </span>
                </h1>
              </div>
              <div className="right_button_content">
                <a
                  href="https://www.hellobonsai.com/"
                  target="_blank"
                  className="button-7 w-button"
                >
                  View case
                </a>
              </div>
            </div>
          </div>
          <div className="nexus_case">
            <a
              href="https://thenexusapp.com/"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff81943b20a22d3963b4_nexus.jpg"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 831.1111450195312px, (max-width: 1279px) 85vw, 100vw"
                srcset="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff81943b20a22d3963b4_nexus-p-500.jpeg 500w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff81943b20a22d3963b4_nexus-p-800.jpeg 800w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff81943b20a22d3963b4_nexus-p-1080.jpeg 1080w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff81943b20a22d3963b4_nexus-p-1600.jpeg 1600w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff81943b20a22d3963b4_nexus-p-2000.jpeg 2000w, https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6139ff81943b20a22d3963b4_nexus.jpg 3069w"
                alt=""
              />
            </a>
            <div className="div-block-404">
              <div className="left_content_case_brand">
                <h1 className="heading_design_case">
                  Nexus{" "}
                  <span className="text_case_grey">
                    Mobile &amp; web design
                  </span>
                </h1>
              </div>
              <div className="right_button_content">
                <a
                  href="https://thenexusapp.com/"
                  target="_blank"
                  className="button-7 w-button"
                >
                  View case
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Advantages_design" className="section-16">
        <div className="container">
          <div className="div-block-32">
            <h1 className="heading-9 white_heading_icons">
              <strong>
                Why us?<strong></strong>
              </strong>
            </h1>
          </div>
          <div className="w-layout-grid grid-4">
            <div className="block_icons">
              <div className="div-block-365">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6128dbb63e71b3956edda80e_1.svg"
                  loading="lazy"
                  alt=""
                  className="icon_user"
                />
              </div>
              <h1 className="h6 h6_black">
                <strong className="bold-text-30">
                  Business-centered approach
                </strong>
              </h1>
              <div className="text-block-5 text_block_black">
                Everything we do is geared toward your strategic goals.
                Essentially, our designs are an effective way to make your
                business successful.
              </div>
            </div>
            <div className="block_icons">
              <div className="div-block-365">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6129f79992e3bf196b2e4f0b_2.2.svg"
                  loading="lazy"
                  alt=""
                  className="icon_user"
                />
              </div>
              <h1 className="h6 h6_black">
                <strong className="bold-text-31">Strong marketing tools</strong>
              </h1>
              <div className="text-block-5 text_block_black">
                Marketing and design are inextricably linked. We know just how
                to make them complement each other.
              </div>
            </div>
            <div className="block_icons">
              <div className="div-block-365">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6128dbd2cd2b913312a85d25_3.svg"
                  loading="lazy"
                  alt=""
                  className="icon_user"
                />
              </div>
              <h1 className="h6 h6_black">
                <strong className="bold-text-32">Close communication</strong>
              </h1>
              <div className="text-block-5 text_block_black">
                We have found that keeping in touch with our clients accounts
                for 60% of a given project’s success.
              </div>
            </div>
            <div className="block_icons">
              <div className="div-block-365">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6128df257f5ba8e3240385b5_4.4.svg"
                  loading="lazy"
                  alt=""
                  className="icon_user"
                />
              </div>
              <h1 className="h6 h6_black">
                <strong className="bold-text-33">Meeting the deadlines</strong>
              </h1>
              <div className="text-block-5 text_block_black">
                We hate falling behind on a project just as much as our clients.
                That’s why we never do it.
                <br />
              </div>
            </div>
            <div className="block_icons">
              <div className="div-block-365">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6128df309c24d821e0ca715e_5.5.svg"
                  loading="lazy"
                  alt=""
                  className="icon_user"
                />
              </div>
              <h1 className="h6 h6_black">
                <strong className="bold-text-34">Future-proof results</strong>
              </h1>
              <div className="text-block-5 text_block_black">
                Fads are fine, but some things are timeless. We make every
                effort to stay on the cutting edge of design.
              </div>
            </div>
            <div className="block_icons">
              <div className="div-block-365">
                <img
                  src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6128dbfa3dfdd4b2142bf73e_6.svg"
                  loading="lazy"
                  alt=""
                  className="icon_user"
                />
              </div>
              <h1 className="h6 h6_black">
                <strong className="bold-text-35">Exceeding Expectations</strong>
              </h1>
              <div className="text-block-5 text_block_black">
                You know why we really care about your success? Because it
                motivates us like nothing else! So it’s a win-win situation.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq">
        <div className="container">
          <h1 className="heading-10">FAQ</h1>
          <div id="faq-row-1" className="faq-group-row">
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="6f2a1078-05a7-098a-6ff8-df78516de831"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  How long does it take to get started?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 1}} className="faq-answer-p">
                    Our turnaround is lightning-fast. Just one week from signing
                    off and we’re there with the kick-off meeting to get it
                    rolling.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="67b94f70-bc8a-de7c-eb7a-2646cd63db48"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  What is your typical working process?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 1 }} className="faq-answer-p">
                    It all starts with grabbing a cup of coffee, chilling with
                    mates, and some quality time at the PlayStation (just
                    kidding!). We always start a project with analysis, learning
                    the requirements, and making estimates that will be shared
                    in the price proposal. Then it’s off to signing off, kicking
                    off, and getting your business to the next level with a
                    pinch of our design magic.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="d9daf74c-a096-149a-6f23-af557087b1cd"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  Do you work on a fixed-price basis or time and material?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 1}} className="faq-answer-p">
                    Flexibility is the key of success in this crazy world, so we
                    try to suggest an appropriate solution for each specific
                    case we deal with. The more clear and detailed the
                    requirements are, the more accurate will our estimates be.
                    This is the closest we get to the fixed-price model.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="a2f51e66-8f89-81d6-999b-ce587d87cbf1"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  How do you usually start new collaborations?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 1 }} className="faq-answer-p">
                    Each new engagement starts with an introduction call and
                    filling out the design/branding brief. If you have a cool
                    project in mind, feel free to get in touch at{" "}
                    <a href="mailto:hello@outcrowd.io" className="link-12">
                      hello@outcrowd.io
                    </a>
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="14a480f6-19b5-1306-7c79-63312df037d9"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  Do you guys work with big companies only? We’re an early-stage
                  startup.
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 1 }} className="faq-answer-p">
                    We’re all for building a borderless world, so we are open to
                    working with any project we come across. By the way, we do
                    believe in startups, and one of those we helped develop from
                    scratch has been sold to{" "}
                    <a href="https://entercom.com/" className="link-13">
                      https://entercom.com/
                    </a>
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="56814cac-4409-0d9b-1763-7c9ca1350543"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  How long it will take to get an estimate from you?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 1}} className="faq-answer-p">
                    We hate to keep you waiting. Setting up a team, making
                    preliminary research and analysis, and getting back to you
                    with the contract will take up to 24 hours from the moment
                    we learn what’s needed. Efficiency is one of Outcrowd’s key
                    values.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="9a8df3bb-ce9a-58dc-7f61-faea7dc2f62d"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  Do you have a minimum engagement?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 1 }} className="faq-answer-p">
                    We set no entry thresholds for people who want to work with
                    us. But we still believe that a product that needs to be
                    designed can’t be made within a couple of days. After all,
                    we need some time to research, analyze and come up with a
                    strategy. So we’ve set a minimum project duration as 30
                    hours and we’re waiting for you!
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="f568fd9b-d527-f10c-f089-381c63487375"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  What’s the average project duration?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 1 }} className="faq-answer-p">
                    Our team works full-time on every project, so the overall
                    duration will highly depend on the initial estimate. On
                    average, our projects last from 2 weeks to 5 months.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="1a8e98d1-e90c-9a9a-9b45-63f6389b545e"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  Can we start the design without wireframes?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 0 }} className="faq-answer-p">
                    Wireframes help to build UX without distractions. The
                    wireframe is an essential part of the design process and we
                    would not recommend eliminating it. Having everything
                    polished at the wireframing stage, we can avoid many
                    amendments and revisions at the design stage, which saves
                    both time and money.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="46332410-ef0a-813e-0832-095779414ce4"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  What templates does Outcrowd use to create design?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 0 }} className="faq-answer-p">
                    We don’t use pre-built templates or kits because there’s
                    just no soul in them. We’re committed to building fully
                    customized and product-based solutions that will meet the
                    expectations of the target users. Each pixel and line is
                    designed with love and passion by our creative minds.
                  </p>
                </div>
              </nav>
            </div>
            <div
              data-hover="false"
              data-delay="0"
              data-w-id="1b5f71f4-3662-79c4-d5aa-e226a4e85753"
              className="faq-dropdown w-dropdown"
            >
              <div className="dropdown-toggle w-dropdown-toggle">
                <div className="faq-question-label">
                  Where should I start with my business if I have an idea?
                </div>
                <div style={divStyle} className="plus-faq">
                  <img
                    src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/60e8374141795779c66108b2_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq-arrow"
                  />
                </div>
              </div>
              <nav
                style={{ height: "0px" }}
                className="drop-list w-dropdown-list"
              >
                <div className="faq-answear-drop">
                  <p style={{ opacity: 0 }} className="faq-answer-p">
                    Hey, you’ve come to the right place! Please get in touch and
                    we’ll help you with the ideation, design, and development.
                    Full cycle on us, no hassle for you. Easy, right?
                  </p>
                </div>
              </nav>
            </div>
            <div className="text-set w-embed"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Design;
