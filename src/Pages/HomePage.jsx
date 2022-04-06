import { useState } from "react";

// Components
import { CategoryCard } from "./Category/category-card";
import data from "../data";

function HomePage() {
  // UseState to store userName
  const [userName, setUserName] = useState("");

  return (
    <>
      <div className="container text-center m-auto">
        <h2 className="color-primary text-xlg">Quizio</h2>

        <input
          onChange={(e) => {
            const name = e.target.value;
            setUserName(() => name);
          }}
          type="text"
          placeholder="Enter your name!"
          className="w-50 p-1 text-center"
        />
      </div>

      {userName && (
        <div className="container text-center">
          <h2 className="color-primary">Hello {userName}</h2>
          <p className="color-primary">Select a Category to play Quizio</p>
        </div>
      )}

      {/* CategoryList */}
      <div className="w-100 flex flex-wrap flex-space-center align-item-center">
        {data.results.map((item) => {
          return <CategoryCard item={item.category} />;
        })}
      </div>
    </>
  );
}

export { HomePage };
