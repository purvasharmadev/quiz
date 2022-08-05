import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { reducerFn } from "./reducerFn";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {

    // useState for loader
    const [loader, setLoader] = useState(true);

    //   useState for error
    const [apiError, setApiError] = useState(false);
  

  const initialState = {
    index: 0,
    search_query: "",
    ques: undefined,
    score: 0,
    selectedOption: "",
    selected: false,
    options: undefined,
    RandomOptionsArray: [],
    SelectedOptionArray: [],
  }

  // useReducer
  const [state, dispatch] = useReducer(reducerFn, initialState);

  // useFetchQues(category, setLoader,setApiError)res.

  async function fetchQues(category) {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
      );
      setLoader(true);
      dispatch({ type: "Question", payload: data.results });
    } catch (error) {
      setApiError(() => true);
      console.error(error.response.data.errors[0]);
    }
  }
  useEffect(() => {
    {
      state.ques
        && dispatch({
            type: "option",
            payload: [
              state.ques[state.index]?.correct_answer,
              ...state.ques[state.index]?.incorrect_answers,
            ],
          })
    }
  }, [state.ques, state.index]);



  return (
    <QuizContext.Provider
      value={{
        state,
        dispatch,
        apiError,
        loader,
        fetchQues
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz};
