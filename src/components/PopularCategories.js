 import { Link } from "react-router-dom";

export default function PopularCategories({title, categoryList}){
    console.log(categoryList);
    return (
        <section className="popular-categories">
            {title ? <h2 className="section-heading">{title}</h2> : ''}
            <div className="categories-grid">
                {categoryList.map((item) =>{
                     return(<Link to={item.to} className="category">
                        <img src={item.img} alt={item.alt} />
                        <div className="category-label label-with-bg main-body">{item.label}</div>
                    </Link>);
                })}

            </div>
        </section> 
    )
}