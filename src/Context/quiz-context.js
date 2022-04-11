import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [apiError, setApiError] = useState(false);
  const [lodaer, setLoader] = useState(false);

  // reducer function to manipulate state according to action type
  function reducerFn(state, action) {
    switch (action.type) {
      // go to prev ques
      case "PrevQues":
        return {
          ...state,
          index: state.index === 0 ? state.index : state.index - 1,
        };

      //go to next ques
      case "NextQues":
        return {
          ...state,
          index:
            state.index === action.payload - 1 ? state.index : state.index + 1,
        };

      // For search
      case "search_query":
        return { ...state, search_query: action.payload };

      // For ques
      case "Question":
        return { ...state, ques: action.payload };

      // For Score
      case "AddScore":
        return { ...state, score: state.score + 5 };
      case "SubScore":
        return { ...state, score: state.score - 1 };

      // For option selection
      case "SelectedOption":
        return { ...state, selectedOption: action.payload };
      case "Selected":
        return { ...state, selected: action.payload };
      case "option":
        return { ...state, options: randomOption(action.payload) };

      // Showing result
      case "ShowResult":
        return {
          ...state,
          RandomOptionsArray: state.options
            ? [...state.RandomOptionsArray, state.options]
            : [...state.RandomOptionsArray],
          SelectedOptionArray: state.selectedOption
            ? [...state.SelectedOptionArray, state.selectedOption]
            : [...state.SelectedOptionArray],
        };

      // Set to intital state
      case "clear_default":
        return {
          ...state,
          index: 0,
          search_query: "",
          ques: undefined,
          score: 0,
          selectedOption: "",
          selected: false,
          options: undefined,
          RandomOptionsArray: [],
          SelectedOptionArray: [],
        };
      default:
        return state;
    }
  }

  // useReducer
  const [state, dispatch] = useReducer(reducerFn, {
    index: 0,
    search_query: "",
    ques: undefined,
    score: 0,
    selectedOption: "",
    selected: false,
    options: undefined,
    RandomOptionsArray: [],
    SelectedOptionArray: [],
  });

  async function fetchQues(category) {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
      );
      setLoader(true);
      dispatch({ type: "Question", payload: data.results });
    } catch (error) {
      setApiError(() => true);
      console.log(apiError);
    }
  }

  function randomOption(i) {
    return i.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    {
      state.ques
        ? dispatch({
            type: "option",
            payload: [
              state.ques[state.index]?.correct_answer,
              ...state.ques[state.index]?.incorrect_answers,
            ],
          })
        : console.log("");
    }
  }, [state.ques, state.index]);

  console.log("score from context ", state);

  return (
    <QuizContext.Provider
      value={{
        state,
        dispatch,
        fetchQues,
        apiError,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
