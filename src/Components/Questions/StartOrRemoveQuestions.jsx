import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {Wrapper} from "./startOrRemoveQuestions.style"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const StartOrRemoveQuestions = () => {
  const handleRemoveQuestion = () => {
    localStorage.removeItem("questions");
  };
  return (
    <Wrapper>

      <Link to="/">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleRemoveQuestion}
        > 
          Cancel
        </Button>
      </Link>
      <Link to="/start">
        <Button variant="contained" color="primary" endIcon={<PlayArrowIcon />}>
          Start
        </Button>
      </Link>
    </Wrapper>
  );
};

export default StartOrRemoveQuestions;
