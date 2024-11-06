import Breadcrumb from "../components/Breadcrumb";
import PopularCategories from "../components/PopularCategories";
import { Link } from "react-router-dom";

export default function Sortiment() {
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
    {
      to: "/produkter/Sweatshirts",
      img: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0-small.jpg",
      alt: "Cool tröja",
      label: "Sweatshirts",
    },
    {
      to: "/produkter/Pikeer",
      img: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0-small.jpg",
      alt: "Västar",
      label: "Pikeer",
    },
    {
      to: "/produkter/Jackor",
      img: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0-small.jpg",
      alt: "Jackor",
      label: "Jackor",
    },
    {
      to: "/produkter",
      img: "/img/decorative/cover/Stanley_Stella_AW24_Timeless_Outwear_Mix_01_hd.jpg",
      alt: "Se alla",
      label: "Se alla",
    },
  ];

  return (
    <div className="container" style={{ marginBlockStart: "10.8rem" }}>
      <div className="categori">
        <h1 className="section-heading heading-3">Kläder</h1>
      </div>
      <div style={{margin: "1rem 0"}}>
      <Link to="/sortiment">Gå till sortiment</Link> 
      </div>
      <PopularCategories categoryList={categorylist} />
    </div>
  );
}
