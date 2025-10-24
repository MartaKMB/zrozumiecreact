import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constans/api";
import { CATEGORIES } from "../constans/categories";

export function productListLoader({
  params: { gender, category, subcategory },
}) {
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  if (foundGender && foundCategory) {
    let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`;
    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories.find(
        (sc) => sc.path === subcategory,
      );
      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        return redirect("/kobieta");
      }
    }
    return fetch(url);
  } else {
    return redirect("/kobieta");
  }
}
