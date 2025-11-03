import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constant/output.js";
import { getLotto } from "../lotto/getLotto.js";

export function lottoOutput(lottoCount) {
  Console.print("");
  Console.print(lottoCount + OUTPUT_MESSAGE.LOTTO_COUNT);

  const lottoArray = getLotto(lottoCount);
  Console.print(lottoArray);
}
