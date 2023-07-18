import React from "react";
import { styled } from "styled-components";

const Details = () => {
  return (
    <Container>
      <Background>
        <img src="https://wallpapercave.com/wp/wp8528396.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img
          src="https://www.freepnglogos.com/uploads/avengers-png-logo/the-avengers-png-logo-1.png"
          alt=""
        />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TralierButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Tralier</span>
        </TralierButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>

      <Subtitle>2018 - 7m + Family, Fantasy, Kids, Animation</Subtitle>
      <Description>
        Nick Fury is compelled to launch the Avengers Initiative when Loki poses
        a threat to planet Earth. His squad of superheroes put their minds
        together to accomplish the task.
      </Description>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 40vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
`;

const PlayButton = styled.button`
  display: flex;
  font-size: 15px;
  align-items: center;
  border-radius: 4px;
  height: 46px;
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  cursor: pointer;
  letter-spacing: 1.42px;
  background: rgba(249, 249, 249);

  &:hover {
    background: rgba(198, 198, 198);
  }
`;
const TralierButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgba(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  display: flex;

  width: 44px;
  height: 44px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 18px;
  margin-top: 16px;
  color: rgba(249, 249, 249);
  max-width: 760px;
`;
