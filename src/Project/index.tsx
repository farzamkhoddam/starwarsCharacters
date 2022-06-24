import { useRef } from "react";
import styled, { css } from "styled-components/macro";
import { ProjectType } from "../interace";
import { arrival } from "../styles";
interface Props {
  project: ProjectType;
}
const Project: React.FC<Props> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const bounding = containerRef.current?.getBoundingClientRect();
  if (project.title === "Luke Skywalker")
    console.log(
      "farzam distance from top===",
      bounding && bounding?.bottom - window.innerHeight
    );

  // const bounding =
  return (
    <Container top={bounding?.bottom} id="container" ref={containerRef}>
      <ColoredWall color={project.color} />
      <Image src={project.url} alt={project.title} />
      <Title>{project.title}</Title>
      <Link>{project.color} light saber</Link>
    </Container>
  );
};
const Container = styled.div<{ top: number | undefined }>`
  width: 49%;
  filter: drop-shadow(2px 4px 6px black);
  border-radius: 8px;
  height: 25rem;
  overflow: hidden;
  margin-top: 2rem;
  position: relative;
  opacity: 0;
  ${({ top }) =>
    ((top && top - window.innerHeight <= 400) || top === undefined) &&
    css`
      animation: ${arrival} 0.6s ease;
      opacity: 1;
    `}
  @media(max-width:425px) {
    width: 70%;
  }
`;
const ColoredWall = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    width: 90%;
    height: 90%;
    ${({ color }) => color === "red" && `background-color:#EB212E;`}
    ${({ color }) => color === "green" && `background-color:#22BA1A;`}
    ${({ color }) => color === "blue" && `background-color:#2E67F8;`}
    border-radius: 10px;
    opacity: 0;
    z-index: 2;
    transition: all 0.4s ease;
  }
  ${Container}:hover & {
    :before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;

      opacity: 0.5;
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 100%;
  transition: all 0.4s ease;
  ${Container}:hover & {
    transform: scale(1.3);
    filter: blur(2px);
  }
`;
const Title = styled.h3`
  font-size: 30px;
  line-height: 45px;
  position: absolute;
  left: -17rem;
  top: 0;
  z-index: -1;
  padding: 0.5rem 1rem;
  transition: all 0.6s ease;
  border-radius: 0 1rem 1rem 0;
  background-color: #312a2aab;
  color: white;
  z-index: 3;
  filter: drop-shadow(2px 4px 6px black);
  ${Container}:hover & {
    left: 0;
  }
`;
const Link = styled.h4`
  background: transparent;
  font-size: 24px;
  text-transform: capitalize;
  line-height: 36px;
  position: absolute;
  right: -17rem;
  bottom: 0;
  border-radius: 1rem 0 0 1rem;
  background-color: #312a2aab;
  color: white;
  padding: 0.5rem 1rem;
  filter: drop-shadow(2px 4px 6px black);
  transition: all 0.6s ease;
  z-index: 3;
  ${Container}:hover & {
    right: 0;
  }
`;
export default Project;
