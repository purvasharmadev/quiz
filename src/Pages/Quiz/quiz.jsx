import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

// Components
import { Rules } from "./rules";

// data
import data from "../../data";

function Quiz() {
  // useState to change background of selected option
  const [bg, setBg] = useState({});

  // reducer function to manipulate state according to action type i.e next and prev buttons
  function reducerFn(state, action) {
    switch (action.type) {
      // case to move to prev ques
      case "PrevQues":
        return {
          ...state,
          index: state.index === 0 ? state.index : state.index - 1,
        };
      // case to go to next ques
      case "NextQues":
        return {
          ...state,
          index:
            state.index === data.results.length - 1
              ? state.index
              : state.index + 1,
        };
      default:
        return state;
    }
  }

  // Function to change the background color of selected option
  function optionHandler() {
    setBg({
      backgroundColor: "var(--PRIMARY-COLOR)",
      color: "var(--SECONDARY-COLOR)",
    });
  }

  // useReducer
  const [state, dispatch] = useReducer(reducerFn, {
    index: 0,
  });

  return (
    <>
      <Rules />

      <div className="container">
        <h2 className="text-center color-primary">
          {data.results[state.index].category}
        </h2>
        <div className="flex flex-space-between">
          <h3 className="color-primary">Question : {state.index + 1} /5</h3>
          <h3 className="color-primary">Score : 0</h3>
        </div>
      </div>

      {/* Question */}
      <div className="p-1 bg color-primary m-1 round-corner">
        <p className="text-center text-normal">
          {data.results[state.index].question}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-space-between w-100">
        <div
          style={bg}
          onClick={optionHandler}
          className="p-1 bg color-primary m-1 round-corner w-50 optionDiv"
        >
          <p className="text-center text-normal">
            {data.results[state.index].correct_answer}
          </p>
        </div>
        <div className="p-1 bg color-primary m-1 round-corner w-50 optionDiv">
          <p className="text-center text-normal">
            {data.results[state.index].incorrect_answers[0]}
          </p>
        </div>
      </div>

      <div className="flex flex-space-between w-100">
        <div className="p-1 bg color-primary m-1 round-corner w-50 optionDiv">
          <p className="text-center text-normal">
            {data.results[state.index].incorrect_answers[1]}
          </p>
        </div>
        <div className="p-1 bg color-primary m-1 round-corner w-50 optionDiv">
          <p className="text-center text-normal">
            {data.results[state.index].incorrect_answers[2]}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-space-between m-1">
        {state.index === 0 ? (
          <Link className="btn btn-secondary p-1 m-1" to="/">
            Back
          </Link>
        ) : (
          <button
            className="btn btn-secondary p-1 m-1"
            onClick={() => dispatch({ type: "PrevQues" })}
          >
            prev
          </button>
        )}

        {state.index === data.results.length - 1 ? (
          <Link className="btn btn-secondary p-1 m-1" to="/results">
            Show Results
          </Link>
        ) : (
          <button
            className="btn btn-secondary p-1 m-1"
            onClick={() => dispatch({ type: "NextQues" })}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}

export { Quiz };
