import React from "react";
import Accordion from "react-bootstrap/Accordion";
export const Faq = () => {
  return (
    <>
      <div className="faqcontainer faq">
        <h1 className="ps-3 heading-faq white_heading_icons ">
          <strong>
            FAQ<strong></strong>
          </strong>
        </h1>
        <Accordion defaultActiveKey="0" flush className="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How long does it take to get started?
            </Accordion.Header>
            <Accordion.Body>
              Our turnaround is lightning-fast. Just one week from signing off
              and we’re there with the kick-off meeting to get it rolling.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How long does it take to get started?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How long does it take to get started?
            </Accordion.Header>
            <Accordion.Body>
              It all starts with grabbing a cup of coffee, chilling with mates,
              and some quality time at the PlayStation (just kidding!). We
              always start a project with analysis, learning the requirements,
              and making estimates that will be shared in the price proposal.
              Then it’s off to signing off, kicking off, and getting your
              business to the next level with a pinch of our design magic.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How long does it take to get started?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              How long does it take to get started?
            </Accordion.Header>
            <Accordion.Body>
              It all starts with grabbing a cup of coffee, chilling with mates,
              and some quality time at the PlayStation (just kidding!). We
              always start a project with analysis, learning the requirements,
              and making estimates that will be shared in the price proposal.
              Then it’s off to signing off, kicking off, and getting your
              business to the next level with a pinch of our design magic.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              How long does it take to get started?
            </Accordion.Header>
            <Accordion.Body>
              It all starts with grabbing a cup of coffee, chilling with mates,
              and some quality time at the PlayStation (just kidding!). We
              always start a project with analysis, learning the requirements,
              and making estimates that will be shared in the price proposal.
              Then it’s off to signing off, kicking off, and getting your
              business to the next level with a pinch of our design magic.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              How long does it take to get started?
            </Accordion.Header>
            <Accordion.Body>
              It all starts with grabbing a cup of coffee, chilling with mates,
              and some quality time at the PlayStation (just kidding!). We
              always start a project with analysis, learning the requirements,
              and making estimates that will be shared in the price proposal.
              Then it’s off to signing off, kicking off, and getting your
              business to the next level with a pinch of our design magic.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
