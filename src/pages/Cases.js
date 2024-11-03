// src/pages/Cases.js
import React from "react";
import CustomerCases from "../components/Customer-logos"; 
import '../styles/Cases.css'; 

const Cases = () => {
    return (
        <div className="cases-container">

<div className="cart-heading">
        <h1 className="main-heading page-heading">Kundberättelser</h1>
      </div>
            
            
            <div className="case-section">
                <img src="/img/decorative/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg" alt="Description 1" className="case-image" />
                <div className="case-text">
                <h1 className="section-heading heading-3">
                Svenska Fotbollsförbundet
              </h1>
                    <p className="case-description">
                    För att lansera deras nya träningsprogram för ungdomar behövde de en kollektion av träningskläder och accessoarer. Gröna Tryck skapade en kollektion som var både stilren och funktionell, med produkter som uppfyllde förbundets höga krav på kvalitet och hållbarhet. Genom att erbjuda ett flexibelt och anpassningsbart samarbete kunde Gröna Tryck möta förbundets specifika behov.
                    </p>
                </div>
            </div>

            <div className="case-section reverse">
                <img src="/img/decorative/matthew-moloney-mKtfd1SOYDc-unsplash.jpg" alt="Description 2" className="case-image" />
                <div className="case-text">
                <h1 className="section-heading heading-3">
                EcoStore AB
              </h1>
                    <p className="case-description">
                    Gröna Tryck hjälpte EcoStore att designa och producera en kollektion av ekologiska påsar och kläder för deras återkommande kampanj "Hållbar Livsstil". Genom att använda Ftalatfri färg och 100 % ekologisk bomull skapades produkter som speglade företagets värderingar. Den personliga kontakten med EcoStore gjorde det möjligt för Gröna Tryck att anpassa varje detalj efter kundens behov.
                    </p>
                </div>
            </div>

            <div className="case-section">
                <img src="/img/decorative/luke-porter-ohBhECoxQoU-unsplash.jpg" alt="Description 3" className="case-image" />
                <div className="case-text">
                <h1 className="section-heading heading-3">
                GrafikDesign Studio
              </h1>
                    <p className="case-description">
                    För att lansera sin nya tjänst behövde GrafikDesign Studio en kollektion av merchandise, inklusive t-shirts och muggar, som skulle återspegla deras grafiska stil och värderingar. Gröna Tryck erbjöd en komplett lösning med tryck av hög kvalitet på miljövänliga material. Genom en öppen dialog kunde de snabbt justera designen för att passa GrafikDesign Studios specifikationer.
                    </p>
                </div>
            </div>

            <div className="case-section reverse">
                <img src="/img/decorative/thriday-UXaZiRriRW0-unsplash.jpg" alt="Description 4" className="case-image" />
                <div className="case-text">
                <h1 className="section-heading heading-3">
                Hållbara Event
              </h1>
                    <p className="case-description">
                    För deras senaste event behövde Hållbara Event t-shirts, banners och tryckt material som reflekterade deras hållbarhetsfokus. Gröna Tryck tillhandahöll en omfattande lösning med produkter som var både rättvisemärkta och miljöcertifierade. Tillsammans utvecklade de kreativa koncept som gjorde eventet både minnesvärt och hållbart.
                    </p>
                </div>
            </div>





            <CustomerCases />
        </div>
    );
};

export default Cases;
