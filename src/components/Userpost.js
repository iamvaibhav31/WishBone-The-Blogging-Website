import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Published from "./Published";
import Draft from "./Draft";

const Userpost = (props) => {
  return (
    <div className="mt-5 mb-5">
      <Tabs
        defaultActiveKey="Published"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Published" title="Published">
          <Published published = {props.publishedposts} />
        </Tab>
        <Tab eventKey="Draft" title="Draft">
          <Draft draft = {props.draftposts} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Userpost;
