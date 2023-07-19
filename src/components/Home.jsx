import React, { useEffect } from "react";
import { styled } from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore/lite";

const Home = () => {
  const moviesCollection = collection(db, "movies");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(moviesCollection);
        querySnapshot.docs.map((doc) => {
          console.log(doc.id, doc.data());
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
