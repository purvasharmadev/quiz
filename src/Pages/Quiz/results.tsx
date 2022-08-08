import { useQuiz } from "../../Context/quiz-context";
import { Link } from "react-router-dom";

function Results() {
  const {
    state: { ques, score, RandomOptionsArray, selected, SelectedOptionArray },
    dispatch,
  } = useQuiz();

  function createMarkup(text) {
    return { __html: text };
  }

  function handleSelect(option, i) {
    if (
      SelectedOptionArray[i] === option &&
      SelectedOptionArray[i] === ques[i].correct_answer
    ) {
      return "correct";
    } else if (
      SelectedOptionArray[i] === option &&
      SelectedOptionArray[i] !== ques[i].correct_answer
    ) {
      return "wrong";
    } else if (option === ques[i].correct_answer) {
      return "correct";
    }
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center color-primary text-lg">Results</h2>
        <div className="flex flex-space-between align-item-center">
          <h2 className="color-primary text-md">
            Score : {score} / {ques.length * 5}
          </h2>
          <Link
            onClick={() => dispatch({ type: "clear_default" })}
            className="color-primary link"
            to="/"
          >
            <h3 className="text-md">Take Another Quiz </h3>
          </Link>
        </div>
      </div>
      <div className="container">
        {ques
          ? ques.map((item, i) => {
              return (
                <>
                  <div className="bg color-primary m-1 round-corner">
                    <p
                      key={item}
                      className="text-center text-normal"
                      dangerouslySetInnerHTML={createMarkup(item.question)}
                    ></p>
                  </div>
                  <div className="flex flex-space-between">
                    {RandomOptionsArray &&
                      RandomOptionsArray[i].map((option) => {
                        return (
                          <button
                            key={option}
                            className={`optionDiv bg btn w-100 color-primary m-1 round-corner ${
                              selected === true ? handleSelect(option, i) : ""
                            } `}
                          >
                            <p
                              className="text-center text-normal"
                              dangerouslySetInnerHTML={createMarkup(option)}
                            ></p>
                          </button>
                        );
                      })}
                  </div>
                  <hr className="m-1" />
                </>
              );
            })
          : " "}
      </div>
    </>
  );
}

export { Results };
