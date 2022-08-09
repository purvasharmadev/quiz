export type QuizReducer = {
    index:number;
    search_query:string;
    ques:string | undefined;
    score:number;
    selectedOption:string;
    selected:boolean;
    options:string | undefined;
    RandomOptionsArray:string[];
    SelectedOptionArray:string[];
  };
  
 export type QuizAction =
    | {
        type: "NextQues";
        payload: number ;
      }
    | {
        type: "search_query";
        payload: string;
      }
    | {
      type:'Question';
      payload:string;
    }
    | {
      type:'AddScore';
      score:number;
    }
    | {
      type:'SubScore';
      score:number
    }
    | {
      type:'SelectedOption';
      payload:string
    }
    | {
      type:'Selected';
      payload:boolean
    }
    | {
      type:'option';
      payload:[]
    }
    | {
      type:'ShowResult';
      payload:string
    }
    |{
      type:'clear_default';
      index:number;
      search_query:string;
      ques:string;
      score:number;
      selectedOption:string;
      selected:string;
      options:string;
      RandomOptionsArray:[];
      SelectedOptionArray:[];
    }