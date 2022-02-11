import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {Wrapper} from "./startOrRemoveQuestions.style"

const StartOrRemoveQuestions = () => {
  const handleRemoveQuestion = () => {
    localStorage.removeItem("questions");
  };
  return (
    <Wrapper>
      <Link to="/start">
        <Button variant="contained" color="primary">
          Start
        </Button>
      </Link>
      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          onClick={handleRemoveQuestion}
        > 
          Cancel
        </Button>
      </Link>
    </Wrapper>
  );
};

export default StartOrRemoveQuestions;
