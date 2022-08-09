// reducer function to manipulate state according to action type
import { QuizReducer,QuizAction } from "./reducerFn.types";

export function reducerFn(state:QuizReducer, action:QuizAction) {
  switch (action.type) {
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
      return {
        ...state,
        options: action.payload.sort(() => Math.random() - 0.5),
      };

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

    // Set to initial state
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
