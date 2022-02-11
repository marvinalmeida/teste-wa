import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { getAllQuestions } from "../../Services/questions.services";
import { Wrapper } from "./Home.styles";

const Home = () => {
  
  const [numberQuestions, setNumberQuestions] = useState("");

  useEffect(() => {
    if (numberQuestions) {
      getAllQuestions(numberQuestions)
        .then((response) => {
          localStorage.setItem(
            "questions",
            JSON.stringify(response.data.results)
          );
        })
        .catch((e) => console.error(e));
    }
  }, [numberQuestions]);

  const handleChange = ({ target }) => {
    setNumberQuestions(target.value);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <h1>teste de conhecimento</h1>
          <h2>escolha o número de perguntas no campo a baixo</h2>
        </div>

        <div className="input-link">
          <TextField
            fullWidth
           size="small"
            type="number"
            onChange={handleChange}
            id="outlined-basic"
            label="Digite o número de questões"
            variant="outlined"
          />
          <Link to="play">
            <Button color="primary" size="medium" variant="contained">Começar</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
