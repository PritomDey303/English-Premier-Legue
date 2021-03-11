import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./Poster.css";
const Poster = (props) => {
  return (
    <>
      <Row>
        <Col
          className="poster"
          style={{
            backgroundImage: `url(${props.posterBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h1 className="poster-title">{props.title}</h1>

          <Image
            className="poster-title"
            src={[props.posterImg]}
            fluid
            alt=""
            style={{ width: "200px", height: "auto" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Poster;
