import { useState, useEffect } from "react";
import api from "./api/axiosConfig";

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
  }, [])

  return <div>App</div>;
};

export default App;
