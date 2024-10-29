import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/Breadcrumb.css";

// Breadcrumb-komponenten används för att hantera navigationsspåret på webbsidan
const Breadcrumb = () => {
  // Hämta den aktuella platsen (URL) med useLocation-hooken
  const location = useLocation();
  // Hämta URL-parametrar med useParams-hooken
  const params = useParams();
  // Dela upp sökvägen i segment och ta bort eventuella tomma värden
  const pathSegments = location.pathname.split("/").filter((segment) => segment);

  return (
    <div className="breadcrumb-wrapper">
      <nav className="breadcrumb">
        {/* Här skapar vi en länk tillbaka till hemsidan */}
        <Link to="/">Hem</Link>

        {/* Loopar igenom alla segment i sökvägen */}
        {pathSegments.map((segment, index) => {
          // Bygger en fullständig sökväg från segmenten
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          // Kollar om det aktuella segmentet är det sista i sökvägen
          const isLast = index === pathSegments.length - 1;

          return (
            <span key={index}>
              {/* Separator (/) mellan segmenten */}
              <span className="breadcrumb-separator">/</span>
              {/* Om segmentet inte är det sista, skapa en länk */}
              {!isLast ? (
                <Link to={path}>
                  {/* Gör första bokstaven stor för segmentet */}
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              ) : (
                // Om det är det sista segmentet, visa bara text utan länk
                <span>{segment.charAt(0).toUpperCase() + segment.slice(1)}</span>
              )}
            </span>
          );
        })}
      </nav>

      {/* Om vi har en kategori från URL-parametrarna, visa rubriken */}
      {params.category && (
        <h2 className="category-heading">
          {/* Gör första bokstaven stor och lägg till "Kategori" */}
          {params.category.charAt(0).toUpperCase() + params.category.slice(1)} Kategori
        </h2>
      )}
    </div>
  );
};

export default Breadcrumb;

