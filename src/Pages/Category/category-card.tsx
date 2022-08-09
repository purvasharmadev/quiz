import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/quiz-context";
import { CategoryCardProps } from "./category-card.types";

function CategoryCard({ img, value, item }: CategoryCardProps) {
  const navigateTo = useNavigate();
  const { apiError, setCategory } = useQuiz();

  function navigateToQuiz() {
    setCategory(value)
    if (apiError) {
      navigateTo("*")
    } else {
      navigateTo("/quiz")
    }
  }
  return (
    <>
      <div className="card m-1">
        <div className="card-header bg">
          <img
            src={img}
            alt="categoryImg"
            className="img-responsive"
          />
        </div>
        <div className="card-body text-center color-primary">
          <h3> {item} </h3>
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
