import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constant/output.js";
import { getLotto } from "../lotto/getLotto.js";

export function lottoPrint(lottoCount) {
  Console.print("");
  Console.print(lottoCount + OUTPUT_MESSAGE.LOTTO_COUNT);

  const lottoArray = getLotto(lottoCount);
  
  for (const lotto of lottoArray) {
    Console.print(lotto.getNumbers());
  }

  return lottoArray;
}
