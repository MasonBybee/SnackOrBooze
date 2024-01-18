import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import SubmitSnack from "./SubmitSnack";
import PageNotFound from "./PageNotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacks();
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home drinks={drinks} snacks={snacks} />}
        />
        <Route
          exact
          path="/snacks"
          element={<Menu type={"snacks"} items={snacks} title="Snacks" />}
        />
        <Route
          path="/snacks/:id"
          element={<Snack items={snacks} cantFind="/snacks" />}
        />
        <Route
          exact
          path="/drinks"
          element={<Menu type={"drinks"} items={drinks} title="Drinks" />}
        />
        <Route
          path="/drinks/:id"
          element={<Snack items={drinks} cantFind="/drinks" />}
        />
        <Route path="/submitSnack" element={<SubmitSnack />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
