import React, { useEffect } from "react";
import axios from "axios";
import AnimalForm from "./AnimalForm";
import AnimalList from "./AnimalList";
import { useDispatch, useSelector } from "react-redux";
import {
  getListAnimalApi,
  setAnimalList,
  setLoading,
} from "../store/Animals/slice";
import Lottie from "react-lottie";
import animationData from "../Lotties/loading.json";

const ReduxThunk = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.animal);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  // useEffect(() => {
  //   dispatch(getListAnimalApi());
  // }, []);

  return (
    <div className="container">
      <AnimalList />
      {/* {isLoading ? (
        <Lottie options={defaultOptions} width={200} height={200} />
      ) : (
        <>
          <h1 className="mb-5">Animals List</h1>
          <AnimalForm />
          <AnimalList />
        </>
      )} */}
    </div>
  );
};

export default ReduxThunk;
