import React, { useEffect } from "react";
import { styled } from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore/lite";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

const Home = () => {
  // use useDispatch inorder to send the data to the movies (initial-State) in movieSlice
  const dispatch = useDispatch();
  const moviesCollection = collection(db, "movies");

  // you can fetch data using this from Firestore..
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(moviesCollection);
        // after querySnapshot we have to map the it for data and also use async and await because it will return a promise
        // moviesData create an object where our data and its document id is objected.
        // then we will dispatch to send data to the setMovies which is going to store the data in redux
        let moviesData = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        dispatch(setMovies(moviesData));
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
