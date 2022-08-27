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
      payload:[];
    }
    | {
      type:'AddScore';
    }
    | {
      type:'SubScore';
    }
    | {
      type:'SelectedOption';
      payload:string[]
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
    }