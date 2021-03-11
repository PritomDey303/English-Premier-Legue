import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Main.css";
import Poster from "./Poster/Poster";
import Team from "./Team/Team";
const Main = () => {
  const [Clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setClubs(data.teams));
  }, []);
  const posterTitle = "English Premier Legue";
  const posterBanner = "https://wallpapercave.com/wp/wp1830649.jpg";
  return (
    <Container fluid className="main">
      <Poster
        title={posterTitle}
        posterBg={posterBanner}
        posterImg={""}
        imgAlt={""}
      ></Poster>
      <Container>
        <Row className="mt-4">
          {Clubs.map((Club) => (
            <Team key={Club.idTeam} club={Club}></Team>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Main;
