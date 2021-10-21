import logo from "./logo.svg";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar.js";
import { useEffect, useState } from "react";
import ImgMediaCard from "./components/ImgMediaCard.js";
import LoginPage from "./components/LoginPage.js";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function getMovieData() {
      if (mounted) {
        let response = await fetch("http://localhost:3001/movies");
        let json = await response.json();

        //do something with data
        //console.log("JSON Data: ", json)
        setMovieData(json);
      }
    }

    getMovieData();

    return function cleanup() {
      mounted = false;
    };
  }, []);

  //let movieData =

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <div>
            <SearchAppBar title="GMDB" />
            <Box
              sx={{
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                width: "100%",
              }}
            >
              <Grid container spacing={2}>
                {movieData.map((elem, idx) => (
                  <Grid item key={idx} sm={12} md={6} lg={3}>
                    {" "}
                    <ImgMediaCard movie={elem} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
