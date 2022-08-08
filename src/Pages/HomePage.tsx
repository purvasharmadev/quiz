// Components
import { CategoryCard } from "./Category/category-card";
import Categories from "../Data/category-list";
import { useQuiz } from "../Context/quiz-context";
function HomePage() {
  let categoryList = Categories;

  const {
    state: { search_query },
    dispatch,
  } = useQuiz();

  if (search_query) {
    categoryList = Categories.filter((item) =>
      item.category.toLowerCase().includes(search_query.toLowerCase())
    );
  }

  return (
    <>
      <div className="container text-center m-auto">
        <h2 className="color-primary text-lg">Quizio</h2>

        <p className="color-primary">Select a Category to play Quizio</p>

        <input
          onChange={(e) => {
            dispatch({ type: "search_query", payload: e.target.value });
          }}
          type="text"
          placeholder="Search A quiz"
          className="w-50 p-1 text-center"
        />
      </div>

      {/* CategoryList */}
      <div className="w-100 flex flex-wrap flex-space-center align-item-center">
        {categoryList.length !== 0 ?
          categoryList.map((item) => {
            return (
              <CategoryCard
                key={item.value}
                value={item.value}
                item={item.category}
                img={item.img}
              />
            );
          }):
          (
            <div>
              <h1 className="color-primary">No quizes found!!</h1>
            </div>
          )
          }
      </div>
    </>
  );
}

export { HomePage };
