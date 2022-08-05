import { reducerFn } from "./reducerFn";

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
    const goToNext = {
      type: "NextQues",
      payload: 10,
    };
    let state = reducerFn(initialState, goToNext);
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
    const score = {
      type: "AddScore",
    };
    let state = reducerFn(initialState, score);
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
    const score = {
      type: "SubScore",
    };
    let state = reducerFn(initialState, score);
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
    const search_query = {
      type: "search_query",
      payload: "general knowledge",
    };
    let state = reducerFn(initialState, search_query);
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
    };

    const SelectedOption = {
      type: "SelectedOption",
      payload: ["option1", "option2", "option3", "option4"],
    };
    let state = reducerFn(initialState, SelectedOption);
    expect(state).toEqual({
      index: 0,
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
    };

    const Selected = {
      type: "Selected",
      payload: true,
    };
    let state = reducerFn(initialState, Selected);
    expect(state).toEqual({
      index: 0,
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
});

