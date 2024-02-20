import React from 'react';

const Clients = () => {
  return (
    <div id="clients_about" className="clients">
      <div className="container">
        <div className="div-block-285">
          <h3 className="heading-62">
            <strong>We like our clients</strong>
          </h3>
        </div>
        <div className="w-layout-grid grid-7">
          <ClientItem
            title="Toyota"
            description="Working with one of the biggest automobile brands was a pure pleasure. The branding project with promo materials was dedicated to the start of sales of the new Land Cruiser 300. And this was just the beginning."
          />
          <ClientItem
            title="RedBull"
            description="We worked with their in-house team to bring new fresh ideas into one of the company’s digital products. It was extremely fun, interesting and the team got their wings, permanently."
          />
          <ClientItem
            title="McDonald’s"
            description="With McDonald’s marketing team we were focused on the creation of beautifully illustrated marketing assets for their digital game and make everyone happier. We loved it so much."
          />
          <ClientItem
            title="Wanchain"
            description="The decentralized financial world is growing rapidly and it will change everything. We liked the challenges Wanchain has in their mind and what they want to achieve. Everything in our chords."
          />
          <ClientItem
            title="Short.io"
            description="We work closely with the CEO and marketing teams at Short.io on core design initiatives, including a new Short.io website. Now we have become long-term partners for their ongoing projects."
          />
          <ClientItem
            title="Podcorn"
            description="We helped a Podcorn startup, our long-term partner, to reimagine their core website 2 times. Their marketplace helps connect podcasters to brands for native sponsorships. Now they have become a part of Entercom."
          />
          <ClientItem
            title="Stark Bank"
            description="We are working with co-founders and their teams for several years on multiple major initiatives to help reshape their brand and product. Revealing the essence of the first banking API in Brazil is exciting."
          />
          <ClientItem
            title="Satsback"
            description="Bring the evolution of cashback and loyalty rewards using Bitcoin is ambitious. We came to help with the design and development of Satsback’s key initiatives across their product ecosystem."
          />
          <ClientItem
            title="Bonsai"
            description="For an ambitious Bonsai, a SaaS product created to automate freelance work, we've designed a minimalist and trendy website that helps freelancers with accounting, client management, and more."
          />
        </div>
      </div>
    </div>
  );
};

const ClientItem = ({ title, description }) => {
  return (
    <div className="div-block-327">
      <h4 className="h6_black">
        <strong className="bold-text-42">{title}</strong>
      </h4>
      <div className="text-block-12">{description}</div>
    </div>
  );
};

export default Clients;
