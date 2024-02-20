import React from 'react';

const OutcrowdStory = () => {
  return (
    <div data-w-id="61a877c5-ec0f-b2fb-d775-953784d1dcf5" className="section-17">
      <div className="div-block-302">
        <div className="div-block-303">
          <h3 className="heading-67">
            <strong>The Ongoing Story of Outcrowd</strong>
          </h3>
        </div>
        <div className="animation_pencil">
          <div className="left_pencil_block">
            <div className="content_pencil">
              <h4 data-w-id="0f9d331f-760e-1a95-d284-65770b93b5e5" className="heading-68 header_pencil_1" data-scroll data-scroll-speed="0.01">
                <strong className="bold-text-51">Setting a clear mission</strong>
              </h4>
              <h4 data-w-id="3e20c08b-a132-a301-de4f-c75597bdce72" className="heading-68 heading_pencil2" data-scroll data-scroll-speed="0.10">
                <strong>Gaining experience</strong>
              </h4>
              <h4 data-w-id="40bbd617-228f-e795-c359-2437dc399467" className="heading-68 heading_pencil_4" data-scroll data-scroll-speed="">
                The power of now
              </h4>
              <h4 data-w-id="6b29f1a9-1a18-26d7-321e-40b2b00df67d" className="heading-68 heading_pencil3">
                <strong className="bold-text-51">Overcoming pandemic challenges</strong>
              </h4>
            </div>
          </div>
          <div className="right_pencil_block">
            <div className="content_pencil_right">
              <div data-w-id="ee416d6c-2c48-db03-dee3-36ccccde33c7" className="text_pencil_1">
                We founded Outcrowd to bring together people who shared a common passion. Our goal has remained unchanged: to help businesses discover the true power of design.
              </div>
              <div data-w-id="56471d85-0365-8641-5bde-e5941d5ebf2a" className="text_pencil_2">
                We cut our teeth on building digital products for major brands like Red Bull.
              </div>
              <div data-w-id="e3181aa8-c4c8-45bf-c49f-755af9b0e55b" className="text_pencil_3">
                During the COVID pandemic, we adapted to challenges quickly. Not only that, but we also found ways to help our clients navigate the new environment and achieve great results.
              </div>
              <div data-w-id="06b14b65-240d-ebfc-1d16-3df2fdf7455e" className="text_pencil_4">
                We are committed to self-improvement above all else. Whatever the future may hold, we feel confident there will be a place for us in the twin worlds of design and business.
              </div>
            </div>
            <div className="div-block-306">
              <img src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611b9fdb38a9ac0b49eef682_Pencil-closed.png" loading="lazy" alt="" />
              <div className="div-block-307 _2018">
                <h4 className="heading-69 pos">2017</h4>
              </div>
              <div data-w-id="74dd3248-8487-3951-f383-32356ea0dbe9" className="div-block-307 _2019">
                <h4 className="heading-69 pos">2018</h4>
              </div>
              <div data-w-id="268efdf3-a8c0-c896-fb3b-272e34891eab" className="div-block-307 _2020_year">
                <h4 className="heading-69 pos">2020</h4>
              </div>
              <div data-w-id="297a5d96-45db-f526-de86-682c1ee387cc" className="div-block-307 _2020_year _2021_year">
                <h4 className="heading-69 pos">2021</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile_pencil_static">
        <div className="title_mobile_pencil">
          <h3 className="heading-74">Create your own center of attention header is here</h3>
        </div>
        <MobilePencilBlock year="2017" title="Setting a clear mission" description="We founded Outcrowd to bring together people who shared a common passion. Our goal has remained unchanged: to help businesses discover the true power of design." />
        <MobilePencilBlock year="2018" title="Gaining experience" description="We cut our teeth on building digital products for major brands like Red Bull." />
        <MobilePencilBlock year="2020" title="Overcoming pandemic challenges" description="During the COVID pandemic, we adapted to challenges quickly. Not only that, but we also found ways to help our clients navigate the new environment and achieve great results." />
        <MobilePencilBlock year="2021" title="The power of now" description="We are committed to self-improvement above all else. Whatever the future may hold, we feel confident there will be a place for us in the twin worlds of design and business." />
      </div>
    </div>
  );
};

const MobilePencilBlock = ({ year, title, description }) => {
  return (
    <div className="_2018_mob_block _2019_mob_content">
      <div className={`text-block-48 ${year === '2018' ? '_2018_gradient' : year === '2020' ? '_2020_gradient' : year === '2021' ? '_2021_gradient' : ''}`}>{year}</div>
      <div className={`div-block-476 ${year === '2017' ? 'line_2017' : year === '2018' ? '_2018_line' : year === '2020' ? '_2020_line' : year === '2021' ? '_2021_line' : ''}`}></div>
      <h4 className="heading-73">
        <strong>{title}</strong>
      </h4>
      <div className="text-block-49">{description}</div>
    </div>
  );
};

export default OutcrowdStory;
