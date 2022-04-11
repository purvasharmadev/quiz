import { Link } from "react-router-dom";

// Components
import { Rules } from "./rules";

import { useQuiz } from "../../Context/quiz-context";

function Quiz() {
  const {
    state: { index, ques,selectedOption,options,

      selected },
    dispatch,

  } = useQuiz();


  function createMarkup(text){
    return {__html : text};
  }


  function optionHandler(i) {
    dispatch({type:"Selected", payload:true})
    dispatch({type:"SelectedOption",payload:i})
    dispatch({type:"ShowResult"})
    if( i ===  ques[index].correct_answer){
      dispatch({type:"AddScore"})

    }else{
      dispatch({type:"SubScore"})

    }
  }

  function handleSelect(i){
    if(selectedOption === i){
      return 'select'
    }
}

  return (
    <>
      <Rules />
      {ques ? (
        <>          
        
          <div className="container">
            <h2 className="text-center color-primary">
              {ques[index].category}
            </h2>
            <div className="flex flex-space-between">
              <h3 className="color-primary">Question : {index + 1} /{ques.length}</h3>
              {/* <h3 className="color-primary">Score : {score}</h3> */}
            </div>
          </div>
          <div className="p-1 bg color-primary m-1 round-corner">
            <p className="text-center text-normal" dangerouslySetInnerHTML={createMarkup(ques[index].question)}></p>
            </div>

          <div className="flex flex-space-between">
            {options && options.map((i)=>{
             return(  <button key={i}
               onClick={()=>optionHandler(i)}
               disabled={selected  === true ? true: false}
               className={`optionDiv bg btn w-100 color-primary m-1 round-corner ${selected === true ? handleSelect(i): ""} `}
             >
               <p className="text-center text-normal"dangerouslySetInnerHTML={createMarkup(i)}> 
                             </p>
             </button>
             )
            })}

      </div> 

          <div className="flex flex-space-between m-1">
            {index === 0 ? (
              <Link onClick={()=> dispatch({type:"clear_default"})
              } className="btn btn-secondary p-1 m-1" to="/">
                Quit
              </Link>
            ) : (
              <button
                className="btn btn-secondary p-1 m-1"
                onClick={() => dispatch({ type: "PrevQues" })}
              >
                prev
              </button>
            )}

            {index === ques.length - 1 ? (
              <Link  
              className="btn btn-secondary p-1 m-1" to="/results">
                Show Results
              </Link>
            ) : (
              <button
                className="btn btn-secondary p-1 m-1"
                onClick={() => {dispatch({ type: "NextQues", payload:ques.length })
              dispatch({type:"Selected",payload:false})
            }}
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <h2 className="text-center">Loading.......</h2>
      )}
    </>
  );
}


export { Quiz };
