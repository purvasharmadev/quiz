import data from "../../data";

function Results() {
  return (
    <>
      <div className="container color-primary">
        <h2 className="text-center">Results</h2>
        <h2 className="text-center">Final Score: 0</h2>
      </div>

      <div className="container">
        {data.results.map((item) => {
          return (
            <>
              {/* Question */}
              <div className="p-1 bg color-primary m-1 round-corner">
                <p className="text-center text-normal">{item.question}</p>
              </div>

              {/* Options */}
              <div className="flex flex-space-between w-100">
                <div className="p-1 bg color-primary m-1 round-corner w-50  correct-ans">
                  <p className="text-center text-normal ">
                    {item.correct_answer}
                  </p>
                </div>
                <div className="p-1 bg color-primary m-1 round-corner w-50  incorrect-ans">
                  <p className="text-center text-normal">
                    {item.incorrect_answers[0]}
                  </p>
                </div>
              </div>

              <div className="flex flex-space-between w-100">
                <div className="p-1 bg color-primary m-1 round-corner w-50 ">
                  <p className="text-center text-normal">
                    {item.incorrect_answers[2]}
                  </p>
                </div>
                <div className="p-1 bg color-primary m-1 round-corner w-50 ">
                  <p className="text-center text-normal">
                    {item.incorrect_answers[1]}
                  </p>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
}

export { Results };
