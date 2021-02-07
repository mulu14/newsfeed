import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import Newsfeed from "./services/parser";
import "./App.css";
import AppNav from "./components/nav";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {}, []);

  return (
    <Container>
      <Row>
        <Col xs="8">
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
        <Col xs="8">
          <AppNav />
        </Col>
      </Row>
      <Row>
        <Col xs="8"></Col>
      </Row>
    </Container>
  );
}

export default App;
