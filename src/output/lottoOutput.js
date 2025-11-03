import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constant/output.js";

export function lottoOutput(lottoCount) {
  Console.print("");
  Console.print(lottoCount + OUTPUT_MESSAGE.LOTTO_COUNT);
}
