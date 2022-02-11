import React, { useMemo } from "react";
import { Wrapper } from "./Radio.style";

const Radio = ({
  question,
  incorrect_answers,
  correct_answer,
  onChange,
  active,
}) => {

  const allAnswer = [...incorrect_answers, correct_answer];

  function shuffleAnswers(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const memorizedAnswer = useMemo(()=> shuffleAnswers(allAnswer), [])
  
  if (active === false) return null;

  return (
    <Wrapper>
      <fieldset>
        <legend>{question}</legend>
        {memorizedAnswer.map((answer) => (
          <label key={answer}>
            <input
              name="name"
              type="radio"
              value={answer}
              onChange={(e) => onChange(e, question)}
            />
            {answer}
          </label>
        ))}
      </fieldset>
    </Wrapper>
  );
};

export default Radio;
