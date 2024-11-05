// PopularCategories component
import { Link } from "react-router-dom";
import "../styles/Categories.css";
import "../styles/test.css";

export default function PopularCategories({ title, categoryList, grid }) {
  console.log(categoryList);
  console.log(grid);

  return (
    <section className="popular-categories">
      {title ? <h2 className="section-heading">{title}</h2> : ""}
      <div
        className={`categories-grid ${grid ? "grid-type-2" : "grid-type-4"}`}
      >
        {categoryList.map((item) => {
          return (
            <Link to={item.to} className="category" key={item.label}>
              <img src={item.img} alt={item.alt} />{" "}
             
              <div className="label-with-bg">
                <div className="category-label">{item.label}</div>{" "}
              
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
