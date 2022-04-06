import { Link } from "react-router-dom";

function CategoryCard(props) {
  return (
    <>
      <Link to="/quiz" className="color-white">
        <div class="card m-1">
          <div class="card-header card-overlay">
            <img
              src="https://www.hubspot.com/hubfs/marketer%20building%20a%20survey%20through%20the%20best%20online%20quiz%20makers.jpg"
              alt="..."
            />
            <div class="card-body">
              <h3> {props.item}</h3>
            </div>
          </div>
        </div>
      </Link>

      <br />
    </>
  );
}

export { CategoryCard };
