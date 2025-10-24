import styles from "./Breadcrumbs.module.css";
import ARROW_ICON from "../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

export function Breadcrumbs() {
  const breadcrumbs = [
    {
      categoryName: "Kobieta",
      path: "kobieta",
    },
    {
      categoryName: "Odziez",
      path: "odziez",
    },
    {
      categoryName: "Swetry",
      path: "swetry",
    },
  ];

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((crumb) => {
        return (
          <li key={crumb.path}>
            <NavLink to={crumb.path}>
              {crumb.categoryName}
              <img src={ARROW_ICON} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
