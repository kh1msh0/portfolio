import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, } from "react-bootstrap";
import { dataportfolio, meta, animations } from "../../content_option";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Tabs>
          <TabList>
            <Tab>
              <h1 className="display-4 mb-4"> Portfolio </h1>
            </Tab>
            <Tab>
              <h1 className="display-4 mb-4"> Animations </h1>
            </Tab>
            {/* <hr className="t_border my-4 ml-0 text-left" /> */}
          </TabList>

          <TabPanel>
            <div className="mb-5 po_items_ho">
              {dataportfolio.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.desctiption}</p>
                      <a href={data.link} target="_blank" rel="noreferrer">
                        VIEW PROJECT
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mb-5 po_items_ho">
              {animations.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <a href={data.href} target="_blank" rel="noreferrer">
                      <img src={data.gif} alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          </TabPanel>
        </Tabs>
      </Container>
    </HelmetProvider>
  );
};
