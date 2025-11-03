import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/input.js";

export async function priceInput() {
  const price = await Console.readLineAsync(INPUT_MESSAGE.PRICE);
  const lottoCount = price / 1000;

  return lottoCount;
}
