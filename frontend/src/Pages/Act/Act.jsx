import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Axios from "axios";
import "./Act.css";
import { Container, Row, Col } from "reactstrap";

const Act = () => {
  const [state, setState] = useState({
    acts: [],
    act: []
  });
  useEffect(() => {
    Axios.get("http://localhost:5050/act").then(({ data }) => {
      setState({ ...state, acts: data });
    });
  }, [state.act]);
  return (
    <React.Fragment>
      <div className="act-container">
        <Navbar />
        <Container fluid className="act-content">
          <Row>
            <Col xs="12" lg="3" className="act-list">
              <p>Nos numéros</p>
              <ul>
                {state.acts.map((act, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => setState({ ...state, act: act })}
                    >
                      {act.title}
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col xs="12" lg="9" className="act-description">
              {state.act.title !== undefined ? (
                <Container fluid>
                  <h1>{state.act.title}</h1>
                  <Row>
                    <Col xs="12" lg="3">
                      <img
                        src={state.act.photo_url}
                        alt={state.act.title + "picture"}
                        className="act-img-desc"
                      />
                    </Col>
                    <Col xs="12" lg="9">
                      <p>{state.act.description}</p>
                    </Col>
                  </Row>
                  <Row className="act-artist">
                    <span>{state.act.artist_name}</span>
                    <img
                      src={state.act.artist_photo_url}
                      alt={"artist" + state.act.artist_name}
                      className="act-img-artist"
                    />
                  </Row>
                </Container>
              ) : null}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Act;
