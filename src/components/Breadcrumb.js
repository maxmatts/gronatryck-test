import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const { category, productSlug } = useParams();


  const pathSegments = location.pathname.split("/").filter((segment) => segment);


  const breadcrumbPaths = ["kategori"]; 

  if (category && pathSegments[1] !== "kategori") {
    breadcrumbPaths.push(category); 
  }


  if (productSlug) {
    breadcrumbPaths.push(productSlug);
  }


  const finalBreadcrumbPaths = breadcrumbPaths.map((segment, index) => {
    return `/${breadcrumbPaths.slice(0, index + 1).join("/")}`;
  });

  return (
    <div className="breadcrumb-wrapper">
      <nav className="breadcrumb">
        <Link to="/">Hem</Link> 
        <span className="breadcrumb-separator">/</span>
        <Link to="/sortiment">Sortiment</Link>

        {finalBreadcrumbPaths.map((path, index) => {
          const isLast = index === finalBreadcrumbPaths.length - 1;
          const segment = breadcrumbPaths[index];

     
          let displayName = segment.charAt(0).toUpperCase() + segment.slice(1);

      
          if (segment === "kategori") {
            displayName = "Kläder";
          } else if (segment === category) {
            displayName = category.charAt(0).toUpperCase() + category.slice(1); 
          } else if (segment === productSlug) {
            displayName = productSlug.replace(/-/g, " ").toUpperCase(); 
          }

          return (
            <span key={path}>
              <span className="breadcrumb-separator">/</span>
              <Link to={path}>{displayName}</Link> 
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;
