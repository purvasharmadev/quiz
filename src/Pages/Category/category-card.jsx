import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/quiz-context";

function CategoryCard(props) {
  const navigateTo = useNavigate();
  const { fetchQues, apiError } = useQuiz();

  function navigateToQuiz() {
    fetchQues(props.value);
    if(apiError){
      navigateTo("*")
    }else{
      navigateTo("/quiz")
    }
  }
  return (
    <>
      <div className="card m-1">
        <div className="card-header bg">
          <img
            src={props.img}
            alt="categoryImg"
            className="img-responsive"
          />
        </div>
        <div className="card-body text-center color-primary">
          <h3> {props.item} </h3>
          <div className="card-footer">
            <button onClick={navigateToQuiz} className="btn btn-secondary">
              Play Now
            </button>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}

export { CategoryCard };
