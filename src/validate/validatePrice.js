import { ERROR_MESSAGE } from "../constant/error";

export function validatePrice(price) {
  if (isNaN(price)) {
    throw new Error(ERROR_MESSAGE.PRICE_NOT_NUMBER);
  }
  
  if (price % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.PRICE_NOT_1000);
  }
}
