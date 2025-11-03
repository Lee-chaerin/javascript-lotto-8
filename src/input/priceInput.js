import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/input.js";
import { validatePrice } from "../validate/validatePrice.js";

export async function priceInput() {
  const price = await Console.readLineAsync(INPUT_MESSAGE.PRICE);
  validatePrice(price);

  const lottoCount = price / 1000;

  return [price, lottoCount];
}
