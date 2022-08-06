import { reducerFn } from "../Reducer/reducerFn";

const initialState = {
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

describe("testing reducer function", () => {
  //test - 1

  test("CASE_NEXT_QUES", () => {
    //arrange
    const goToNext = {
      type: "NextQues",
      payload: 10,
    };

    //act
    let state = reducerFn(initialState, goToNext);

    //assert
    expect(state).toEqual({
      index: 2,
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

  //test - 2
  test("CASE_ADD_SCORE", () => {
    //arrange
    const score = {
      type: "AddScore",
    };

    //act
    let state = reducerFn(initialState, score);

    //assert
    expect(state).toEqual({
      index: 1,
      search_query: "",
      ques: undefined,
      score: 5,
      selectedOption: "",
      selected: false,
      options: undefined,
      RandomOptionsArray: [],
      SelectedOptionArray: [],
    });
  });

  //test - 3
  test("CASE_SUB_SCORE", () => {
    //arrange
    const score = {
      type: "SubScore",
    };

    //act
    let state = reducerFn(initialState, score);

    //assert
    expect(state).toEqual({
      index: 1,
      search_query: "",
      ques: undefined,
      score: -1,
      selectedOption: "",
      selected: false,
      options: undefined,
      RandomOptionsArray: [],
      SelectedOptionArray: [],
    });
  });

  //test - 4
  test("CASE_SEARCH_QUERY", () => {
    //arrange
    const search_query = {
      type: "search_query",
      payload: "general knowledge",
    };
    //act
    let state = reducerFn(initialState, search_query);
    //assert
    expect(state).toEqual({
      index: 1,
      search_query: "general knowledge",
      ques: undefined,
      score: 0,
      selectedOption: "",
      selected: false,
      options: undefined,
      RandomOptionsArray: [],
      SelectedOptionArray: [],
    });
  });

  //test - 5
  test("CASE_SELECTED_OPTION", () => {
    //arrange
    const SelectedOption = {
      type: "SelectedOption",
      payload: ["option1", "option2", "option3", "option4"],
    };
    //act
    let state = reducerFn(initialState, SelectedOption);
    //assert
    expect(state).toEqual({
      index: 1,
      search_query: "",
      ques: undefined,
      score: 0,
      selectedOption: ["option1", "option2", "option3", "option4"],
      selected: false,
      options: undefined,
      RandomOptionsArray: [],
      SelectedOptionArray: [],
    });
  });

  //test - 6
  test("CASE_SELECTED", () => {
    //arrange
    const Selected = {
      type: "Selected",
      payload: true,
    };
    //act
    let state = reducerFn(initialState, Selected);
    //assert
    expect(state).toEqual({
      index: 1,
      search_query: "",
      ques: undefined,
      score: 0,
      selectedOption: "",
      selected: true,
      options: undefined,
      RandomOptionsArray: [],
      SelectedOptionArray: [],
    });
  });

  //test - 7
  test("CASE_QUESTION", () => {
    //arrange
    const Question = {
      type: "Question",
      payload: [],
    };
    //act
    let state = reducerFn(initialState, Question);
    //assert
    expect(state).toEqual({
      index: 1,
      search_query: "",
      ques: [],
      score: 0,
      selectedOption: "",
      selected: false,
      options: undefined,
      RandomOptionsArray: [],
      SelectedOptionArray: [],
    });
  });

  //test - 8
  test("CASE_Clear_default", () => {
    //arrange
    const ShowResult = {
      type: "clear_default",
    };

    //act
    let state = reducerFn(initialState, ShowResult);
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
    const defaultState = {
      type: "",
    };
    //act
    let state = reducerFn(initialState, defaultState);
    //assert
    expect(state).toEqual(initialState);
  });
});
