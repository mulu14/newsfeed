import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import AppNav from "./components/nav";
import News from "./components/news";
import Newsfeed from "./services/parser";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    Newsfeed()
      .then((data) => {
        setNews(data.slice(0, 10));
      })
      .catch((err) => {
        console.log("Problem getting data: " + err.message);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6" md="8">
          <article>
            <h2>Personuppgiftspolicy</h2>
            <p className="cookie-notification">
              Vi använder cookies för att förbättra funktionaliteten på våra
              sajter, för att kunna rikta relevant innehåll och annonser till
              dig och för att vi ska kunna säkerställa att tjänsterna fungerar
              som de ska.Läs mer i vår <a href="#">cookiepolicy</a>.
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="8">
          <AppNav />
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="8">
          {news.map((item, index) => (
            <News
              key={index}
              index={index}
              index={index}
              newslink={item.newslink}
              publishDate={item.publishDate}
              title={item.title}
              domain={item.domain}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
