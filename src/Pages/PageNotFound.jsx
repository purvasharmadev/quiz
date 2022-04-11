import {useQuiz} from "../Context/quiz-context"
function PageNotFound() {
  const {apiError} = useQuiz()
  return (
    <div
      style={{ height: "100vh" }}
      className="container flex flex-space-center align-item-center color-primary"
    >
      <div>
        <h1 style={{ fontSize: "5rem" }}>
          {
            apiError === true ? "Something went wrong! try again" : "404 - Page Not Found"
          }
          </h1>
      </div>
    </div>
  );
}

export { PageNotFound };
