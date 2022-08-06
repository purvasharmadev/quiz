import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Components
import { Rules } from "./rules";

import { useQuiz } from "../../Context/quiz-context";

function Quiz() {
  const {
    state: { index, ques, selectedOption, options, selected },
    apiError,
    dispatch,
  } = useQuiz();
  const navigateTo = useNavigate();

  function createMarkup(text) {
    return { __html: text };
  }

  function optionHandler(i) {
    dispatch({ type: "Selected", payload: true });
    dispatch({ type: "SelectedOption", payload: i });
    dispatch({ type: "ShowResult" });
    dispatch({ type: "NextQues", payload: ques.length });
    if (i === ques[index].correct_answer) {
      dispatch({ type: "AddScore" });
    } else {
      dispatch({ type: "SubScore" });
    }
  }

  function handleSelect(i) {
    if (selectedOption === i) {
      return "select";
    }
  }

  useEffect(() => {
    if (apiError) {
      navigateTo("*");
    }
    //eslint-disable-next-line
  }, [apiError]);
  return (
    <>
      <Rules />
      {ques ? (
        <>
          <div className="container transition">
            <h2 className="text-center color-primary">
              {ques[index].category}
            </h2>
            <div className="flex flex-space-between">
              <h3 className="color-primary">
                Question : {index + 1} /{ques.length}
              </h3>
              {/* <h3 className="color-primary">Score : {score}</h3> */}
            </div>
          </div>
          <div className="p-1 bg color-primary m-1 round-corner">
            <p
              className="text-center text-normal"
              dangerouslySetInnerHTML={createMarkup(ques[index].question)}
            ></p>
          </div>

          <div className="flex flex-space-between">
            {options &&
              options.map((i) => {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      optionHandler(i);
                    }}
                    //  disabled={selected  === true ? true: false}
                    className={`optionDiv bg btn w-100 color-primary m-1 round-corner ${
                      selected === true && handleSelect(i)
                    }`}
                  >
                    <p
                      className="text-center text-normal"
                      dangerouslySetInnerHTML={createMarkup(i)}
                    ></p>
                  </button>
                );
              })}
          </div>

          <div className="flex flex-space-between m-1">
            <Link
              onClick={() => dispatch({ type: "clear_default" })}
              className="btn btn-secondary p-1 m-1"
              to="/"
            >
              Quit
            </Link>

            {index === ques.length - 1 && (
              <Link className="btn btn-secondary p-1 m-1" to="/results">
                Show Results
              </Link>
            )}
          </div>
        </>
      ) : (
        <h2 className="text-center">Loading.......</h2>
      )}
    </>
  );
}

export { Quiz };
