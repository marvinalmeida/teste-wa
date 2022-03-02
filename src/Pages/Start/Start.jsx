import React, { useState } from "react";
import Radio from "../../Components/Form/Radio";
import { Wrapper } from "./Start.styles";
import PollIcon from "@material-ui/icons/Poll";

const Start = () => {
  const playQuestions = JSON.parse(localStorage.getItem("questions") || "[]");

  const [rightAnswer, setRightAnswer] = useState([]);

  const [selectQuestion, setSelectQuestion] = useState({});

  const [finished, setFinished] = useState(false);

  const [disable, setDisable] = useState(true);

  const [slide, setSlide] = useState(0);

  function finalResut() {
    const finalCorrectQuestion = playQuestions.filter(
      (question) =>
        selectQuestion[question.question] === question.correct_answer
    );
    setRightAnswer(finalCorrectQuestion);
    setFinished(true);
  }

  const handleChange = ({ target }, questionName) => {
    setDisable(false);
    setSelectQuestion({ ...selectQuestion, [questionName]: target.value });
  };

  const handleClick = () => {
    setDisable(true);

    if (slide < playQuestions.length - 1) {
      setSlide(slide + 1);
    } else {
      finalResut();
      setSlide();
    }
  };

  return (
    <Wrapper>
      {playQuestions.length === 0 ? (
        <h2>Adicione questões</h2>
      ) : (
        <form onSubmit={(event) => event.preventDefault()}>
          {playQuestions.map((question, index) => (
            <form key={question.question}>
              <Radio
                active={slide === index}
                value={selectQuestion}
                disable={disable}
                {...question}
                onChange={handleChange}
                handleClick={handleClick}
              />
            </form>
          ))}

          {finished && (
            <div className="finish-panel">
              <PollIcon />
              <h1>Quiz finalizado com sucesso</h1>

              <h2>{`você acertou o total de ${rightAnswer.length} de ${playQuestions.length}`}</h2>
            </div>
          )}
        </form>
      )}
    </Wrapper>
  );
};

export default Start;
