import {
  faFlag,
  faFutbol,
  faMapMarkerAlt,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import female from "../../photo/female.png";
import male from "../../photo/male.png";
import Poster from "../Main/Poster/Poster";
import "./TeamDetails.css";

const TeamDetails = () => {
  const { teamId } = useParams();
  const [Team, setTeam] = useState({});

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    )
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [teamId]);

  const {
    strTeam,
    strGender,
    strSport,
    strDescriptionEN,
    strCountry,
    intFormedYear,
    strTeamBadge,
  } = Team;

  let img;
  if (strGender === "Male") {
    img = male;
  } else {
    img = female;
  }

  const facebook = <FontAwesomeIcon icon={["fab", "facebook-f"]} />;
  const youtube = <FontAwesomeIcon icon={["fab", "youtube"]} />;
  const twitter = <FontAwesomeIcon icon={["fab", "twitter"]} />;
  const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const flag = <FontAwesomeIcon icon={faFlag} />;
  const football = <FontAwesomeIcon icon={faFutbol} />;
  const gender = <FontAwesomeIcon icon={faMars} />;

  return (
    <div className="bg-dark">
      <Poster posterImg={strTeamBadge} title={""} imgAlt={strTeam}></Poster>
      <Container className="py-4">
        <Row>
          <Col
            className="py-3 text-light px-5 teamDetails rounded-border"
            style={{ backgroundColor: "#c4001d" }}
          >
            <Row>
              <Col md={7} className="mt-4 mb-3 ml-4">
                <h1 style={{ fontSize: "60px" }}>{strTeam}</h1>
                <br />
                <h4>
                  {mapMarker} Founded: {intFormedYear}
                </h4>

                <h4>
                  {flag} Country: {strCountry}
                </h4>
                <h4>
                  {football} Sport Type: {strSport}
                </h4>
                <h4>
                  {gender} Gender:{strGender}
                </h4>
              </Col>
              <Col>
                <Image src={img} rounded fluid className="my-4 mx-auto" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-light text-left">{strDescriptionEN}</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <a href="https://www.twitter.com">
              <span className="icons bg-primary">{twitter}</span>
            </a>
            <a href="https://www.facebook.com">
              <span className="icons ">{facebook}</span>
            </a>
            <a href="https://www.youtube.com">
              <span className="icons bg-danger">{youtube}</span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamDetails;
