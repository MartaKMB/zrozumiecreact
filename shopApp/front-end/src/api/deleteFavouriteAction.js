import { BACK_END_URL } from "../constans/api";

export function deleteFavouriteAction({ params }) {
  return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
    method: "DELETE",
  });
}
