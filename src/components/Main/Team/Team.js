import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Team.css";
const Team = (props) => {
  const arrow = <FontAwesomeIcon icon={faArrowRight} />;
  const { strTeam, strTeamBadge, strSport, idTeam } = props.club;
  return (
    <Col sm={12} md={3} className="my-3">
      <Card
        className="mx-auto p-2 pt-4 text-center text-light rounded shadow team"
        style={{ width: "15rem" }}
      >
        <Card.Img
          variant="top"
          src={strTeamBadge}
          style={{ width: "70%" }}
          className="mx-auto shadow"
        />
        <Card.Body>
          <Card.Title>
            <h4>{strTeam}</h4>
          </Card.Title>
          <Card.Text>
            <small>Sports Type: {strSport}</small>
          </Card.Text>
          <Link to={`teamdetails/${idTeam}`}>
            <Button variant="outline-light" className="px-5">
              <h6>Explore {arrow}</h6>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Team;
