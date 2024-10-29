// Importerar Link från react-router-dom för navigering mellan sidor
import { Link } from "react-router-dom";

// Definierar PopularCategories-komponenten som tar emot props title och categoryList
export default function PopularCategories({ title, categoryList }) {
    // Loggar categoryList till konsolen för att kontrollera dess innehåll
    console.log(categoryList);
    
    return (
        // Sektion för populära kategorier
        <section className="popular-categories">
            {/* Visar rubrik om title är angiven */}
            {title ? <h2 className="section-heading">{title}</h2> : ''}
            <div className="categories-grid">
                {/* Mappar genom categoryList för att skapa en lista med kategorier */}
                {categoryList.map((item) => {
                    return (
                        // Länk till varje kategori
                        <Link to={item.to} className="category" key={item.label}>
                            <img src={item.img} alt={item.alt} /> {/* Visar kategori-bild */}
                            <div className="category-label label-with-bg main-body">{item.label}</div> {/* Visar kategori-label */}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
