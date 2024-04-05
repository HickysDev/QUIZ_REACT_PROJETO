import "./Welcome.css";

import {useContext} from "react";
import {QuizContext} from "../context/quiz";

import Quiz from "../img/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo!</h2>
      <p>CLique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
