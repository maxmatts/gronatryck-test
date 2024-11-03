import NavList from "../components/NavList"; // Importerar NavList-komponenten för att visa navigationsmenyn
import PopularCategories from "../components/PopularCategories"; // Importerar PopularCategories-komponenten för att visa populära kategorier
import "../styles/Categories.css";
// Definierar kategorier som ska visas i navigationslistan
const categories = [
  { to: "/produkter", textContent: "Visa alla" },
  { to: "/produkter", textContent: "Nyheter" },
  { to: "/produkter", textContent: "Bästsäljare" },
  { to: "/produkter", textContent: "Kollektioner" },
  { to: "/kategori", textContent: "Kläder" },
  { to: "/produkter", textContent: "Accessoarer" },
  { to: "/produkter", textContent: "Huvudbonader" },
  { to: "/produkter", textContent: "Barnkläder" },
  { to: "/produkter", textContent: "Gåvor" },
  { to: "/tjanster", textContent: "Tjänster" },
];

// Huvudkomponenten Sortiment
export default function Sortiment() {
  // Definierar listan över populära kategorier
  const categorylist = [
    {
      to: "/produkter/T-shirts",
      img: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0-small.jpg",
      alt: "Cool tröja",
      label: "T-shirt",
    },
    {
      to: "/produkter/Västar",
      img: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0-small.jpg",
      alt: "Västar",
      label: "Västar",
    },
    {
      to: "/produkter/Jackor",
      img: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0-small.jpg",
      alt: "Jackor",
      label: "Jackor",
    },
    {
      to: "/produkter/Huvtröjor",
      img: "/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0-small.jpg",
      alt: "Huvtröjor",
      label: "Huvtröjor",
    },
  ];

  return (
    <div className="container" style={{ marginBlockStart: "10.8rem" }}>
      <div className="categori">
        {" "}
        {/* Huvudbehållare för innehållet med margin */}
        <NavList
          key="category-menu"
          links={categories}
          className="categories"
        />{" "}
        {/* Renderar navigationslistan */}
        <div className="nav-heading">
          <h1 className="section-heading heading-3">Populära Kategori</h1>
          {/* Rubrik för sektionen med populära kategorier */}
        </div>
        <PopularCategories grid="true" categoryList={categorylist} />
        {/* Renderar komponenten för populära kategorier */}
      </div>
    </div>
  );
}
