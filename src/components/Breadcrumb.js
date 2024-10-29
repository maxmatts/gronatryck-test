import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  const pathSegments = location.pathname.split("/").filter((segment) => segment);

  return (
    <div className="breadcrumb-wrapper">
      <nav className="breadcrumb">
        <Link to="/">Hem</Link>

        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          // Determine what to display
          let displayName = segment;

          // If the segment is the product ID (for example, p3), show the category instead
          if (isLast && params.productId) {
            displayName = params.category; // Show category instead of product ID
          } else {
            displayName = segment.charAt(0).toUpperCase() + segment.slice(1); // Capitalize first letter
          }

          return (
            <span key={index}>
              <span className="breadcrumb-separator">/</span>
              {!isLast ? (
                <Link to={path}>
                  {displayName}
                </Link>
              ) : (
                <span>{displayName}</span>
              )}
            </span>
          );
        })}
      </nav>

      {params.category && (
        <h2 className="category-heading">
          {params.category.charAt(0).toUpperCase() + params.category.slice(1)} Kategori
        </h2>
      )}
    </div>
  );
};

export default Breadcrumb;
