import { useState } from "react";
import { Link } from "react-router-dom";
function Rules() {
  const [display, setDisplay] = useState("flex");

  const modalDiv = { display: display };

  return (
    <>
      <div className="w-50">
        <div style={modalDiv} className="modal position-fixed">
          <div className="modal-body">
            <div className="modal-header">
              <h2 className="color-primary text-lg">Rules</h2>
            </div>
            <div className="modal-text color-white p-1 text-md">
              <ol class="list list-broder">
                <li class="list-item list-item-border  list-item-background">
                  There are 10 questions , you have to select the right answer
                  amoung the given choices.
                </li>
                <li class="list-item list-item-border  list-item-background">
                  For each correct answer you will get +5 and for each wrong
                  answer -1.
                </li>
                <li class="list-item list-item-border  list-item-background">
                  Answer will be revealed after the last questions.
                </li>
                <li class="list-item list-item-border  list-item-background">
                  You are advised to not cheat while playing the quiz.
                </li>
              </ol>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  setDisplay("none");
                }}
                className="modal-btn"
              >
                Understood!
              </button>
              <button className="modal-btn">
                <Link className="modal-btn" to="/">
                  Quit
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Rules };
