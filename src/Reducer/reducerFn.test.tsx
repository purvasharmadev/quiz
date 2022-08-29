import { reducerFn } from "./reducerFn";
import { QuizReducer,QuizAction } from "./reducerFn.types";

const initialState : QuizReducer = {
  index: 1,
  search_query: "",
  ques: undefined,
  score: 0,
  selectedOption: "",
  selected: false,
  options: undefined,
  RandomOptionsArray: [],
  SelectedOptionArray: [],
};

beforeEach(() => {
  return initialState;
});

describe("testing reducer function", () => {
  //test - 1

  test("CASE_NEXT_QUES", () => {
    //arrange
    const goToNext:QuizAction = {
      type: "NextQues",
      payload: 10,
    };

    //act
    let state = reducerFn(initialState, goToNext);

    //assert
    expect(state.index).toBe(2)
  });

  //test - 2
  test("CASE_ADD_SCORE", () => {
    //arrange
    const addScore:QuizAction = {
      type: "AddScore",
    };

    //act
    let state = reducerFn(initialState, addScore);

    //assert
    expect(state.score).toBe(5)

  });

  //test - 3
  test("CASE_SUB_SCORE", () => {
    //arrange
    const subScore:QuizAction = {
      type: "SubScore",
    };

    //act
    let state = reducerFn(initialState, subScore);

    //assert
    expect(state.score).toBe(-1)

  });

  //test - 4
  test("CASE_SEARCH_QUERY", () => {
    //arrange
    const search_query:QuizAction = {
      type: "search_query",
      payload: "general knowledge",
    };
    //act
    let state = reducerFn(initialState, search_query);
    //assert
    expect(state.search_query).toBe("general knowledge")

  });

  //test - 5
  test("CASE_SELECTED_OPTION", () => {
    //arrange
    const SelectedOption:QuizAction = {
      type: "SelectedOption",
      payload: ["option1"],
    };
    //act
    let state = reducerFn(initialState, SelectedOption);
    //assert
    expect(state.selectedOption).toContain('option1');
  });

  //test - 6
  test("CASE_SELECTED", () => {
    //arrange
    const Selected:QuizAction = {
      type: "Selected",
      payload: true,
    };
    //act
    let state = reducerFn(initialState, Selected);
    //assert
    expect(state.selected).toBeTruthy()
    
  });

  //test - 7
  test("CASE_QUESTION", () => {
    //arrange
    const Question:QuizAction = {
      type: "Question",
      payload: [],
    };
    //act
    let state = reducerFn(initialState, Question);
    //assert
    expect(state).toEqual({
      ...initialState,
      ques: [],
    });
  });

  //test - 8
  test("CASE_Clear_default", () => {
    //arrange
    const clearDefault:QuizAction = {
      type: "clear_default",
    };

    //act
    let state = reducerFn(initialState, clearDefault);
    //assert
    expect(state).toEqual({
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
  });

  //test - 9
  test("CASE_Default", () => {
    //arrange
    const defaultState:any = {
      type: "",
    };
    //act
    let state = reducerFn(initialState, defaultState);
    //assert
    expect(state).toBe(initialState);
  });
});
