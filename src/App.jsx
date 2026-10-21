import { useState, useEffect } from "react";
import api from "./api/axiosConfig";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";

const App = () => {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
