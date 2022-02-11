import React, { useState } from "react";
import Radio from "../../Components/Form/Radio";
import Button from '@material-ui/core/Button';
import { Wrapper } from "./Start.styles";

const Start = () => {
  const playQuestions = JSON.parse(
    localStorage.getItem("questions") || "[]"
  );

  const [respostasCorretas, setRespostasCorretas] = useState([]);

  const [selectQuestion, setSelectQuestion] = useState({});

  const [slide, setSlide] = useState(0);

  function resultadoFinal() {
    const finalCorrectQuestion = playQuestions.filter(
      (question) =>
        selectQuestion[question.question] === question.correct_answer
    );
    setRespostasCorretas(finalCorrectQuestion);
  }

  const handleChange = ({ target }, questionName) => {
    setSelectQuestion({ ...selectQuestion, [questionName]: target.value });
  };


  const handleClick = () => {
    if (slide < playQuestions.length - 1) {
      setSlide(slide + 1);
    }
    else{
      resultadoFinal();
      setSlide()
    }
  };

  return (
    <Wrapper>
      {playQuestions.length === 0 ? (
        "Adicione questões"
      ) : (
        <form onSubmit={(event) => event.preventDefault()}>
          {playQuestions.map((question, index) => (
            <form key={question.question}>
              <Radio
                active={slide === index}
                value={selectQuestion}
                {...question}
                onChange={handleChange}
              />
            </form>
          ))}

          {respostasCorretas.length ? (
            <h1>{`você acertou o total de ${respostasCorretas.length} de ${playQuestions.length}`}</h1>
          ) : (
            <Button variant="contained" color="primary" onClick={handleClick}>proxima</Button>
          )}
        </form>
      )}
    </Wrapper>
  );
};

export default Start;
