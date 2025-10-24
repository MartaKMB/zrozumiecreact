import { BACK_END_URL } from "../constans/api";

export function productLoader({ params: { productId } }) {
  return fetch(`${BACK_END_URL}/products/${productId}`);
}
