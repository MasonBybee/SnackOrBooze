import React from "react";
import { Container, Button } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import "../src/SubmitSnack.css";

function SubmitSnack() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    SnackOrBoozeApi.submitSnacks(
      document.querySelector("#type").value,
      document.querySelector("#name").value,
      document.querySelector("#description").value,
      document.querySelector("#recipe").value,
      document.querySelector("#serve").value
    );
  }
  return (
    <Container>
      <h1 className=" my-5 text-center">Sumbit a Snack or Drink!</h1>
      <div className=" formContainer">
        <form
          className="submitSnackForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}
        >
          <select name="type" id="type">
            <option value="drinks">Drinks</option>
            <option value="snacks">Snacks</option>
          </select>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Snack/Drink Name"
          />
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Description"
          />
          <input id="recipe" name="recipe" type="text" placeholder="recipe" />
          <input id="serve" name="serve" type="text" placeholder="serve" />
          <Button>Submit</Button>
        </form>
      </div>
    </Container>
  );
}

export default SubmitSnack;
