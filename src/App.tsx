import React, { useEffect } from "react";
import "./App.css";
import styled, { keyframes } from "styled-components/macro";
import { ProjectType } from "./interace";
import darthVader from "./images/darthVader.jpeg";
import obiWan from ".//images/obiWan.jpeg";
import lukeSkywalker from "./images/lukeSkywalker.jpg";
import KyloRen from "./images/KyloRen.png";
import darkRey from "./images/darkRey.webp";
import anakinSkyWalker from "./images/anakinSkyWalker.jpg";
import yoda from "./images/yoda.jpg";
import QuiGonJinn from "./images/QuiGonJinn.jpg";
import rey from "./images/rey.jpeg";
import Project from "./Project";

function App() {
  const projects: ProjectType[] = [
    {
      url: darthVader,
      title: "Darth Vader",
      color: "red",
    },
    {
      url: obiWan,
      title: "Obi Wan",
      color: "blue",
    },
    {
      url: lukeSkywalker,
      title: "Luke Skywalker",
      color: "green",
    },
    {
      url: rey,
      title: "Rey",
      color: "blue",
    },
    {
      url: yoda,
      title: "Yoda",
      color: "green",
    },
    {
      url: KyloRen,
      title: "Kylo Ren",
      color: "red",
    },
    {
      url: darkRey,
      title: "Dark Rey",
      color: "red",
    },
    {
      url: anakinSkyWalker,
      title: "Anakin",
      color: "blue",
    },
    {
      url: QuiGonJinn,
      title: "Qui-Gon Jinn",
      color: "green",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => console.log("inja"));
    return () => {
      window.removeEventListener("scroll", () => console.log("inja"));
    };
  }, []);
  return (
    <div className="App">
      <Container>
        <TextContainer
          href="https://en.wikipedia.org/wiki/List_of_Star_Wars_characters"
          target="_blank"
        >
          <Title>Star Wars Characters</Title>
          <LightSaber></LightSaber>
        </TextContainer>
        {/* <Link className="App-link">Hover Me</Link> */}
        <MyProjects>
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </MyProjects>
      </Container>
    </div>
  );
}
const lightSaberLight = keyframes`
0%{opacity:1;
   width:0;
    right:20%;
  }
50%{
  opacity:0;
   width:0;
   right:20%;
}
100%{
  opacity:1;
   width:80%;
   right:20%;
}
`;
const lightSaberHandle = keyframes`
0%{
  transform: translateY(-48px);
}
100%{
      opacity: 1;
}
`;
const appear = keyframes`
100%{
      opacity: 1;
    transform: translateY(3rem);
}
`;
const Container = styled.div`
  background-color: #3a3e47;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const TextContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: fit-content;
`;
const Title = styled.h1`
  color: white;
  opacity: 0;
  transition: all 0.3s 0.2s ease-in;
  margin: 0;
  animation: ${appear} 1.3s forwards;
  @media (max-width: 425px) {
    font-size: 134%;
  }
`;
const LightSaber = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transform: translateY(4rem);
  width: 100%;
  &:before {
    content: "";
    opacity: 0;
    position: absolute;
    right: 42%;
    width: 5rem;
    height: 4px;
    background-color: white;
    animation: ${lightSaberLight} 0.9s forwards;
    background-color: #2e67f8;
    box-shadow: 1px 0px 9px 1px #2e67f8;
  }

  &:after {
    content: "";
    position: absolute;
    border-radius: 0 0 5px 0;
    right: 0;
    height: 6px;
    background-color: black;
    border-color: transparent;
    width: 20%;
    animation: ${lightSaberHandle} 0.6s forwards;
  }
  @media (max-width: 425px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const MyProjects = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 425px) {
    justify-content: center;
  }
`;
export default App;
