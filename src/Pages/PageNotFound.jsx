import { useQuiz } from "../Context/quiz-context";
import { Link } from "react-router-dom";
function PageNotFound() {
  const { apiError } = useQuiz();
  return (
    <div
      style={{ height: "100vh" }}
      className="container flex flex-space-center align-item-center color-primary"
    >
      <div className="flex flex-justify-center align-item-center flex-column">
        <h3>{apiError ? <>{apiError}</> : "404 - Page Not Found"}</h3>
        <Link className="link color-primary" to="/">
          Go to home
        </Link>
      </div>
    </div>
  );
}

export { PageNotFound };
